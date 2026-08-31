import React, { useState } from 'react';
import { WEEKLY_FAQS, trackEvent } from '../../data/config';
import { ChevronDown } from 'lucide-react';

export const HomeFaq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(WEEKLY_FAQS[0].id);

  const toggleFaq = (id: string) => {
    const nextState = openId === id ? null : id;
    if (nextState) {
      trackEvent('open_faq', { faq_id: id, page: 'home' });
    }
    setOpenId(nextState);
  };

  return (
    <section id="sss" className="py-14 sm:py-20 bg-white scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase">
            MERAK EDİLENLER
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Sık Sorulan Sorular
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Haftalık tanıtım paketleriyle ilgili merak edilen temel konular.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3.5">
          {WEEKLY_FAQS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {item.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-150 ${
                    isOpen ? 'bg-blue-100 text-blue-700 rotate-180' : 'bg-slate-200/70 text-slate-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
