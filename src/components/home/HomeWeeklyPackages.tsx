import React from 'react';
import { WEEKLY_PACKAGES, trackEvent, getWhatsAppUrl } from '../../data/config';
import { Check, MessageCircle, ArrowRight, RotateCcw } from 'lucide-react';

export const HomeWeeklyPackages: React.FC = () => {
  return (
    <section id="haftalik-paketler" className="py-12 sm:py-16 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E3A8A] text-xs font-bold tracking-wide uppercase">
            HAFTALIK TANITIM SEÇENEKLERİ
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Haftalık Tanıtım Paketleri
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal max-w-xl mx-auto leading-relaxed">
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
                    : 'bg-white border border-slate-200 shadow-2xs hover:shadow-md'
                } p-6 sm:p-8`}
              >
                <div>
                  {/* Tag */}
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    {pkg.tag}
                  </div>

                  {/* Package Name */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B2545] mb-2">
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 my-3 pb-3 border-b border-slate-100">
                    <span className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-slate-500 font-medium text-xs sm:text-sm">
                      {pkg.period}
                    </span>
                  </div>

                  {/* Benefit Sentence */}
                  <p className="text-[#0B2545] font-semibold text-sm sm:text-base leading-snug mb-4">
                    {pkg.shortDesc}
                  </p>

                  {/* Distinctive Special Box for 6.000 TL Package */}
                  {pkg.specialBox && (
                    <div className="bg-[#FFF5F4] border border-[#FECDCA] rounded-2xl p-4 sm:p-5 mb-5 space-y-2.5">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EE5D50]/10 border border-[#EE5D50]/20 text-[#EE5D50] text-[10px] sm:text-xs font-bold uppercase tracking-wide">
                        <RotateCcw className="w-3 h-3" />
                        {pkg.specialBox.badge}
                      </div>

                      <h4 className="text-sm sm:text-base font-extrabold text-[#0B2545] leading-snug">
                        {pkg.specialBox.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {pkg.specialBox.desc}
                      </p>

                      <div className="text-xs font-semibold text-[#EE5D50] leading-snug pt-0.5">
                        {pkg.specialBox.shortBenefit}
                      </div>

                      <div className="pt-2 border-t border-[#FECDCA]/60 text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                        {pkg.specialBox.scopeNote}
                      </div>
                    </div>
                  )}

                  {/* Target Audience Box */}
                  <div className="bg-slate-50 rounded-xl p-3 sm:p-3.5 border border-slate-200/80 mb-5">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">
                      Uygun İşletmeler:
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#0B2545]">
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
                          pkg.isPopular ? 'bg-orange-100 text-[#EE5D50]' : 'bg-blue-100 text-blue-700'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Package Notice (Period & Ad Budget) */}
                  {pkg.notice && (
                    <div className="text-[11px] sm:text-xs text-slate-500 bg-slate-50 rounded-lg p-2.5 border border-slate-200/60 mb-5">
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
                    className="w-full inline-flex items-center justify-center gap-2.5 font-bold text-sm sm:text-base py-3.5 px-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-150 active:scale-98 bg-[#25D366] hover:bg-[#20bd5a] text-white"
                    aria-label={`${pkg.name} için WhatsApp üzerinden görüşün`}
                  >
                    <MessageCircle className="w-5 h-5 fill-white stroke-none" />
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4 opacity-80" />
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
