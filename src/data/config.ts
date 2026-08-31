// Centralized Site Configuration, Pricing, Contacts, SEO & Analytics

export const SITE_CONFIG = {
  brandName: "Ankara Çocuk Ağı",
  brandSubtitle: "Tanıtım ve reklam hizmetleri",
  instagramHandle: "@ankaracocuketkinlikler",
  instagramUrl: "https://www.instagram.com/ankaracocuketkinlikler/",
  // WhatsApp Configuration
  whatsappPhone: "905330464850",
  whatsappDisplayPhone: "0533 046 48 50",
  
  // Ad budget note configurable
  adBudgetMaxLimit: null as string | null, // e.g. "5.000 TL" or null for default text
  adBudgetNoticeWeekly: "Meta reklam bütçesi ve kampanya dağılımı, yayın öncesinde yazılı olarak netleştirilir.",
  adBudgetNoticeMonthly20k: "Planlanan Meta reklam bütçesi ve aylık üst sınır, çalışma öncesinde yazılı olarak netleştirilir.",
  
  seo: {
    home: {
      title: "Ankara Çocuk Etkinlik ve İşletme Tanıtım Paketleri",
      description: "Ankara’daki çocuklu ailelere Instagram, web, WhatsApp, mobil uygulama ve Meta reklamlarıyla ulaşın. Haftalık tanıtım paketlerini inceleyin.",
    },
    monthly: {
      title: "Okullar İçin Aylık Reklam ve Görünürlük Sistemi | Ankara",
      description: "Okullar, anaokulları ve çocuk odaklı işletmeler için aylık görünürlük, Meta reklam yönetimi, yeniden hedefleme ve kuruma ait reklam altyapısı.",
    },
  },
};

/**
 * Creates a direct WhatsApp link with prefilled contextual text
 */
export const getWhatsAppUrl = (message?: string): string => {
  const defaultMsg = "Merhaba, Ankara Çocuk Ağı tanıtım ve reklam hizmetleri hakkında bilgi almak istiyorum.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${SITE_CONFIG.whatsappPhone}?text=${text}`;
};

// Analytics Event Tracker Hook / Helper
export type AnalyticsEvent = 
  | 'click_package_3000'
  | 'click_package_6000'
  | 'visit_monthly_page'
  | 'click_package_20000'
  | 'click_package_25000'
  | 'click_biolink'
  | 'click_instagram'
  | 'click_whatsapp'
  | 'open_faq';

export const trackEvent = (eventName: AnalyticsEvent, payload?: Record<string, unknown>) => {
  if (typeof window !== 'undefined') {
    // Window custom event for analytics integration (Google Tag Manager, Meta Pixel, Plausible, etc.)
    const event = new CustomEvent('app_analytics', { detail: { eventName, ...payload, timestamp: Date.now() } });
    window.dispatchEvent(event);
    
    // GTM / dataLayer push if present
    if ((window as unknown as { dataLayer?: unknown[] }).dataLayer) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({ event: eventName, ...payload });
    }
  }
};

// Weekly Packages Interface & Data
export interface WeeklyPackage {
  id: string;
  tag: string;
  badge?: string;
  name: string;
  price: string;
  period: string;
  shortDesc: string;
  targetAudience: string;
  features: string[];
  ctaText: string;
  notice?: string;
  event: AnalyticsEvent;
  whatsappMessage: string;
  isPopular?: boolean;
}

export const WEEKLY_PACKAGES: WeeklyPackage[] = [
  {
    id: "haftalik-3000",
    tag: "TEMEL GÖRÜNÜRLÜK",
    name: "Duyur ve Görünür Ol",
    price: "3.000 TL",
    period: "/ hafta",
    shortDesc: "Etkinliğini veya işletmesini Ankara’daki çocuklu ailelere duyurmak isteyenler için.",
    targetAudience: "Atölye, tiyatro, oyun alanı, etkinlik ve küçük çocuk işletmeleri.",
    features: [
      "Ankara Çocuk Ağı Instagram sayfalarında tanıtım",
      "Web sitesi ve Instagram kanalında görünürlük",
      "Meta reklam desteği",
      "Erişim, gösterim ve etkileşim özeti",
    ],
    ctaText: "3.000 TL Paketini Sor",
    event: "click_package_3000",
    whatsappMessage: "Merhaba, Ankara Çocuk Ağı 3.000 TL'lik 'Duyur ve Görünür Ol' haftalık tanıtım paketi hakkında bilgi almak istiyorum.",
    isPopular: false,
  },
  {
    id: "haftalik-6000",
    tag: "DAHA GENİŞ DAĞITIM",
    badge: "EN GÜÇLÜ İLK KAMPANYA",
    name: "Yönlendir, Ölç ve Yeniden Ulaş",
    price: "6.000 TL",
    period: "/ hafta",
    shortDesc: "Daha geniş ve detaylı erişim, çok kanallı görünürlük ve sonraki kampanyalar için kaybolmayan hedef kitle havuzu oluşturmak isteyenler için.",
    targetAudience: "Etkinlik, atölye, tiyatro, oyun alanı, okul, anaokulu ve daha güçlü veli kitlesine ulaşmak isteyen çocuk işletmeleri.",
    features: [
      "3.000 TL paketindeki görünürlük kanalları",
      "WhatsApp topluluğunda paylaşım",
      "Mobil uygulamada paylaşım",
      "Mobil uygulama bildirimi",
      "Daha güçlü Meta reklam desteği",
      "İlgilenen kişilere sonraki reklamlarda yeniden ulaşma altyapısı (Kaybolmayan Kitle)",
    ],
    notice: "Bu paket kapsamında oluşan hedef kitle ve kampanya verileri Ankara Çocuk Ağı reklam altyapısında birikir.",
    ctaText: "6.000 TL Paketini Sor",
    event: "click_package_6000",
    whatsappMessage: "Merhaba, Ankara Çocuk Ağı 6.000 TL'lik 'Yönlendir, Ölç ve Yeniden Ulaş' haftalık tanıtım paketi hakkında bilgi almak istiyorum.",
    isPopular: true,
  },
];


