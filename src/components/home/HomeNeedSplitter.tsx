import React from 'react';
import { Calendar, TrendingUp, ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../data/config';

export const HomeNeedSplitter: React.FC = () => {
  return (
    <section className="py-8 sm:py-10 bg-[#FAF8F5]/40 border-b border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Tanıtım İhtiyacınızı Seçin
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Option 1: Short-term / Event */}
          <a
            href="#haftalik-paketler"
            className="group relative bg-white hover:bg-[#F6FAFE] p-5 sm:p-6 rounded-2xl border border-slate-200 hover:border-[#D4E8F8] transition-all duration-150 shadow-2xs hover:shadow-sm flex flex-col justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#0B2545] group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                  <span>Etkinlik veya kısa süreli tanıtım</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Atölye, etkinlik, açılış ve dönemsel duyurular için.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
              <span>Haftalık Paketleri İnceleyin (3.000 TL - 6.000 TL)</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Option 2: Continuous / School / Business */}
          <Link
            to="/aylik-calisma"
            onClick={() => trackEvent('visit_monthly_page', { source: 'need_splitter' })}
            className="group relative bg-white hover:bg-[#FFF8F7] p-5 sm:p-6 rounded-2xl border border-slate-200 hover:border-[#FDCBC7] transition-all duration-150 shadow-2xs hover:shadow-sm flex flex-col justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#EE5D50] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#0B2545] group-hover:text-[#EE5D50] transition-colors flex items-center gap-1.5">
                  <span>Düzenli işletme veya okul tanıtımı</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  İşletmesini düzenli tanıtmak veya okulunun kayıt dönemini desteklemek isteyenler için.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#EE5D50]">
              <span>Aylık Çalışma Modellerini İnceleyin</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
};
