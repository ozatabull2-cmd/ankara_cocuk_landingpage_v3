import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VisibilityBar } from './components/VisibilityBar';
import { Philosophy } from './components/Philosophy';
import { WeeklyPackages } from './components/WeeklyPackages';
import { MonthlyModels } from './components/MonthlyModels';
import { BioLinkSection } from './components/BioLinkSection';
import { ProcessSteps } from './components/ProcessSteps';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans antialiased">
      {/* 1. Üst Menü */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Alanı */}
        <Hero />

        {/* 3. Çok Kanallı Görünürlük Şeridi */}
        <VisibilityBar />

        {/* 4. Hizmet Yaklaşımı */}
        <Philosophy />

        {/* 5. Haftalık Paketler */}
        <WeeklyPackages />

        {/* 6. Aylık Çalışma Modelleri & 7. Veri Sahipliği Açıklaması */}
        <MonthlyModels />

        {/* 8. BioLink Pro Bölümü */}
        <BioLinkSection />

        {/* 9. Sekiz Aşamalı Çalışma Süreci */}
        <ProcessSteps />

        {/* 10. Sık Sorulan Sorular */}
        <FaqSection />

        {/* 11. Son CTA */}
        <FinalCta />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}

export default App;
