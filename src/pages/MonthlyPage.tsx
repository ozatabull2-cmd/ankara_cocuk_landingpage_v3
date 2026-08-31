import React from 'react';
import { SITE_CONFIG } from '../data/config';
import { MetaHead } from '../components/MetaHead';
import { MonthlyHero } from '../components/monthly/MonthlyHero';
import { MonthlyModelsSection } from '../components/monthly/MonthlyModelsSection';
import { DataOwnershipComparison } from '../components/monthly/DataOwnershipComparison';
import { MonthlyBioLink } from '../components/monthly/MonthlyBioLink';
import { MonthlyProcess } from '../components/monthly/MonthlyProcess';
import { MonthlyFaq } from '../components/monthly/MonthlyFaq';
import { MonthlyFinalCta } from '../components/monthly/MonthlyFinalCta';

export const MonthlyPage: React.FC = () => {
  return (
    <>
      <MetaHead
        title={SITE_CONFIG.seo.monthly.title}
        description={SITE_CONFIG.seo.monthly.description}
      />

      <main className="flex-grow">
        {/* 1. Monthly Hero */}
        <MonthlyHero />

        {/* 2. Monthly Models (20.000 TL & 25.000 TL) */}
        <MonthlyModelsSection />

        {/* 3. Data Ownership Comparison Matrix */}
        <DataOwnershipComparison />

        {/* 4. BioLink Pro Section */}
        <MonthlyBioLink />

        {/* 5. 8-Step Working Process */}
        <MonthlyProcess />

        {/* 6. Monthly FAQ (6 Questions) */}
        <MonthlyFaq />

        {/* 7. Monthly Final CTA */}
        <MonthlyFinalCta />
      </main>
    </>
  );
};
