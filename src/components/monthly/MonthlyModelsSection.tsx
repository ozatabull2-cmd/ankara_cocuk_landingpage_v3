import React from 'react';
import { MONTHLY_MODELS, trackEvent, getWhatsAppUrl } from '../../data/config';
import { Check, ArrowUpRight, Building2, Info, Sparkles, MessageCircle } from 'lucide-react';

export const MonthlyModelsSection: React.FC = () => {
  return (
    <section id="aylik-modeller" className="py-14 sm:py-20 bg-[#0B1220] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            KURUMSAL ÇALIŞMA MODELLERİ
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Aylık Reklam ve Görünürlük Modelleri
          </h2>
          <p className="text-xs sm:text-base text-slate-300 font-normal">
            Okulunuz veya kurumsal çocuk işletmeniz için uygun çalışma altyapısını seçin.
          </p>
        </div>

        {/* 2 Monthly Model Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {MONTHLY_MODELS.map((model) => {
            const isCustom = model.id === 'aylik-25000';

            return (
              <div
                key={model.id}
                id={model.id}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all ${
                  isCustom
                    ? 'bg-slate-900/95 border border-cyan-500/50 shadow-2xl ring-1 ring-cyan-500/20'
                    : 'bg-slate-900/80 border border-slate-800 shadow-xl'
                }`}
              >
                {/* Highlight Badge */}
                {model.highlightBadge && (
                  <div className="absolute -top-3.5 right-6 sm:right-8">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-md">
                      <Building2 className="w-3.5 h-3.5" />
                      {model.highlightBadge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {model.name}
                  </h3>

                  {/* Price */}
                  <div className="flex flex-wrap items-baseline gap-1.5 my-3 pb-3 border-b border-slate-800">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {model.price.split(' / ')[0]}
                    </span>
                    <span className="text-slate-300 font-medium text-xs sm:text-sm">
                      {model.price.includes('+')
                        ? '/ ay + Meta reklam bütçesi'
                        : '/ ay'}
                    </span>
                  </div>

                  {/* Short Desc */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {model.shortDesc}
                  </p>

                  {/* Feature List */}
                  <div className="space-y-2.5 mb-5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Model Kapsamı:
                    </div>
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${
                          isCustom ? 'bg-cyan-950 text-cyan-400 border border-cyan-800/60' : 'bg-blue-950 text-blue-400 border border-blue-800/60'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-200 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Price info note */}
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/70 mb-3 flex items-start gap-2 text-xs text-slate-300">
                    <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{model.priceNote}</span>
                  </div>

                  {/* Budget notice box */}
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 mb-6 flex items-start gap-2 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-1.5" />
                    <span>{model.budgetNotice}</span>
                  </div>

                </div>

                {/* CTA Button */}
                <div className="pt-2 mt-auto">
                  <a
                    href={getWhatsAppUrl(model.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackEvent(model.event, { package_name: model.name, price: model.price });
                      trackEvent('click_whatsapp', { package_name: model.name, price: model.price });
                    }}
                    className={`w-full inline-flex items-center justify-center gap-2.5 font-bold text-sm sm:text-base py-3.5 px-5 rounded-xl transition-all duration-150 active:scale-98 ${
                      isCustom
                        ? 'bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-emerald-900/30'
                        : 'bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md'
                    }`}
                    aria-label={`${model.name} için WhatsApp'tan görüşme başlat`}
                  >
                    <MessageCircle className="w-5 h-5 fill-white stroke-none" />
                    <span>WhatsApp’tan Bilgi Al</span>
                    <ArrowUpRight className="w-4 h-4 opacity-80" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
