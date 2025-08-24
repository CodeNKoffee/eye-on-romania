import Link from 'next/link';

export default function Business() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <h1 className="text-4xl font-light text-transylvanian-stone mb-4">Business & Startups</h1>
          <p className="text-transylvanian-stone/70">Company setup basics, SRL primer, and ecosystem highlights.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <article className="bg-white rounded-xl shadow-sm border border-danube-mist p-6">
            <h3 className="font-semibold text-xl mb-2">Start an SRL</h3>
            <p className="text-sm text-transylvanian-stone/70 mb-4">Overview of steps, timeline, and typical costs.</p>
            <Link href="/business" className="text-tricolor-blue hover:underline">Company setup guide</Link>
          </article>

          <article className="bg-white rounded-xl shadow-sm border border-danube-mist p-6">
            <h3 className="font-semibold text-xl mb-2">Ecosystem</h3>
            <p className="text-sm text-transylvanian-stone/70 mb-4">Accelerators, coworking spaces, and funding opportunities.</p>
            <Link href="/travel" className="text-tricolor-blue hover:underline">Ecosystem highlights</Link>
          </article>

          <article className="bg-white rounded-xl shadow-sm border border-danube-mist p-6">
            <h3 className="font-semibold text-xl mb-2">Pitch Romania</h3>
            <p className="text-sm text-transylvanian-stone/70 mb-4">Key statistics and sources to include in partner conversations.</p>
            <Link href="/institutions" className="text-tricolor-blue hover:underline">For institutions</Link>
          </article>
        </div>
      </div>
    </div>
  );
}
