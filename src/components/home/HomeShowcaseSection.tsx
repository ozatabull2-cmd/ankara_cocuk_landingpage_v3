import React from 'react';
import { Instagram, MessageCircle, BarChart3 } from 'lucide-react';

export const HomeShowcaseSection: React.FC = () => {
  const formats = [
    {
      icon: Instagram,
      title: "Instagram Tanıtımı",
      badge: "Tüm Paketlerde",
      desc: "Ankara Çocuk Ağı Instagram sayfasında akış gönderisi ve hikaye paylaşımı. Detaylı etkinlik/işletme açıklaması, yaş grubu, konum bilgisi ve doğrudan yönlendirme bağlantısı içerir.",
      details: ["Akış ve hikaye görünürlüğü", "Yaş grubu ve lokasyon vurgusu", "Profil ve mesaj yönlendirmesi"],
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Topluluk Yayını",
      badge: "6.000 TL Paketinde",
      desc: "Ankara'daki velilerin doğrudan telefonuna ulaşan WhatsApp topluluk duyurusu ile yüksek dikkat ve doğrudan erişim.",
      details: ["WhatsApp topluluklarında duyuru", "Doğrudan veli erişimi", "Hızlı etkileşim olanağı"],
      highlight: true,
    },
    {
      icon: BarChart3,
      title: "Yayın ve Performans Özeti",
      badge: "Tüm Paketlerde",
      desc: "Yayın süresi tamamlandığında elde edilen erişim, gösterim ve etkileşim sayılarını içeren net kampanya değerlendirmesi.",
      details: ["Erişim ve gösterim verileri", "Etkileşim metrikleri", "Yeniden ulaşma kitle durumu"],
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E3A8A] text-xs sm:text-sm font-extrabold uppercase tracking-wide">
            YAYIN FORMATLARI
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B2545] tracking-tight">
            Tanıtımınız nasıl görünecek?
          </h2>
          <p className="text-sm sm:text-base text-slate-900 font-medium max-w-xl mx-auto leading-relaxed">
            Duyurunuz Ankara’daki velilere 3 temel kanalda doğru formatta ve özenle sunulur.
          </p>
        </div>

        {/* 3 Formats Grid */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {formats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`rounded-2xl p-5 sm:p-6 border-2 transition-all flex flex-col justify-between ${
                  item.highlight
                    ? 'bg-[#FFF5F4]/70 border-[#FDA29B] shadow-2xs'
                    : 'bg-[#F8FAFC] border-slate-200 shadow-2xs'
                }`}
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      item.highlight ? 'bg-orange-50 text-[#EE5D50]' : 'bg-blue-50 text-[#1E3A8A]'
                    }`}>
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className={`text-xs sm:text-sm font-black px-3 py-1 rounded-full ${
                      item.highlight 
                        ? 'bg-[#EE5D50]/15 text-[#D93829] border border-[#EE5D50]/30' 
                        : 'bg-slate-200 text-slate-800'
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#0B2545]">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-900 font-medium leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-2 border-t border-slate-200 space-y-2">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="text-sm sm:text-base text-slate-900 font-bold flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.highlight ? 'bg-[#EE5D50]' : 'bg-[#1E3A8A]'}`} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
