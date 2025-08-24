import itineraries from '@/data/itineraries.json';
import Link from 'next/link';

type PropsLike = { params?: { id: string } };

export default function ItineraryPage(props: unknown) {
  const params = (props as PropsLike).params as { id: string };
  const itinerary = itineraries.itineraries.find((x) => x.id === params.id);
  
  if (!itinerary) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-transylvanian-stone mb-4">Itinerary not found</h1>
          <Link href="/travel" className="text-tricolor-blue hover:underline">
            ← Back to all itineraries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist">
      <div className="container mx-auto px-6 py-12">
        
        {/* Breadcrumb */}
        <nav className="mb-8 max-w-4xl mx-auto">
          <div className="flex items-center text-sm text-transylvanian-stone/60">
            <Link href="/travel" className="hover:text-tricolor-blue transition-colors">
              Travel & Itineraries
            </Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-transylvanian-stone">{itinerary.title}</span>
          </div>
        </nav>

        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-danube-mist overflow-hidden mb-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-tricolor-blue/10 via-tricolor-yellow/10 to-tricolor-red/10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-light text-transylvanian-stone mb-4">
                    {itinerary.title}
                  </h1>
                  <p className="text-lg text-transylvanian-stone/70 leading-relaxed mb-6">
                    {itinerary.summary}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-tricolor-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium text-transylvanian-stone">{itinerary.days} days</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-carpathian-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-medium text-transylvanian-stone">{itinerary.stops.length} stops</span>
                    </div>
                  </div>
                </div>
                
                {/* Map placeholder */}
                <div className="w-full md:w-80 h-48 bg-white/50 rounded-lg border border-danube-mist flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-tricolor-blue/40 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <div className="text-sm text-transylvanian-stone/60">Route Map</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Itinerary Details */}
          <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-8 mb-8">
            <h2 className="text-2xl font-semibold text-transylvanian-stone mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-tricolor-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Detailed Itinerary
            </h2>
            
            <div className="space-y-6">
              {itinerary.stops.map((stop: string, index: number) => (
                <div key={index} className="flex gap-4">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-tricolor-blue rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {index + 1}
                    </div>
                    {index < itinerary.stops.length - 1 && (
                      <div className="w-0.5 h-12 bg-danube-mist mt-2"></div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-6">
                    <h3 className="text-lg font-semibold text-transylvanian-stone mb-2">
                      {stop}
                    </h3>
                    <p className="text-transylvanian-stone/70 leading-relaxed">
                      Explore the highlights and cultural significance of this location. 
                      Allow time for photos and local interactions.
                    </p>
                    
                    {/* Sample details - you can expand this based on your data structure */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-danube-mist/50 text-xs text-transylvanian-stone/80 rounded">
                        2-3 hours
                      </span>
                      <span className="px-2 py-1 bg-tricolor-blue/10 text-xs text-tricolor-blue rounded">
                        Must-see
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Transportation */}
            <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-6">
              <h3 className="text-lg font-semibold text-transylvanian-stone mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-carpathian-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Getting There
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-transylvanian-stone/70">By Train:</span>
                  <span className="text-transylvanian-stone font-medium">3-4 hours from Bucharest</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-transylvanian-stone/70">By Car:</span>
                  <span className="text-transylvanian-stone font-medium">2.5 hours via A1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-transylvanian-stone/70">By Bus:</span>
                  <span className="text-transylvanian-stone font-medium">FlixBus available</span>
                </div>
              </div>
            </div>

            {/* Accommodation */}
            <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-6">
              <h3 className="text-lg font-semibold text-transylvanian-stone mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-tricolor-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Where to Stay
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-transylvanian-stone/70">Budget:</span>
                  <span className="text-transylvanian-stone font-medium">€20-40/night</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-transylvanian-stone/70">Mid-range:</span>
                  <span className="text-transylvanian-stone font-medium">€40-80/night</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-transylvanian-stone/70">Luxury:</span>
                  <span className="text-transylvanian-stone font-medium">€80-150/night</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-8">
            <h3 className="text-lg font-semibold text-transylvanian-stone mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-tricolor-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Local Tips
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-danube-mist/30 rounded-lg">
                <h4 className="font-medium text-transylvanian-stone mb-2">Best Time to Visit</h4>
                <p className="text-transylvanian-stone/70">Spring (May-June) and early autumn (September) offer pleasant weather and fewer crowds.</p>
              </div>
              <div className="p-4 bg-danube-mist/30 rounded-lg">
                <h4 className="font-medium text-transylvanian-stone mb-2">What to Pack</h4>
                <p className="text-transylvanian-stone/70">Comfortable walking shoes, camera, and layers for changing weather in the mountains.</p>
              </div>
            </div>
          </div>

          {/* Back to Travel */}
          <div className="mt-8 text-center">
            <Link 
              href="/travel" 
              className="inline-flex items-center px-6 py-3 text-tricolor-blue hover:text-tricolor-blue/80 font-medium transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to all itineraries
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}