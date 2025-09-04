"use client";
import { useTranslations } from 'next-intl';

export default function PartnershipServices() {
  const t = useTranslations('institutionsPage.services');

  const services = [
    {
      key: 'consulting',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9z" />
        </svg>
      ),
      color: 'tricolor-blue'
    },
    {
      key: 'translation',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      color: 'carpathian-forest'
    },
    {
      key: 'data',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: 'tricolor-red'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-8 mb-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-transylvanian-stone mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-transylvanian-stone/80 max-w-3xl mx-auto">
          {t('description')}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.key} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300">
            <div className="text-center mb-6">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-${service.color}/10 text-${service.color} rounded-lg mb-4`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-bold text-${service.color} mb-3`}>
                {t(`offerings.${service.key}.title`)}
              </h3>
              <p className="text-transylvanian-stone/80 mb-4">
                {t(`offerings.${service.key}.description`)}
              </p>
            </div>

            <div className="space-y-3">
              {[0, 1, 2].map((index) => (
                <div key={index} className="flex items-center text-sm">
                  <div className={`w-2 h-2 bg-${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                  <span className="text-transylvanian-stone/80">
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
