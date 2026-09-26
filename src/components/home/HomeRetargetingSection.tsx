import React from 'react';
import { Send, Users, RotateCcw, Lightbulb, ShieldCheck } from 'lucide-react';

export const HomeRetargetingSection: React.FC = () => {
  const steps = [
    {
      number: "1",
      icon: Send,
      title: "Tanıtımınız yayınlanır.",
      desc: "Etkinlik veya işletmeniz Ankara Çocuk Ağı kanallarında çocuklu ailelerle buluşur.",
    },
    {
      number: "2",
      icon: Users,
      title: "Etkileşimlerden işletmenize özel reklam kitlesi oluşur.",
      desc: "Duyurunuza tıklayan, inceleyen ve ilgi gösteren veliler güvenli altyapıda gruplanır.",
    },
    {
      number: "3",
      icon: RotateCcw,
      title: "Sonraki kampanyalarda bu kitleye yeniden reklam gösterilebilir.",
      desc: "Yeni bir duyurunuz olduğunda daha önce sizi fark etmiş ailelerin karşısına tekrar çıkılır.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#EE5D50] text-xs sm:text-sm font-extrabold uppercase tracking-wide">
            YENİDEN ULAŞMA ALTYAPISI
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B2545] tracking-tight">
            İlk tanıtımdaki ilgiyi sonraki duyuruda değerlendirin.
          </h2>

          <p className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed max-w-2xl mx-auto">
            Bir aile tanıtımınızı gördüğünde hemen karar vermeyebilir. İşletmenize özel oluşturduğumuz reklam kitlesi, sonraki kampanyalarda sizi daha önce fark etmiş kişilere yeniden seslenme imkânı sağlar.
          </p>
        </div>

        {/* 3 Simple Steps */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-slate-200/90 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#EE5D50] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-xs sm:text-sm font-black text-slate-600">
                      ADIM 0{step.number}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#0B2545] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-900 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Short Concrete Example Box */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-blue-200 shadow-2xs mb-5 flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Lightbulb className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div className="space-y-1">
            <div className="text-xs sm:text-sm font-extrabold text-[#0B2545] uppercase tracking-wide">
              Kısa Tanıtım Örneği
            </div>
            <p className="text-sm sm:text-base text-slate-950 font-semibold leading-relaxed">
              Örneğin: Bu haftaki atölye tanıtımınızla ilgilenen veya duyurunuzu inceleyen ailelere, sonraki haftalarda yeni atölyenizin veya etkinliğinizin reklamını tekrar gösterebiliriz.
            </p>
          </div>
        </div>

        {/* Explanatory Technical & Privacy Note */}
        <div className="flex items-start gap-2.5 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5 stroke-[2]" />
          <span>
            Bu reklam kitlesi Ankara Çocuk Ağı reklam altyapısında işletmenize özel olarak tutulur ve sonraki reklam çalışmalarında kullanılır; işletmeye kişi veya telefon listesi teslim edilmez. Sonraki reklam yayınları ayrıca planlanır.
          </span>
        </div>

      </div>
    </section>
  );
};