// Weekly FAQ Items
export const WEEKLY_FAQS = [
  {
    id: "w-faq-1",
    question: "Hangi paket benim için uygun?",
    answer: "Temel bir duyuru ve hızlı görünürlük için 3.000 TL paketi; daha geniş ve detaylı erişim, çok kanallı dağıtım (WhatsApp, mobil uygulama, bildirim) ve sonraki kampanyalarda kaybolmayan hedef kitle havuzu oluşturmak isteyen tüm etkinlik, atölye, tiyatro, oyun alanı ve okullar için 6.000 TL paketi uygundur.",
  },
  {
    id: "w-faq-2",
    question: "Reklam bütçesi paket ücretine dahil mi?",
    answer: "Evet, her iki haftalık pakette de belirlenen Meta reklam desteği paket kapsamındadır. Reklam bütçesi dağılımı yayın öncesinde yazılı olarak netleştirilir.",
  },
  {
    id: "w-faq-3",
    question: "Görsel ve tanıtım metnini kim hazırlıyor?",
    answer: "Yayına hazır ana görsel veya videoyu işletme sağlar. Format, dikkat çekici başlık, gönderi metni ve yönlendirme butonları (CTA) konusunda tarafımızdan rehberlik yapılır.",
  },
];

// Monthly Models Data
export interface MonthlyModel {
  id: string;
  name: string;
  price: string;
  period: string;
  shortDesc: string;
  features: string[];
  priceNote: string;
  budgetNotice: string;
  ctaText: string;
  event: AnalyticsEvent;
  whatsappMessage: string;
  highlightBadge?: string;
}

export const MONTHLY_MODELS: MonthlyModel[] = [
  {
    id: "aylik-20000",
    name: "Aylık Sürekli Görünürlük",
    price: "20.000 TL",
    period: "/ ay",
    shortDesc: "Dört hafta üst üste görünürlük, tekrar reklam gösterimi ve Ankara Çocuk Ağı üzerinden marka hatırlatma.",
    features: [
      "Ayda dört haftalık güçlü tanıtım",
      "Ankara Çocuk Ağı reklam hesabından kampanyalar",
      "Etkileşime giren kişilere yeniden ulaşma",
      "Planlanan Meta reklam bütçesinin tarafımızdan karşılanması",
      "Hedef kitle ve kampanya verilerinin Ankara Çocuk Ağı altyapısında kalması",
      "BioLink Pro kullanım hakkı",
    ],
    priceNote: "Dört ayrı haftalık çalışma 24.000 TL tutarken, aylık anlaşmada toplam hizmet bedeli 20.000 TL’dir.",
    budgetNotice: "Planlanan Meta reklam bütçesi ve aylık üst sınır, çalışma öncesinde yazılı olarak netleştirilir.",
    ctaText: "20.000 TL Modelini Sor",
    event: "click_package_20000",
    whatsappMessage: "Merhaba, Ankara Çocuk Ağı 20.000 TL'lik 'Aylık Sürekli Görünürlük' modeli hakkında bilgi almak istiyorum.",
  },
  {
    id: "aylik-25000",
    name: "Okula Özel Reklam Sistemi",
    price: "25.000 TL",
    period: "/ ay + Meta reklam bütçesi",
    shortDesc: "Okulun kendi reklam hesabında biriken, zaman içinde güçlenen ve kuruma ait kalan dijital reklam altyapısı.",
    features: [
      "Ankara Çocuk Ağı’nda haftalık tanıtımlar",
      "Okula ait Meta reklam hesabından kampanyalar",
      "Okulun Instagram kimliğiyle velilere ulaşma",
      "Etkileşim ve yeniden hedefleme kitlelerinin oluşturulması",
      "Meta reklam bütçesinin okul tarafından doğrudan ödenmesi",
      "Hedef kitle ve kampanya geçmişinin okulda kalması",
      "BioLink Pro kullanım hakkı",
    ],
    priceNote: "Minimum üç aylık çalışma önerilir. Reklam hesabı, hedef kitleler ve kampanya geçmişi okula ait olur.",
    budgetNotice: "Meta reklam bütçesi doğrudan okul tarafından Meta’ya ödenir.",
    ctaText: "25.000 TL Modelini Sor",
    event: "click_package_25000",
    whatsappMessage: "Merhaba, okulumuz için 25.000 TL'lik 'Okula Özel Reklam Sistemi' hakkında görüşme başlatmak istiyorum.",
    highlightBadge: "Kurumsal Altyapı",
  },
];

