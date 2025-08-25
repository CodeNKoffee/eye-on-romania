import { useTranslations } from "next-intl";
import { getOfficialSources } from "../../data/officialSource";

export default function OfficialSources() {
  const t = useTranslations("visaPage");
  const sources = getOfficialSources();

  return (
    <section className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-6">
          <h3 className="text-lg font-semibold text-transylvanian-stone mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-tricolor-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            {t("sources.title")}
          </h3>
          <div className="space-y-2 text-sm">
            {sources.map((source, index) => (
              <a 
                key={index}
                href={source.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-tricolor-blue hover:underline"
              >
                {source.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}