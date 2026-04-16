module.exports = (db) =>
  db.model(
    'GachaPrize',
    db.Schema(
      {
        // Custom ID (1, 2, 3) untuk keperluan logika bisnis/tampilan
        id: { 
          type: Number, 
          required: true, 
          unique: true 
        },
        name: { 
          type: String, 
          required: true,
          trim: true // Menghapus spasi berlebih di awal/akhir nama
        },
        quota: { 
          type: Number, 
          required: true,
          min: 0 // Tidak boleh ada kuota negatif
        },
        remaining: { 
          type: Number, 
          required: true,
          min: 0 // Sisa stok tidak boleh negatif
        },
      },
      {
        // Tetap gunakan timestamps untuk mencatat kapan hadiah ditambahkan/diperbarui
        timestamps: true,
      }
    )
  );