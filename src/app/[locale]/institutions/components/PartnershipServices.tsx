"use client";
import { useTranslations } from 'next-intl';

export default function PartnershipServices() {
  const t = useTranslations('institutionsPage.services');

  const services = [
    {
      key: 'consulting',
      icon: (
        <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9z" />
        </svg>
      ),
      color: 'tricolor-blue'
    },
    {
      key: 'translation',
      icon: (
        <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      color: 'carpathian-forest'
    },
    {
      key: 'data',
      icon: (
        <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: 'tricolor-red'
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {services.map((service) => (
          <div key={service.key} className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-md transition-all duration-300 touch-manipulation">
            <div className="text-center mb-4 sm:mb-6">
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-${service.color}/10 text-${service.color} rounded-lg mb-3 sm:mb-4`}>
                {service.icon}
              </div>
              <h3 className={`text-base sm:text-lg lg:text-xl font-bold text-${service.color} mb-2 sm:mb-3 leading-tight`}>
                {t(`offerings.${service.key}.title`)}
              </h3>
              <p className="text-xs sm:text-sm text-transylvanian-stone/80 mb-3 sm:mb-4 leading-relaxed">
                {t(`offerings.${service.key}.description`)}
              </p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {[0, 1, 2].map((index) => (
                <div key={index} className="flex items-start text-xs sm:text-sm">
                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-${service.color} rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-2`}></div>
                  <span className="text-transylvanian-stone/80 leading-relaxed">
                    {t(`offerings.${service.key}.features.${index}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
