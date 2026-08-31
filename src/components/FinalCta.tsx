import React from 'react';
import { CONTACT_URL } from '../data/landingData';
import { Instagram, ArrowRight, MessageCircle } from 'lucide-react';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#0F172A] to-[#0B1220] text-white relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/70 border border-blue-700/70 text-blue-300 text-xs font-bold tracking-wide uppercase">
          <MessageCircle className="w-3.5 h-3.5" />
          İLK ADIMI BİRLİKTE SEÇELİM
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          İşletmeniz hangi pakete uygun?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Sektörünüzü ve tanıtım amacınızı yazın; size en uygun haftalık veya aylık çalışma modelini netleştirelim.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-200 active:scale-[0.98]"
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram’dan Mesaj Gönderin</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="text-xs text-slate-400 pt-2">
          Hızlı dönüş ve kampanya planlaması için doğrudan Instagram mesaj hattımızdan ulaşabilirsiniz.
        </div>

      </div>
    </section>
  );
};
