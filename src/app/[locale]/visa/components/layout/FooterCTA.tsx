import Link from "next/link";
import { useTranslations } from "next-intl";

export default function FooterCTA() {
  const t = useTranslations("visaPage");

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-danube-mist">
          <h2 className="text-2xl font-semibold text-transylvanian-stone mb-4">
            {t("footerCTA.title")}
          </h2>
          <p className="text-transylvanian-stone/70 leading-relaxed mb-6">
            {t("footerCTA.description")}
          </p>
          <Link
            href="/work"
            className="inline-flex items-center px-6 py-3 bg-tricolor-blue text-white rounded-lg hover:bg-tricolor-blue/90 transition-colors font-medium"
          >
            {t("footerCTA.linkText")}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}