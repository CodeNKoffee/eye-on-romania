"use client";
import { useState, useMemo } from 'react';
import { getCountryRequirements } from '../data/countryRequirements';
import { countries } from '../data/countries';

export function useVisaData() {
  const [selectedCountry, setSelectedCountry] = useState('OTHER');

  const countryData = useMemo(() => {
    return countries.find(c => c.code === selectedCountry);
  }, [selectedCountry]);

  const requirements = useMemo(() => {
    return getCountryRequirements(selectedCountry);
  }, [selectedCountry]);

  const isVisaFree = useMemo(() => {
    return countryData?.visaFree || false;
  }, [countryData]);

  return {
    selectedCountry,
    setSelectedCountry,
    countryData,
    requirements,
    isVisaFree
  };
}