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
      value: '2.500+',
      label: 'WhatsApp topluluğu',
    },
    {
      icon: Smartphone,
      value: '1.000+',
      label: 'Mobil uygulama kullanıcısı',
    },
  ];

  return (
    <section className="py-14 sm:py-18 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
            Tek bir Instagram hesabı değil, çok kanallı bir çocuk-aile medya ağı
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed">
            Ankara’daki çocuklu ailelere Instagram, web, mobil uygulama ve topluluk kanalları üzerinden farklı temas noktalarından ulaşıyoruz.
          </p>
        </div>

        {/* 5 Stats Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5 max-w-6xl mx-auto">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#F6FAFE] hover:bg-[#EEF6FC] rounded-2xl p-5 sm:p-6 text-center border border-[#E0EEF8] transition-all flex flex-col items-center justify-center space-y-2.5 shadow-2xs"
              >
                <div className="text-[#EE5D50] mb-0.5">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#EE5D50] tracking-tight leading-none">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#0B2545] leading-snug">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Subtext */}
        <div className="mt-8 text-center space-y-1.5 text-xs sm:text-sm text-slate-500">
          <p className="font-normal text-slate-500">
            Ağustos 2026 itibarıyla kanal büyüklükleridir.
          </p>
          <p className="font-bold text-[#0B2545]">
            Hedef kitlemiz ağırlıklı olarak Ankara’da yaşayan çocuklu ailelerden oluşmaktadır.
          </p>
        </div>

      </div>
    </section>
  );
};
