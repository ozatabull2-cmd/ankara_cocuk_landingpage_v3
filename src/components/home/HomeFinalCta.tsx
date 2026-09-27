import React from 'react';
import { trackEvent } from '../../data/config';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface HomeFinalCtaProps {
  onOpenModal: () => void;
}

export const HomeFinalCta: React.FC<HomeFinalCtaProps> = ({ onOpenModal }) => {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#0F172A] to-[#0B1220] text-white relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-900/90 border border-blue-700 text-blue-100 text-xs sm:text-sm font-extrabold uppercase tracking-wide">
          İLETİŞİME GEÇİN
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
          İşletmeniz için en uygun tanıtım seçeneğini belirleyelim.
        </h2>

        <p className="text-base sm:text-lg text-slate-100 max-w-xl mx-auto font-medium leading-relaxed">
          İşletmenizin adını, konumunu ve tanıtmak istediğiniz hizmeti paylaşın; size uygun tanıtım seçeneklerini birlikte belirleyelim.
        </p>

        <div className="pt-2 flex justify-center">
          <button
            type="button"
            onClick={() => {
              trackEvent('open_promo_modal', { source: 'home_final_cta' });
              onOpenModal();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#EE5D50] hover:bg-[#E24A3D] text-white font-extrabold text-base sm:text-lg px-6 sm:px-10 py-4 min-h-[48px] rounded-2xl shadow-lg shadow-orange-950/40 transition-all duration-150 active:scale-98 text-center cursor-pointer"
            aria-label="İşletmeniz için tanıtım planlayalım"
          >
            <MessageCircle className="w-5 h-5 fill-white stroke-none flex-shrink-0" />
            <span>İşletmeniz için tanıtım planlayalım</span>
            <ArrowRight className="w-4 h-4 opacity-90 flex-shrink-0 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};
