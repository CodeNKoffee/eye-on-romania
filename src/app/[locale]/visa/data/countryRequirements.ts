export interface CountryRequirements {
  visaRequired: boolean;
  items: string[];
  consulateUrl?: string;
}

// Use translation keys instead of hardcoded English text
const baseRequirements = [
  "requirements.passport",
  "requirements.application",
  "requirements.photos",
  "requirements.flight",
  "requirements.insurance",
  "requirements.accommodation",
  "requirements.financial",
  "requirements.purpose"
];

const culturalEventRequirements = [
  ...baseRequirements,
  "requirements.invitation",
  "requirements.certificate",
  "requirements.program",
  "requirements.achievements",
  "requirements.employment"
];

const countrySpecificRequirements: Record<string, CountryRequirements> = {
  // Visa-free countries
  'US': { 
    visaRequired: false, 
    items: [],
    consulateUrl: 'https://washington.mae.ro/en'
  },
  'CA': { 
    visaRequired: false, 
    items: [],
    consulateUrl: 'https://ottawa.mae.ro/en'
  },
  'GB': { 
    visaRequired: false, 
    items: [],
    consulateUrl: 'https://london.mae.ro/en'
  },
  'AU': { 
    visaRequired: false, 
    items: [],
    consulateUrl: 'https://sydney.mae.ro/en'
  },
  'JP': { 
    visaRequired: false, 
    items: [],
    consulateUrl: 'https://tokyo.mae.ro/en'
  },
  'KR': { 
    visaRequired: false, 
    items: [],
    consulateUrl: 'https://seoul.mae.ro/en'
  },
  'SG': { 
    visaRequired: false, 
    items: [] 
  },
  'BR': { 
    visaRequired: false, 
    items: [],
    consulateUrl: 'https://brasilia.mae.ro/en'
  },
  'AR': { 
    visaRequired: false, 
    items: [],
    consulateUrl: 'https://buenosaires.mae.ro/en'
  },
  'MX': { 
    visaRequired: false, 
    items: [],
    consulateUrl: 'https://mexico.mae.ro/en'
  },
  'CL': { 
    visaRequired: false, 
    items: [] 
  },
  'AE': { 
    visaRequired: false, 
    items: [],
    consulateUrl: 'https://abudhabi.mae.ro/en'
  },
  'IL': { 
    visaRequired: false, 
    items: [],
    consulateUrl: 'https://telaviv.mae.ro/en'
  },
  
  // Visa-required countries with specific requirements
  'EG': { 
    visaRequired: true, 
    items: [...culturalEventRequirements, 'requirements.appointment'],
    consulateUrl: 'https://cairo.mae.ro/en'
  },
  'CN': { 
    visaRequired: true, 
    items: [...culturalEventRequirements, 'requirements.biometric', 'requirements.background'],
    consulateUrl: 'https://beijing.mae.ro/en'
  },
  'IN': { 
    visaRequired: true, 
    items: [...culturalEventRequirements, 'requirements.appointmentMay', 'requirements.police'],
    consulateUrl: 'https://newdelhi.mae.ro/en'
  },
  'TR': { 
    visaRequired: true, 
    items: [...culturalEventRequirements, 'requirements.biometricMay'],
    consulateUrl: 'https://ankara.mae.ro/en'
  },
  'ID': { 
    visaRequired: true, 
    items: culturalEventRequirements,
    consulateUrl: 'https://jakarta.mae.ro/en'
  },
  'TH': { 
    visaRequired: true, 
    items: culturalEventRequirements,
    consulateUrl: 'https://bangkok.mae.ro/en'
  },
  'VN': { 
    visaRequired: true, 
    items: culturalEventRequirements,
    consulateUrl: 'https://hanoi.mae.ro/en'
  },
  'MY': { 
    visaRequired: true, 
    items: culturalEventRequirements,
    consulateUrl: 'https://kualalumpur.mae.ro/en'
  },
  'PH': { 
    visaRequired: true, 
    items: culturalEventRequirements 
  },
  'SA': { 
    visaRequired: true, 
    items: [...culturalEventRequirements, 'requirements.security'],
    consulateUrl: 'https://riyadh.mae.ro/en'
  },
  'NG': { 
    visaRequired: true, 
    items: [...culturalEventRequirements, 'requirements.yellowFever'],
    consulateUrl: 'https://abuja.mae.ro/en'
  },
  'ZA': { 
    visaRequired: true, 
    items: culturalEventRequirements,
    consulateUrl: 'https://pretoria.mae.ro/en'
  },
  'KE': { 
    visaRequired: true, 
    items: [...culturalEventRequirements, 'requirements.yellowFeverMay'] 
  },
  'MA': { 
    visaRequired: true, 
    items: culturalEventRequirements,
    consulateUrl: 'https://rabat.mae.ro/en'
  }
};

export function getCountryRequirements(countryCode: string): CountryRequirements {
  return countrySpecificRequirements[countryCode] || {
    visaRequired: true,
    items: culturalEventRequirements
  };
}