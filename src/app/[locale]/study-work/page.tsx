import Link from 'next/link';

export default function StudyWork() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <h1 className="text-4xl font-light text-transylvanian-stone mb-4">Study & Work</h1>
          <p className="text-transylvanian-stone/70">Pathways for students, post-study work and career hubs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <article className="bg-white rounded-xl shadow-sm border border-danube-mist p-6">
            <h3 className="font-semibold text-xl mb-2">Study in Romania</h3>
            <p className="text-sm text-transylvanian-stone/70 mb-4">Recognized universities, tuition expectations, and scholarship guidance.</p>
            <Link href="/study-work" className="text-tricolor-blue hover:underline">Explore programs</Link>
          </article>

          <article className="bg-white rounded-xl shadow-sm border border-danube-mist p-6">
            <h3 className="font-semibold text-xl mb-2">Post-Study Options</h3>
            <p className="text-sm text-transylvanian-stone/70 mb-4">How to transition from a student visa to work authorization.</p>
            <Link href="/study-work" className="text-tricolor-blue hover:underline">Learn the steps</Link>
          </article>

          <article className="bg-white rounded-xl shadow-sm border border-danube-mist p-6">
            <h3 className="font-semibold text-xl mb-2">Career Hubs</h3>
            <p className="text-sm text-transylvanian-stone/70 mb-4">Cluj, Bucharest, Iași — profiles and what to expect for tech and health sectors.</p>
            <Link href="/travel" className="text-tricolor-blue hover:underline">See hubs</Link>
          </article>
        </div>
      </div>
    </div>
  );
}
