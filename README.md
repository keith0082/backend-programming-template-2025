# Backend Programming Template (2025)

## tips menggunakan endpoint di gacha

1. POST api/gacha/roll
   `localhost:5000/api/gacha/roll`

{
"user_id": "string",
"user_name": "string"
}
<img width="1790" height="925" alt="Screenshot 2026-04-16 234223" src="https://github.com/user-attachments/assets/bac449c8-107e-49d6-a082-6221cdb6ff54" />

- Catatan: user_id dan user_name wajib diisi. Maksimal gacha adalah 5 kali per hari untuk setiap user.

2. GET api/gacha/history?:userId=...
   `localhost:5000/api/gacha/history?:userId=(isi_id_disini)`

- Fungsi: Menampilkan riwayat gacha spesifik untuk satu user.

- Parameter: Masukkan ID user langsung di akhir URL (Path Parameter) untuk melihat riwayat hadiah yang pernah didapatkan.
<img width="1919" height="958" alt="Screenshot 2026-04-16 220308" src="https://github.com/user-attachments/assets/c2f99621-5742-4dbe-95a6-2625f8a14527" />

3. GET api/gacha/prizes
   `localhost:5000/api/gacha/prizes`

- Fungsi: Menampilkan daftar seluruh hadiah beserta sisa kuota (quota) dan jumlah yang sudah dimenangkan (winners_count).
<img width="1796" height="938" alt="Screenshot 2026-04-17 000918" src="https://github.com/user-attachments/assets/a7d8fdaa-a336-46cb-80fa-338b902fc746" />

4. GET api/gacha/winners
   `localhost:5000/api/gacha/winners`

- Fungsi: Menampilkan daftar user yang beruntung mendapatkan hadiah.
<img width="1919" height="1006" alt="Screenshot 2026-04-16 233936" src="https://github.com/user-attachments/assets/a8786309-9405-40fd-b8f4-df20572308bf" />

## Development Setup

1. Fork and clone this repository to your local computer.
2. Open the project using VS Code.
3. Install the recommended VS Code extensions: `ESLint` and `Prettier`.
4. Copy and rename `.env.example` to `.env`. Open `.env` and change the database connection string.
5. Run `npm install` to install the project dependencies.
6. Run `npm run dev` to start the dev server.
7. Test the endpoints in the API client app.

## Add New API Endpoints

1. Create a new database schema in `./src/models`.
2. Create a new folder in `./src/api/components` (if needed). Remember to separate your codes to repositories, services, controllers, and routes.
3. Add the new route in `./src/api/routes.js`.
4. Test your new endpoints in the API client app.

## Development Setup

1. Fork and clone this repository to your local computer.
2. Open the project using VS Code.
3. Install the recommended VS Code extensions: `ESLint` and `Prettier`.
4. Copy and rename `.env.example` to `.env`. Open `.env` and change the database connection string.
5. Run `npm install` to install the project dependencies.
6. Run `npm run dev` to start the dev server.
7. Test the endpoints in the API client app.

## Add New API Endpoints

1. Create a new database schema in `./src/models`.
2. Create a new folder in `./src/api/components` (if needed). Remember to separate your codes to repositories, services, controllers, and routes.
3. Add the new route in `./src/api/routes.js`.
4. Test your new endpoints in the API client app.

