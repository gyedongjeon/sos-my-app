import type { Messages } from './types';

export default {
  ui: {
    siteDescription:
      'İngilizcen ya da Almancan imdat dediğinde yanında olan uygulamalar. Mülakat ve konuşma pratiğini sesli olarak, kendi bilgisayarında yap.',
    heroTitle: 'Dil seni yarı yolda mı bırakıyor?',
    heroAccent: "İmdat sinyali ver.",
    heroLead:
      'Yaklaşan bir mülakat mı var, yoksa kelimeler mi bulamıyorsun? SOS serisi, İngilizceyi ve Almancayı sesli çalışman için ücretsiz masaüstü uygulamalarından oluşur. Kendi bilgisayarında çalışırlar ve seçtiğin yapay zekâ hatalarını anında düzeltir.',
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
    privacy:
      "Hesap yok, sunucu yok. Konuşma tanıma ve seslendirme bilgisayarında çalışır, geçmişin de orada saklanır.",
    readme: "Kurulum adımları ve tüm özelliklerin listesi README'de.",
    commonTitle: "Uygulamaların ortak özellikleri",
    common: [
      { title: "Konuş ve dinle", body: "Yazmak yerine sesli cevap ver; karşındakini okumadan önce dinle." },
      { title: "Kendi bilgisayarında", body: "Üyelik olmadan kur ve kullan. Geçmişin bilgisayarında kalır." },
      { title: "Türkçe açıklamalar", body: "Düzeltmelerin açıklamalarını Türkçe alabilirsin; pratik öğrendiğin dilde devam eder." },
      {
        title: "Ücretsiz ve açık kaynak",
        body: "MIT lisansıyla yayımlandı. Yalnızca kullandığın kadarını yapay zekâ sağlayıcına ödersin.",
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
      platforms: ["macOS (Apple Silicon)", "Windows (64 bit)"],
      screenshots: ["SOS My Interview ana ekranı: iş ilanı ekleme ve sık sorulan sorular"],
    },
    english: {
      tagline: "İngilizce konuşma pratiği",
      hookTitle: "Kelimeler dilinin ucunda mı kalıyor?",
      hookAccent: "Yardım yolda.",
      summary:
        "Kendi bilgisayarında çalışan bir İngilizce konuşma pratiği uygulaması. Bir konu seç, sesle cevap veren yapay zekâ partnerinle sesli konuş; İngilizcen sen konuştukça düzeltilsin.",
      features: [
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
          body: "A1'den C2'ye 100 kalıp. Cümleyi kendi dilinde görür, İngilizce söylersin.",
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
      platforms: ["macOS (Apple Silicon)", "Windows (64 bit)"],
      screenshots: [
        "SOS My English'te bir sohbet: söylediğin cümle, düzeltmesi ve partnerinin sıradaki cümlesi",
        "SOS My English ana ekranı: kategorilere göre sohbet konuları",
      ],
    },
    german: {
      tagline: "Almanca konuşma pratiği",
      hookTitle: "Kelimeler dilinin ucunda mı kalıyor?",
      hookAccent: "Yardım yolda.",
      summary:
        "Kendi bilgisayarında çalışan bir Almanca konuşma pratiği uygulaması. Bir konu seç, sesle cevap veren yapay zekâ partnerinle sesli konuş; Almancan sen konuştukça düzeltilsin.",
      features: [
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
          body: "A1'den C2'ye 100 kalıp. Cümleyi kendi dilinde görür, Almanca söylersin.",
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
      platforms: ["macOS (Apple Silicon)", "Windows (64 bit)"],
      screenshots: [
        "SOS My German'te bir sohbet: söylediğin cümle, düzeltmesi ve partnerinin sıradaki cümlesi",
        "SOS My German ana ekranı: kategorilere göre sohbet konuları",
      ],
    },
  },
} satisfies Messages;
