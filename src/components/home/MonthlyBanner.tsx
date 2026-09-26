import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../data/config';
import { ArrowRight, Sparkles } from 'lucide-react';

export const MonthlyBanner: React.FC = () => {
  return (
    <section className="py-8 sm:py-10 bg-[#F1F5F9]/70 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-7 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          
          <div className="space-y-1.5">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs sm:text-sm font-extrabold text-[#1E3A8A] uppercase tracking-wide">
              <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>Düzenli Tanıtım Seçenekleri</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-[#0B2545]">
              Düzenli tanıtım mı düşünüyorsunuz?
            </h3>
            <p className="text-sm sm:text-base text-slate-900 font-medium leading-relaxed max-w-xl">
              Okulunuz veya işletmeniz için aylık çalışma seçeneklerimiz de bulunuyor.
            </p>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <Link
              to="/aylik-calisma"
              onClick={() => trackEvent('visit_monthly_page', { source: 'home_monthly_banner' })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B2545] hover:bg-[#1E3A8A] text-white font-extrabold text-sm sm:text-base px-5 sm:px-6 py-3.5 min-h-[44px] rounded-xl shadow-2xs hover:shadow-xs transition-all duration-150 active:scale-98"
            >
              <span>Aylık çalışma seçeneklerini inceleyin</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0 stroke-[2.5]" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
