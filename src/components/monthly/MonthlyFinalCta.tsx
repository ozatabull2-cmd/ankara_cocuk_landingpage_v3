import React from 'react';
import { SITE_CONFIG, trackEvent } from '../../data/config';
import { Instagram, ArrowRight, MessageSquare } from 'lucide-react';

export const MonthlyFinalCta: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#0F172A] to-[#0B1220] text-white relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/70 border border-blue-700/70 text-blue-300 text-xs font-bold uppercase tracking-wide">
          <MessageSquare className="w-3.5 h-3.5" />
          KURUMSAL GÖRÜŞME
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Okulunuz için hangi aylık model daha uygun?
        </h2>

        <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Mevcut reklam hesabınızı, hedeflerinizi ve dijital hazırlığınızı birlikte değerlendirerek uygun modeli netleştirelim.
        </p>

        <div className="pt-2 flex justify-center">
          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_instagram', { source: 'monthly_final_cta' })}
            className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-150 active:scale-98"
            aria-label="Instagram'dan görüşme başlat"
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram’dan Görüşme Başlat</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
