export interface ScreenInfo {
  id: number;
  screenNum: string;
  name: string;
  category: string;
  description: string;
  uxRationale: string;
  highlights: string[];
}

export const SCREENS_DATA: ScreenInfo[] = [
  {
    id: 1,
    screenNum: "01",
    name: "Splash Screen",
    category: "Branding & First Impression",
    description: "Menampilkan logo resmi Javia App dengan latar belakang bernuansa klasik emas-krem dan elemen motif budaya Nusantara.",
    uxRationale: "Membangun identitas visual yang agung, tenang, dan terpercaya. Memadukan estetika heritage Nusantara dengan minimalisme modern untuk menyambut pengguna ke atmosfer sejarah yang mendalam.",
    highlights: ["Logo Gunungan Emas Klasik", "Slogan Resmi Javia", "Siluet Candi Nusantara", "Latar Krim Bertekstur Batik"],
  },
  {
    id: 2,
    screenNum: "02",
    name: "Welcome / Onboarding",
    category: "Introductory Onboarding",
    description: "Memberikan informasi pengantar bahwa aplikasi ini merupakan platform edutainment berbasis mobile yang memadukan teknologi dan budaya Nusantara, dilengkapi dengan tombol 'Lanjut'.",
    uxRationale: "Mengarahkan ekspektasi pengguna melalui fotografi arsitektur sejarah Lamongan yang nyata, dikombinasikan dengan kartu informasi melengkung modern dan indikator navigasi bertahap.",
    highlights: ["Hero Heritage Architecture", "Kartu Rounded Kontras Lembut", "Tombol Primer Emas 'Lanjut →'", "Opsi 'Lewati' Non-intrusif"],
  },
  {
    id: 3,
    screenNum: "03",
    name: "Sign In / Register",
    category: "Authentication Flow",
    description: "Memfasilitasi proses masuk (Sign In) atau pendaftaran akun baru (Register) bagi pengguna sebelum mengakses modul pembelajaran secara personal.",
    uxRationale: "Formulir autentikasi yang lapang dan aman dengan micro-iconography, pemisah visual yang elegan, tombol aksi primer deep navy, serta tombol sekunder bergaris tepi lembut.",
    highlights: ["Micro-icon Input Fields", "Tombol Utama Deep Navy", "Secondary Outlined Button", "Akses Cepat Lupa Password"],
  },
  {
    id: 4,
    screenNum: "04",
    name: "Home / Dashboard",
    category: "Main Hub & Exploration",
    description: "Halaman utama yang menyambut pengguna secara personal. Menampilkan menu sorotan utama dan pintasan cepat menuju nilai-nilai kearifan lokal seperti Catur Pitutur.",
    uxRationale: "Personalisasi pengguna (Diana), kartu sorotan bergradasi hangat dengan visual candi, serta grid 4 pilar 'Catur Pitutur' dengan ikon berwarna lembut yang mudah dijangkau satu ibu jari.",
    highlights: ["Sapaan Personal & Avatar", "Sorotan Utama Sunan Drajat", "Pilar Catur Pitutur Cards", "5-Tab Fixed Bottom Bar"],
  },
  {
    id: 5,
    screenNum: "05",
    name: "Pilih Modul Sejarah",
    category: "Curated Content Discovery",
    description: "Memungkinkan pengguna mencari dan memilih topik sejarah secara fleksibel, mulai dari Sunan Drajat, Majapahit, Singhasari, dan lainnya.",
    uxRationale: "Fitur pencarian instan dan filter chip kategori (Jawa, Madura, Walisongo) dipadukan dengan kartu modul bernuansa editorial, thumbnail visual asli, serta call-to-action 'Lanjut' warna emas.",
    highlights: ["Filter Kategori Segmented", "Pencarian Modul Real-time", "Kartu Modul Ber-thumbnail", "Metadata Wilayah & Periode"],
  },
  {
    id: 6,
    screenNum: "06",
    name: "Modul Sunan Drajat",
    category: "Core Thematic Hub",
    description: "Menyediakan akses langsung bagi pengguna untuk memilih salah satu dari empat fitur interaktif yang disediakan dalam studi kasus Sunan Drajat.",
    uxRationale: "Landing page modul tematik yang fokus. Menyuguhkan banner gapura bersejarah Paciran, diiringi navigasi terstruktur ke 4 pilar fitur: Tanya AI, Heritage Album, Animation Theater, dan Arena.",
    highlights: ["Header Gapura Paduraksa", "4 Pilar Fitur Interaktif", "Ikon Tematik Terkodifikasi", "Deskripsi Fitur Ringkas"],
  },
  {
    id: 7,
    screenNum: "07",
    name: "Tanya AI Sejarah",
    category: "Conversational EdTech AI",
    description: "Memungkinkan pengguna mengajukan pertanyaan seputar sejarah, lengkap dengan sumber referensi sejarah terkurasi.",
    uxRationale: "Antarmuka chat edukatif yang kredibel. Menampilkan jawaban komprehensif mengenai Gamelan Singa Menggala dan dakwah kultural, dilengkapi label sumber literasi resmi agar bebas dari halusinasi.",
    highlights: ["Bubble Chat Elegan Navy & Krem", "Validasi Sumber Terkurasi", "Avatar AI Bermotif Javia", "Input Pertanyaan Ergonomis"],
  },
  {
    id: 8,
    screenNum: "08",
    name: "Javia Heritage Album",
    category: "Digital Museum Archive",
    description: "Menyajikan dokumentasi fisik peninggalan sejarah (seperti Gamelan Singa Menggala) disertai tab informasi, deskripsi, galeri foto, dan peta situs.",
    uxRationale: "Pengalaman museum digital mewah berstandar kuratorial internasional. Foto artefak resolusi tinggi pada pedestal museum, navigasi multi-item ‹ 1/10 ›, tab segmented, dan galeri thumbnail makro.",
    highlights: ["Hero Pameran Artefak Fisik", "Navigasi Pager Multi-Item", "Tab Segmented Kuratorial", "Galeri Detail Thumbnail"],
  },
  {
    id: 9,
    screenNum: "09",
    name: "Javia Animation Theater",
    category: "Multimedia Micro-Learning",
    description: "Menayangkan cerita sejarah berbasis video animasi pendek (micro-learning) mengenai perjalanan dan nilai luhur ajaran Sunan Drajat.",
    uxRationale: "Pengalaman sinematik yang mendalam. Menampilkan visual adegan animasi Sunan Drajat di bawah pohon beringin, player video berfitur lengkap, sinopsis naratif, dan daftar episode terkait.",
    highlights: ["Visual Adegan Sinematik", "Scrubber Player & Waktu", "Sinopsis Ajaran Luhur", "Kartu Micro-learning Episode"],
  },
  {
    id: 10,
    screenNum: "10",
    name: "Javia Arena",
    category: "Gamified Quiz & Evaluation",
    description: "Menyajikan kuis evaluasi kognitif berbasis pilihan ganda, perolehan poin, dan lencana pencapaian (badge), lengkap dengan papan peringkat.",
    uxRationale: "Gamifikasi edukatif yang berkelas tanpa grafis kekanak-kanakan. Evaluasi pemahaman materi dengan highlight jawaban benar, feedback skor langsung, unlocking lencana kehormatan, dan leaderboard.",
    highlights: ["Opsi Soal Rounded Terstruktur", "Indikator Jawaban Benar +100", "Lencana 'Sahabat Sunan Drajat'", "Leaderboard Kompetitif Sehat"],
  },
];
