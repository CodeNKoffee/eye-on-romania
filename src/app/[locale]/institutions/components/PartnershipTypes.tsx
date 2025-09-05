"use client";
import { useTranslations } from 'next-intl';

export default function PartnershipTypes() {
  const t = useTranslations('institutionsPage.partnershipTypes');

  const partnershipTypes = [
    {
      key: 'government',
      color: 'tricolor-blue',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      key: 'education',
      color: 'carpathian-forest',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      key: 'tourism',
      color: 'tricolor-red',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {partnershipTypes.map((partnership) => (
          <div key={partnership.key} className="flex flex-col h-full p-4 sm:p-6 rounded-lg border border-danube-mist hover:shadow-md transition-all duration-300 bg-gray-50 touch-manipulation">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-${partnership.color}/10 text-${partnership.color} rounded-lg mr-3 sm:mr-4`}>
                {partnership.icon}
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-transylvanian-stone leading-tight">
                {t(`types.${partnership.key}.title`)}
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-transylvanian-stone/70 mb-3 sm:mb-4 leading-relaxed">
              {t(`types.${partnership.key}.description`)}
            </p>
            
            <div className="flex-grow">
              <ul className="space-y-1 sm:space-y-2">
                {[0, 1, 2].map((index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-carpathian-forest mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">
                      {t(`types.${partnership.key}.benefits.${index}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
