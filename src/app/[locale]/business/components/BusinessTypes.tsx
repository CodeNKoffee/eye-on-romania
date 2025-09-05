"use client";
import { useTranslations } from 'next-intl';

export default function BusinessTypes() {
  const t = useTranslations('businessPage');

  const businessTypes = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: t('types.srl.title'),
      description: t('types.srl.description'),
      minCapital: t('types.srl.minCapital'),
      timeframe: t('types.srl.setupTime'),
      color: 'tricolor-blue'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: t('types.pfa.title'),
      description: t('types.pfa.description'),
      minCapital: t('types.pfa.minCapital'),
      timeframe: t('types.pfa.setupTime'),
      color: 'carpathian-forest'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('types.sa.title'),
      description: t('types.sa.description'),
      minCapital: t('types.sa.minCapital'),
      timeframe: t('types.sa.setupTime'),
      color: 'tricolor-red'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-transylvanian-stone mb-4 sm:mb-6 text-center">
        {t('types.title')}
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {businessTypes.map((type, index) => (
          <div key={index} className="p-4 sm:p-6 rounded-lg border border-danube-mist hover:shadow-md transition-all duration-200 touch-manipulation active:scale-[0.98]">
            <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-${type.color}/10 text-${type.color} rounded-lg mb-3 sm:mb-4`}>
              <div className="w-6 h-6 sm:w-8 sm:h-8">
                {type.icon}
              </div>
            </div>
            <h3 className="font-semibold text-transylvanian-stone mb-2 text-sm sm:text-base">{type.title}</h3>
            <p className="text-xs sm:text-sm text-transylvanian-stone/70 mb-3 sm:mb-4 leading-relaxed">{type.description}</p>
            
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2">
                <span className="text-transylvanian-stone/60 font-medium">Min. Capital:</span>
                <span className="font-semibold text-transylvanian-stone sm:text-right">{type.minCapital}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2">
                <span className="text-transylvanian-stone/60 font-medium">Setup Time:</span>
                <span className="font-semibold text-transylvanian-stone sm:text-right">{type.timeframe}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
