import React from 'react';
import { PROCESS_STEPS } from '../data/landingData';

export const ProcessSteps: React.FC = () => {
  return (
    <section id="nasil-ilerliyor" className="py-20 sm:py-28 bg-white scroll-mt-16 border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase">
            ÇALIŞMA MODELİMİZ
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            İlk Mesajdan Devam Planına
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-normal">
            Her müşteri aynı pakete yönlendirilmez. Amacınıza, sektörünüze ve mevcut dijital hazırlığınıza göre ilerleriz.
          </p>
        </div>

        {/* 8-Step Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="relative bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-blue-600 group-hover:scale-110 transition-transform">
                    {step.stepNumber}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
