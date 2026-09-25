import React from 'react';
import { Check, X } from 'lucide-react';

export const HomePackageComparison: React.FC = () => {
  const comparisonRows = [
    {
      feature: "Yayın Kanalları",
      pkg3000: "Instagram & Web Sitesi",
      pkg6000: "Instagram, Web, WhatsApp & Mobil Uygulama",
    },
    {
      feature: "WhatsApp & Uygulama Duyurusu",
      pkg3000: "Dahil değil",
      pkg6000: "Dahil (Topluluk & Bildirim)",
      pkg3000Icon: false,
      pkg6000Icon: true,
    },
    {
      feature: "Meta Reklam Desteği",
      pkg3000: "Paket dahilinde reklam desteği",
      pkg6000: "Paket dahilinde reklam desteği",
    },
    {
      feature: "İşletmeye Özel Yeniden Ulaşma Kitlesi",
      pkg3000: "Dahil değil",
      pkg6000: "Sonraki kampanyalar için kitle oluşturma",
      pkg3000Icon: false,
      highlight6000: true,
    },
  ];

  return (
    <div className="mt-8 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="bg-[#FAF8F5]/60 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-2xs">
        
        <div className="text-center mb-5">
          <h3 className="text-base sm:text-lg font-extrabold text-[#0B2545]">
            Hızlı Paket Karşılaştırması
          </h3>
          <p className="text-xs text-slate-500">
            Haftalık paketler arasındaki temel kapsam farkları
          </p>
        </div>

        {/* Comparison List */}
        <div className="space-y-3">
          {comparisonRows.map((row, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
            >
              <div className="font-bold text-xs sm:text-sm text-[#0B2545] sm:w-1/3">
                {row.feature}
              </div>

              <div className="grid grid-cols-2 gap-3 sm:w-2/3 text-xs sm:text-sm">
                {/* 3000 TL Column */}
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-1.5 text-slate-600">
                  <span className="font-bold text-[10px] text-slate-400 block sm:hidden">3.000 TL:</span>
                  {row.pkg3000Icon === false ? (
                    <span className="flex items-center gap-1 text-slate-500">
                      <X className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span>{row.pkg3000}</span>
                    </span>
                  ) : (
                    <span>{row.pkg3000}</span>
                  )}
                </div>

                {/* 6000 TL Column */}
                <div className={`p-2 rounded-lg border flex items-center gap-1.5 ${
                  row.highlight6000 
                    ? 'bg-[#FFF5F4] border-[#FECDCA] text-[#EE5D50] font-semibold' 
                    : 'bg-blue-50/60 border-blue-100 text-[#0B2545]'
                }`}>
                  <span className="font-bold text-[10px] text-slate-400 block sm:hidden">6.000 TL:</span>
                  {row.pkg6000Icon ? (
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{row.pkg6000}</span>
                    </span>
                  ) : (
                    <span>{row.pkg6000}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
