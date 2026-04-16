const { GachaPrize, GachaAttempt } = require('../../../models');

async function getPrizes() {
  return GachaPrize.find({});
}

async function getPrizeById(id) {
  return GachaPrize.findOne({ id });
}

async function updatePrizeRemaining(id, newRemaining) {
  return GachaPrize.updateOne({ id }, { remaining: newRemaining });
}

async function getUserAttemptsToday(userId) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return GachaAttempt.find({
    userId,
    createdAt: { $gte: today },
  });
}

async function createAttempt(userId, prizeId = null) {
  return GachaAttempt.create({
    userId,
    prizeWon: prizeId,
  });
}

async function getUserHistory(userId) {
  return GachaAttempt.find({ userId }).populate('prizeWon');
}

async function getAllAttemptsWithPrizes() {
  // Hanya ambil yang menang (yang ada prizeWon-nya)
  return GachaAttempt.find({ prizeWon: { $ne: null } }).populate('prizeWon');
}

module.exports = {
  getPrizes,
  getPrizeById,
  updatePrizeRemaining,
  getUserAttemptsToday,
  createAttempt,
  getUserHistory,
  getAllAttemptsWithPrizes,
};