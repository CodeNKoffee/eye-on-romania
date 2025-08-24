import itineraries from '@/data/itineraries.json';
import Link from 'next/link';

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist">
      <div className="container mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-transylvanian-stone mb-4">
            Travel & <span className="font-semibold">Itineraries</span>
          </h1>
          <p className="text-xl text-transylvanian-stone/70 leading-relaxed">
            Curated itineraries to inspire short trips and deeper stays across Romania&apos;s diverse regions.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist">
            <div className="text-2xl font-bold text-tricolor-blue mb-1">15+</div>
            <div className="text-sm text-transylvanian-stone/70">UNESCO Sites</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist">
            <div className="text-2xl font-bold text-carpathian-forest mb-1">7</div>
            <div className="text-sm text-transylvanian-stone/70">National Parks</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist">
            <div className="text-2xl font-bold text-tricolor-red mb-1">150+</div>
            <div className="text-sm text-transylvanian-stone/70">Castles</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist">
            <div className="text-2xl font-bold text-tricolor-yellow mb-1">3,700km</div>
            <div className="text-sm text-transylvanian-stone/70">Carpathian Range</div>
          </div>
        </div>

        {/* Featured Itineraries */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-transylvanian-stone mb-8 text-center">
            Featured Itineraries
          </h2>
          
          <div className="grid gap-8">
            {itineraries.itineraries.map((itinerary, index) => (
              <article key={itinerary.id} className="bg-white rounded-xl shadow-sm border border-danube-mist overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="md:flex">
                  {/* Image placeholder */}
                  <div className="md:w-80 h-64 md:h-auto bg-gradient-to-br from-tricolor-blue/20 via-tricolor-yellow/20 to-tricolor-red/20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <svg className="w-16 h-16 text-tricolor-blue/40 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div className="text-sm font-medium text-transylvanian-stone/60">
                        {itinerary.title}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-transylvanian-stone group-hover:text-tricolor-blue transition-colors">
                        {itinerary.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-transylvanian-stone/60">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {itinerary.days} days
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-transylvanian-stone/70 leading-relaxed mb-6 text-lg">
                      {itinerary.summary}
                    </p>
                    
                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-medium text-transylvanian-stone mb-3">Key Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {itinerary.stops.slice(0, 3).map((stop: string, stopIndex: number) => (
                          <span key={stopIndex} className="px-3 py-1 bg-danube-mist/50 text-transylvanian-stone/80 rounded-full text-sm border border-danube-mist">
                            {stop}
                          </span>
                        ))}
                        {itinerary.stops.length > 3 && (
                          <span className="px-3 py-1 bg-tricolor-blue/10 text-tricolor-blue rounded-full text-sm border border-tricolor-blue/20">
                            +{itinerary.stops.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <Link 
                      href={`/travel/${itinerary.id}`} 
                      className="inline-flex items-center text-tricolor-blue hover:text-tricolor-blue/80 font-medium group-hover:underline transition-all"
                    >
                      View complete itinerary
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Travel Essentials */}
          <div className="mt-16 bg-white rounded-xl shadow-sm border border-danube-mist p-8">
            <h2 className="text-2xl font-semibold text-transylvanian-stone mb-8 text-center">
              Travel Essentials
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg bg-danube-mist/30 border border-danube-mist">
                <div className="w-12 h-12 bg-tricolor-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-tricolor-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-transylvanian-stone mb-2">Language</h3>
                <p className="text-sm text-transylvanian-stone/70">Romanian (official), English widely spoken in cities</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-danube-mist/30 border border-danube-mist">
                <div className="w-12 h-12 bg-carpathian-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-carpathian-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="font-semibold text-transylvanian-stone mb-2">Currency</h3>
                <p className="text-sm text-transylvanian-stone/70">Romanian Leu (RON), Cards accepted everywhere</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-danube-mist/30 border border-danube-mist">
                <div className="w-12 h-12 bg-tricolor-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-tricolor-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-transylvanian-stone mb-2">Safety</h3>
                <p className="text-sm text-transylvanian-stone/70">Very safe, EU standards, Emergency: 112</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-danube-mist/30 border border-danube-mist">
                <div className="w-12 h-12 bg-tricolor-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-tricolor-yellow stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <h3 className="font-semibold text-transylvanian-stone mb-2">Connectivity</h3>
                <p className="text-sm text-transylvanian-stone/70">Excellent 4G/5G, Free WiFi in most venues</p>
              </div>
            </div>
          </div>
          
          {/* Transportation */}
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-danube-mist p-8">
            <h3 className="text-xl font-semibold text-transylvanian-stone mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-tricolor-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              Getting Around Romania
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 border border-danube-mist rounded-lg">
                <h4 className="font-semibold text-transylvanian-stone mb-2">By Train</h4>
                <p className="text-sm text-transylvanian-stone/70">Extensive network connecting major cities. Book at CFR Călători.</p>
              </div>
              
              <div className="p-4 border border-danube-mist rounded-lg">
                <h4 className="font-semibold text-transylvanian-stone mb-2">By Bus</h4>
                <p className="text-sm text-transylvanian-stone/70">FlixBus and local operators serve all regions. Comfortable and affordable.</p>
              </div>
              
              <div className="p-4 border border-danube-mist rounded-lg">
                <h4 className="font-semibold text-transylvanian-stone mb-2">Car Rental</h4>
                <p className="text-sm text-transylvanian-stone/70">International licenses accepted. Great for exploring Transylvania.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}