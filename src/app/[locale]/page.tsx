import Ribbon from "@/components/Ribbon";
import Hero from "./components/layouts/Hero";
import FooterCTA from "./components/layouts/FooterCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist">
      <Ribbon />

      {/* Hero Section */}
      <Hero />

      {/* Footer CTA */}
      <FooterCTA />
    </div>
  );
}
