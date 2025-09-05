"use client";
import { useTranslations } from 'next-intl';
import Ribbon from '@/components/Ribbon';
import InstitutionsHero from './components/InstitutionsHero';
import PartnershipTypes from './components/PartnershipTypes';
import PartnershipServices from './components/PartnershipServices';
import PartnershipBenefits from './components/PartnershipBenefits';
import InstitutionContact from './components/InstitutionContact';
import SuccessStories from './components/SuccessStories';

export default function InstitutionsPage() {
  const t = useTranslations('institutionsPage');

  return (
    <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist">
      <Ribbon />
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <InstitutionsHero />

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-4xl mx-auto">
          <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist hover:bg-white/70 transition-colors touch-manipulation">
            <div className="text-xl sm:text-2xl font-bold text-tricolor-blue mb-1 sm:mb-2">{t('stats.coverage')}</div>
            <div className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">{t('stats.coverageLabel')}</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist hover:bg-white/70 transition-colors touch-manipulation">
            <div className="text-xl sm:text-2xl font-bold text-carpathian-forest mb-1 sm:mb-2">{t('stats.sources')}</div>
            <div className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">{t('stats.sourcesLabel')}</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist hover:bg-white/70 transition-colors touch-manipulation">
            <div className="text-xl sm:text-2xl font-bold text-tricolor-red mb-1 sm:mb-2">{t('stats.languages')}</div>
            <div className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">{t('stats.languagesLabel')}</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist hover:bg-white/70 transition-colors touch-manipulation">
            <div className="text-xl sm:text-2xl font-bold text-tricolor-yellow mb-1 sm:mb-2">Active</div>
            <div className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">Development</div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <PartnershipTypes />
          <PartnershipServices />
          <PartnershipBenefits />
          <SuccessStories />
          <InstitutionContact />
        </div>
      </div>
    </div>
  );
}
