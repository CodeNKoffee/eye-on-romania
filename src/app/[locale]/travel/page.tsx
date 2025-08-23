import itineraries from '@/data/itineraries.json';
import Link from 'next/link';

export default function TravelPage() {
  return (
    <div className="container py-10">
      <h2 className="text-2xl font-semibold">Travel & Itineraries</h2>
      <p className="mt-2 text-sm text-transylvanian-stone/80">Curated itineraries to inspire short trips and deeper stays.</p>

      <div className="mt-6 grid gap-4">
        {itineraries.itineraries.map((it) => (
          <article key={it.id} className="p-4 border rounded">
            <h3 className="font-semibold">{it.title}</h3>
            <p className="text-sm text-transylvanian-stone/80 mt-1">{it.summary}</p>
            <div className="mt-2 text-xs text-transylvanian-stone/80">Days: {it.days}</div>
            <Link href={`/travel/${it.id}`} className="mt-3 inline-block text-sm text-tricolor-blue hover:underline">
              View details
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
