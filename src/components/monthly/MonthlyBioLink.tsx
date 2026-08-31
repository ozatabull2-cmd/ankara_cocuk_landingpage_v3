import React from 'react';
import { SITE_CONFIG, trackEvent } from '../../data/config';
import { Phone, MapPin, Globe, MessageSquare, BarChart, ArrowUpRight, CheckCircle2, Sparkles, Link2 } from 'lucide-react';

export const MonthlyBioLink: React.FC = () => {
  return (
    <section id="biolink" className="py-14 sm:py-20 bg-[#F8FAFC] border-t border-slate-200/90 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-5">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold tracking-wide uppercase">
              <Link2 className="w-3.5 h-3.5" />
              YÖNLENDİRME & ANALİTİK
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Tek bağlantı.{' '}
              <span className="text-cyan-600 block sm:inline">
                Daha net yönlendirme.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
              WhatsApp, telefon, konum, web sitesi ve kayıt bağlantılarınızı Instagram profilinizde tek sayfada toplayın. Hangi bağlantının ne kadar tıklandığını görün.
            </p>

            {/* Inclusions */}
            <div className="space-y-3 pt-1">
              
              {/* Highlight: Included in monthly */}
              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/90 flex items-start gap-3">
                <div className="p-1 rounded-full bg-blue-600 text-white flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    Aylık Paketlere BioLink Pro Dahil
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 mt-0.5">
                    BioLink Pro, aktif aylık çalışma boyunca paket kapsamında sunulur.
                  </div>
                </div>
              </div>

              {/* Lower visual weight: Standalone use note */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-2xs">
                <div className="p-1 rounded-full bg-slate-100 text-slate-700 flex-shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                </div>
                <div className="text-xs sm:text-sm text-slate-600">
                  BioLink, aylık <span className="font-bold text-slate-900">750 TL’den</span> başlayan seçeneklerle bağımsız olarak da kullanılabilir.
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_biolink', { source: 'monthly_biolink_section' })}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base px-6 py-3 rounded-xl shadow-xs transition-all duration-150 active:scale-98"
                aria-label="BioLink hakkında bilgi al"
              >
                <span>BioLink Hakkında Bilgi Al</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Phone Mockup */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-xs sm:max-w-sm">
              <div className="relative bg-white rounded-3xl border-4 border-slate-800 shadow-xl p-5 overflow-hidden">
                
                {/* Profile Header */}
                <div className="text-center space-y-1.5 pb-4 border-b border-slate-100">
                  <div className="w-14 h-14 rounded-full overflow-hidden mx-auto border-2 border-slate-200 shadow-2xs">
                    <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <div className="font-bold text-slate-900 text-sm">
                    Ankara Çocuk Etkinlikleri
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Resmi İletişim ve Yönlendirme Sayfası
                  </div>
                </div>

                {/* Simulated Link Buttons */}
                <div className="space-y-2 py-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-800">
                    <div className="flex items-center gap-2 text-emerald-700">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp İletişim Hattı</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </div>

                  <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-200 flex items-center justify-between text-xs font-semibold text-slate-800">
                    <div className="flex items-center gap-2 text-blue-600">
                      <Globe className="w-3.5 h-3.5" />
                      <span>Web Sitesi & Başvuru</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-800">
                    <div className="flex items-center gap-2 text-cyan-600">
                      <Phone className="w-3.5 h-3.5" />
                      <span>Telefonla Doğrudan Ara</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-800">
                    <div className="flex items-center gap-2 text-rose-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Harita ve Yol Tarifi</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </div>
                </div>

                {/* Simulated Live Analytics Bar */}
                <div className="p-2.5 rounded-xl bg-slate-900 text-white flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <BarChart className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="font-medium">Tıklama Raporu</span>
                  </div>
                  <span className="font-bold text-emerald-400">Canlı Takip</span>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
