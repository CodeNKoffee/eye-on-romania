"use client";
import { useTranslations } from 'next-intl';
import UniversityCard from './UniversityCard';

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

interface UniversityListProps {
  universities: University[];
  selectedDegree: string;
  selectedCity: string;
}

export default function UniversityList({ universities, selectedDegree, selectedCity }: UniversityListProps) {
  const t = useTranslations('studyPage');

  const filteredUniversities = universities.filter(university => {
    const degreeMatch = selectedDegree === 'all' || university.degrees.includes(selectedDegree);
    const cityMatch = selectedCity === 'all' || university.city === selectedCity;
    return degreeMatch && cityMatch;
  });

  if (filteredUniversities.length === 0) {
    return (
      <div className="text-center py-12">
        <svg className="w-16 h-16 text-transylvanian-stone/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
        <h3 className="text-lg font-medium text-transylvanian-stone mb-2">{t('noResults.title')}</h3>
        <p className="text-transylvanian-stone/70">{t('noResults.description')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <p className="text-transylvanian-stone/70">
          {t('resultsCount', { count: filteredUniversities.length })}
        </p>
      </div>
      
      <div className="grid gap-6">
        {filteredUniversities.map((university) => (
          <UniversityCard key={university.id} university={university} />
        ))}
      </div>
    </div>
  );
}
