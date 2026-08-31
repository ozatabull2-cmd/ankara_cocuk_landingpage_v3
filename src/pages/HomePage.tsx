import React from 'react';
import { SITE_CONFIG } from '../data/config';
import { MetaHead } from '../components/MetaHead';
import { HomeHero } from '../components/home/HomeHero';
import { HomeTrustBar } from '../components/home/HomeTrustBar';
import { HomeWeeklyPackages } from '../components/home/HomeWeeklyPackages';
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
        {/* 1. Hero: Main Headline & CTA */}
        <HomeHero />

        {/* 2. Trust Bar: 5 Multi-Channel Audience Cards */}
        <HomeTrustBar />

        {/* 3. Weekly Packages: 3.000 TL & 6.000 TL */}
        <HomeWeeklyPackages />

        {/* 4. Monthly Model Banner */}
        <MonthlyBanner />

        {/* 6. Weekly FAQ */}
        <HomeFaq />

        {/* 7. Final CTA */}
        <HomeFinalCta />
      </main>
    </>
  );
};
