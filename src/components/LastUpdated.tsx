export default function LastUpdated({ date }: { date: string }) {
  return (
    <time className="text-xs text-transylvanian-stone/80" dateTime={date}>
      Last updated: {new Date(date).toLocaleDateString()}
    </time>
  );
}
