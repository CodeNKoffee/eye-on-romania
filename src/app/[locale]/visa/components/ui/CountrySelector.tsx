import { useTranslations } from "next-intl";
import { countries } from "../../data/countries";

interface CountrySelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CountrySelector({ value, onChange }: CountrySelectorProps) {
  const t = useTranslations("visaPage");

  // Group countries by region for better UX
  const groupedCountries = countries.reduce((acc, country) => {
    let region = 'Other';
    
    if (['US', 'CA', 'MX'].includes(country.code)) {
      region = 'North America';
    } else if (['BR', 'AR', 'CL', 'CO', 'PE'].includes(country.code)) {
      region = 'South America';
    } else if (['GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'CH', 'AT', 'SE', 'NO', 'DK', 'FI', 'PL', 'CZ', 'HU', 'HR', 'BG', 'GR', 'PT', 'IE', 'LU', 'SK', 'SI', 'EE', 'LV', 'LT', 'CY', 'MT'].includes(country.code)) {
      region = 'Europe';
    } else if (['CN', 'JP', 'KR', 'IN', 'TH', 'VN', 'SG', 'MY', 'ID', 'PH'].includes(country.code)) {
      region = 'Asia';
    } else if (['AU', 'NZ'].includes(country.code)) {
      region = 'Oceania';
    } else if (['EG', 'SA', 'AE', 'IL', 'TR', 'ZA', 'NG', 'KE', 'MA'].includes(country.code)) {
      region = 'Middle East & Africa';
    }

    if (!acc[region]) {
      acc[region] = [];
    }
    acc[region].push(country);
    return acc;
  }, {} as Record<string, typeof countries>);

  return (
    <div className="flex items-center gap-3">
      <label htmlFor="country" className="text-sm text-transylvanian-stone/80 mr-2">
        {t("download.countryLabel")}
      </label>
      <select
        id="country"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2 border border-danube-mist rounded-lg focus:ring-2 focus:ring-tricolor-blue/20 focus:border-tricolor-blue min-w-[200px]"
        aria-label="Select your country to tailor checklist"
      >
        <option value="OTHER">{t("download.countryOther")}</option>
        {Object.entries(groupedCountries).map(([region, countries]) => (
          <optgroup key={region} label={region}>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name} {country.visaFree ? '(Visa-free)' : ''}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}