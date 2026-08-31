import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../data/config';
import { Building2, ArrowRight } from 'lucide-react';

export const MonthlyBanner: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#0B1220] text-white relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-bold uppercase tracking-wide">
              <Building2 className="w-3.5 h-3.5" />
              KURUMSAL MODELLER
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              Tek seferlik tanıtım değil, sürekli görünürlük mü arıyorsunuz?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Okullar ve çocuk odaklı işletmeler için hazırlanan aylık reklam ve görünürlük modellerini inceleyin.
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <Link
              to="/aylik-calisma"
              onClick={() => trackEvent('visit_monthly_page', { source: 'home_monthly_banner' })}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-150 active:scale-98"
            >
              <span>Aylık Çalışmaları İncele</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
