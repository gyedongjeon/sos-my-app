import type { Messages } from './types';

export default {
  ui: {
    siteDescription:
      'Seri aplikasi latihan untuk saat bahasa Inggris atau bahasa Jermanmu butuh pertolongan. Latihan wawancara dan berbicara dengan suara lantang, langsung di komputermu sendiri.',
    heroTitle: 'Bahasa asingmu lagi macet?',
    heroAccent: 'Kirim sinyal darurat.',
    heroLead:
      'Mau wawancara, atau lagi kehabisan kata-kata: seri SOS adalah aplikasi desktop gratis untuk latihan bahasa Inggris dan bahasa Jerman dengan suara lantang. Semuanya jalan di komputermu sendiri, dan AI pilihanmu langsung membetulkan kesalahanmu.',
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
    privacy:
      'Tanpa akun, tanpa server. Pengenalan ucapan dan suara diproses di komputermu, dan riwayatmu disimpan di sana.',
    readme: 'Cara instalasi dan daftar fitur lengkap ada di README.',
    commonTitle: 'Kesamaan aplikasi-aplikasinya',
    common: [
      { title: 'Bicara dan dengarkan', body: 'Jawab dengan suara, bukan mengetik, dan dengarkan lawan bicaramu sebelum membaca teksnya.' },
      { title: 'Di komputermu sendiri', body: 'Pasang dan langsung pakai, tanpa daftar akun. Riwayatmu tetap di perangkatmu.' },
      {
        title: 'Penjelasan dalam bahasa Indonesia',
        body: 'Koreksi dijelaskan dalam bahasa Indonesia; latihannya tetap dalam bahasa yang kamu pelajari.',
      },
      { title: 'Gratis dan open source', body: 'Dirilis dengan lisensi MIT. Kamu hanya membayar layanan AI sesuai pemakaianmu.' },
    ],
    notFoundTitle: 'Tersesat di tengah laut?',
    notFoundBody: 'Halaman ini tidak ada.',
    backHome: 'Kembali ke awal',
    footer: 'Open source, lisensi MIT',
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
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bit)'],
      screenshots: ['Halaman utama SOS My Interview: menambahkan lowongan kerja dan pertanyaan umum'],
    },
    english: {
      tagline: 'Latihan berbicara bahasa Inggris',
      hookTitle: 'Kehabisan kata-kata?',
      hookAccent: 'Bantuan segera datang.',
      summary:
        'Aplikasi latihan berbicara bahasa Inggris yang berjalan di komputermu sendiri. Pilih topik, ngobrol dengan suara bersama partner AI yang menjawab dengan suara juga, dan bahasa Inggrismu langsung dibetulkan.',
      features: [
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
          body: '100 pola dari A1 sampai C2. Kamu melihat kalimat dalam bahasamu sendiri, lalu mengucapkannya dalam bahasa Inggris.',
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
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bit)'],
      screenshots: [
        'Percakapan di SOS My English: ucapanmu, koreksinya, dan kalimat berikutnya dari partnermu',
        'Halaman utama SOS My English: topik percakapan per kategori',
      ],
    },
    german: {
      tagline: 'Latihan berbicara bahasa Jerman',
      hookTitle: 'Kehabisan kata-kata?',
      hookAccent: 'Bantuan segera datang.',
      summary:
        'Aplikasi latihan berbicara bahasa Jerman yang berjalan di komputermu sendiri. Pilih topik, ngobrol dengan suara bersama partner AI yang menjawab dengan suara juga, dan bahasa Jermanmu langsung dibetulkan.',
      features: [
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
          body: '100 pola dari A1 sampai C2. Kamu melihat kalimat dalam bahasamu sendiri, lalu mengucapkannya dalam bahasa Jerman.',
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
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bit)'],
      screenshots: [
        'Percakapan di SOS My German: ucapanmu, koreksinya, dan kalimat berikutnya dari partnermu',
        'Halaman utama SOS My German: topik percakapan per kategori',
      ],
    },
  },
} satisfies Messages;
