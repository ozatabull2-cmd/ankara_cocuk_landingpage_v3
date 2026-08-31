import React from 'react';
import { CONTACT_URL, MONTHLY_MODELS } from '../data/landingData';
import { Check, ArrowUpRight, Database, Building2, Info } from 'lucide-react';

export const MonthlyModels: React.FC = () => {
  return (
    <section id="aylik-calismalar" className="py-20 sm:py-28 bg-[#0B1220] text-white scroll-mt-16 relative overflow-hidden">
      
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-bold tracking-wide uppercase">
            SÜREKLİLİK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Bir haftalık görünürlükten aylık hatırlanmaya.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Her hafta sıfırdan başlamak yerine, düzenli görünürlük ve yeniden hedefleme ile zaman içinde güçlenen iki çalışma modeli.
          </p>
        </div>

        {/* 2 Monthly Model Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {MONTHLY_MODELS.map((model) => {
            const isCustom = model.id === 'model-2';

            return (
              <div
                key={model.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 sm:p-9 transition-all ${
                  isCustom
                    ? 'bg-slate-900/90 border border-blue-500/50 shadow-2xl ring-1 ring-blue-500/20'
                    : 'bg-slate-900/70 border border-slate-800 shadow-xl'
                }`}
              >
                {/* Highlight Badge if exists */}
                {model.highlightBadge && (
                  <div className="absolute -top-3.5 right-6 sm:right-8">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-md">
                      <Building2 className="w-3.5 h-3.5" />
                      {model.highlightBadge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {model.title}
                  </h3>

                  {/* Price */}
                  <div className="flex flex-wrap items-baseline gap-2 my-4 pb-4 border-b border-slate-800">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {model.price.split(' / ')[0]}
                    </span>
                    <span className="text-slate-300 font-medium text-sm sm:text-base">
                      {model.price.includes('+')
                        ? '/ ay + reklam bütçesi'
                        : '/ ay'}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {model.description}
                  </p>

                  {/* Feature List */}
                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Model Kapsamı:
                    </div>
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 rounded-full p-1 flex-shrink-0 ${
                          isCustom ? 'bg-cyan-950 text-cyan-400 border border-cyan-800/50' : 'bg-blue-950 text-blue-400 border border-blue-800/50'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm sm:text-base text-slate-200 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing / Contract Note */}
                  <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/60 mb-6 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {model.info}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2 mt-auto">
                  <a
                    href={CONTACT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-base py-3.5 px-6 rounded-xl transition-all duration-200 active:scale-[0.98] ${
                      isCustom
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-600/25'
                        : 'bg-blue-600 hover:bg-blue-500 text-white'
                    }`}
                  >
                    <span>{model.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* VERİ SAHİPLİĞİ AÇIKLAMASI (Data Ownership Section) */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-blue-950 text-blue-400 border border-blue-800/60">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                İki model arasındaki temel fark: veri sahipliği
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              
              {/* 20.000 TL Model Difference */}
              <div className="p-5 sm:p-6 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    20.000 TL Modeli
                  </span>
                  <span className="text-xs bg-blue-900/50 text-blue-300 px-2.5 py-0.5 rounded-full border border-blue-700/50 font-medium">
                    Bütçe Dahil
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">
                  Medya Ağı Reklam Altyapısı
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  20.000 TL’lik modelde medya ağımızın reklam altyapısını kullanırsınız. Hedef kitleler ve kampanya verileri Ankara Çocuk Ağı altyapısında kalır. Reklam bütçesi tarafımızdan karşılanır.
                </p>
              </div>

              {/* 25.000 TL Model Difference */}
              <div className="p-5 sm:p-6 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    25.000 TL Modeli
                  </span>
                  <span className="text-xs bg-cyan-900/50 text-cyan-300 px-2.5 py-0.5 rounded-full border border-cyan-700/50 font-medium">
                    Okula Özel Altyapı
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">
                  Okula Ait Dijital Varlık
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  25.000 TL’lik modelde reklam hesabı, hedef kitleler ve kampanya geçmişi okulunuza ait olur. Reklam bütçesi okul tarafından ayrıca karşılanır ve Meta’ya doğrudan ödenir.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
