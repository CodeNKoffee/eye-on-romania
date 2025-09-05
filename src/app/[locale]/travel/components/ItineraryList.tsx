"use client";
import Link from 'next/link';
import ItineraryCard from '@/app/[locale]/travel/components/ItineraryCard';

export default function ItineraryList({ itineraries }: { itineraries: any[] }) {
  return (
    <div className="grid gap-4 sm:gap-6 lg:gap-8">
      {itineraries.map((itinerary) => (
        <ItineraryCard key={itinerary.id} itinerary={itinerary} />
      ))}
    </div>
  );
}
