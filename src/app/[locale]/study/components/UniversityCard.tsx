"use client";
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface University {
  id: string;
  name: string;
  city: string;
  type: string;
  founded: number;
  degrees: string[];
  specialties: string[];
  tuitionRange: {
    min: number;
    max: number;
  };
  isPublic: boolean;
  website: string;
}

interface UniversityCardProps {
  university: University;
}

export default function UniversityCard({ university }: UniversityCardProps) {
  const t = useTranslations('studyPage');

  return (
    <article className="bg-white rounded-xl shadow-sm border border-danube-mist overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-transylvanian-stone group-hover:text-tricolor-blue transition-colors mb-2">
              {university.name}
            </h3>
            <div className="flex items-center gap-4 text-sm text-transylvanian-stone/70 mb-2">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t(`cities.${university.city}`)}
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-4 8v4m-4-4h8m-8 0V7h8v8" />
                </svg>
                {t('founded')} {university.founded}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              university.isPublic 
                ? 'bg-carpathian-forest/10 text-carpathian-forest border border-carpathian-forest/20'
                : 'bg-tricolor-blue/10 text-tricolor-blue border border-tricolor-blue/20'
            }`}>
              {university.isPublic ? t('publicUniversity') : t('privateUniversity')}
            </span>
          </div>
        </div>

        <p className="text-transylvanian-stone/70 text-sm mb-4">{university.type}</p>

        {/* Specialties */}
        <div className="mb-4">
          <h4 className="font-medium text-transylvanian-stone mb-2 text-sm">{t('topSpecialties')}</h4>
          <div className="flex flex-wrap gap-2">
            {university.specialties.slice(0, 3).map((specialty, index) => (
              <span key={index} className="px-2 py-1 bg-danube-mist/50 text-transylvanian-stone/80 rounded text-xs border border-danube-mist">
                {specialty}
              </span>
            ))}
            {university.specialties.length > 3 && (
              <span className="px-2 py-1 bg-tricolor-blue/10 text-tricolor-blue rounded text-xs border border-tricolor-blue/20">
                +{university.specialties.length - 3} {t('more')}
              </span>
            )}
          </div>
        </div>

        {/* Degrees Offered */}
        <div className="mb-4">
          <h4 className="font-medium text-transylvanian-stone mb-2 text-sm">{t('degreesOffered')}</h4>
          <div className="flex flex-wrap gap-1">
            {university.degrees.map((degree, index) => (
              <span key={index} className="px-2 py-1 bg-tricolor-yellow/20 text-transylvanian-stone rounded text-xs">
                {t(`degreeTypes.${degree}`)}
              </span>
            ))}
          </div>
        </div>

        {/* Tuition Range */}
        <div className="mb-6">
          <div className="flex justify-between items-center text-sm">
            <span className="text-transylvanian-stone/70">{t('tuitionRange')}</span>
            <span className="font-medium text-transylvanian-stone">
              €{university.tuitionRange.min.toLocaleString()} - €{university.tuitionRange.max.toLocaleString()}/
              {t('year')}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link 
            href={university.website} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-tricolor-blue hover:text-tricolor-blue/80 font-medium group-hover:underline transition-all text-sm"
          >
            {t('visitWebsite')}
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
