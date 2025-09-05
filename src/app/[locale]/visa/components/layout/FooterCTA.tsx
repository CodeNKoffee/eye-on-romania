import Link from "next/link";
import { useTranslations } from "next-intl";

export default function FooterCTA() {
  const t = useTranslations("visaPage");

  return (
    <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-danube-mist">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-transylvanian-stone mb-3 sm:mb-4">
            {t("footerCTA.title")}
          </h2>
          <p className="text-sm sm:text-base text-transylvanian-stone/70 leading-relaxed mb-4 sm:mb-6">
            {t("footerCTA.description")}
          </p>
          <Link
            href="/work"
            className="inline-flex items-center px-4 sm:px-6 py-3 bg-tricolor-blue text-white rounded-lg hover:bg-tricolor-blue/90 active:bg-tricolor-blue/95 transition-colors font-medium text-sm sm:text-base touch-manipulation"
          >
            {t("footerCTA.linkText")}
            <svg
              className="w-4 h-4 ml-2 flex-shrink-0"
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