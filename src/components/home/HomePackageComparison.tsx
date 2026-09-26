import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

export const HomePackageComparison: React.FC = () => {
  const comparisonRows = [
    {
      feature: "Yayın Kanalları",
      pkg3000: "Instagram & Web Sitesi",
      pkg6000: "Instagram, Web, WhatsApp & Mobil Uygulama",
      pkg3000Included: true,
      pkg6000Included: true,
    },
    {
      feature: "WhatsApp & Mobil Bildirim",
      pkg3000: "Dahil değil",
      pkg6000: "Topluluk duyurusu ve anlık uygulama bildirimi",
      pkg3000Included: false,
      pkg6000Included: true,
    },
    {
      feature: "Meta Reklam Desteği",
      pkg3000: "Paket dahilinde reklam desteği",
      pkg6000: "Paket dahilinde reklam desteği",
      pkg3000Included: true,
      pkg6000Included: true,
    },
    {
      feature: "İşletmeye Özel Yeniden Ulaşma Kitlesi",
      pkg3000: "Dahil değil",
      pkg6000: "Sonraki kampanyalar için reklam hedef kitlesi",
      pkg3000Included: false,
      pkg6000Included: true,
      highlight6000: true,
    },
    {
      feature: "Yayın ve Performans Özeti",
      pkg3000: "Erişim ve etkileşim özeti",
      pkg6000: "Kapsamlı performans ve kitle özeti",
      pkg3000Included: true,
      pkg6000Included: true,
    },
  ];

  return (
    <section id="karsilastirma" className="mt-10 sm:mt-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="bg-gradient-to-b from-[#FAF8F5] to-white border-2 border-slate-200 rounded-3xl p-5 sm:p-8 shadow-xs">
        
        {/* Section Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E3A8A] text-xs sm:text-sm font-extrabold tracking-wide uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
            <span>KARŞILAŞTIRMA</span>
          </div>
          <h3 className="text-xl sm:text-3xl font-black text-[#0B2545] tracking-tight">
            Paket Karşılaştırması
          </h3>
          <p className="text-sm sm:text-base text-slate-900 font-medium mt-1 max-w-lg mx-auto">
            Haftalık paketlerin kapsam ve özellik farkları
          </p>
        </div>

        {/* Desktop Header Bar (Visible on md+ screens) */}
        <div className="hidden md:grid md:grid-cols-12 gap-4 pb-3 border-b-2 border-slate-200 text-sm font-black uppercase tracking-wider text-[#0B2545] px-4">
          <div className="md:col-span-4">Özellik</div>
          <div className="md:col-span-4 text-center">3.000 TL (Duyur ve Görünür Ol)</div>
          <div className="md:col-span-4 text-center text-[#D93829]">6.000 TL (Yönlendir, Ölç ve Yeniden Ulaş)</div>
        </div>

        {/* Rows Container */}
        <div className="space-y-4 md:space-y-3 mt-3">
          {comparisonRows.map((row, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow"
            >
              {/* Feature Title (Always visible on mobile, left column on desktop) */}
              <div className="md:grid md:grid-cols-12 md:gap-4 md:items-center">
                
                <div className="md:col-span-4 font-black text-base text-[#0B2545] pb-2.5 mb-2.5 md:pb-0 md:mb-0 border-b md:border-b-0 border-slate-100 leading-snug">
                  {row.feature}
                </div>

                {/* 2-Column Side-by-Side Comparison Blocks (on Mobile and Desktop) */}
                <div className="md:col-span-8 grid grid-cols-2 gap-2.5 sm:gap-4">
                  
                  {/* 3.000 TL Column */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                    <div className="text-[11px] font-black text-slate-700 uppercase tracking-wide mb-1.5 flex items-center justify-between md:hidden">
                      <span>3.000 TL</span>
                      {row.pkg3000Included ? (
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-slate-300" />
                      )}
                    </div>
                    <div className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-base text-slate-900 leading-relaxed font-semibold">
                      {row.pkg3000Included ? (
                        <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5 stroke-[3]" />
                      ) : (
                        <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5 stroke-[3]" />
                      )}
                      <span className={row.pkg3000Included ? "text-slate-900" : "text-slate-500 font-medium"}>
                        {row.pkg3000}
                      </span>
                    </div>
                  </div>

                  {/* 6.000 TL Column */}
                  <div className={`p-3 rounded-xl border-2 flex flex-col justify-between ${
                    row.highlight6000 
                      ? 'bg-[#FFF4F2] border-[#FDA29B]' 
                      : 'bg-orange-50/50 border-orange-200'
                  }`}>
                    <div className="text-[11px] font-black text-[#D93829] uppercase tracking-wide mb-1.5 flex items-center justify-between md:hidden">
                      <span>6.000 TL</span>
                      <span className="w-2 h-2 rounded-full bg-[#EE5D50]" />
                    </div>
                    <div className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-base text-slate-950 leading-relaxed font-bold">
                      {row.pkg6000Included ? (
                        <Check className="w-4 h-4 text-[#D93829] shrink-0 mt-0.5 stroke-[3]" />
                      ) : (
                        <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5 stroke-[3]" />
                      )}
                      <span className={row.highlight6000 ? "text-[#0B2545]" : "text-slate-950"}>
                        {row.pkg6000}
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
