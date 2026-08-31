import React from 'react';
import { CONTACT_URL } from '../data/landingData';
import {
  Instagram,
  Globe,
  MessageCircle,
  Smartphone,
  Target,
  ArrowRight,
  HelpCircle,
  TrendingUp,
  Users,
  ShieldCheck,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const channels = [
    { name: 'Instagram', icon: Instagram, color: 'text-pink-600 bg-pink-50 border-pink-100' },
    { name: 'Web', icon: Globe, color: 'text-blue-600 bg-blue-50 border-blue-100' },
    { name: 'WhatsApp', icon: MessageCircle, color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
    { name: 'Mobil Uygulama', icon: Smartphone, color: 'text-cyan-600 bg-cyan-50 border-cyan-100' },
    { name: 'Meta Reklamları', icon: Target, color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-white via-slate-50/50 to-[#F8FAFC]">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              ANKARA’DAKİ ÇOCUKLU AİLELERE ULAŞIN
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
              Bir kez görünmeyin.{' '}
              <span className="text-blue-600 not-italic block sm:inline">
                Hatırlanan marka olun.
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-2xl leading-relaxed font-normal">
              Okulunuzu veya çocuk odaklı işletmenizi yalnızca bir gönderiyle değil;
              Instagram, web, topluluk kanalları, mobil uygulama ve Meta reklamlarıyla
              hedef kitlenizin karşısına çıkarın.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#haftalik-paketler"
                className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
              >
                <span>Paketleri İncele</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-7 py-3.5 rounded-xl border border-slate-300 shadow-sm hover:border-slate-400 transition-all duration-200 active:scale-[0.98]"
              >
                <HelpCircle className="w-4 h-4 text-slate-500" />
                <span>İşletmem İçin Uygun mu?</span>
              </a>
            </div>

            {/* Channel Tags */}
            <div className="pt-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Çok Kanallı Erişim Ağı
              </div>
              <div className="flex flex-wrap gap-2.5">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <div
                      key={channel.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-medium ${channel.color} shadow-xs transition-transform hover:-translate-y-0.5`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{channel.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Multi-Channel Network Visual (Modern & Corporate) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-xl opacity-20" />

              {/* Main Card */}
              <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-7 space-y-6">
                
                {/* Header of dashboard preview */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                      <Target className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">
                        Ankara Çocuk Ağı Dağıtımı
                      </div>
                      <div className="text-xs text-slate-600 font-medium">
                        Hedefli Aile Erişimi
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Aktif Ağ
                  </span>
                </div>

                {/* Central Multi-channel Matrix */}
                <div className="space-y-3">
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-pink-100 text-pink-700">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">Instagram Yayını</div>
                        <div className="text-[11px] text-slate-600">Feed + Hikaye Görünürlüğü</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      Organik Kitle
                    </span>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700">
                        <Target className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">Meta Reklam Dağıtımı</div>
                        <div className="text-[11px] text-slate-600">Ankara Konum + Yaş Hedefli</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                      Sponsorlu
                    </span>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">Topluluk & Bildirim</div>
                        <div className="text-[11px] text-slate-600">WhatsApp & Mobil Uygulama</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Doğrudan
                    </span>
                  </div>
                </div>

                {/* Metric Summary Footer Inside Card */}
                <div className="pt-2 grid grid-cols-2 gap-3 border-t border-slate-100">
                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                    <div className="flex items-center gap-1.5 text-blue-700 text-xs font-medium mb-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>Kitle Odağı</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900">Ankara Aileleri</div>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-50/70 border border-cyan-100">
                    <div className="flex items-center gap-1.5 text-cyan-800 text-xs font-medium mb-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Çok Kanallı</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900">Eşzamanlı Etki</div>
                  </div>
                </div>

                {/* Trust bar */}
                <div className="flex items-center gap-2 text-[11px] text-slate-600 pt-1">
                  <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Şeffaf raporlama ve kontrollü reklam dağıtımı</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
