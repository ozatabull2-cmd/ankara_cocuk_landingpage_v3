import React from 'react';
import { Database, ShieldCheck, Check } from 'lucide-react';

export const DataOwnershipComparison: React.FC = () => {
  return (
    <section id="veri-sahipligi" className="py-14 sm:py-20 bg-[#0B1220] text-white border-t border-slate-800 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-bold tracking-wide uppercase">
            <Database className="w-3.5 h-3.5" />
            STRATEJİK FARK
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            İki model arasındaki temel fark: veri sahipliği
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Hangi modelin işletmenizin uzun vadeli dijital varlık stratejisine uygun olduğunu karşılaştırın.
          </p>
        </div>

        {/* 2 Comparative Cards */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          
          {/* 20.000 TL Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  20.000 TL Modeli
                </span>
                <span className="text-[11px] bg-blue-950 text-blue-300 px-2.5 py-0.5 rounded-full border border-blue-800/60 font-semibold">
                  Medya Ağı Altyapısı
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Ankara Çocuk Ağı Reklam Hesabı
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ankara Çocuk Ağı reklam altyapısını kullanırsınız. Hedef kitle ve kampanya verileri medya ağı altyapısında kalır. Planlanan reklam bütçesi çalışma öncesinde netleştirilerek tarafımızdan karşılanır.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-300">
                <Check className="w-3.5 h-3.5 text-blue-400" />
                <span>Tek bütçe ile tüm süreç dahil</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Check className="w-3.5 h-3.5 text-blue-400" />
                <span>Hızlı kurulum ve yönetim</span>
              </div>
            </div>
          </div>

          {/* 25.000 TL Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-cyan-500/40 flex flex-col justify-between space-y-4 shadow-lg shadow-cyan-950/20">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  25.000 TL Modeli
                </span>
                <span className="text-[11px] bg-cyan-950 text-cyan-300 px-2.5 py-0.5 rounded-full border border-cyan-800/60 font-semibold">
                  Okula Ait Altyapı
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Kuruma Ait Meta Reklam Hesabı
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Okulunuza ait reklam hesabı ve hedef kitle altyapısı oluşturulur. Reklam geçmişi ve hedef kitleler okulda kalır. Meta reklam bütçesini okul ayrıca öder.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-300">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>Kalıcı veli kitle veritabanı</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>Okulun kendi mülkiyetinde reklam hesabı</span>
              </div>
            </div>
          </div>

        </div>

        {/* Decision Helper Box */}
        <div className="mt-8 bg-slate-900/95 border border-slate-800 rounded-2xl p-5 sm:p-6 flex items-start gap-3.5">
          <div className="p-2 rounded-xl bg-blue-950 text-blue-400 border border-blue-800/60 flex-shrink-0 mt-0.5">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-blue-400 uppercase tracking-wide mb-1">
              Hızlı Karar Yardımı
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Daha ekonomik ve hızlı sürekli görünürlük için <strong className="text-white">20.000 TL modeli</strong>; okulunuza ait kalıcı reklam altyapısı için <strong className="text-white">25.000 TL modeli</strong> daha uygundur.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
