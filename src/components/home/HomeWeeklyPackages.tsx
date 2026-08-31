import React from 'react';
import { WEEKLY_PACKAGES, trackEvent, getWhatsAppUrl } from '../../data/config';
import { Check, ArrowUpRight, Sparkles, Info, MessageCircle } from 'lucide-react';

export const HomeWeeklyPackages: React.FC = () => {
  return (
    <section id="haftalik-paketler" className="py-14 sm:py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase">
            HIZLI GÖRÜNÜRLÜK
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Haftalık Tanıtım Paketleri
          </h2>
          <p className="text-sm sm:text-base text-slate-700 font-normal">
            Amacınıza göre temel duyuru veya daha geniş dağıtım seçeneğini belirleyin.
          </p>
        </div>

        {/* 2 Packages Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {WEEKLY_PACKAGES.map((pkg) => {
            return (
              <div
                key={pkg.id}
                id={pkg.id}
                className={`relative flex flex-col justify-between rounded-2xl transition-all duration-200 ${
                  pkg.isPopular
                    ? 'bg-gradient-to-b from-blue-50/40 via-white to-white border-2 border-blue-600 shadow-lg ring-1 ring-blue-600/20'
                    : 'bg-white border border-slate-200 shadow-xs hover:shadow-md'
                } p-6 sm:p-8`}
              >
                {/* Badge if present */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 right-6 sm:right-8">
                    <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      <Sparkles className="w-3.5 h-3.5" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Tag */}
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    {pkg.tag}
                  </div>

                  {/* Package Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 my-3 pb-3 border-b border-slate-100">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-slate-600 font-medium text-sm">
                      {pkg.period}
                    </span>
                  </div>

                  {/* Short Desc */}
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    {pkg.shortDesc}
                  </p>

                  {/* Target Audience Box */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80 mb-5">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">
                      Kimler İçin Uygun:
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800">
                      {pkg.targetAudience}
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Paket Kapsamı:
                    </div>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${
                          pkg.isPopular ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Special Notice for 6.000 TL package */}
                  {pkg.notice && (
                    <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-100 mb-6 flex items-start gap-2 text-blue-900">
                      <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs leading-relaxed font-medium">
                        {pkg.notice}
                      </span>
                    </div>
                  )}

                </div>

                {/* CTA Button */}
                <div className="pt-2 mt-auto">
                  <a
                    href={getWhatsAppUrl(pkg.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackEvent(pkg.event, { package_name: pkg.name, price: pkg.price });
                      trackEvent('click_whatsapp', { package_name: pkg.name, price: pkg.price });
                    }}
                    className={`w-full inline-flex items-center justify-center gap-2.5 font-bold text-sm sm:text-base py-3.5 px-5 rounded-xl shadow-xs transition-all duration-150 active:scale-98 ${
                      pkg.isPopular
                        ? 'bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-emerald-600/20 hover:shadow-md'
                        : 'bg-[#25D366] hover:bg-[#20bd5a] text-white'
                    }`}
                    aria-label={`${pkg.name} için WhatsApp'tan mesaj gönder`}
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
