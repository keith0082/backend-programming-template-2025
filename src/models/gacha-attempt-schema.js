module.exports = (db) =>
  db.model(
    'GachaAttempt',
    db.Schema(
      {
        userId: { 
          type: String, 
          required: true 
        },
        prizeWon: {
          type: db.Schema.Types.ObjectId,
          ref: 'GachaPrize',
          default: null,
        },
      },
      {
        // Menggunakan timestamps otomatis (menghasilkan createdAt dan updatedAt)
        timestamps: true,
      }
    )
  );