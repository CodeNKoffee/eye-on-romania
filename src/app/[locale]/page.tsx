import Ribbon from '@/components/Ribbon';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist">
      <Ribbon />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light text-transylvanian-stone mb-6 tracking-tight">
            A clear, trusted window into{' '}
            <span className="font-semibold bg-gradient-to-r from-tricolor-blue via-tricolor-yellow to-tricolor-red bg-clip-text text-transparent">
              Romania
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-transylvanian-stone/70 leading-relaxed max-w-3xl mx-auto">
            Practical guidance for visitors, students, professionals, and partners — curated, sourced, and printable.
          </p>
        </div>

        {/* Value Pillars */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-danube-mist hover:bg-white/70 transition-all duration-300">
            <div className="w-12 h-12 bg-tricolor-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 bg-tricolor-blue rounded-full"></div>
            </div>
            <h3 className="font-semibold text-transylvanian-stone">Safety</h3>
            <p className="text-sm text-transylvanian-stone/60 mt-1">Secure & welcoming</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-danube-mist hover:bg-white/70 transition-all duration-300">
            <div className="w-12 h-12 bg-carpathian-forest/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 bg-carpathian-forest rounded-full"></div>
            </div>
            <h3 className="font-semibold text-transylvanian-stone">Nature</h3>
            <p className="text-sm text-transylvanian-stone/60 mt-1">Carpathians & Danube</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-danube-mist hover:bg-white/70 transition-all duration-300">
            <div className="w-12 h-12 bg-tricolor-red/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 bg-tricolor-red rounded-full"></div>
            </div>
            <h3 className="font-semibold text-transylvanian-stone">Culture</h3>
            <p className="text-sm text-transylvanian-stone/60 mt-1">Rich heritage</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-danube-mist hover:bg-white/70 transition-all duration-300">
            <div className="w-12 h-12 bg-tricolor-yellow/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 bg-tricolor-yellow border border-tricolor-yellow/30 rounded-full"></div>
            </div>
            <h3 className="font-semibold text-transylvanian-stone">Opportunity</h3>
            <p className="text-sm text-transylvanian-stone/60 mt-1">Growing economy</p>
          </div>
        </div>

        {/* Main Navigation Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Link 
            href="/visa" 
            className="group p-8 bg-white rounded-xl shadow-sm border border-danube-mist hover:shadow-lg hover:border-tricolor-blue/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-tricolor-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-tricolor-blue/20 transition-colors">
              <svg className="w-7 h-7 text-tricolor-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-transylvanian-stone mb-3 group-hover:text-tricolor-blue transition-colors">
              Visa & Entry
            </h3>
            <p className="text-transylvanian-stone/70 leading-relaxed">
              Step-by-step flows and printable checklists for smooth border procedures.
            </p>
            <div className="mt-4 text-tricolor-blue font-medium group-hover:underline">
              Explore guides →
            </div>
          </Link>

          <Link 
            href="/travel" 
            className="group p-8 bg-white rounded-xl shadow-sm border border-danube-mist hover:shadow-lg hover:border-carpathian-forest/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-carpathian-forest/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-carpathian-forest/20 transition-colors">
              <svg className="w-7 h-7 text-carpathian-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-transylvanian-stone mb-3 group-hover:text-carpathian-forest transition-colors">
              Travel & Itineraries
            </h3>
            <p className="text-transylvanian-stone/70 leading-relaxed">
              Curated routes and cultural essentials for memorable Romanian experiences.
            </p>
            <div className="mt-4 text-carpathian-forest font-medium group-hover:underline">
              View itineraries →
            </div>
          </Link>

          <Link 
            href="/study-work" 
            className="group p-8 bg-white rounded-xl shadow-sm border border-danube-mist hover:shadow-lg hover:border-tricolor-red/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-tricolor-red/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-tricolor-red/20 transition-colors">
              <svg className="w-7 h-7 text-tricolor-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-transylvanian-stone mb-3 group-hover:text-tricolor-red transition-colors">
              Study & Work
            </h3>
            <p className="text-transylvanian-stone/70 leading-relaxed">
              University pathways, job markets, and career development opportunities.
            </p>
            <div className="mt-4 text-tricolor-red font-medium group-hover:underline">
              Explore paths →
            </div>
          </Link>

          <Link 
            href="/business" 
            className="group p-8 bg-white rounded-xl shadow-sm border border-danube-mist hover:shadow-lg hover:border-tricolor-yellow/40 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-tricolor-yellow/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-tricolor-yellow/30 transition-colors">
              <svg className="w-7 h-7 text-tricolor-yellow stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-transylvanian-stone mb-3 group-hover:text-tricolor-yellow transition-colors">
              Business & Startups
            </h3>
            <p className="text-transylvanian-stone/70 leading-relaxed">
              Company setup, ecosystem insights, and investment landscape overview.
            </p>
            <div className="mt-4 text-tricolor-yellow font-medium group-hover:underline">
              Start here →
            </div>
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-danube-mist">
          <h2 className="text-2xl font-semibold text-transylvanian-stone mb-4">
            Partnership-Ready Information
          </h2>
          <p className="text-transylvanian-stone/70 leading-relaxed mb-6">
            All guidance is carefully sourced, regularly updated, and designed to align with tourism, 
            education, and investment goals.
          </p>
          <Link 
            href="/institutions" 
            className="inline-flex items-center px-6 py-3 bg-tricolor-blue text-white rounded-lg hover:bg-tricolor-blue/90 transition-colors font-medium"
          >
            For Institutions
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}