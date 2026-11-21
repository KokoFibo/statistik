# Statistik E-Commerce Indonesia 2024 (BPS, rilis 2025)
Halaman: `/` (daftar laporan), `/ecommerce`, `/kesejahteraan`, `/pdrb`, `/pdrb-provinsi`, `/pekerja`, `/pendapatan`, `/pendidikan`, `/potensi-desa`, `/telekomunikasi`, `/apjii`. Jalankan `npm install` lalu `npm run dev`.

## Struktur
- `src/layouts/Layout.astro`: head/SEO, menu "Semua laporan", chip bagian halaman (menyorot posisi baca), tombol laporan sebelumnya/berikutnya, tombol ke atas. Semua halaman memakainya.
- `src/data/laporan.ts`: daftar laporan (judul, ringkasan, angka kunci, kelompok). Dipakai indeks dan menu.
- `src/data/*.ts`: angka tiap laporan; ubah di sana, halaman ikut berubah.

## Menambah laporan baru
1. Tambah entri di `src/data/laporan.ts` (menu, indeks, dan tombol berikutnya ikut otomatis).
2. Salin halaman yang ada, ganti isi, dan beri `current="slug-baru"` pada `<Layout>`.
3. Buat file data baru di `src/data/`.
