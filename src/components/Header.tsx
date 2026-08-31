import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_CONFIG, trackEvent, getWhatsAppUrl } from '../data/config';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMonthlyPage = location.pathname === '/aylik-calisma';

  const homeNavLinks = [
    { label: "Haftalık Paketler", href: "#haftalik-paketler", isRoute: false },
    { label: "Hangisi Uygun?", href: "#hangisi-uygun", isRoute: false },
    { label: "Sık Sorulanlar", href: "#sss", isRoute: false },
    { label: "Aylık Çalışmalar", href: "/aylik-calisma", isRoute: true, highlight: true },
  ];

  const monthlyNavLinks = [
    { label: "Aylık Modeller", href: "#aylik-modeller", isRoute: false },
    { label: "Veri Sahipliği", href: "#veri-sahipligi", isRoute: false },
    { label: "BioLink Pro", href: "#biolink", isRoute: false },
    { label: "Çalışma Süreci", href: "#surec", isRoute: false },
    { label: "Sık Sorulanlar", href: "#sss", isRoute: false },
    { label: "Haftalık Paketler", href: "/", isRoute: true, highlight: true },
  ];

  const currentNavLinks = isMonthlyPage ? monthlyNavLinks : homeNavLinks;

  const handleCtaClick = () => {
    trackEvent('click_instagram', { source: isMonthlyPage ? 'monthly_header' : 'weekly_header' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-slate-200 shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform bg-white">
              <img
                src="/logo.jpg"
                alt="Ankara Çocuk Ağı Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to stylized SVG if image not found
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight tracking-tight">
                {SITE_CONFIG.brandName}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-600 font-medium">
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
                    onClick={() => {
                      if (link.href === '/aylik-calisma') trackEvent('visit_monthly_page');
                    }}
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

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={getWhatsAppUrl(isMonthlyPage ? "Merhaba, Ankara Çocuk Ağı aylık reklam modelleri hakkında WhatsApp üzerinden görüşmek istiyorum." : "Merhaba, Ankara Çocuk Ağı haftalık tanıtım paketleri hakkında WhatsApp'tan bilgi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_whatsapp', { source: isMonthlyPage ? 'monthly_header' : 'weekly_header' })}
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-2.5 rounded-xl shadow-2xs hover:shadow-xs transition-all duration-150 active:scale-95"
              aria-label="WhatsApp üzerinden mesaj gönderin (0533 046 48 50)"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>WhatsApp</span>
            </a>

            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-2.5 rounded-xl shadow-2xs hover:shadow-xs transition-all duration-150 active:scale-95"
              aria-label={isMonthlyPage ? "Aylık çalışma için Instagram'dan görüşme başlat" : "Tanıtım paketi seçimi için Instagram'dan mesaj gönder"}
            >
              <span>{isMonthlyPage ? "Görüşme Başlat" : "Paketi Birlikte Seçelim"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Menüyü aç/kapat"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-1.5">
            {currentNavLinks.map((link) => {
              if (link.isRoute) {
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (link.href === '/aylik-calisma') trackEvent('visit_monthly_page');
                    }}
                    className={`px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                      link.highlight
                        ? 'text-blue-700 bg-blue-50'
                        : 'text-slate-800 hover:bg-slate-50'
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
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-2 space-y-2">
            <a
              href={getWhatsAppUrl(isMonthlyPage ? "Merhaba, Ankara Çocuk Ağı aylık reklam modelleri hakkında WhatsApp üzerinden görüşmek istiyorum." : "Merhaba, Ankara Çocuk Ağı haftalık tanıtım paketleri hakkında WhatsApp'tan bilgi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setMobileMenuOpen(false);
                trackEvent('click_whatsapp', { source: isMonthlyPage ? 'monthly_mobile_header' : 'weekly_mobile_header' });
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-4 py-3 rounded-xl shadow-xs text-sm"
              aria-label="WhatsApp'tan iletişime geç (0533 046 48 50)"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>WhatsApp İletişim ({SITE_CONFIG.whatsappDisplayPhone})</span>
            </a>

            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setMobileMenuOpen(false);
                handleCtaClick();
              }}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-3 rounded-xl shadow-xs text-sm"
              aria-label="Instagram'dan iletişime geç"
            >
              <span>{isMonthlyPage ? "Görüşme Başlat" : "Paketi Birlikte Seçelim"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
