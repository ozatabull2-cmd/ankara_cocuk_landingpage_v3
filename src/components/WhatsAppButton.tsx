import React from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_CONFIG, getWhatsAppUrl, trackEvent } from '../data/config';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.301-.15-1.767-.867-2.04-.966-.274-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.301-.021-.465.13-.615.14-.13.301-.345.451-.523.149-.177.197-.299.299-.496.101-.197.05-.37-.024-.521-.075-.15-.674-1.625-.92-2.22-.24-.582-.486-.504-.671-.513l-.571-.01c-.199 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652c1.746.951 3.71 1.452 5.71 1.453h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
  </svg>
);

export const WhatsAppButton: React.FC = () => {
  const location = useLocation();
  const isMonthly = location.pathname === '/aylik-calisma';

  const defaultMessage = isMonthly
    ? "Merhaba, okulumuz / işletmemiz için Ankara Çocuk Ağı aylık reklam modelleri hakkında WhatsApp üzerinden görüşmek istiyorum."
    : "Merhaba, işletmem için Ankara Çocuk Ağı tanıtım seçenekleri hakkında WhatsApp üzerinden görüşmek istiyorum.";

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
        <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
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
        <WhatsAppIcon className="w-7 h-7 text-white relative z-10" />
      </a>
    </div>
  );
};
