import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, trackEvent, getWhatsAppUrl } from '../data/config';
import { Instagram, ArrowUpRight, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1220] border-t border-slate-800 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3.5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-700 bg-white shadow-xs">
                <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-extrabold text-white text-base block leading-tight">
                  {SITE_CONFIG.brandName}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {SITE_CONFIG.brandSubtitle}
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Çocuklu ailelerle işletmeler arasında ölçülebilir ve güvenilir bağ.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Sayfalar & Modeller
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Haftalık Tanıtım Paketleri (3.000 TL - 6.000 TL)
                </Link>
              </li>
              <li>
                <Link to="/aylik-calisma" className="text-slate-400 hover:text-white transition-colors">
                  Aylık Reklam ve Görünürlük (20.000 TL - 25.000 TL)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              İletişim & Sosyal Medya
            </div>
            <div className="space-y-2">
              <a
                href={getWhatsAppUrl("Merhaba, Ankara Çocuk Ağı tanıtım ve reklam hizmetleri hakkında bilgi almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_whatsapp', { source: 'footer' })}
                className="w-full inline-flex items-center justify-between gap-2 text-slate-200 hover:text-white transition-colors p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/50 hover:border-emerald-700 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400 stroke-none" />
                  <span className="font-semibold">{SITE_CONFIG.whatsappDisplayPhone}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500" />
              </a>

              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_instagram', { source: 'footer' })}
                className="w-full inline-flex items-center justify-between gap-2 text-slate-300 hover:text-white transition-colors p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span className="font-medium">85K+ {SITE_CONFIG.instagramHandle}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.brandName}. Tüm hakları saklıdır.
          </div>
          <div>
            Haftalık Tanıtım & Aylık Meta Reklam Hizmetleri
          </div>
        </div>

      </div>
    </footer>
  );
};
