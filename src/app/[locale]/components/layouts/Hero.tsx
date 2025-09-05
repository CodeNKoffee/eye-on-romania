import { useTranslations } from "next-intl";
import ValuePillars from "../ui/ValuePillars";
import NavigationCards from "../ui/NavigationCards";

export default function Hero() {
  const t = useTranslations("homePage");
  const pillars = [
    {
      title: t("valuePillars.safety.title"),
      description: t("valuePillars.safety.description"),
    },
    {
      title: t("valuePillars.nature.title"),
      description: t("valuePillars.nature.description"),
    },
    {
      title: t("valuePillars.culture.title"),
      description: t("valuePillars.culture.description"),
    },
    {
      title: t("valuePillars.opportunity.title"),
      description: t("valuePillars.opportunity.description"),
    },
  ];

  const navigationCards = [
    {
      title: t("navigation.visa.title"),
      description: t("navigation.visa.description"),
      href: "/visa",
    },
    {
      title: t("navigation.work.title"),
      description: t("navigation.work.description"),
      href: "/work",
    },
    {
      title: t("navigation.business.title"),
      description: t("navigation.business.description"),
      href: "/business",
    },
    {
      title: t("navigation.study.title"),
      description: t("navigation.study.description"),
      href: "/study",
    },
    {
      title: t("navigation.travel.title"),
      description: t("navigation.travel.description"),
      href: "/travel",
    },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-transylvanian-stone mb-4 sm:mb-6 tracking-tight leading-tight">
          {t("title")}{" "}
          <span className="font-semibold bg-gradient-to-r from-tricolor-blue via-tricolor-yellow to-tricolor-red bg-clip-text text-transparent">
            {t("romania")}
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-transylvanian-stone/70 leading-relaxed max-w-3xl mx-auto px-2">
          {t("description")}
        </p>
      </div>

      {/* Value Pillars */}
      <ValuePillars pillars={pillars} />

      {/* Main Navigation Cards */}
      <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {navigationCards.map((n, i) => (
          <div key={n.title} className="w-full">
            <NavigationCards title={n.title} description={n.description} href={n.href} variant={i} />
          </div>
        ))}
      </div>
    </section>
  );
};
