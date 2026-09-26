import React from 'react';
import { Instagram, Globe, Bell, MessageCircle, Smartphone } from 'lucide-react';

export const HomeTrustBar: React.FC = () => {
  const stats = [
    {
      icon: Instagram,
      value: '85.000+',
      label: 'Instagram Takipçisi',
      sublabel: 'Aktif veli kitlesi',
    },
    {
      icon: Globe,
      value: '15.000+',
      label: 'Aylık Web Ziyaretçisi',
      sublabel: 'Arama & etkinlik rehberi',
    },
    {
      icon: Bell,
      value: '3.500+',
      label: 'Yayın Kanalı Üyesi',
      sublabel: 'Instagram duyuru kanalı',
    },
    {
      icon: MessageCircle,
      value: '2.300+',
      label: 'WhatsApp Topluluk Üyesi',
      sublabel: 'Doğrudan veli grupları',
    },
    {
      icon: Smartphone,
      value: '1.000+',
      label: 'Aktif Uygulama Kullanıcısı',
      sublabel: 'Mobil uygulama erişimi',
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-3xl font-black text-[#0B2545] tracking-tight leading-tight">
            Ankara Çocuk Ağı Yayın Kanalları
          </h2>
          <p className="text-sm sm:text-base text-slate-900 font-medium max-w-2xl mx-auto leading-relaxed">
            Duyurunuzu Ankara’da yaşayan çocuklu ailelere ulaştıran bağımsız yayın ve topluluk kanallarımız.
          </p>
        </div>

        {/* 5 Stats Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#F6FAFE] hover:bg-[#EEF6FC] rounded-2xl p-4 text-center border border-[#CFE4F6] transition-all flex flex-col items-center justify-center space-y-1.5 shadow-2xs"
              >
                <div className="text-[#EE5D50] mb-0.5">
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#EE5D50] tracking-tight leading-none">
                  {item.value}
                </div>
                <div className="text-sm sm:text-base font-extrabold text-[#0B2545] leading-tight">
                  {item.label}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 leading-tight">
                  {item.sublabel}
                </div>
              </div>
            );
          })}
        </div>

        {/* Date and Measurement Explanation Note */}
        <div className="mt-5 text-center text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
          <span>Ağustos 2026 bağımsız kanal büyüklükleridir. Sayılar her kanalın kendi takipçi/üye sayısını gösterir. </span>
          <strong className="text-[#0B2545] font-extrabold block sm:inline mt-1 sm:mt-0">Hedef kitlemiz Ankara’da yaşayan çocuklu ailelerden oluşmaktadır.</strong>
        </div>

      </div>
    </section>
  );
};
