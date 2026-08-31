import React from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_CONFIG, getWhatsAppUrl, trackEvent } from '../data/config';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const location = useLocation();
  const isMonthly = location.pathname === '/aylik-calisma';

  const defaultMessage = isMonthly
    ? "Merhaba, okulumuz / işletmemiz için Ankara Çocuk Ağı aylık reklam modelleri hakkında WhatsApp üzerinden görüşmek istiyorum."
    : "Merhaba, Ankara Çocuk Ağı haftalık tanıtım paketleri hakkında WhatsApp üzerinden bilgi almak istiyorum.";

  const whatsappLink = getWhatsAppUrl(defaultMessage);

  const handleClick = () => {
    trackEvent('click_whatsapp', { source: 'floating_button', page: isMonthly ? 'monthly' : 'home' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center group">
      {/* Tooltip / Label */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-2 rounded-full bg-slate-900/90 text-white text-xs font-semibold shadow-lg backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 border border-slate-700"
      >
        <span>WhatsApp İletişim Hattı</span>
        <span className="text-emerald-400 font-mono">({SITE_CONFIG.whatsappDisplayPhone})</span>
      </a>

      {/* Floating Action Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
        aria-label="WhatsApp üzerinden mesaj gönderin (0533 046 48 50)"
      >
        {/* Radar ping animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white stroke-none text-white relative z-10" />
      </a>
    </div>
  );
};
