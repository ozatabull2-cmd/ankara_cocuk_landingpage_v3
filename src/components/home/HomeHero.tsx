import React from 'react';
import { ChevronDown } from 'lucide-react';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#FAF8F5]/60 via-white to-white">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-[#0B2545] tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Ankara’daki çocuklu ailelere çok kanallı tanıtımla ulaşın
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-lg text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
          Instagram hesaplarımız, web sitemiz, mobil uygulamamız, topluluk kanallarımız ve bölgesel reklam desteğimiz tek bir tanıtım çalışmasında birleşir.
        </p>

        {/* Channel Tags Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-5 py-2.5 rounded-full bg-[#EBF4FC] border border-[#D4E8F8] text-[#1E3A8A] text-xs sm:text-sm font-semibold shadow-2xs">
          <span>Instagram</span>
          <span className="text-[#EE5D50] font-bold">•</span>
          <span>Web</span>
          <span className="text-[#EE5D50] font-bold">•</span>
          <span>Mobil Uygulama</span>
          <span className="text-[#EE5D50] font-bold">•</span>
          <span>Topluluk</span>
          <span className="text-[#EE5D50] font-bold">•</span>
          <span>Bölgesel Reklam</span>
        </div>

        {/* Primary CTA Button */}
        <div className="pt-2 flex justify-center">
          <a
            href="#haftalik-paketler"
            className="inline-flex items-center justify-center gap-2.5 bg-[#EE5D50] hover:bg-[#E24A3D] text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-150 active:scale-98"
          >
            <span>Kapsamı ve Fiyatı İnceleyin</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
