import React from 'react';
import {
  Instagram,
  Globe,
  Bell,
  MessageCircle,
  Smartphone,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { NETWORK_STATS } from '../../data/config';

export const HomeTrustBar: React.FC = () => {
  const {
    sectionTitle,
    sectionSubtitle,
    primaryInstagram,
    secondaryInstagrams,
    otherChannelsTitle,
    otherChannels,
    footnote,
  } = NETWORK_STATS;

  // Helper for other channel icons
  const getChannelIcon = (type: string) => {
    switch (type) {
      case 'website':
        return <Globe className="w-5 h-5 text-blue-600 stroke-[2.2]" />;
      case 'broadcast':
        return <Bell className="w-5 h-5 text-amber-600 stroke-[2.2]" />;
      case 'whatsapp':
        return <MessageCircle className="w-5 h-5 text-emerald-600 stroke-[2.2]" />;
      case 'app':
        return <Smartphone className="w-5 h-5 text-purple-600 stroke-[2.2]" />;
      default:
        return <Globe className="w-5 h-5 text-slate-600 stroke-[2.2]" />;
    }
  };

  return (
    <section className="py-10 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#EE5D50] text-xs sm:text-sm font-extrabold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
            <span>YAYIN AĞIMIZ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B2545] tracking-tight leading-tight">
            {sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-800 font-medium max-w-2xl mx-auto leading-relaxed">
            {sectionSubtitle}
          </p>
        </div>

        {/* 1. INSTAGRAM NETWORK (Primary Featured Account + Secondary Accounts) */}
        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-5 mb-10 sm:mb-14">
          
          {/* Main / Primary Featured Account (@ankaracocuketkinlikler) */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-[#FFF9F8] to-[#FFF1EE] border-2 border-[#FDA29B] p-6 sm:p-8 lg:p-10 shadow-md hover:shadow-lg transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              
              {/* Left Side: Badge, Account Link & Details */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE5D50]/15 border border-[#EE5D50]/30 text-[#D93829] text-xs sm:text-sm font-black uppercase tracking-wide">
                  <Instagram className="w-4 h-4" />
                  <span>Ana Yayın Hesabımız</span>
                </div>

                <div>
                  <a
                    href={primaryInstagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B2545] hover:text-[#EE5D50] transition-colors group"
                  >
                    <span>{primaryInstagram.handle}</span>
                    <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-[#EE5D50] transition-colors flex-shrink-0" />
                  </a>
                  <p className="text-sm sm:text-base font-bold text-slate-600 mt-1">
                    Ankara genelinde ailelerin en çok takip ettiği çocuk ve etkinlik platformu
                  </p>
                </div>
              </div>

              {/* Right Side: Big Highlight Number & Label */}
              <div className="bg-white/90 backdrop-blur-xs rounded-2xl p-5 sm:p-6 border border-[#FDA29B]/50 shadow-2xs text-center md:text-right min-w-[200px] flex-shrink-0">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#EE5D50] tracking-tight leading-none">
                  {primaryInstagram.followers}
                </div>
                <div className="text-sm sm:text-base font-extrabold text-[#0B2545] mt-1.5">
                  {primaryInstagram.label}
                </div>
              </div>

            </div>
          </div>

          {/* Secondary Instagram Accounts Grid (3 Accounts) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {secondaryInstagrams.map((account, idx) => (
              <a
                key={idx}
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F8FAFC] hover:bg-[#F1F5F9] rounded-2xl p-4 sm:p-5 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between space-y-3 shadow-2xs hover:shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-orange-100/80 text-[#EE5D50] flex items-center justify-center">
                    <Instagram className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#EE5D50] transition-colors" />
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0B2545] tracking-tight leading-tight">
                    {account.followers}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-600">
                    {account.label}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/80">
                  <span className="text-sm sm:text-base font-bold text-[#1E3A8A] group-hover:text-[#EE5D50] transition-colors break-all">
                    {account.handle}
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>

        {/* 2. OTHER PUBLISHING CHANNELS (Sade İkincil Bölüm) */}
        <div className="max-w-5xl mx-auto pt-6 border-t border-slate-200">
          
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-black text-[#0B2545] tracking-tight">
              {otherChannelsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {otherChannels.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 sm:p-5 text-center border border-slate-200 hover:border-slate-300 transition-all flex flex-col items-center justify-center space-y-1.5 shadow-2xs"
              >
                <div className="mb-0.5 p-2 rounded-xl bg-slate-50">
                  {getChannelIcon(item.type)}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#0B2545] tracking-tight leading-none">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-700 leading-tight">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footnote & Scope Clarification */}
        <div className="mt-8 text-center text-xs sm:text-sm text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          {footnote}
        </div>

      </div>
    </section>
  );
};
