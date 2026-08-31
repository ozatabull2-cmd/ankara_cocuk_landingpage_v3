import React from 'react';
import { Instagram, Globe, Bell, MessageCircle, Smartphone } from 'lucide-react';

export const HomeTrustBar: React.FC = () => {
  const stats = [
    {
      icon: Instagram,
      value: '85.000+',
      label: 'Ana Instagram hesabı',
    },
    {
      icon: Globe,
      value: '15.000+',
      label: 'Aylık web ziyaretçisi',
    },
    {
      icon: Bell,
      value: '3.500+',
      label: 'Instagram kanalı',
    },
    {
      icon: MessageCircle,
      value: '2.300+',
      label: 'WhatsApp topluluğu',
    },
    {
      icon: Smartphone,
      value: '1.000+',
      label: 'Mobil uygulama',
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
            Tek bir Instagram hesabı değil, çok kanallı bir çocuk-aile medya ağı
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Ankara’daki çocuklu ailelere Instagram, web, mobil uygulama ve topluluk kanalları üzerinden ulaşıyoruz.
          </p>
        </div>

        {/* 5 Stats Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3.5 max-w-5xl mx-auto">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#F6FAFE] hover:bg-[#EEF6FC] rounded-xl p-3.5 sm:p-4 text-center border border-[#E0EEF8] transition-all flex flex-col items-center justify-center space-y-1.5 shadow-2xs"
              >
                <div className="text-[#EE5D50]">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#EE5D50] tracking-tight leading-none">
                  {item.value}
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-[#0B2545] leading-snug">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Subtext */}
        <div className="mt-4 sm:mt-5 text-center text-[11px] sm:text-xs text-slate-500">
          <span>Ağustos 2026 kanal büyüklükleridir. </span>
          <strong className="text-[#0B2545]">Hedef kitlemiz Ankara’da yaşayan çocuklu ailelerden oluşmaktadır.</strong>
        </div>

      </div>
    </section>
  );
};
