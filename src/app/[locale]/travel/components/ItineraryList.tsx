"use client";
import Link from 'next/link';
import ItineraryCard from '@/app/[locale]/travel/components/ItineraryCard';

export default function ItineraryList({ itineraries }: { itineraries: any[] }) {
  return (
    <div className="grid gap-8">
      {itineraries.map((itinerary) => (
        <ItineraryCard key={itinerary.id} itinerary={itinerary} />
      ))}
    </div>
  );
}
