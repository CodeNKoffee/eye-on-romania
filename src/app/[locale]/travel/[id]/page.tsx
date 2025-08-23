import itineraries from '@/data/itineraries.json';

export default function ItineraryPage({ params }: { params: { id: string } }) {
  const it = itineraries.itineraries.find((x) => x.id === params.id);
  if (!it) return <div className="container py-10">Itinerary not found.</div>;

  return (
    <div className="container py-10">
      <h2 className="text-2xl font-semibold">{it.title}</h2>
      <p className="mt-2 text-sm text-transylvanian-stone/80">{it.summary}</p>
      <ul className="mt-4 list-disc list-inside">
        {it.stops.map((s: string) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
