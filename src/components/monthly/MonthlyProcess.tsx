import React from 'react';
import { MONTHLY_PROCESS_STEPS } from '../../data/config';

export const MonthlyProcess: React.FC = () => {
  return (
    <section id="surec" className="py-14 sm:py-20 bg-white border-t border-slate-200/90 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase">
            SÜREÇ YÖNETİMİ
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            İlk Mesajdan Devam Planına
          </h2>
          <p className="text-xs sm:text-base text-slate-600 font-normal">
            Okulunuzun dijital reklam stratejisini 8 kontrollü aşamada hayata geçiriyoruz.
          </p>
        </div>

        {/* 4 + 4 Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {MONTHLY_PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/90 hover:border-blue-300 hover:shadow-sm transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-black text-blue-600 group-hover:scale-105 transition-transform">
                    {step.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
