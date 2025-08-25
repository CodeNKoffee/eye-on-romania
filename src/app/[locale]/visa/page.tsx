"use client";
import Ribbon from "@/components/Ribbon";
import VisaHero from "./components/layout/VisaHero";
import VisaTypes from "./components/layout/VisaTypes";
import ChecklistDownload from "./components/layout/ChecklistDownload";
import VisaChecklist from "./components/layout/VisaChecklist";
import OfficialSources from "./components/layout/OfficialSources";
import FooterCTA from "./components/layout/FooterCTA";

export default function VisaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist">
      <Ribbon />
      
      {/* Hero Section */}
      <VisaHero />
      
      {/* Checklist Download */}
      <ChecklistDownload />
      
      {/* Visa Types */}
      <VisaTypes />
      
      {/* Main Checklist */}
      <VisaChecklist />
      
      {/* Official Sources */}
      <OfficialSources />
      
      {/* Footer CTA */}
      <FooterCTA />
    </div>
  );
}