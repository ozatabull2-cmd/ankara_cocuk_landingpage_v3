import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_CONFIG, trackEvent, getWhatsAppUrl } from '../data/config';
import { MessageCircle } from 'lucide-react';

interface NavLinkItem {
  label: string;
  href: string;
  isRoute: boolean;
  highlight?: boolean;
}

export const Header: React.FC = () => {
  const location = useLocation();
  const isMonthlyPage = location.pathname === '/aylik-calisma';

  const homeNavLinks: NavLinkItem[] = [
    { label: "Haftalık Paketler", href: "#haftalik-paketler", isRoute: false },
    { label: "Hangisi Uygun?", href: "#hangisi-uygun", isRoute: false },
    { label: "Sık Sorulanlar", href: "#sss", isRoute: false },
  ];

  const monthlyNavLinks: NavLinkItem[] = [
    { label: "Aylık Modeller", href: "#aylik-modeller", isRoute: false },
    { label: "Veri Sahipliği", href: "#veri-sahipligi", isRoute: false },
    { label: "BioLink Pro", href: "#biolink", isRoute: false },
    { label: "Sık Sorulanlar", href: "#sss", isRoute: false },
    { label: "Haftalık Paketler", href: "/", isRoute: true, highlight: true },
  ];

  const currentNavLinks: NavLinkItem[] = isMonthlyPage ? monthlyNavLinks : homeNavLinks;

  const whatsappMessage = isMonthlyPage
    ? "Merhaba, Ankara Çocuk Ağı aylık reklam modelleri hakkında WhatsApp üzerinden bilgi almak istiyorum."
    : "Merhaba, Ankara Çocuk Ağı haftalık tanıtım paketleri hakkında WhatsApp'tan bilgi almak istiyorum.";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-slate-200 shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform bg-white">
              <img
                src="/logo.jpg"
                alt="Ankara Çocuk Ağı Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-sm sm:text-lg leading-tight tracking-tight">
                {SITE_CONFIG.brandName}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium hidden xs:block">
                {SITE_CONFIG.brandSubtitle}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {currentNavLinks.map((link) => {
              if (link.isRoute) {
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-sm font-semibold transition-colors px-3 py-1.5 rounded-lg ${
                      link.highlight
                        ? 'text-blue-700 bg-blue-50/80 hover:bg-blue-100 hover:text-blue-800'
                        : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Header WhatsApp Action (Both Desktop & Mobile) */}
          <div className="flex items-center gap-2">
            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_whatsapp', { source: isMonthlyPage ? 'monthly_header' : 'weekly_header' })}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-2xs hover:shadow-xs transition-all duration-150 active:scale-95"
              aria-label="WhatsApp üzerinden mesaj gönderin (0533 046 48 50)"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none flex-shrink-0" />
              <span>WhatsApp Bilgi</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
