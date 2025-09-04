"use client";
import { useTranslations } from 'next-intl';

export default function StudyEssentials() {
  const t = useTranslations('studyPage');

  const essentials = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: t('essentials.tuition.title'),
      description: t('essentials.tuition.desc'),
      color: 'text-tricolor-blue'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: t('essentials.language.title'),
      description: t('essentials.language.desc'),
      color: 'text-carpathian-forest'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: t('essentials.visa.title'),
      description: t('essentials.visa.desc'),
      color: 'text-tricolor-red'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: t('essentials.housing.title'),
      description: t('essentials.housing.desc'),
      color: 'text-tricolor-yellow'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-8 mb-8">
      <h2 className="text-2xl font-semibold text-transylvanian-stone mb-6 text-center">
        {t('essentials.title')}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {essentials.map((essential, index) => (
          <div key={index} className="flex gap-4">
            <div className={`flex-shrink-0 w-12 h-12 ${essential.color} bg-current/10 rounded-lg flex items-center justify-center`}>
              <div className={essential.color}>
                {essential.icon}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-transylvanian-stone mb-2">{essential.title}</h3>
              <p className="text-sm text-transylvanian-stone/70 leading-relaxed">{essential.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
