import React from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';

export const HomeValueProposition: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badge & Header */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase">
            PAYLAŞIMDAN DAHA FAZLASI
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight max-w-3xl mx-auto">
            İnsanların sizi görmesi başlangıçtır.{' '}
            <span className="text-blue-600 block sm:inline">
              Asıl değer, doğru kişilerin sizi yeniden hatırlamasıdır.
            </span>
          </h2>
        </div>

        {/* 2 Value Cards Grid */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          
          {/* Card 1: Çok Kanallı Görünürlük Sistemi */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-3.5 hover:border-blue-300 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-2xs">
              <Layers className="w-5 h-5" />
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
              Çok Kanallı Görünürlük Sistemi
            </h3>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Tanıtım çalışmasını tek bir gönderi olarak değil, hedef kitlenin farklı kanallarda markanızla karşılaştığı bir görünürlük sistemi olarak kurguluyoruz.
            </p>
          </div>

          {/* Card 2: Şeffaf ve Gerçekçi Değerlendirme */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-3.5 hover:border-blue-300 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center border border-cyan-100 shadow-2xs">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
              Şeffaf ve Gerçekçi Değerlendirme
            </h3>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Kampanyanın dağıtımını, ulaştığı kitleyi, aldığı ilk ilgiyi ve dönüşüm potansiyelini artıran adımları birlikte şeffaf şekilde değerlendiriyoruz.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
