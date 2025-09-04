"use client";
import { useTranslations } from 'next-intl';

export default function InvestmentGuide() {
  const t = useTranslations('businessPage');

  const investmentOpportunities = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('investment.tech.title'),
      description: t('investment.tech.description'),
      incentives: t('investment.tech.incentives'),
      color: 'text-tricolor-blue'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: t('investment.manufacturing.title'),
      description: t('investment.manufacturing.description'),
      incentives: t('investment.manufacturing.incentives'),
      color: 'text-carpathian-forest'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('investment.energy.title'),
      description: t('investment.energy.description'),
      incentives: t('investment.energy.incentives'),
      color: 'text-tricolor-yellow'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l-3-9" />
        </svg>
      ),
      title: t('investment.agriculture.title'),
      description: t('investment.agriculture.description'),
      incentives: t('investment.agriculture.incentives'),
      color: 'text-tricolor-red'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-8 mb-8">
      <h2 className="text-2xl font-semibold text-transylvanian-stone mb-6 text-center">
        {t('investment.title')}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {investmentOpportunities.map((opportunity, index) => (
          <div key={index} className="flex gap-4 p-4 rounded-lg border border-danube-mist hover:shadow-sm transition-shadow">
            <div className={`flex-shrink-0 w-12 h-12 ${opportunity.color} bg-current/10 rounded-lg flex items-center justify-center`}>
              <div className={opportunity.color}>
                {opportunity.icon}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-transylvanian-stone mb-2">{opportunity.title}</h3>
              <p className="text-sm text-transylvanian-stone/70 mb-2">{opportunity.description}</p>
              <div className="text-xs text-tricolor-blue bg-tricolor-blue/10 px-2 py-1 rounded inline-block">
                {opportunity.incentives}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
