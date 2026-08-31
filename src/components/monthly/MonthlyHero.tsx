import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowLeft, Building2, CheckCircle2 } from 'lucide-react';

export const MonthlyHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 bg-[#0B1220] text-white">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-bold tracking-wide uppercase">
          <Building2 className="w-3.5 h-3.5" />
          AYLIK REKLAM VE GÖRÜNÜRLÜK SİSTEMİ
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
          Bir haftalık görünürlükten{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            aylık hatırlanmaya.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          Her hafta sıfırdan başlamak yerine düzenli görünürlük, reklam dağıtımı ve yeniden hedefleme ile zaman içinde güçlenen bir tanıtım sistemi oluşturun.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
          <a
            href="#aylik-modeller"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-150 active:scale-98"
          >
            <span>Aylık Modelleri İncele</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-slate-700 shadow-xs transition-all duration-150 active:scale-98"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Haftalık Paketlere Dön</span>
          </Link>
        </div>

        {/* Value Micro-Points */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Düzenli Veli Erişimi</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Meta Yeniden Hedefleme</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>BioLink Pro Dahil</span>
          </div>
        </div>

      </div>
    </section>
  );
};
