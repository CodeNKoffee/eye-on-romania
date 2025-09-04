"use client";
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function StudyPathways() {
  const t = useTranslations('studyPage');

  const pathways = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: t('pathways.undergraduate.title'),
      description: t('pathways.undergraduate.desc'),
      duration: t('pathways.undergraduate.duration'),
      color: 'tricolor-blue'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: t('pathways.graduate.title'),
      description: t('pathways.graduate.desc'),
      duration: t('pathways.graduate.duration'),
      color: 'carpathian-forest'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: t('pathways.doctorate.title'),
      description: t('pathways.doctorate.desc'),
      duration: t('pathways.doctorate.duration'),
      color: 'tricolor-red'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-8 mb-8">
      <h2 className="text-2xl font-semibold text-transylvanian-stone mb-6 text-center">
        {t('pathways.title')}
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {pathways.map((pathway, index) => (
          <div key={index} className="text-center p-6 rounded-lg border border-danube-mist hover:shadow-md transition-shadow flex flex-col h-full">
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-${pathway.color}/10 text-${pathway.color} rounded-lg mb-4 mx-auto`}>
              {pathway.icon}
            </div>
            <h3 className="font-semibold text-transylvanian-stone mb-2">{pathway.title}</h3>
            <p className="text-sm text-transylvanian-stone/70 mb-3 flex-grow">{pathway.description}</p>
            <div className="text-xs text-tricolor-blue font-medium bg-tricolor-blue/10 px-3 py-1 rounded-full inline-block mt-auto">
              {pathway.duration}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link 
          href="/visa" 
          className="inline-flex items-center px-6 py-3 bg-tricolor-blue text-white rounded-lg hover:bg-tricolor-blue/90 transition-colors font-medium"
        >
          {t('pathways.visaInfo')}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
