"use client";
import { useTranslations } from 'next-intl';

export default function WorkVisaTypes() {
  const t = useTranslations('workPage');

  const getVisaStyles = (color: string) => {
    switch (color) {
      case 'tricolor-blue':
        return 'bg-tricolor-blue/10 text-tricolor-blue';
      case 'carpathian-forest':
        return 'bg-carpathian-forest/10 text-carpathian-forest';
      case 'tricolor-red':
        return 'bg-tricolor-red/10 text-tricolor-red';
      case 'tricolor-yellow':
        return 'bg-tricolor-yellow/20 text-tricolor-yellow';
      default:
        return 'bg-tricolor-blue/10 text-tricolor-blue';
    }
  };

  const visaTypes = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6m0 0v6m0-6H8m0 0V6m0 0v6m0 6v2a2 2 0 002 2h4a2 2 0 002-2v-2m0 0V12m0 0H8m0 0v6" />
        </svg>
      ),
      title: t('visaTypes.temporary.title'),
      description: t('visaTypes.temporary.description'),
      duration: t('visaTypes.temporary.duration'),
      requirements: t('visaTypes.temporary.requirements'),
      color: 'tricolor-blue'
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: t('visaTypes.seasonal.title'),
      description: t('visaTypes.seasonal.description'),
      duration: t('visaTypes.seasonal.duration'),
      requirements: t('visaTypes.seasonal.requirements'),
      color: 'carpathian-forest'
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('visaTypes.longTerm.title'),
      description: t('visaTypes.longTerm.description'),
      duration: t('visaTypes.longTerm.duration'),
      requirements: t('visaTypes.longTerm.requirements'),
      color: 'tricolor-red'
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('visaTypes.blueCard.title'),
      description: t('visaTypes.blueCard.description'),
      duration: t('visaTypes.blueCard.duration'),
      requirements: t('visaTypes.blueCard.requirements'),
      color: 'tricolor-yellow'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-transylvanian-stone mb-4 sm:mb-6 text-center">
        {t('visaTypes.title')}
      </h2>
      <p className="text-center text-sm sm:text-base text-transylvanian-stone/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
        {t('visaTypes.description')}
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {visaTypes.map((visa, index) => (
          <div key={index} className="p-4 sm:p-6 rounded-lg border border-danube-mist hover:shadow-md active:shadow-sm transition-shadow touch-manipulation">
            <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${getVisaStyles(visa.color)} rounded-lg mb-3 sm:mb-4`}>
              {visa.icon}
            </div>
            <h3 className="font-semibold text-transylvanian-stone mb-2 text-sm sm:text-base">{visa.title}</h3>
            <p className="text-xs sm:text-sm text-transylvanian-stone/70 mb-3 sm:mb-4 leading-relaxed">{visa.description}</p>
            
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-transylvanian-stone/60 font-medium">Duration:</span>
                <span className="font-medium text-transylvanian-stone">{visa.duration}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-transylvanian-stone/60 font-medium">Requirements:</span>
                <span className="font-medium text-transylvanian-stone">{visa.requirements}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
