import React from 'react';
import { Users, Share2, Target, BarChart3 } from 'lucide-react';

export const HomeTrustBar: React.FC = () => {
  const items = [
    { title: 'Organik Ankara aile kitlesi', icon: Users },
    { title: 'Çok kanallı dağıtım', icon: Share2 },
    { title: 'Meta reklam desteği', icon: Target },
    { title: 'Ölçülebilir sonuç özeti', icon: BarChart3 },
  ];

  return (
    <div className="border-y border-slate-200/90 bg-white py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-slate-50 sm:bg-transparent border border-slate-100 sm:border-none"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight leading-tight">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
