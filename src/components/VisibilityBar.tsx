import React from 'react';
import { Users, Share2, Target, BarChart3 } from 'lucide-react';

export const VisibilityBar: React.FC = () => {
  const items = [
    {
      title: 'Organik Ankara aile kitlesi',
      icon: Users,
    },
    {
      title: 'Çok kanallı dağıtım',
      icon: Share2,
    },
    {
      title: 'Meta reklam desteği',
      icon: Target,
    },
    {
      title: 'Ölçülebilir ilk sinyaller',
      icon: BarChart3,
    },
  ];

  return (
    <div className="border-y border-slate-200/90 bg-white shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 px-3 py-2 rounded-xl bg-slate-50/60 lg:bg-transparent border border-slate-100 lg:border-none"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-slate-800 tracking-tight">
                    {item.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
