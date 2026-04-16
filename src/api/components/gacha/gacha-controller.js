const gachaService = require('./gacha-service');
const { errorResponder, errorTypes } = 
require('../../../core/errors');

async function doGacha(request, response, next) {
  try {
    const { userId } = request.body;

    if (!userId) {
      // Menggunakan errorResponder 
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'userId nya di isi dulu yah');
    }

    const prize = await gachaService.doGacha(userId);

    if (prize) {
      return response.status(200).json({ 
        message: 'wih hoki kamu abis dipukul jejes yah kepala nya selamat udh hoki yah!!:', 
        prize: prize.name 
      });
    }

    return response.status(200).json({ 
      message: 'yah normal ini mah salah jejes ini coba lagi sampe dapat yah!!' 
    });
  } catch (error) {
    // lempar ke error handler pusat
    return next(error);
  }
}

async function getHistory(request, response, next) {
  try {
    const { userId } = request.query;

    if (!userId) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'userId is required');
    }

    const history = await gachaService.getUserHistory(userId);
    return response.status(200).json({ history });
  } catch (error) {
    return next(error);
  }
}

async function getPrizes(request, response, next) {
  try {
    const prizes = await gachaService.getRemainingPrizes();
    return response.status(200).json({ prizes });
  } catch (error) {
    return next(error);
  }
}

async function getWinners(request, response, next) {
  try {
    const winners = await gachaService.getWinners();
    return response.status(200).json({ winners });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  doGacha,
  getHistory,
  getPrizes,
  getWinners,
};