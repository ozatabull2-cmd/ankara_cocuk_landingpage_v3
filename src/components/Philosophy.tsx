import { SearchCheck, Layers } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase">
            PAYLAŞIMDAN DAHA FAZLASI
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            İnsanların sizi görmesi başlangıçtır.{' '}
            <span className="text-blue-600">
              Asıl değer, doğru kişilerin sizi yeniden hatırlamasıdır.
            </span>
          </h2>
        </div>

        {/* Narrative & Principles Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Card 1 */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Çok Kanallı Görünürlük Sistemi
            </h3>
            <p className="text-slate-700 text-base leading-relaxed">
              Tanıtım çalışmasını tek bir gönderi olarak değil, hedef kitlenin farklı kanallarda markanızla karşılaştığı bir görünürlük sistemi olarak kurguluyoruz.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-700 mb-5">
              <SearchCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Şeffaf ve Gerçekçi Değerlendirme
            </h3>
            <p className="text-slate-700 text-base leading-relaxed">
              Kayıt veya satış garantisi vermiyoruz. Kampanyanın dağıtımını, aldığı ilk ilgiyi ve dönüşümü sınırlayabilecek noktaları birlikte değerlendiriyoruz.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
