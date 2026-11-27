import type { Messages } from './types';

export default {
  ui: {
    siteDescription:
      'Seri aplikasi desktop kecil dan gratis yang siap menolong. Semuanya jalan di komputermu sendiri, tanpa perlu daftar akun.',
    heroTitle: 'Butuh pertolongan?',
    heroAccent: 'Kirim sinyal darurat.',
    heroLead:
      'Mau wawancara, kehabisan kata-kata, atau kebanyakan tab terbuka: seri SOS adalah aplikasi desktop gratis, masing-masing untuk momen seperti itu. Semuanya jalan di komputermu sendiri, tanpa perlu daftar akun.',
    appsHeading: 'Aplikasi',
    language: 'Bahasa',
    download: 'Unduh versi terbaru',
    viewSource: 'Lihat di GitHub',
    features: 'Fitur',
    screenshots: 'Tangkapan layar',
    platforms: 'Bisa dipakai di',
    requirementsHeading: 'Sebelum mulai',
    requirements:
      'Umpan balik AI butuh kunci API dari layanan yang kamu pilih (Google Gemini, Claude, OpenAI, dan lainnya). Kalau baru pertama kali, Google Gemini punya paket gratis.',
    privacyHeading: 'Datamu tetap di komputermu',
    readme: 'Cara instalasi dan daftar fitur lengkap ada di README.',
    commonTitle: 'Kesamaan aplikasi-aplikasinya',
    common: [
      {
        title: 'Di komputermu sendiri',
        body: 'Pasang dan langsung pakai tanpa daftar akun, di macOS dan Windows.',
      },
      {
        title: 'Datamu tetap milikmu',
        body: 'Apa yang kamu lakukan di aplikasi disimpan di perangkatmu, bukan di server.',
      },
      {
        title: 'Dalam bahasa Indonesia',
        body: 'Tergantung aplikasinya, tampilan atau penjelasannya tersedia dalam bahasa Indonesia.',
      },
      {
        title: 'Gratis dan open source',
        body: 'Dirilis dengan lisensi MIT. Aplikasi yang memakai AI hanya memakan biaya dari layanan AI pilihanmu.',
      },
    ],
    notFoundTitle: 'Tersesat di tengah laut?',
    notFoundBody: 'Halaman ini tidak ada.',
    backHome: 'Kembali ke awal',
    footer: 'Open source, lisensi MIT',
    consentText: 'Situs ini ingin memakai Google Analytics untuk menghitung kunjungan dan melihat halaman mana yang dibaca. Hanya jika kamu mengizinkan, cookie disimpan dan data penggunaan dikirim ke Google.',
    consentLearnMore: 'Cara Google memakai data ini',
    consentAllow: 'Izinkan',
    consentDecline: 'Tolak',
    consentSettings: 'Pengaturan cookie',
  },
  apps: {
    interview: {
      tagline: 'Latihan wawancara bahasa Inggris',
      hookTitle: 'Sebentar lagi wawancara?',
      hookAccent: 'Bantuan segera datang.',
      summary:
        'Aplikasi simulasi wawancara kerja dalam bahasa Inggris yang berjalan di komputermu sendiri. Pertanyaan dibacakan dengan suara, jawabanmu direkam, lalu bahasa Inggris dan isi jawabanmu dinilai.',
      features: [
        { title: 'Mendengar dulu', body: 'Pewawancara membacakan setiap pertanyaan, dan teksnya baru muncul kalau kamu memintanya.' },
        { title: 'Pertanyaan lanjutan', body: 'Hingga dua pertanyaan lanjutan menggali jawabanmu barusan, seperti pewawancara sungguhan.' },
        {
          title: 'Dua nilai terpisah',
          body: 'Bahasa Inggris (tata bahasa, kosakata, kewajaran, pelafalan, intonasi, tekanan kata) dan isi (relevansi, struktur, kejelasan detail), lengkap dengan kalimat yang sudah dibetulkan dan versi jawaban yang lebih kuat.',
        },
        {
          title: 'Pertanyaan sesuai lowongan incaranmu',
          body: 'Tambahkan lowongan kerja (tautan atau teks) dan CV-mu untuk mendapat pertanyaan khusus posisi itu.',
        },
        {
          title: 'Umpan balik dalam bahasa Indonesia',
          body: 'Penjelasan bisa kamu terima dalam bahasa Indonesia; pertanyaan dan contoh jawaban tetap dalam bahasa Inggris.',
        },
        { title: 'Riwayat', body: 'Setiap jawaban disimpan beserta transkrip, nilai, dan rekamannya, jadi kamu bisa melihat perkembanganmu.' },
      ],
      privacy:
        'Tanpa akun, tanpa server. Pengenalan ucapan dan suara diproses di komputermu, dan riwayatmu disimpan di sana.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bit)'],
      screenshots: ['Halaman utama SOS My Interview: menambahkan lowongan kerja dan pertanyaan umum'],
    },
    language: {
      tagline: 'Latihan berbicara bahasa Inggris dan Jerman',
      hookTitle: 'Kehabisan kata-kata?',
      hookAccent: 'Bantuan segera datang.',
      summary:
        'Aplikasi latihan berbicara dalam bahasa yang sedang kamu pelajari, berjalan di komputermu sendiri. Pilih bahasa Inggris atau Jerman, pilih topik, ngobrol dengan suara bersama partner AI yang menjawab dengan suara juga, dan ucapanmu langsung dibetulkan.',
      features: [
        {
          title: 'Beberapa bahasa dalam satu aplikasi',
          body: 'Pilih bahasa Inggris atau Jerman saat pertama kali membuka, dan ganti kapan saja. Setiap bahasa menyimpan topik, koreksi, riwayat, dan suaranya sendiri.',
        },
        { title: 'Utamakan berbicara', body: 'Kamu menjawab dengan suara, bukan mengetik; ucapanmu otomatis ditranskripsikan.' },
        {
          title: 'Koreksi langsung',
          body: 'Setiap kali kamu bicara, koreksi paling penting ditampilkan bersama kalimat yang lebih baik dan alasannya, dan kamu bisa mendengarkan kalimat itu.',
        },
        { title: 'Seberapa jelas ucapanmu', body: 'Setiap kalimat menampilkan skor kejelasan, kata-kata yang sulit dikenali, dan kecepatan bicaramu.' },
        {
          title: '40 topik dalam 9 kategori',
          body: 'Obrolan sehari-hari, kerja, sekolah, belanja, makanan, jalan-jalan, layanan, rumah, dan menyampaikan pendapat, plus topik buatanmu sendiri.',
        },
        {
          title: 'Pola kalimat per level',
          body: '100 pola dari A1 sampai C2. Kamu melihat kalimat dalam bahasamu sendiri, lalu mengucapkannya dalam bahasa yang kamu latih.',
        },
        {
          title: 'Belajar dari video YouTube',
          body: 'Tempel tautan dan dengarkan kalimat demi kalimat, dengan pengulangan, kecepatan lebih lambat, dan shadowing.',
        },
        {
          title: 'Latih koreksimu',
          body: 'Semua koreksi terkumpul di satu tempat, dan kamu bisa mengucapkan kalimat yang lebih baik sampai benar.',
        },
        {
          title: 'Ringkasan di akhir',
          body: 'Akhiri percakapan untuk melihat apa yang sudah bagus, apa yang perlu dilatih, dan ungkapan yang bisa dicoba lain kali.',
        },
      ],
      privacy:
        'Tanpa akun, tanpa server. Pengenalan ucapan dan suara diproses di komputermu, dan riwayatmu disimpan di sana.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bit)'],
      screenshots: [
        'Percakapan di SOS My Language: ucapanmu, koreksinya, dan kalimat berikutnya dari partnermu',
        'Memilih bahasa yang dilatih di SOS My Language: Inggris atau Jerman',
        'Halaman beranda SOS My Language: topik percakapan per kategori',
      ],
    },
    feed: {
      tagline: 'Pembaca feed RSS dan Atom',
      hookTitle: 'Kebanyakan tab?',
      hookAccent: 'Bantuan segera datang.',
      summary:
        'Pembaca feed RSS dan Atom dari situs berita dan blog yang kamu ikuti, jalan di komputermu sendiri. Langganan sebuah feed, lihat semua artikel baru dalam satu daftar, dan baca artikelnya langsung di aplikasi, halaman demi halaman.',
      features: [
        {
          title: 'Semua yang kamu ikuti dalam satu daftar',
          body: 'Artikel dari semua feed, yang terbaru di atas, atau dari satu feed saja.',
        },
        {
          title: 'Membaca seperti buku',
          body: 'Artikel terbuka sebagai teks saja, tanpa iklan, menu, atau skrip halamannya, dalam halaman yang dibalik dengan sekali ketuk, satu atau dua halaman sekaligus.',
        },
        {
          title: 'Kertas sesuai seleramu',
          body: 'Enam warna latar, serta ukuran teks, jarak baris, dan margin pilihanmu.',
        },
        {
          title: 'Simpan sebagai Markdown',
          body: 'Unduh teks artikel sebagai file Markdown, lengkap dengan judul, alamat, dan tanggalnya.',
        },
        {
          title: 'Tampilan dalam 19 bahasa',
          body: 'Tampilan aplikasinya tersedia dalam 19 bahasa, dengan tema terang dan gelap.',
        },
        {
          title: 'Selalu terbaru',
          body: 'Aplikasi mengecek versi baru saat dibuka dan, di macOS, memperbarui diri dengan sekali klik.',
        },
      ],
      privacy:
        'Tanpa akun, tanpa server. Langganan, artikelnya, dan pengaturanmu disimpan dalam satu file di komputermu.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bit)'],
      screenshots: [
        'Feed saya di SOS My Feed: artikel dari tiga feed dalam satu daftar, yang terbaru di atas',
        'Artikel yang terbuka di pembaca SOS My Feed: dua halaman berdampingan di atas kertas sepia',
      ],
    },
  },
} satisfies Messages;
