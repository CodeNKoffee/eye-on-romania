import { useTranslations } from "next-intl";
import VisaTypeCard from "../ui/VisaTypeCard";

export default function VisaTypes() {
  const t = useTranslations("visaPage");
  
  const visaTypes = [
    {
      type: t("visaTypes.shortStay.type"),
      duration: t("visaTypes.shortStay.duration"),
      purpose: t("visaTypes.shortStay.purpose"),
      color: "tricolor-blue" as const
    },
    {
      type: t("visaTypes.longStay.type"),
      duration: t("visaTypes.longStay.duration"),
      purpose: t("visaTypes.longStay.purpose"),
      color: "tricolor-red" as const
    },
    {
      type: t("visaTypes.transit.type"),
      duration: t("visaTypes.transit.duration"),
      purpose: t("visaTypes.transit.purpose"),
      color: "carpathian-forest" as const
    }
  ];

  return (
    <section className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {visaTypes.map((visa, index) => (
            <VisaTypeCard key={index} {...visa} />
          ))}
        </div>
      </div>
    </section>
  );
}