// 8-Step Working Process (For Monthly Page)
export const MONTHLY_PROCESS_STEPS = [
  {
    number: "01",
    title: "İlk Talep",
    desc: "Talebin ücretli tanıtım mı, ücretsiz bildirim mi olduğunu netleştiririz.",
  },
  {
    number: "02",
    title: "İhtiyaç Analizi",
    desc: "Sektörü, hedefi ve kampanyanın öncelikli sonucunu belirleriz.",
  },
  {
    number: "03",
    title: "Paket Önerisi",
    desc: "Hedefinize en uygun aylık çalışma modelini netleştiririz.",
  },
  {
    number: "04",
    title: "Karar",
    desc: "Kapsamı, beklentiyi ve ölçülecek ilk sinyalleri netleştiririz.",
  },
  {
    number: "05",
    title: "Kampanya Hazırlığı",
    desc: "Hesap, kitleler, görsel, metin ve yönlendirmeleri hazırlarız.",
  },
  {
    number: "06",
    title: "Yayın ve Kampanya",
    desc: "Çok kanallı yayını ve Meta reklamlarını eş zamanlı başlatırız.",
  },
  {
    number: "07",
    title: "Sonuç ve Değerlendirme",
    desc: "Erişim, etkileşim ve dönüşüm sinyallerini birlikte inceleriz.",
  },
  {
    number: "08",
    title: "Devam Planı",
    desc: "Yeniden hedefleme kitlelerini günceller, sonraki ayı planlarız.",
  },
];

// Monthly FAQ Items
export const MONTHLY_FAQS = [
  {
    id: "m-faq-1",
    question: "Kayıt veya satış garantisi veriyor musunuz?",
    answer: "Hayır. Doğru hedef kitleye düzenli görünürlük, profesyonel reklam dağıtımı ve yeniden hedefleme altyapısı sağlıyoruz. Kayıt ve satış sonuçları; okulunuzun lokasyonu, kontenjanı, fiyatı, marka algısı ve veli karşılama süreciniz gibi birçok faktörden etkilenir.",
  },
  {
    id: "m-faq-2",
    question: "20.000 TL ve 25.000 TL modellerinin temel farkı nedir?",
    answer: "20.000 TL modelinde reklamlar Ankara Çocuk Ağı reklam hesabından yönetilir, kitleler medya ağında kalır ve planlanan reklam bütçesi paket dahilindedir. 25.000 TL modelinde ise reklamlar okulun kendi Meta hesabından yönetilir, tüm kitle ve kampanya verileri okula ait olur ve reklam bütçesini okul doğrudan Meta'ya öder.",
  },
  {
    id: "m-faq-3",
    question: "Reklam bütçesi hizmet ücretine dahil mi?",
    answer: "20.000 TL modelinde planlanan reklam bütçesi hizmet bedeline dahildir ve tarafımızdan karşılanır. 25.000 TL modelinde reklam bütçesi okul tarafından doğrudan Meta reklam hesabına yatırılır.",
  },
  {
    id: "m-faq-4",
    question: "Neden minimum üç aylık çalışma öneriliyor?",
    answer: "Meta reklam algoritmalarının hedef kitleyi öğrenmesi, etkileşime giren veli havuzunun büyümesi ve yeniden hedefleme (retargeting) kampanyalarının verimli çalışabilmesi için kurumsal düzeyde en az 3 aylık bir optimizasyon dönemi önerilir.",
  },
  {
    id: "m-faq-5",
    question: "Görsel ve videoları kim hazırlıyor?",
    answer: "Ana görsel, video ve fotoğraf materyalleri okul tarafından sağlanır. Ekibimiz reklam boyutları, başlık metinleri, video kurgu yönlendirmeleri ve veli odaklı CTA metinleri konusunda detaylı rehberlik sunar.",
  },
  {
    id: "m-faq-6",
    question: "Reklam hesabı ve hedef kitleler kime ait oluyor?",
    answer: "25.000 TL'lik 'Okula Özel Reklam Sistemi'nde oluşturulan Meta Business Manager, reklam hesabı, Pixel/CAPI verileri ve özel hedef kitleler tamamen okulun mülkiyetinde kalır.",
  },
];
