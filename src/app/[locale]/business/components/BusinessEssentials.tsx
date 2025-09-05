"use client";
import { useTranslations } from 'next-intl';

export default function BusinessEssentials() {
  const t = useTranslations('businessPage');

  const essentials = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: t('essentials.registration.title'),
      description: t('essentials.registration.description'),
      color: 'text-tricolor-blue'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: t('essentials.taxes.title'),
      description: t('essentials.taxes.description'),
      color: 'text-carpathian-forest'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: t('essentials.banking.title'),
      description: t('essentials.banking.description'),
      color: 'text-tricolor-red'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('essentials.euAccess.title'),
      description: t('essentials.euAccess.description'),
      color: 'text-tricolor-yellow'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-transylvanian-stone mb-4 sm:mb-6 text-center">
        {t('essentials.title')}
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {essentials.map((essential, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-3 sm:gap-4 touch-manipulation">
            <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 ${essential.color} bg-current/10 rounded-lg flex items-center justify-center self-start sm:self-auto`}>
              <div className={`${essential.color} w-5 h-5 sm:w-6 sm:h-6`}>
                {essential.icon}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-transylvanian-stone mb-2 text-sm sm:text-base leading-tight">{essential.title}</h3>
              <p className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">{essential.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
