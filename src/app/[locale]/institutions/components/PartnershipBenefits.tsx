"use client";
import { useTranslations } from 'next-intl';

export default function PartnershipBenefits() {
  const t = useTranslations('institutionsPage.benefits');

  const benefits = [
    {
      key: 'credibility',
      icon: (
        <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'tricolor-blue'
    },
    {
      key: 'reach',
      icon: (
        <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      color: 'carpathian-forest'
    },
    {
      key: 'expertise',
      icon: (
        <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: 'tricolor-red'
    },
    {
      key: 'efficiency',
      icon: (
        <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'tricolor-yellow'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-transylvanian-stone mb-3 sm:mb-4">
          {t('title')}
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-transylvanian-stone/80 max-w-3xl mx-auto leading-relaxed">
          {t('description')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {benefits.map((benefit) => {
          // Define explicit classes for each benefit type
          const getIconClasses = (key: string) => {
            switch (key) {
              case 'credibility':
                return 'bg-tricolor-blue/10 text-tricolor-blue';
              case 'reach':
                return 'bg-carpathian-forest/10 text-carpathian-forest';
              case 'expertise':
                return 'bg-tricolor-red/10 text-tricolor-red';
              case 'efficiency':
                return 'bg-tricolor-yellow/10 text-tricolor-yellow';
              default:
                return 'bg-tricolor-blue/10 text-tricolor-blue';
            }
          };

          return (
            <div key={benefit.key} className="flex flex-col h-full p-4 sm:p-6 rounded-lg border border-danube-mist hover:shadow-md transition-all duration-300 bg-gray-50 text-center touch-manipulation">
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 ${getIconClasses(benefit.key)} rounded-lg mb-3 sm:mb-4 mx-auto`}>
                {benefit.icon}
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-transylvanian-stone mb-2 leading-tight">
                {t(`items.${benefit.key}.title`)}
              </h3>
              <p className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed flex-grow">
                {t(`items.${benefit.key}.description`)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
