import React from 'react';
import { Check, X } from 'lucide-react';

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
      pkg6000: "Topluluk duyurusu ve anlık bildirim",
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
      pkg6000: "Sonraki kampanyalar için reklam kitlesi",
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
    <section id="karsilastirma" className="mt-8 sm:mt-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="bg-[#FAF8F5]/80 border border-slate-200 rounded-3xl p-5 sm:p-8 shadow-xs">
        
        {/* Section Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E3A8A] text-xs sm:text-sm font-extrabold tracking-wide uppercase mb-2">
            KARŞILAŞTIRMA
          </div>
          <h3 className="text-xl sm:text-3xl font-black text-[#0B2545] tracking-tight">
            Paket Karşılaştırması
          </h3>
          <p className="text-sm sm:text-base text-slate-900 font-medium mt-1 max-w-lg mx-auto">
            Haftalık tanıtım paketlerinin kapsam ve özellik farkları
          </p>
        </div>

        {/* Table Column Headers (Visible on md+ screens) */}
        <div className="hidden md:grid md:grid-cols-12 gap-4 pb-3 border-b-2 border-slate-300 text-sm font-black uppercase tracking-wider text-[#0B2545] px-4">
          <div className="md:col-span-4">Özellik</div>
          <div className="md:col-span-4 text-center">3.000 TL (Duyur ve Görünür Ol)</div>
          <div className="md:col-span-4 text-center text-[#D93829]">6.000 TL (Yönlendir, Ölç ve Yeniden Ulaş)</div>
        </div>

        {/* Rows */}
        <div className="space-y-4 md:space-y-3 mt-3">
          {comparisonRows.map((row, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div className="md:grid md:grid-cols-12 md:gap-4 md:items-center">
                
                {/* Feature Name */}
                <div className="md:col-span-4 font-black text-base text-[#0B2545] mb-3 md:mb-0 leading-snug">
                  {row.feature}
                </div>

                {/* 3.000 TL Block */}
                <div className="md:col-span-4 mb-2.5 md:mb-0">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <span className="text-xs font-black text-slate-800 uppercase md:hidden block shrink-0 pt-0.5 min-w-[65px]">
                      3.000 TL:
                    </span>
                    <div className="flex items-start gap-2 text-sm sm:text-base text-slate-900 leading-relaxed font-semibold">
                      {row.pkg3000Included ? (
                        <Check className="w-4 h-4 text-blue-700 shrink-0 mt-1 stroke-[3]" />
                      ) : (
                        <X className="w-4 h-4 text-slate-600 shrink-0 mt-1 stroke-[3]" />
                      )}
                      <span className={row.pkg3000Included ? "text-slate-900" : "text-slate-700 font-medium"}>
                        {row.pkg3000}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 6.000 TL Block */}
                <div className="md:col-span-4">
                  <div className={`p-3 rounded-xl border-2 flex items-start gap-2.5 ${
                    row.highlight6000 
                      ? 'bg-[#FFF4F2] border-[#FDA29B]' 
                      : 'bg-orange-50/50 border-orange-200'
                  }`}>
                    <span className="text-xs font-black text-[#D93829] uppercase md:hidden block shrink-0 pt-0.5 min-w-[65px]">
                      6.000 TL:
                    </span>
                    <div className="flex items-start gap-2 text-sm sm:text-base text-slate-950 leading-relaxed font-bold">
                      {row.pkg6000Included ? (
                        <Check className="w-4 h-4 text-[#D93829] shrink-0 mt-1 stroke-[3]" />
                      ) : (
                        <X className="w-4 h-4 text-slate-600 shrink-0 mt-1 stroke-[3]" />
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
