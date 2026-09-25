import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent, getWhatsAppUrl } from '../../data/config';
import { CalendarRange, ArrowRight, MessageCircle } from 'lucide-react';

export const MonthlyBanner: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl("Merhaba, işletmemiz / okulumuz için aylık tanıtım seçenekleri hakkında görüşmek istiyorum.");

  return (
    <section id="aylik-tanitim" className="py-12 sm:py-16 bg-[#0B1220] text-white relative overflow-hidden scroll-mt-16">
      {/* Subtle Glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-bold uppercase tracking-wide">
              <CalendarRange className="w-3.5 h-3.5" />
              DÜZENLİ VE SÜREKLİ GÖRÜNÜRLÜK
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              Tek bir duyuru yerine düzenli tanıtım mı istiyorsunuz?
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              İşletmeniz veya okulunuz için süreklilik isteyen bir çalışma planlıyorsanız aylık tanıtım seçeneklerini birlikte değerlendirelim.
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-3">
            {/* Direct WhatsApp CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent('click_whatsapp', { source: 'home_monthly_banner_cta' });
              }}
              className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md transition-all duration-150 active:scale-98"
              aria-label="Aylık tanıtımı görüşmek için WhatsApp mesajı gönderin"
            >
              <MessageCircle className="w-5 h-5 fill-white stroke-none" />
              <span>Aylık tanıtımı görüşelim</span>
            </a>

            {/* Link to Monthly Details Page */}
            <Link
              to="/aylik-calisma"
              onClick={() => trackEvent('visit_monthly_page', { source: 'home_monthly_banner' })}
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl border border-slate-700 transition-all duration-150"
            >
              <span>Aylık Modelleri İnceleyin (20.000 TL - 25.000 TL)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
