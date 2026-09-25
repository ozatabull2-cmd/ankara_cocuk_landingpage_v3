import React from 'react';
import { trackEvent, getWhatsAppUrl } from '../../data/config';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const HomeFinalCta: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl("Merhaba, işletmem için tanıtım planlamak istiyorum.");

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#0F172A] to-[#0B1220] text-white relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/70 border border-blue-700/70 text-blue-300 text-xs font-bold uppercase tracking-wide">
          İLETİŞİME GEÇİN
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
          İşletmeniz için en uygun tanıtım seçeneğini belirleyelim.
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
          İşletmenizi, konumunuzu ve hedefinizi paylaşın; uygun tanıtım seçeneğini birlikte belirleyelim.
        </p>

        <div className="pt-2 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_whatsapp', { source: 'home_final_cta' })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#EE5D50] hover:bg-[#E24A3D] text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-2xl shadow-lg shadow-orange-950/40 transition-all duration-150 active:scale-98"
            aria-label="İşletmem için tanıtım planlayalım - WhatsApp üzerinden mesaj gönderin"
          >
            <MessageCircle className="w-5 h-5 fill-white stroke-none" />
            <span>İşletmem için tanıtım planlayalım</span>
            <ArrowRight className="w-4 h-4 opacity-90" />
          </a>
        </div>

      </div>
    </section>
  );
};
