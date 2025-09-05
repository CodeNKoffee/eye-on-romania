"use client";
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function WorkResources() {
  const t = useTranslations('workPage');

  const resources = [
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6m0 0v6m0-6H8m0 0V6m0 0v6m0 6v2a2 2 0 002 2h4a2 2 0 002-2v-2m0 0V12m0 0H8m0 0v6" />
        </svg>
      ),
      title: t('resources.ajofm.title'),
      description: t('resources.ajofm.description'),
      link: "https://www.anofm.ro",
      linkText: t('resources.ajofm.link')
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: t('resources.igi.title'),
      description: t('resources.igi.description'),
      link: "https://igi.mai.gov.ro",
      linkText: t('resources.igi.link')
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      title: t('resources.eures.title'),
      description: t('resources.eures.description'),
      link: "https://eures.anofm.ro",
      linkText: t('resources.eures.link')
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-transylvanian-stone mb-4 sm:mb-6 text-center">
        {t('resources.title')}
      </h2>
      <p className="text-center text-sm sm:text-base text-transylvanian-stone/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
        {t('resources.description')}
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="flex flex-col h-full p-4 sm:p-6 rounded-lg border border-danube-mist hover:shadow-md active:shadow-sm transition-shadow touch-manipulation">
            <div className="w-10 h-10 sm:w-12 sm:h-12 text-tricolor-blue bg-tricolor-blue/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              {resource.icon}
            </div>
            <h3 className="font-semibold text-transylvanian-stone mb-2 text-sm sm:text-base">{resource.title}</h3>
            <p className="text-xs sm:text-sm text-transylvanian-stone/70 mb-3 sm:mb-4 flex-grow leading-relaxed">{resource.description}</p>
            <Link 
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-tricolor-blue hover:text-tricolor-blue/80 active:text-tricolor-blue/90 font-medium text-xs sm:text-sm group mt-auto touch-manipulation"
            >
              {resource.linkText}
              <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
