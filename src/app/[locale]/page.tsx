import Ribbon from '@/components/Ribbon';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Ribbon />
      <section className="py-12">
        <h2 className="text-3xl font-bold">A clear, trusted window into Romania</h2>
        <p className="mt-4 text-lg text-transylvanian-stone/80">
          Practical guidance for visitors, students, professionals, and partners — curated, sourced, and
          printable.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/visa" className="p-6 border rounded hover:shadow">
            <h3 className="font-semibold">Visa & Entry</h3>
            <p className="mt-2 text-sm text-transylvanian-stone/80">Step-by-step flows and printable checklists.</p>
          </Link>
          <Link href="/travel" className="p-6 border rounded hover:shadow">
            <h3 className="font-semibold">Travel & Itineraries</h3>
            <p className="mt-2 text-sm text-transylvanian-stone/80">Curated routes and cultural essentials.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
