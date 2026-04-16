const express = require('express');
const mongoose = require('mongoose');
const config = require('./config'); // File config yang ada port 5000 tadi
const gachaRoute = require('./src/api/components/gacha-router'); // Sesuaikan path-nya

const app = express();

// Middleware dasar
app.use(express.json());

// KONEKSI DATABASE
mongoose.connect(`${config.database.connection}/${config.database.name}`)
  .then(() => {
    console.log('✅ MongoDB Connected');

    // DAFTARKAN ROUTE GACHA
    // Sesuai kode routermu: module.exports = (app) => { ... }
    gachaRoute(app);

    // JALANKAN SERVER
    app.listen(config.port, () => {
      console.log(`🚀 Server nyala di: http://localhost:${config.port}`);
    });
  })
  .catch(err => console.error('❌ Database Error:', err));