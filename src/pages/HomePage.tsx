import React from 'react';
import { SITE_CONFIG } from '../data/config';
import { MetaHead } from '../components/MetaHead';
import { HomeHero } from '../components/home/HomeHero';
import { HomeNeedSplitter } from '../components/home/HomeNeedSplitter';
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
        {/* 1. Hero: Main Benefit Headline & Primary CTA */}
        <HomeHero />

        {/* 2. Need Splitter: Short-term vs Continuous */}
        <HomeNeedSplitter />

        {/* 3. Channels & Audience Statistics */}
        <HomeTrustBar />

        {/* 4. Weekly Packages (3.000 TL & 6.000 TL + Distinctive Box) */}
        <div>
          <HomeWeeklyPackages />
          {/* 5. Short Verified Package Comparison */}
          <HomePackageComparison />
        </div>

        {/* 6. Retargeting / Audience Infrastructure Section */}
        <div className="mt-12 sm:mt-16">
          <HomeRetargetingSection />
        </div>

        {/* 7. Publication Formats: How will your promotion look? */}
        <HomeShowcaseSection />

        {/* 8. Monthly Model Section */}
        <MonthlyBanner />

        {/* 9. Weekly FAQ */}
        <HomeFaq />

        {/* 10. Final CTA */}
        <HomeFinalCta />
      </main>
    </>
  );
};
