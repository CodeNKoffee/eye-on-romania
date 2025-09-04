"use client";
import { useTranslations } from 'next-intl';
import Ribbon from '@/components/Ribbon';
import BusinessHero from '@/app/[locale]/business/components/BusinessHero';
import BusinessTypes from '@/app/[locale]/business/components/BusinessTypes';
import BusinessSteps from '@/app/[locale]/business/components/BusinessSteps';
import InvestmentGuide from '@/app/[locale]/business/components/InvestmentGuide';
import BusinessEssentials from '@/app/[locale]/business/components/BusinessEssentials';
import BusinessResources from '@/app/[locale]/business/components/BusinessResources';

export default function BusinessPage() {
  const t = useTranslations('businessPage');

  return (
    <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist">
      <Ribbon />
      <div className="container mx-auto px-6 py-12">
        <BusinessHero />

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist">
            <div className="text-2xl font-bold text-tricolor-blue mb-1">5-15</div>
            <div className="text-sm text-transylvanian-stone/70">{t('stats.setupDays')}</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist">
            <div className="text-2xl font-bold text-carpathian-forest mb-1">16%</div>
            <div className="text-sm text-transylvanian-stone/70">{t('stats.corporateTax')}</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist">
            <div className="text-2xl font-bold text-tricolor-red mb-1">EU</div>
            <div className="text-sm text-transylvanian-stone/70">{t('stats.marketAccess')}</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist">
            <div className="text-2xl font-bold text-tricolor-yellow mb-1">€200</div>
            <div className="text-sm text-transylvanian-stone/70">{t('stats.minCapital')}</div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <BusinessTypes />
          
          <BusinessSteps />
          
          <InvestmentGuide />
          
          <BusinessEssentials />
          
          <BusinessResources />
        </div>
      </div>
    </div>
  );
}
