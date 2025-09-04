"use client";
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const degreeTypes = ['all', 'bachelor', 'master', 'doctorate', 'diploma'];

interface UniversityFilterProps {
  selectedDegree: string;
  onDegreeChange: (degree: string) => void;
  selectedCity: string;
  onCityChange: (city: string) => void;
}

export default function UniversityFilter({ 
  selectedDegree, 
  onDegreeChange, 
  selectedCity, 
  onCityChange 
}: UniversityFilterProps) {
  const t = useTranslations('studyPage');

  const cities = ['all', 'bucharest', 'cluj-napoca', 'iasi', 'timisoara', 'constanta'];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-6 mb-8 max-w-4xl mx-auto">
      <h3 className="text-lg font-semibold text-transylvanian-stone mb-4">{t('filters.title')}</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Degree Type Filter */}
        <div>
          <label className="block text-sm font-medium text-transylvanian-stone mb-2">
            {t('filters.degreeType')}
          </label>
          <select 
            value={selectedDegree}
            onChange={(e) => onDegreeChange(e.target.value)}
            className="w-full px-3 py-2 border border-danube-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-tricolor-blue/20 focus:border-tricolor-blue"
          >
            {degreeTypes.map((type) => (
              <option key={type} value={type}>
                {t(`filters.degrees.${type}`)}
              </option>
            ))}
          </select>
        </div>

        {/* City Filter */}
        <div>
          <label className="block text-sm font-medium text-transylvanian-stone mb-2">
            {t('filters.city')}
          </label>
          <select 
            value={selectedCity}
            onChange={(e) => onCityChange(e.target.value)}
            className="w-full px-3 py-2 border border-danube-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-tricolor-blue/20 focus:border-tricolor-blue"
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {t(`filters.cities.${city}`)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
