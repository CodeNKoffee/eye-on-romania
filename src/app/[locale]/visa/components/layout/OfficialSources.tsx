import { useTranslations } from "next-intl";
export interface OfficialSource {
  titleKey: string; // Change from 'title' to 'titleKey'
  url: string;
}

export function getOfficialSources(): OfficialSource[] {
  return [
    {
      titleKey: "romanianMFA",
      url: "https://www.mae.ro/en/node/2035"
    },
    {
      titleKey: "romanianIGI",
      url: "https://igi.mai.gov.ro/en/"
    },
    {
      titleKey: "euVisaPolicy",
      url: "https://ec.europa.eu/home-affairs/what-we-do/policies/borders-and-visas/visa-policy_en"
    },
    {
      titleKey: "romanianConsulates",
      url: "https://www.mae.ro/en/node/2045"
    },
    {
      titleKey: "schengenVisa",
      url: "https://ec.europa.eu/home-affairs/what-we-do/policies/borders-and-visas/visa-policy_en"
    }
  ];
}

export default function OfficialSources() {
  const t = useTranslations("visaPage");
  const sources = getOfficialSources();

  return (
    <section className="container mx-auto px-4 sm:px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-transylvanian-stone mb-3 sm:mb-4 flex items-center">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-tricolor-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            {t("sources.title")}
          </h3>
          <div className="space-y-2 text-xs sm:text-sm">
            {sources.map((source, index) => (
              <a 
                key={index}
                href={source.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-tricolor-blue hover:underline active:text-tricolor-blue/80 py-1 leading-relaxed"
              >
                {t(`sources.items.${source.titleKey}`)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}