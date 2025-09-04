"use client";
import { useTranslations } from 'next-intl';

export default function SuccessStories() {
  const t = useTranslations('institutionsPage.testimonials');

  const stories = [
    {
      key: 'tourism',
      color: 'tricolor-blue',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      key: 'education',
      color: 'carpathian-forest',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      key: 'investment',
      color: 'tricolor-red',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
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
      
      <div className="grid lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <div key={story.key} className="p-6 rounded-lg border border-danube-mist hover:shadow-md transition-shadow bg-gray-50">
            <div className="flex items-center mb-4">
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-${story.color}/10 text-${story.color} rounded-lg mr-4`}>
                {story.icon}
              </div>
              <div>
                <h3 className="font-semibold text-transylvanian-stone">
                  {t(`stories.${story.key}.author`)}
                </h3>
                <p className="text-sm text-transylvanian-stone/70">
                  {t(`stories.${story.key}.role`)}
                </p>
              </div>
            </div>
            
            <blockquote className="text-transylvanian-stone/80 italic leading-relaxed">
              "{t(`stories.${story.key}.quote`)}"
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}
