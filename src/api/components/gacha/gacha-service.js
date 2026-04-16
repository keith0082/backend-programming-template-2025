const GachaRepository = require('./gacha-repository');
const { GachaPrize } = require('../../../models');

const repository = GachaRepository;
const NO_PRIZE_CHANCE = 0.2;

// Fungsi pembantu internal
function maskName(name) {
  if (!name) return '';
  const parts = name.split(' ');
  return parts.map((part) => {
    if (part.length <= 2) return '*'.repeat(part.length);
    return part[0] + '*'.repeat(part.length - 2) + part[part.length - 1];
  }).join(' ');
}

async function initializePrizes() {
  const prizes = [
    { id: 1, name: 'Emas 10 gram', quota: 1, remaining: 1 },
    { id: 2, name: 'Smartphone X', quota: 5, remaining: 5 },
    { id: 3, name: 'Smartwatch Y', quota: 10, remaining: 10 },
    { id: 4, name: 'Voucher Rp100.000', quota: 100, remaining: 100 },
    { id: 5, name: 'Pulsa Rp50.000', quota: 500, remaining: 500 },
  ];

  for (const prize of prizes) {
    const existing = await repository.getPrizeById(prize.id);
    if (!existing) {
      const newPrize = new GachaPrize(prize);
      await newPrize.save();
    }
  }
}

async function doGacha(userId) {
  const attemptsToday = await repository.getUserAttemptsToday(userId);
  if (attemptsToday.length >= 5) {
    throw new Error('Daily gacha limit exceeded');
  }

  const prizes = await repository.getPrizes();
  const availablePrizes = prizes.filter((p) => p.remaining > 0);

  if (availablePrizes.length === 0 || Math.random() < NO_PRIZE_CHANCE) {
    await repository.createAttempt(userId);
    return null;
  }

  const randomIndex = Math.floor(Math.random() * availablePrizes.length);
  const wonPrize = availablePrizes[randomIndex];

  await repository.updatePrizeRemaining(wonPrize.id, wonPrize.remaining - 1);
  await repository.createAttempt(userId, wonPrize._id);

  return wonPrize;
}

async function getUserHistory(userId) {
  return repository.getUserHistory(userId);
}

async function getRemainingPrizes() {
  return repository.getPrizes();
}

async function getWinners() {
  const attempts = await repository.getAllAttemptsWithPrizes();
  return attempts
    .filter(attempt => attempt.prizeWon != null) // Buang yang gak ada hadiahnya
    .map((attempt) => ({
      prize: attempt.prizeWon.name,
      winner: maskName(attempt.userId),
    }));
}

module.exports = {
  initializePrizes,
  doGacha,
  getUserHistory,
  getRemainingPrizes,
  getWinners,
};