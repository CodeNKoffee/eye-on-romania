"use client";
import { useTranslations } from 'next-intl';

export default function WorkEssentials() {
  const t = useTranslations('workPage');

  const essentials = [
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: t('essentials.workPermit.title'),
      description: t('essentials.workPermit.description'),
      color: 'text-tricolor-blue'
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: t('essentials.taxation.title'),
      description: t('essentials.taxation.description'),
      color: 'text-carpathian-forest'
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t('essentials.socialSecurity.title'),
      description: t('essentials.socialSecurity.description'),
      color: 'text-tricolor-red'
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
        </svg>
      ),
      title: t('essentials.recognition.title'),
      description: t('essentials.recognition.description'),
      color: 'text-tricolor-yellow'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-transylvanian-stone mb-4 sm:mb-6 text-center">
        {t('essentials.title')}
      </h2>
      <p className="text-center text-sm sm:text-base text-transylvanian-stone/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
        {t('essentials.description')}
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {essentials.map((essential, index) => (
          <div key={index} className="flex gap-3 sm:gap-4">
            <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 ${essential.color} bg-current/10 rounded-lg flex items-center justify-center`}>
              <div className={essential.color}>
                {essential.icon}
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-transylvanian-stone mb-2 text-sm sm:text-base">{essential.title}</h3>
              <p className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">{essential.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
