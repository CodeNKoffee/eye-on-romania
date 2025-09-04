"use client";
import { useTranslations } from 'next-intl';

export default function JobMarkets() {
  const t = useTranslations('workPage');

  const jobMarkets = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('jobMarkets.tech.title'),
      description: t('jobMarkets.tech.description'),
      averageSalary: t('jobMarkets.tech.averageSalary'),
      demand: t('jobMarkets.tech.demand'),
      color: 'text-tricolor-blue'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: t('jobMarkets.manufacturing.title'),
      description: t('jobMarkets.manufacturing.description'),
      averageSalary: t('jobMarkets.manufacturing.averageSalary'),
      demand: t('jobMarkets.manufacturing.demand'),
      color: 'text-carpathian-forest'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: t('jobMarkets.healthcare.title'),
      description: t('jobMarkets.healthcare.description'),
      averageSalary: t('jobMarkets.healthcare.averageSalary'),
      demand: t('jobMarkets.healthcare.demand'),
      color: 'text-tricolor-red'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: t('jobMarkets.finance.title'),
      description: t('jobMarkets.finance.description'),
      averageSalary: t('jobMarkets.finance.averageSalary'),
      demand: t('jobMarkets.finance.demand'),
      color: 'text-tricolor-yellow'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-8 mb-8">
      <h2 className="text-2xl font-semibold text-transylvanian-stone mb-6 text-center">
        {t('jobMarkets.title')}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {jobMarkets.map((market, index) => (
          <div key={index} className="flex gap-4 p-4 rounded-lg border border-danube-mist hover:shadow-sm transition-shadow">
            <div className={`flex-shrink-0 w-12 h-12 ${market.color} bg-current/10 rounded-lg flex items-center justify-center`}>
              <div className={market.color}>
                {market.icon}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-transylvanian-stone mb-2">{market.title}</h3>
              <p className="text-sm text-transylvanian-stone/70 mb-3">{market.description}</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="text-center p-2 bg-tricolor-blue/10 rounded">
                  <div className="font-medium text-tricolor-blue">{market.averageSalary}</div>
                  <div className="text-transylvanian-stone/60">Avg. Salary</div>
                </div>
                <div className="text-center p-2 bg-carpathian-forest/10 rounded">
                  <div className="font-medium text-carpathian-forest">{market.demand}</div>
                  <div className="text-transylvanian-stone/60">Demand</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
