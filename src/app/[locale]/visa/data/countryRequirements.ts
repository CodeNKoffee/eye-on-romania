export interface CountryRequirements {
  visaRequired: boolean;
  items: string[];
  consulateUrl?: string;
}

const baseRequirements = [
  "Passport (valid 6+ months beyond intended stay)",
  "Completed visa application form (signed and dated)",
  "2 recent passport photos (35x45mm, color, white background)",
  "Roundtrip flight reservation or travel itinerary",
  "Travel insurance (minimum €30,000 coverage)",
  "Proof of accommodation (hotel bookings, invitation letter)",
  "Financial means evidence (bank statements, employment letter)",
  "Purpose of visit documentation"
];

const culturalEventRequirements = [
  ...baseRequirements,
  "Official invitation letter from Romanian cultural institution/event organizer",
  "Certificate of individual background/professional status",
  "Detailed program/schedule of cultural activities",
  "Proof of previous cultural/professional achievements (portfolio, CV)",
  "Letter from employer (if employed) or university enrollment certificate (if student)"
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
    items: [...culturalEventRequirements, 'Consular appointment required'],
    consulateUrl: 'https://cairo.mae.ro/en'
  },
  'CN': { 
    visaRequired: true, 
    items: [...culturalEventRequirements, 'Biometric data collection required', 'Additional background verification may apply'],
    consulateUrl: 'https://beijing.mae.ro/en'
  },
  'IN': { 
    visaRequired: true, 
    items: [...culturalEventRequirements, 'Consular appointment may be required', 'Police clearance certificate (if stay > 90 days)'],
    consulateUrl: 'https://newdelhi.mae.ro/en'
  },
  'TR': { 
    visaRequired: true, 
    items: [...culturalEventRequirements, 'Biometric data may be requested at application'],
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
    items: [...culturalEventRequirements, 'Additional security clearance may be required'],
    consulateUrl: 'https://riyadh.mae.ro/en'
  },
  'NG': { 
    visaRequired: true, 
    items: [...culturalEventRequirements, 'Yellow fever vaccination certificate required'],
    consulateUrl: 'https://abuja.mae.ro/en'
  },
  'ZA': { 
    visaRequired: true, 
    items: culturalEventRequirements,
    consulateUrl: 'https://pretoria.mae.ro/en'
  },
  'KE': { 
    visaRequired: true, 
    items: [...culturalEventRequirements, 'Yellow fever vaccination certificate may be required'] 
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