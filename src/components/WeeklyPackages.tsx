import React from 'react';
import { CONTACT_URL, WEEKLY_PACKAGES } from '../data/landingData';
import { Check, ArrowUpRight, Sparkles, AlertCircle } from 'lucide-react';

export const WeeklyPackages: React.FC = () => {
  return (
    <section id="haftalik-paketler" className="py-20 sm:py-28 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase">
            HIZLI BAŞLANGIÇ
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Haftalık Tanıtım Paketleri
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-normal">
            Amacınız yalnızca duyuru yapmak mı, yoksa daha güçlü yönlendirme ve tekrar ulaşma zemini oluşturmak mı?
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {WEEKLY_PACKAGES.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-2xl transition-all duration-200 ${
                  pkg.isPopular
                    ? 'bg-gradient-to-b from-blue-50/50 via-white to-white border-2 border-blue-600 shadow-xl ring-1 ring-blue-600/20'
                    : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-md'
                } p-7 sm:p-9`}
              >
                {/* Popular / Recommended Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 right-6 sm:right-8">
                    <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Tag */}
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    {pkg.tag}
                  </div>

                  {/* Package Name */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 my-4 pb-4 border-b border-slate-100">
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-slate-600 font-medium text-base">
                      {pkg.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                    {pkg.description}
                  </p>

                  {/* Target Audience Box */}
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/70 mb-6">
                    <div className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">
                      Kimler İçin Uygun:
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800">
                      {pkg.targetAudience}
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Paket Kapsamı:
                    </div>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 rounded-full p-1 flex-shrink-0 ${
                          pkg.isPopular ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm sm:text-base text-slate-700 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 mt-auto">
                  <a
                    href={CONTACT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-base py-3.5 px-6 rounded-xl shadow-sm transition-all duration-200 active:scale-[0.98] ${
                      pkg.isPopular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-10 max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start gap-3 text-slate-700">
          <AlertCircle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm leading-relaxed">
            Reklam sonuçları; içerik, hedef kitle, kampanya dönemi ve reklam maliyetlerine göre değişebilir. Gösterim, etkileşim, mesaj, kayıt veya satış sayısı garanti edilmez.
          </p>
        </div>

      </div>
    </section>
  );
};
