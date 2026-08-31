export const CONTACT_URL = "https://www.instagram.com/ankaracocuketkinlikler/";

export interface WeeklyPackage {
  id: string;
  badge?: string;
  tag: string;
  name: string;
  price: string;
  period: string;
  description: string;
  targetAudience: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface MonthlyModel {
  id: string;
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  info: string;
  ctaText: string;
  highlightBadge?: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const NAV_LINKS = [
  { label: "Haftalık Paketler", href: "#haftalik-paketler" },
  { label: "Aylık Çalışmalar", href: "#aylik-calismalar" },
  { label: "Nasıl İlerliyor?", href: "#nasil-ilerliyor" },
  { label: "SSS", href: "#sss" },
];

export const CHANNEL_TAGS = [
  { name: "Instagram", icon: "instagram" },
  { name: "Web", icon: "globe" },
  { name: "WhatsApp", icon: "message-circle" },
  { name: "Mobil Uygulama", icon: "smartphone" },
  { name: "Meta Reklamları", icon: "target" },
];

export const VALUE_PILLARS = [
  { title: "Organik Ankara aile kitlesi", desc: "Doğrudan hedef kitleye erişim" },
  { title: "Çok kanallı dağıtım", desc: "Sosyal medya, web, app ve topluluk" },
  { title: "Meta reklam desteği", desc: "Genişletilmiş hedefli reklam yönetimi" },
  { title: "Ölçülebilir ilk sinyaller", desc: "Erişim ve etkileşim performansı" },
];

export const WEEKLY_PACKAGES: WeeklyPackage[] = [
  {
    id: "paket-1",
    tag: "TEMEL GÖRÜNÜRLÜK",
    name: "Duyur ve Görünür Ol",
    price: "3.000 TL",
    period: "/ hafta",
    description: "Etkinliğini veya işletmesini Ankara’daki çocuklu ailelere duyurmak isteyenler için.",
    targetAudience: "Atölye, tiyatro, oyun alanı, etkinlik ve küçük işletmeler.",
    features: [
      "Ankara Çocuk Ağı Instagram sayfalarında tanıtım",
      "Web sitesi ve Instagram kanalında görünürlük",
      "Meta reklam desteği",
      "Erişim, gösterim ve etkileşim özeti",
    ],
    ctaText: "3.000 TL Paketi Sor",
    isPopular: false,
  },
  {
    id: "paket-2",
    tag: "GÜÇLÜ KAMPANYA",
    badge: "EN GÜÇLÜ İLK KAMPANYA",
    name: "Yönlendir, Ölç ve Yeniden Ulaş",
    price: "6.000 TL",
    period: "/ hafta",
    description: "Daha geniş dağıtım ve sonraki kampanyalar için ilk hedef kitle havuzunu oluşturmak isteyenler için.",
    targetAudience: "Okul, anaokulu, kolej ve kayıt odaklı çocuk işletmeleri.",
    features: [
      "3.000 TL paketindeki görünürlük kanalları",
      "WhatsApp topluluğunda paylaşım",
      "Mobil uygulamada paylaşım",
      "Mobil uygulama bildirimi",
      "Daha güçlü Meta reklam dağıtımı",
      "İlk yönlendirme sinyallerinin değerlendirilmesi",
      "Sonraki kampanyalar için ilk hedef kitle havuzunun oluşturulması",
    ],
    ctaText: "6.000 TL Paketi Sor",
    isPopular: true,
  },
];

export const MONTHLY_MODELS: MonthlyModel[] = [
  {
    id: "model-1",
    title: "Aylık Sürekli Görünürlük",
    price: "20.000 TL",
    period: "/ ay",
    description: "Dört hafta üst üste görünürlük, tekrar reklam gösterimi ve Ankara Çocuk Ağı üzerinden marka hatırlatma.",
    features: [
      "Ayda dört haftalık güçlü tanıtım",
      "Ankara Çocuk Ağı reklam hesabından kampanyalar",
      "Etkileşime giren kişilere yeniden ulaşma",
      "Reklam bütçesinin tarafımızdan karşılanması",
      "Hedef kitle ve kampanya verilerinin medya ağında kalması",
      "BioLink Pro kullanım hakkı",
    ],
    info: "Tek tek dört haftalık çalışma 24.000 TL tutarken, aylık anlaşmada toplam hizmet bedeli 20.000 TL’dir.",
    ctaText: "20.000 TL Modelini Seç",
  },
  {
    id: "model-2",
    title: "Okula Özel Reklam Sistemi",
    price: "25.000 TL",
    period: "/ ay + reklam bütçesi",
    description: "Okulun kendi reklam hesabında biriken, zaman içinde güçlenen ve kuruma ait kalan dijital reklam altyapısı.",
    features: [
      "Ankara Çocuk Ağı’nda haftalık tanıtımlar",
      "Okula ait Meta reklam hesabından kampanyalar",
      "Okulun Instagram kimliğiyle velilere ulaşma",
      "Etkileşim ve yeniden hedefleme kitleleri",
      "Reklam bütçesinin okul tarafından Meta’ya ödenmesi",
      "Hedef kitle ve kampanya geçmişinin okulda kalması",
      "BioLink Pro kullanım hakkı",
    ],
    info: "Minimum üç aylık çalışma önerilir. Reklam hesabı, hedef kitleler ve kampanya geçmişi okula ait olur.",
    ctaText: "25.000 TL Modelini Seç",
    highlightBadge: "Kurumsal Altyapı",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "İlk Talep",
    description: "Talebin ücretli tanıtım mı, ücretsiz etkinlik bildirimi mi olduğunu netleştiririz.",
  },
  {
    stepNumber: "02",
    title: "İhtiyaç Analizi",
    description: "Sektörü, hedefi ve kampanyanın öncelikli sonucunu belirleriz.",
  },
  {
    stepNumber: "03",
    title: "Paket Önerisi",
    description: "Amaca göre 3.000 veya 6.000 TL’lik seçeneği sunarız.",
  },
  {
    stepNumber: "04",
    title: "Karar",
    description: "Kapsamı, beklentiyi ve ölçülecek ilk sinyalleri netleştiririz.",
  },
  {
    stepNumber: "05",
    title: "Kampanya Hazırlığı",
    description: "Profil, görsel, gönderi metni, teklif ve yönlendirmeleri kontrol ederiz.",
  },
  {
    stepNumber: "06",
    title: "Yayın ve Kampanya",
    description: "İçeriği seçilen kanallarda yayınlar ve Meta reklamlarını başlatırız.",
  },
  {
    stepNumber: "07",
    title: "Sonuç ve Değerlendirme",
    description: "Erişim, etkileşim ve olası dönüşüm kayıplarını yorumlarız.",
  },
  {
    stepNumber: "08",
    title: "Devam Planı",
    description: "Tekrar tanıtım, üst paket veya aylık çalışma seçeneğini belirleriz.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Kayıt veya satış garantisi veriyor musunuz?",
    answer: "Hayır. Hedef kitleye görünürlük, reklam dağıtımı ve ölçülebilir ilk sinyaller sağlıyoruz. Sonuç; teklifiniz, içerikleriniz, Instagram profiliniz, fiyatınız ve müşteri karşılama sürecinizden etkilenir.",
  },
  {
    id: "faq-2",
    question: "Benim için hangi paket daha uygun?",
    answer: "Tek seferlik duyuru ve temel görünürlük için 3.000 TL; daha geniş dağıtım ve sonraki kampanyalar için hedef kitle oluşturmak amacıyla 6.000 TL paket uygundur.",
  },
  {
    id: "faq-3",
    question: "Aylık çalışmaya hemen başlamam gerekir mi?",
    answer: "Hayır. Önce haftalık kampanyayla çalışma biçimini görebilir, ihtiyaç oluşursa aylık çalışma modeline geçebilirsiniz.",
  },
  {
    id: "faq-4",
    question: "Görsel ve videoyu kim hazırlıyor?",
    answer: "Yayıma hazır ana görsel veya videoyu işletme sağlar. Format, başlık, gönderi metni ve CTA konusunda yönlendirme yaparız. Sıfırdan profesyonel içerik üretimi ayrıca değerlendirilir.",
  },
  {
    id: "faq-5",
    question: "20.000 ve 25.000 TL’lik modellerin farkı nedir?",
    answer: "20.000 TL’lik modelde reklamlar Ankara Çocuk Ağı altyapısından yönetilir ve reklam bütçesi tarafımızdan karşılanır. 25.000 TL’lik modelde reklamlar okulun kendi reklam hesabından yönetilir, hedef kitleler okulda kalır ve reklam bütçesini okul karşılar.",
  },
];
