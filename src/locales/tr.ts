import type { Messages } from './types';

export default {
  ui: {
    siteDescription:
      'İmdadına yetişen küçük, ücretsiz masaüstü uygulamaları serisi. Hesap açmana gerek kalmadan kendi bilgisayarında çalışırlar.',
    heroTitle: 'İmdat mı lazım?',
    heroAccent: "İmdat sinyali ver.",
    heroLead:
      'Yaklaşan bir mülakat mı var, kelimeler mi bulamıyorsun, yoksa açık sekmeler mi çok fazla? SOS serisi, her biri böyle bir an için yapılmış ücretsiz masaüstü uygulamalarından oluşur. Hesap açmana gerek kalmadan kendi bilgisayarında çalışırlar.',
    appsHeading: "Uygulamalar",
    language: "Dil",
    download: "Son sürümü indir",
    viewSource: "GitHub'da görüntüle",
    features: "Özellikler",
    screenshots: "Ekran görüntüleri",
    platforms: "Platformlar",
    requirementsHeading: "Başlamadan önce",
    requirements:
      "Yapay zekâ geri bildirimi için seçtiğin sağlayıcının API anahtarı gerekir (Google Gemini, Claude, OpenAI ve diğerleri). Yeni başlıyorsan Google Gemini'yi öneririz: ücretsiz bir kullanım kotası var.",
    privacyHeading: "Verilerin bilgisayarında kalır",
    readme: "Kurulum adımları ve tüm özelliklerin listesi README'de.",
    commonTitle: "Uygulamaların ortak özellikleri",
    common: [
      { title: 'Kendi bilgisayarında', body: 'Üyelik olmadan kur ve kullan; macOS ve Windows desteklenir.' },
      {
        title: 'Verilerin sende kalır',
        body: 'Uygulamalarda yaptıkların bir sunucuda değil, kendi bilgisayarında saklanır.',
      },
      { title: 'Türkçe', body: 'Uygulamaya göre ekranlar ya da açıklamalar Türkçe.' },
      {
        title: 'Ücretsiz ve açık kaynak',
        body: 'MIT lisansıyla yayımlandı. Yapay zekâ kullanan uygulamalarda yalnızca yapay zekâ sağlayıcının ücretini ödersin.',
      },
    ],
    notFoundTitle: "Rotanı mı kaybettin?",
    notFoundBody: "Böyle bir sayfa yok.",
    backHome: "Ana sayfaya dön",
    footer: "Açık kaynak, MIT lisansı",
  },
  apps: {
    interview: {
      tagline: "İngilizce mülakat pratiği",
      hookTitle: "Mülakatın mı yaklaşıyor?",
      hookAccent: "Yardım yolda.",
      summary:
        "İngilizce iş mülakatlarına hazırlanman için kendi bilgisayarında çalışan bir mülakat simülasyonu. Soruları sesli sorar, cevabını kaydeder ve hem İngilizceni hem de ne söylediğini ayrı ayrı puanlar.",
      features: [
        { title: "Önce dinleme", body: "Mülakatçı her soruyu sesli okur; sorunun metni sen istemedikçe gizli kalır." },
        {
          title: "Takip soruları",
          body: "Gerçek bir mülakatçı gibi, az önce söylediklerinin üzerine en fazla iki takip sorusu sorar.",
        },
        {
          title: "İki ayrı puan",
          body: "İngilizce (dil bilgisi, kelime bilgisi, doğallık, telaffuz, tonlama, vurgu) ve içerik (soruyla ilgisi, yapı, somutluk). Ayrıca düzeltilmiş cümleler ve cevabının daha güçlü bir hâli.",
        },
        {
          title: "İstediğin işe özel sorular",
          body: "Bir iş ilanı (bağlantı ya da metin) ve özgeçmişini ekle, o pozisyon için hazırlanmış sorular al.",
        },
        { title: "Türkçe geri bildirim", body: "Açıklamaları Türkçe alabilirsin. Sorular ve örnek cevaplar İngilizce kalır." },
        {
          title: "Geçmiş",
          body: "Her cevap; metni, puanları ve ses kaydıyla saklanır. Böylece nasıl geliştiğini görebilirsin.",
        },
      ],
      privacy:
        "Hesap yok, sunucu yok. Konuşma tanıma ve seslendirme bilgisayarında çalışır, geçmişin de orada saklanır.",
      platforms: ["macOS (Apple Silicon)", "Windows (64 bit)"],
      screenshots: ["SOS My Interview ana ekranı: iş ilanı ekleme ve sık sorulan sorular"],
    },
    language: {
      tagline: 'İngilizce ve Almanca konuşma pratiği',
      hookTitle: "Kelimeler dilinin ucunda mı kalıyor?",
      hookAccent: "Yardım yolda.",
      summary:
        'Öğrendiğin dilde konuşma pratiği yapmak için kendi bilgisayarında çalışan bir uygulama. İngilizce ya da Almancayı seç, bir konu seç, sesle cevap veren yapay zekâ partnerinle sesli konuş; söylediklerin sen konuştukça düzeltilsin.',
      features: [
        {
          title: 'Tek uygulamada birden fazla dil',
          body: 'İlk açılışta İngilizce ya da Almancayı seç, istediğin zaman değiştir. Her dilin konuları, düzeltmeleri, geçmişi ve sesleri ayrı tutulur.',
        },
        { title: "Önce konuşma", body: "Yazarak değil, sesinle cevap verirsin; söylediklerin otomatik olarak yazıya dökülür." },
        {
          title: "Anında düzeltme",
          body: "Söylediğin her cümleden sonra en faydalı düzeltme, daha iyi cümle ve nedeniyle birlikte gösterilir. Daha iyi cümleyi dinleyebilirsin de.",
        },
        {
          title: "Ne kadar net konuştun?",
          body: "Her cümlede netlik puanı, tanınması zor olan kelimeler ve konuşma hızın gösterilir.",
        },
        {
          title: "9 kategoride 40 konu",
          body: "Günlük sohbet, iş, okul, alışveriş, yemek, seyahat, hizmetler, ev ve fikrini söyleme. Kendi konularını da ekleyebilirsin.",
        },
        {
          title: "Seviyeye göre cümle kalıpları",
          body: "A1'den C2'ye 100 kalıp. Cümleyi kendi dilinde görür, pratik yaptığın dilde söylersin.",
        },
        {
          title: "YouTube videolarıyla çalış",
          body: "Bir bağlantı yapıştır ve videoyu cümle cümle dinle: tekrar, yavaşlatma ve gölge okuma (shadowing) ile.",
        },
        {
          title: "Düzeltmelerini çalış",
          body: "Tüm düzeltmeler tek bir yerde toplanır; daha iyi cümleyi doğru çıkana kadar tekrar söylersin.",
        },
        {
          title: "Sonunda bir özet",
          body: "Sohbeti bitirince neleri iyi yaptığını, nelere çalışman gerektiğini ve bir dahaki sefere deneyebileceğin ifadeleri gör.",
        },
      ],
      privacy:
        "Hesap yok, sunucu yok. Konuşma tanıma ve seslendirme bilgisayarında çalışır, geçmişin de orada saklanır.",
      platforms: ["macOS (Apple Silicon)", "Windows (64 bit)"],
      screenshots: [
        "SOS My Language'da bir konuşma: söylediğin, düzeltmesi ve partnerinin sıradaki cümlesi",
        "SOS My Language'da pratik yapılacak dili seçme: İngilizce ya da Almanca",
        'SOS My Language ana sayfası: kategorilere göre konuşma konuları',
      ],
    },
    feed: {
      tagline: 'RSS ve Atom akış okuyucu',
      hookTitle: 'Çok mu sekme açık?',
      hookAccent: 'Yardım yolda.',
      summary:
        'Takip ettiğin haber siteleri ve blogların RSS ve Atom akışları için, kendi bilgisayarında çalışan bir okuyucu. Bir akışa abone ol, tüm yeni yazıları tek bir listede gör ve her yazıyı uygulamanın içinde sayfa sayfa oku.',
      features: [
        {
          title: 'Takip ettiğin her şey tek listede',
          body: 'Tüm akışların yazıları en yeniden başlayarak ya da yalnızca tek bir akışınkiler.',
        },
        {
          title: 'Kitap gibi okuma',
          body: 'Yazı, sayfanın reklamları, menüleri ve betikleri olmadan düz metin olarak açılır; sayfaları bir dokunuşla, birer ya da ikişer çevirirsin.',
        },
        {
          title: 'Zevkine göre kâğıt',
          body: 'Altı arka plan rengi, ayrıca seçtiğin yazı boyutu, satır aralığı ve kenar boşlukları.',
        },
        {
          title: 'Markdown olarak kaydet',
          body: 'Bir yazının metnini başlığı, adresi ve tarihiyle birlikte Markdown dosyası olarak indir.',
        },
        { title: '19 dilde ekranlar', body: 'Uygulamanın ekranları açık ve koyu temayla 19 dilde.' },
        {
          title: 'Kendini güncel tutar',
          body: "Uygulama açılırken yeni sürüm olup olmadığına bakar ve macOS'ta tek tıklamayla güncellenir.",
        },
      ],
      privacy:
        'Hesap yok, sunucu yok. Aboneliklerin, onların yazıları ve ayarların bilgisayarındaki bir dosyada saklanır.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64 bit)'],
      screenshots: [
        "SOS My Feed'de akışım: üç akışın yazıları en yeniden başlayarak tek listede",
        'SOS My Feed okuyucusunda açık bir yazı: sepya kâğıt üzerinde yan yana iki sayfa',
      ],
    },
  },
} satisfies Messages;
