import React from 'react';
import { Instagram, Smartphone, BarChart3 } from 'lucide-react';

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
      icon: Smartphone,
      title: "Topluluk & Mobil Bildirim",
      badge: "6.000 TL Paketinde",
      desc: "Ankara'daki velilerin doğrudan telefonuna ulaşan WhatsApp topluluk duyurusu ve mobil uygulamada anlık bildirim iletimi.",
      details: ["WhatsApp topluluklarında duyuru", "Mobil uygulama etkinlik kartı", "Anlık uygulama bildirimi"],
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E3A8A] text-xs font-bold uppercase tracking-wide">
            YAYIN FORMATLARI
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
            Tanıtımınız nasıl görünecek?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto leading-relaxed">
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
                className={`rounded-2xl p-5 sm:p-6 border transition-all flex flex-col justify-between ${
                  item.highlight
                    ? 'bg-[#FFF5F4]/50 border-[#FECDCA] shadow-2xs'
                    : 'bg-[#F8FAFC] border-slate-200 shadow-2xs'
                }`}
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      item.highlight ? 'bg-orange-50 text-[#EE5D50]' : 'bg-blue-50 text-[#1E3A8A]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full ${
                      item.highlight 
                        ? 'bg-[#EE5D50]/10 text-[#EE5D50] border border-[#EE5D50]/20' 
                        : 'bg-slate-200/60 text-slate-600'
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0B2545]">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-2 border-t border-slate-200/60 space-y-1.5">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="text-xs text-slate-700 flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${item.highlight ? 'bg-[#EE5D50]' : 'bg-[#1E3A8A]'}`} />
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
