"use client";
import { useTranslations } from 'next-intl';
import Ribbon from '@/components/Ribbon';
import WorkHero from '@/app/[locale]/work/components/WorkHero';
import WorkVisaTypes from '@/app/[locale]/work/components/WorkVisaTypes';
import JobMarkets from '@/app/[locale]/work/components/JobMarkets';
import WorkSteps from '@/app/[locale]/work/components/WorkSteps';
import WorkEssentials from '@/app/[locale]/work/components/WorkEssentials';
import WorkResources from '@/app/[locale]/work/components/WorkResources';

export default function WorkPage() {
  const t = useTranslations('workPage');

  return (
    <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist">
      <Ribbon />
      <div className="container mx-auto px-6 py-12">
        <WorkHero />

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist">
            <div className="text-2xl font-bold text-tricolor-blue mb-1">€1,200</div>
            <div className="text-sm text-transylvanian-stone/70">{t('stats.avgSalary')}</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist">
            <div className="text-2xl font-bold text-carpathian-forest mb-1">10%</div>
            <div className="text-sm text-transylvanian-stone/70">{t('stats.incomeTax')}</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist">
            <div className="text-2xl font-bold text-tricolor-red mb-1">EU</div>
            <div className="text-sm text-transylvanian-stone/70">{t('stats.workRights')}</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist">
            <div className="text-2xl font-bold text-tricolor-yellow mb-1">30-90</div>
            <div className="text-sm text-transylvanian-stone/70">{t('stats.processTime')}</div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <WorkVisaTypes />
          
          <JobMarkets />
          
          <WorkSteps />
          
          <WorkEssentials />
          
          <WorkResources />
        </div>
      </div>
    </div>
  );
}
