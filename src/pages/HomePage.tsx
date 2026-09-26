import React from 'react';
import { SITE_CONFIG } from '../data/config';
import { MetaHead } from '../components/MetaHead';
import { HomeHero } from '../components/home/HomeHero';
import { HomeTrustBar } from '../components/home/HomeTrustBar';
import { HomeWeeklyPackages } from '../components/home/HomeWeeklyPackages';
import { HomePackageComparison } from '../components/home/HomePackageComparison';
import { HomeRetargetingSection } from '../components/home/HomeRetargetingSection';
import { HomeShowcaseSection } from '../components/home/HomeShowcaseSection';
import { MonthlyBanner } from '../components/home/MonthlyBanner';
import { HomeFaq } from '../components/home/HomeFaq';
import { HomeFinalCta } from '../components/home/HomeFinalCta';

export const HomePage: React.FC = () => {
  return (
    <>
      <MetaHead
        title={SITE_CONFIG.seo.home.title}
        description={SITE_CONFIG.seo.home.description}
      />
      
      <main className="flex-grow">
        {/* 1. Ana Başlık & WhatsApp Butonu */}
        <HomeHero />

        {/* 2. Kısa Yayın Ağı Bilgisi */}
        <HomeTrustBar />

        {/* 3. Haftalık Paketler (3.000 TL & 6.000 TL) */}
        <HomeWeeklyPackages />

        {/* 4. Karşılaştırma */}
        <HomePackageComparison />

        {/* 5. Yeniden Ulaşma Açıklaması ve Örneği */}
        <HomeRetargetingSection />

        {/* 6. Tanıtım Formatları / Örneği */}
        <HomeShowcaseSection />

        {/* 7. SSS */}
        <HomeFaq />

        {/* 8. Ana WhatsApp Çağrısı */}
        <HomeFinalCta />

        {/* 9. Küçük Aylık Çalışma Alanı */}
        <MonthlyBanner />
      </main>
    </>
  );
};
