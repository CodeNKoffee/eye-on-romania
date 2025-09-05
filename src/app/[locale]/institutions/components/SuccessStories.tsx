"use client";
import { useTranslations } from 'next-intl';

export default function SuccessStories() {
  const t = useTranslations('institutionsPage.partnerships');

  const stories = [
    {
      key: 'tourism',
      color: 'tricolor-blue',
      icon: (
        <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      key: 'education',
      color: 'carpathian-forest',
      icon: (
        <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      key: 'investment',
      color: 'tricolor-red',
      icon: (
        <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {stories.map((story) => (
          <div key={story.key} className="flex flex-col h-full p-4 sm:p-6 rounded-lg border border-danube-mist hover:shadow-md transition-all duration-300 bg-gray-50 touch-manipulation">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-tricolor-blue/10 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-tricolor-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-transylvanian-stone leading-tight">
                  {t(`potential.${story.key}.partner`)}
                </h3>
                <p className="text-xs sm:text-sm text-transylvanian-stone/70">
                  {t(`potential.${story.key}.type`)}
                </p>
              </div>
            </div>
            
            <blockquote className="text-xs sm:text-sm text-transylvanian-stone/80 italic leading-relaxed flex-grow">
              "{t(`potential.${story.key}.opportunity`)}"
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}
