import React from 'react';
import { SITE_CONFIG, getWhatsAppUrl, trackEvent } from '../../data/config';
import {
  Instagram,
  Target,
  MessageCircle,
  Users,
  Layers,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-18 bg-gradient-to-b from-white via-slate-50/60 to-[#F8FAFC]">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Primary Action */}
          <div className="lg:col-span-7 text-left space-y-4 sm:space-y-5">
            
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/90 text-blue-700 text-xs sm:text-sm font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              ANKARA’DAKİ ÇOCUKLU AİLELERE ULAŞIN
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.12]">
              Bir kez görünmekle kalmayın.{' '}
              <span className="text-blue-600 block sm:inline">
                Hatırlanan marka olun.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl font-normal leading-relaxed">
              Etkinliğinizi, okulunuzu veya çocuk odaklı işletmenizi Ankara’daki çocuklu ailelere Instagram, web, topluluk kanalları, mobil uygulama ve Meta reklamlarıyla duyurun.
            </p>

            {/* Action Buttons: Weekly packages front and center */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="#haftalik-paketler"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-sm hover:shadow transition-all duration-150 active:scale-98"
              >
                <span>Haftalık Paketleri İncele</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl("Merhaba, Ankara Çocuk Ağı haftalık tanıtım paketleri hakkında WhatsApp üzerinden bilgi almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_whatsapp', { source: 'hero_whatsapp_btn' })}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-xs transition-all duration-150 active:scale-98"
                aria-label="WhatsApp üzerinden bilgi alın (0533 046 48 50)"
              >
                <MessageCircle className="w-5 h-5 fill-white stroke-none" />
                <span>WhatsApp’tan Bilgi Al</span>
              </a>
            </div>

            {/* 85k Instagram Community Showcase Banner */}
            <div className="pt-2">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_instagram', { source: 'hero_85k_badge' })}
                className="group/insta inline-flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-pink-50/90 via-purple-50/80 to-blue-50/80 border border-pink-200/80 hover:border-pink-300 shadow-2xs hover:shadow-xs transition-all max-w-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0 shadow-2xs group-hover/insta:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                    <span>85.000+ Takipçili Instagram Sayfamız</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-pink-600 group-hover/insta:translate-x-0.5 group-hover/insta:-translate-y-0.5 transition-transform" />
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-600">
                    Örnek yayın ve kitlemizi canlı inceleyin: <strong className="text-pink-700">@ankaracocuketkinlikler</strong>
                  </div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Multi-Channel Network Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative bg-white rounded-2xl border border-slate-200 shadow-lg p-5 sm:p-6 space-y-4">
                
                {/* Card Title */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-cyan-400 font-bold">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">
                        Çok Kanallı Dağıtım
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Ankara Çocuk Ağı Sistemi
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Aktif Dağıtım
                  </span>
                </div>

                {/* Shortened Distribution Items */}
                <div className="space-y-2.5">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-800">
                    <div className="flex items-center gap-2.5 text-pink-600">
                      <Instagram className="w-4 h-4" />
                      <span className="text-slate-800">Instagram görünürlüğü</span>
                    </div>
                    <span className="text-slate-500 font-medium">85K+ Kitle</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-800">
                    <div className="flex items-center gap-2.5 text-indigo-600">
                      <Target className="w-4 h-4" />
                      <span className="text-slate-800">Meta reklam desteği</span>
                    </div>
                    <span className="text-slate-500 font-medium">Hedefli Reklam</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-800">
                    <div className="flex items-center gap-2.5 text-emerald-600">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-slate-800">Topluluk ve bildirim</span>
                    </div>
                    <span className="text-slate-500 font-medium">WhatsApp + App</span>
                  </div>
                </div>

                {/* 2 Quick Badges */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-100">
                    <div className="flex items-center gap-1.5 text-blue-700 text-xs font-bold">
                      <Users className="w-3.5 h-3.5" />
                      <span>Ankara aileleri</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-cyan-50/80 border border-cyan-100">
                    <div className="flex items-center gap-1.5 text-cyan-800 text-xs font-bold">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Çok kanallı etki</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
