import { useTranslations } from "next-intl";

export default function LastUpdated({ date }: { date: string }) {
  const t = useTranslations("visaPage");

  return (
    <time className="text-xs text-transylvanian-stone/80" dateTime={date}>
      {t('download.lastUpdated')}: 8/25/2025
      {/* {t('lastUpdated')}: {new Date(date).toLocaleDateString()} */}
    </time>
  );
}
