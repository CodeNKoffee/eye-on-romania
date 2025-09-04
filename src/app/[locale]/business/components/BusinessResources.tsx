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
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-8 mb-8">
      <h2 className="text-2xl font-semibold text-transylvanian-stone mb-6 text-center">
        {t('resources.title')}
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="p-6 rounded-lg border border-danube-mist hover:shadow-md transition-shadow">
            <div className="w-12 h-12 text-tricolor-blue bg-tricolor-blue/10 rounded-lg flex items-center justify-center mb-4">
              {resource.icon}
            </div>
            <h3 className="font-semibold text-transylvanian-stone mb-2">{resource.title}</h3>
            <p className="text-sm text-transylvanian-stone/70 mb-4">{resource.description}</p>
            <Link 
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-tricolor-blue hover:text-tricolor-blue/80 font-medium text-sm group"
            >
              {resource.linkText}
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
