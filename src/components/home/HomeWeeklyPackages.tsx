import React from 'react';
import { WEEKLY_PACKAGES, trackEvent, getWhatsAppUrl } from '../../data/config';
import { Check, MessageCircle, ArrowRight, RotateCcw } from 'lucide-react';

export const HomeWeeklyPackages: React.FC = () => {
  return (
    <section id="haftalik-paketler" className="py-12 sm:py-16 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E3A8A] text-xs sm:text-sm font-extrabold tracking-wide uppercase">
            HAFTALIK TANITIM SEÇENEKLERİ
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B2545] tracking-tight">
            Haftalık Tanıtım Paketleri
          </h2>
          <p className="text-sm sm:text-base text-slate-900 font-medium max-w-xl mx-auto leading-relaxed">
            Dönemsel etkinlikleriniz, atölyeleriniz ve duyurularınız için 7 günlük odaklı tanıtım planları.
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
                    ? 'bg-white border-2 border-[#EE5D50] shadow-lg ring-1 ring-[#EE5D50]/20'
                    : 'bg-white border-2 border-slate-200 shadow-2xs hover:shadow-md'
                } p-6 sm:p-8`}
              >
                <div>
                  {/* Tag */}
                  <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                    {pkg.tag}
                  </div>

                  {/* Package Name */}
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0B2545] mb-2">
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 my-3 pb-3 border-b border-slate-200">
                    <span className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-slate-800 font-bold text-sm">
                      {pkg.period}
                    </span>
                  </div>

                  {/* Benefit Sentence */}
                  <p className="text-[#0B2545] font-bold text-base sm:text-lg leading-relaxed mb-5">
                    {pkg.shortDesc}
                  </p>

                  {/* Distinctive Special Box for 6.000 TL Package (Açık mercan zeminli kısa kutu) */}
                  {pkg.specialBox && (
                    <div className="bg-[#FFF4F2] border-2 border-[#FDA29B] rounded-2xl p-4 sm:p-5 mb-5 space-y-2.5 shadow-2xs">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EE5D50]/15 border border-[#EE5D50]/30 text-[#D93829] text-xs sm:text-sm font-black uppercase tracking-wide">
                        <RotateCcw className="w-3.5 h-3.5 flex-shrink-0 stroke-[2.5]" />
                        <span>{pkg.specialBox.badge}</span>
                      </div>

                      <h4 className="text-base sm:text-lg font-black text-[#0B2545] leading-snug">
                        {pkg.specialBox.title}
                      </h4>

                      <p className="text-base text-slate-900 leading-relaxed font-medium">
                        {pkg.specialBox.desc}
                      </p>

                      <div className="pt-2 border-t border-[#FDA29B]/60 text-sm text-slate-800 font-bold leading-relaxed">
                        {pkg.specialBox.scopeNote}
                      </div>
                    </div>
                  )}

                  {/* Target Audience Box */}
                  <div className="bg-slate-50 rounded-xl p-3.5 sm:p-4 border border-slate-200 mb-5">
                    <div className="text-xs sm:text-sm font-extrabold text-slate-700 uppercase tracking-wide mb-1">
                      Uygun İşletmeler:
                    </div>
                    <div className="text-sm sm:text-base font-bold text-[#0B2545] leading-snug">
                      {pkg.targetAudience}
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mb-6">
                    <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                      Paket Kapsamı:
                    </div>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 rounded-full p-1 flex-shrink-0 ${
                          pkg.isPopular ? 'bg-orange-100 text-[#EE5D50]' : 'bg-blue-100 text-blue-700'
                        }`}>
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                        <span className="text-base text-slate-900 font-semibold leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Package Notice (Period & Ad Budget) */}
                  {pkg.notice && (
                    <div className="text-xs sm:text-sm text-slate-800 font-semibold bg-slate-50 rounded-xl p-3 border border-slate-200 mb-5 leading-relaxed">
                      {pkg.notice}
                    </div>
                  )}

                </div>

                {/* WhatsApp CTA Button */}
                <div className="pt-2 mt-auto">
                  <a
                    href={getWhatsAppUrl(pkg.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackEvent(pkg.event, { package_name: pkg.name, price: pkg.price });
                      trackEvent('click_whatsapp', { package_name: pkg.name, price: pkg.price });
                    }}
                    className="w-full inline-flex items-center justify-center gap-2.5 font-extrabold text-base sm:text-lg min-h-[48px] py-3.5 px-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-150 active:scale-98 bg-[#25D366] hover:bg-[#20bd5a] text-white text-center"
                    aria-label={`${pkg.name} için WhatsApp üzerinden görüşün`}
                  >
                    <MessageCircle className="w-5 h-5 fill-white stroke-none flex-shrink-0" />
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4 opacity-90 flex-shrink-0 stroke-[2.5]" />
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
