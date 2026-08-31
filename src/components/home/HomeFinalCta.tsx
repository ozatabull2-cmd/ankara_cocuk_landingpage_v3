import React from 'react';
import { SITE_CONFIG, trackEvent, getWhatsAppUrl } from '../../data/config';
import { Instagram, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

export const HomeFinalCta: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#0F172A] to-[#0B1220] text-white relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/70 border border-blue-700/70 text-blue-300 text-xs font-bold uppercase tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          HIZLI İLETİŞİM
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Tanıtımınız için doğru paketi birlikte seçelim.
        </h2>

        <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
          Sektörünüzü ve tanıtım amacınızı yazın; size uygun haftalık paketi netleştirelim.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href={getWhatsAppUrl("Merhaba, Ankara Çocuk Ağı haftalık tanıtım paketleri için birlikte seçim yapmak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_whatsapp', { source: 'home_final_cta' })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-900/30 transition-all duration-150 active:scale-98"
            aria-label="WhatsApp'tan mesaj gönder (0533 046 48 50)"
          >
            <MessageCircle className="w-5 h-5 fill-white stroke-none" />
            <span>WhatsApp’tan Mesaj Gönder</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_instagram', { source: 'home_final_cta' })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-slate-700 transition-all duration-150 active:scale-98"
            aria-label="Instagram'dan mesaj gönder"
          >
            <Instagram className="w-4 h-4 text-pink-400" />
            <span>Instagram’dan Ulaş</span>
          </a>
        </div>

      </div>
    </section>
  );
};
