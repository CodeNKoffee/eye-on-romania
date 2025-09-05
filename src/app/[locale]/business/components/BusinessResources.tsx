"use client";
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function BusinessResources() {
  const t = useTranslations('businessPage');

  const resources = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: t('resources.onrc.title'),
      description: t('resources.onrc.description'),
      link: "https://www.onrc.ro",
      linkText: t('resources.onrc.link')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: t('resources.anaf.title'),
      description: t('resources.anaf.description'),
      link: "https://www.anaf.ro",
      linkText: t('resources.anaf.link')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: t('resources.investRomania.title'),
      description: t('resources.investRomania.description'),
      link: "https://www.investromania.gov.ro",
      linkText: t('resources.investRomania.link')
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-transylvanian-stone mb-4 sm:mb-6 text-center">
        {t('resources.title')}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="flex flex-col h-full p-4 sm:p-6 rounded-lg border border-danube-mist hover:shadow-md transition-all duration-200 touch-manipulation active:scale-[0.98]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 text-tricolor-blue bg-tricolor-blue/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6">
                {resource.icon}
              </div>
            </div>
            <h3 className="font-semibold text-transylvanian-stone mb-2 text-sm sm:text-base leading-tight">{resource.title}</h3>
            <p className="text-xs sm:text-sm text-transylvanian-stone/70 mb-3 sm:mb-4 flex-grow leading-relaxed">{resource.description}</p>
            <Link 
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-tricolor-blue hover:text-tricolor-blue/80 active:text-tricolor-blue/90 font-medium text-xs sm:text-sm group mt-auto transition-all duration-200 touch-manipulation"
            >
              <span className="truncate">{resource.linkText}</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 flex-shrink-0 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
