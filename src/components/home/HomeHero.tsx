import React from 'react';
import { trackEvent } from '../../data/config';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface HomeHeroProps {
  onOpenModal: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-22 bg-gradient-to-b from-[#FAF8F5]/70 via-white to-white border-b border-slate-100">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-7">
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-[#0B2545] tracking-tight leading-[1.18] max-w-3xl mx-auto">
          Ankara’daki çocuklu ailelere ulaşın
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-900 max-w-2xl mx-auto font-medium leading-relaxed">
          Çocuklara ve ailelere yönelik hizmetinizi, etkinliğinizi veya işletmenizi Ankara’daki ailelerle buluşturuyoruz.
        </p>

        {/* Primary CTA & Subtext */}
        <div className="pt-2 space-y-3">
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => {
                trackEvent('open_promo_modal', { source: 'hero_primary_cta' });
                onOpenModal();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#EE5D50] hover:bg-[#E24A3D] text-white font-extrabold text-base sm:text-lg px-6 sm:px-10 py-4 min-h-[48px] rounded-2xl shadow-md hover:shadow-lg transition-all duration-150 active:scale-98 text-center cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white stroke-none flex-shrink-0" />
              <span>İşletmeniz için tanıtım planlayalım</span>
              <ArrowRight className="w-4 h-4 opacity-90 flex-shrink-0 stroke-[2.5]" />
            </button>
          </div>

          <p className="text-sm sm:text-base text-slate-800 font-semibold max-w-lg mx-auto leading-relaxed">
            İşletmenizin adını, konumunu ve tanıtmak istediğiniz hizmeti paylaşın; size uygun tanıtım seçeneklerini birlikte belirleyelim.
          </p>
        </div>

      </div>
    </section>
  );
};
