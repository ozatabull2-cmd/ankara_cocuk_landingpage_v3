import React from 'react';
import { ArrowRight, HelpCircle, Megaphone, TrendingUp } from 'lucide-react';

export const PackageSelectionHelp: React.FC = () => {
  return (
    <section id="hangisi-uygun" className="py-12 sm:py-16 bg-[#F8FAFC] border-y border-slate-200/90 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            HIZLI KARAR REHBERİ
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Hangisi Sizin İçin Uygun?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Amacınıza göre doğru paketi saniyeler içinde belirleyin.
          </p>
        </div>

        {/* 2 Decision Cards */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          
          {/* Option 1: 3.000 TL */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                <Megaphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                “Sadece duyuru yapmak istiyorum”
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Etkinlik, atölye veya işletmenizi duyurmak istiyorsanız <span className="font-bold text-slate-900">3.000 TL’lik paket</span> yeterlidir.
              </p>
            </div>
            <a
              href="#haftalik-3000"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 pt-2"
            >
              <span>3.000 TL Paket Detayını Gör</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Option 2: 6.000 TL */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-4 border border-cyan-100">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                “Daha geniş ve güçlü tanıtım istiyorum”
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Okul, anaokulu veya kayıt odaklı bir işletmeyseniz <span className="font-bold text-slate-900">6.000 TL’lik paket</span> daha uygundur.
              </p>
            </div>
            <a
              href="#haftalik-6000"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 pt-2"
            >
              <span>6.000 TL Paket Detayını Gör</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
