import React from 'react';
import { CONTACT_URL } from '../data/landingData';
import { Link2, Phone, MapPin, Globe, MessageSquare, BarChart, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

export const BioLinkSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold tracking-wide uppercase">
              <Link2 className="w-3.5 h-3.5" />
              DİJİTAL DÖNÜŞÜM ARACI
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Tek bağlantı.{' '}
              <span className="text-cyan-600 block sm:inline">
                Daha net yönlendirme.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              Instagram profilinizde WhatsApp, telefon, konum, web sitesi ve kayıt bağlantılarınızı tek sayfada toplayın. Hangi bağlantının ne kadar tıklandığını görün.
            </p>

            {/* Inclusions & Highlights */}
            <div className="space-y-4 pt-2">
              
              {/* Highlight 1: Included in monthly */}
              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-start gap-3.5">
                <div className="p-1 rounded-full bg-blue-600 text-white flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    Aylık Paketlerde Ücretsiz
                  </div>
                  <div className="text-sm text-slate-700 mt-0.5">
                    BioLink Pro, aktif aylık çalışmalar boyunca paket kapsamında sunulur.
                  </div>
                </div>
              </div>

              {/* Highlight 2: Standalone price */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-xs">
                <div className="p-1 rounded-full bg-slate-900 text-white flex-shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    Ayrı Kullanım Seçeneği
                  </div>
                  <div className="text-sm text-slate-700 mt-0.5">
                    BioLink hizmeti aylık <span className="font-bold text-slate-900">750 TL’den</span> başlayan seçeneklerle ayrı olarak da kullanılabilir.
                  </div>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3.5 rounded-xl shadow-sm transition-all duration-200 active:scale-95"
              >
                <span>BioLink Hakkında Bilgi Alın</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column - Modern BioLink Interactive Card Mockup */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              
              {/* Outer Phone Mockup Wrapper */}
              <div className="relative bg-white rounded-3xl border-4 border-slate-800 shadow-2xl p-5 overflow-hidden">
                
                {/* Simulated Profile Header */}
                <div className="text-center space-y-2 pb-5 border-b border-slate-100">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 mx-auto flex items-center justify-center text-white font-bold text-xl shadow-sm">
                    AÇA
                  </div>
                  <div className="font-bold text-slate-900 text-base">
                    Ankara Çocuk Etkinlikleri
                  </div>
                  <div className="text-xs text-slate-600">
                    Ankara Aileleri & Çocuk İşletmeleri Rehberi
                  </div>
                </div>

                {/* Simulated Link Buttons */}
                <div className="space-y-2.5 py-4">
                  <div className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-800 shadow-2xs">
                    <div className="flex items-center gap-2.5 text-emerald-700">
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-slate-800">WhatsApp İletişim Hattı</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>

                  <div className="w-full p-3 rounded-xl bg-blue-50/60 border border-blue-200 flex items-center justify-between text-xs font-semibold text-slate-800 shadow-2xs">
                    <div className="flex items-center gap-2.5 text-blue-600">
                      <Globe className="w-4 h-4" />
                      <span className="text-slate-800">Web Sitesi & Etkinlik Takvimi</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>

                  <div className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-800 shadow-2xs">
                    <div className="flex items-center gap-2.5 text-cyan-600">
                      <Phone className="w-4 h-4" />
                      <span className="text-slate-800">Doğrudan Telefonla Ara</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>

                  <div className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-800 shadow-2xs">
                    <div className="flex items-center gap-2.5 text-rose-500">
                      <MapPin className="w-4 h-4" />
                      <span className="text-slate-800">Haritada Konum & Yol Tarifi</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>

                {/* Simulated Analytics Badge */}
                <div className="mt-2 p-3 rounded-xl bg-slate-900 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-medium">Tıklama Analitiği</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">Canlı Rapor</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
