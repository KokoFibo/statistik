// Daftar laporan: dipakai halaman indeks, menu "Semua laporan", dan tombol laporan sebelumnya/berikutnya.
// Urutan di sini = urutan di menu. Untuk laporan baru, tambahkan satu entri di sini.
export interface Laporan {
  slug: string;
  judul: string;
  ket: string;
  angka: string;
  angkaKet: string;
  sumber: 'BPS' | 'APJII';
  kelompok: string;
}

export const kelompok = [
  { id: 'ekonomi', judul: 'Ekonomi dan usaha', ket: 'Ukuran ekonomi daerah dan seberapa jauh usaha sudah berjualan online.' },
  { id: 'kerja', judul: 'Pekerja dan pendapatan', ket: 'Upah, jam kerja, dan pendapatan pekerja Indonesia.' },
  { id: 'sosial', judul: 'Kesejahteraan dan pendidikan', ket: 'Kondisi hidup rumah tangga, sekolah, dan capaian belajar.' },
  { id: 'digital', judul: 'Desa dan internet', ket: 'Infrastruktur desa, jaringan telekomunikasi, dan perilaku pengguna internet.' },
];

export const laporan: Laporan[] = [
  { slug: 'ecommerce', kelompok: 'ekonomi', sumber: 'BPS', judul: 'Statistik E-Commerce 2024', ket: 'BPS, terbit November 2025. Usaha online, transaksi, teknologi, dan tantangan pelaku.', angka: '4,40 juta', angkaKet: 'usaha e-commerce' },
  { slug: 'pdrb', kelompok: 'ekonomi', sumber: 'BPS', judul: 'PDRB Kabupaten/Kota 2021–2025', ket: 'BPS, Volume 17, 2026. Ekonomi 514 kabupaten/kota: ukuran, pertumbuhan, per kapita, dan siklus komoditas.', angka: 'Rp23.727 T', angkaKet: 'PDRB 514 kab/kota, 2025' },
  { slug: 'pdrb-provinsi', kelompok: 'ekonomi', sumber: 'BPS', judul: 'PDRB Provinsi menurut Lapangan Usaha 2021–2025', ket: 'BPS, Volume 19, 2026. Struktur 17 lapangan usaha di 38 provinsi, sumber pertumbuhan, dan efek siklus harga komoditas.', angka: 'Rp23.636 T', angkaKet: 'PDRB 38 provinsi, 2025' },
  { slug: 'pekerja', kelompok: 'kerja', sumber: 'BPS', judul: 'Keadaan Pekerja di Indonesia, Februari 2026', ket: 'BPS, Sakernas. Upah, jam kerja, pendidikan, lapangan usaha, dan kesenjangan 68,21 juta pekerja.', angka: 'Rp2,97 juta', angkaKet: 'rata-rata upah sebulan' },
  { slug: 'pendapatan', kelompok: 'kerja', sumber: 'BPS', judul: 'Statistik Pendapatan Februari 2026', ket: 'BPS, Sakernas. Pendapatan 43,97 juta pekerja bebas dan berusaha sendiri menurut pendidikan, umur, usaha, dan provinsi.', angka: 'Rp1,68–1,92 juta', angkaKet: 'rata-rata pendapatan sebulan' },
  { slug: 'kesejahteraan', kelompok: 'sosial', sumber: 'BPS', judul: 'Statistik Kesejahteraan Rakyat 2025', ket: 'BPS, Susenas Maret 2025. Pendidikan, kesehatan, perumahan, TIK, dan kesenjangan wilayah.', angka: '78,04%', angkaKet: 'berjaminan kesehatan' },
  { slug: 'pendidikan', kelompok: 'sosial', sumber: 'BPS', judul: 'Statistik Pendidikan 2025', ket: 'BPS dan Kemendikdasmen. Sekolah, guru, partisipasi, putus sekolah, dan capaian pendidikan 2021–2025.', angka: '9,41 tahun', angkaKet: 'rata-rata lama sekolah' },
  { slug: 'potensi-desa', kelompok: 'digital', sumber: 'BPS', judul: 'Statistik Potensi Desa 2025', ket: 'BPS, Podes 2025. Infrastruktur, digital, ekonomi, pemerintahan, lingkungan, dan bencana di 84.139 desa/kelurahan.', angka: '84.291', angkaKet: 'wilayah setingkat desa' },
  { slug: 'telekomunikasi', kelompok: 'digital', sumber: 'BPS', judul: 'Statistik Telekomunikasi Indonesia 2025', ket: 'BPS dan Kemenkomdigi. Internet, perangkat, sinyal dan BTS, operator, perdagangan barang TIK, dan belanja rumah tangga.', angka: '77,63%', angkaKet: 'penduduk akses internet' },
  { slug: 'apjii', kelompok: 'digital', sumber: 'APJII', judul: 'Survei APJII Internet Indonesia 2026', ket: 'APJII (survei asosiasi, bukan BPS). Penetrasi, perilaku, operator, internet tetap, belanja online, dan AI dari 8.700 responden.', angka: '81,72%', angkaKet: 'penetrasi internet' },
];
