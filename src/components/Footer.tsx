import React from 'react';
import { CONTACT_URL, NAV_LINKS } from '../data/landingData';
import { Instagram, Sparkles, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1220] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-white text-lg block leading-tight">
                  Ankara Çocuk Ağı
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Tanıtım ve reklam hizmetleri
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Çocuklu ailelerle işletmeler arasında ölçülebilir bağ.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Hızlı Gezinme
            </div>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              İletişim & Sosyal Medya
            </div>
            <div>
              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span className="font-medium text-xs sm:text-sm">@ankaracocuketkinlikler</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Ankara Çocuk Ağı. Tüm hakları saklıdır.
          </div>
          <div>
            Ankara Çocuk Ağı Tanıtım ve Reklam Hizmetleri
          </div>
        </div>

      </div>
    </footer>
  );
};
