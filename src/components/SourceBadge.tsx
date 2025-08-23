export default function SourceBadge({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-xs px-2 py-1 border rounded bg-danube-mist text-transylvanian-stone"
    >
      {label}
    </a>
  );
}
