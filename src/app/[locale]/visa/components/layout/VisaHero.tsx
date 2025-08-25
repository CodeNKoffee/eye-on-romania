import { useTranslations } from "next-intl";

export default function VisaHero() {
  const t = useTranslations("visaPage");

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-light text-transylvanian-stone mb-4">
          {t("title")} — <span className="font-semibold">{t("subtitle")}</span>
        </h1>
        <div className="inline-flex items-center px-4 py-2 bg-tricolor-yellow/20 border border-tricolor-yellow/30 rounded-full">
          <svg className="w-4 h-4 text-tricolor-yellow mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="text-transylvanian-stone font-medium">{t("disclaimer")}</span>
        </div>
      </div>
    </section>
  );
}