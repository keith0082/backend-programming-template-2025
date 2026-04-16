const express = require('express');
const gachaController = require('./gacha-controller');

const route = express.Router();

module.exports = (app) => {
  // Mendaftarkan prefix /gacha ke aplikasi utama
  app.use('/gacha', route);
  console.log('✅ Gacha routes have been registered!');

  // Endpoint untuk melakukan gacha (POST karena mengubah data/menambah attempt)
  route.post('/roll', gachaController.doGacha);

  // Endpoint untuk melihat riwayat gacha user tertentu
  route.get('/history', gachaController.getHistory);

  // Endpoint untuk melihat daftar hadiah yang tersedia
  route.get('/prizes', gachaController.getPrizes);

  // Endpoint untuk melihat daftar pemenang terbaru
  route.get('/winners', gachaController.getWinners);
};