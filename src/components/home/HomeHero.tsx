import React from 'react';
import { getWhatsAppUrl, trackEvent } from '../../data/config';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const HomeHero: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl("Merhaba, işletmem için tanıtım planlamak istiyorum.");

  return (
    <section className="relative overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-22 bg-gradient-to-b from-[#FAF8F5]/70 via-white to-white border-b border-slate-100">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-7">
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-[#0B2545] tracking-tight leading-[1.18] max-w-3xl mx-auto">
          İşletmenizi Ankara’daki çocuklu ailelerle buluşturun.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Atölyenizi duyurmak, oyun alanınızı tanıtmak veya anaokulunuzun kayıt dönemini desteklemek için ailelere Instagram, web sitesi ve topluluk kanallarımız üzerinden ulaşın.
        </p>

        {/* Primary CTA & Subtext */}
        <div className="pt-2 space-y-3">
          <div className="flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent('click_whatsapp', { source: 'hero_primary_cta' });
              }}
              className="inline-flex items-center justify-center gap-3 bg-[#EE5D50] hover:bg-[#E24A3D] text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-150 active:scale-98"
            >
              <MessageCircle className="w-5 h-5 fill-white stroke-none" />
              <span>İşletmem için tanıtım planlayalım</span>
              <ArrowRight className="w-4 h-4 opacity-90" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-normal">
            İşletmenizi, konumunuzu ve hedefinizi paylaşın; uygun tanıtım seçeneğini birlikte belirleyelim.
          </p>
        </div>

      </div>
    </section>
  );
};
