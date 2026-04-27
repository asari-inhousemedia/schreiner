import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FoerderBanner from "@/components/sections/FoerderBanner";
import TeamTeaser from "@/components/sections/TeamTeaser";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid />
      <FoerderBanner />
      <TeamTeaser />
      <Testimonials />
      <CTASection />
    </>
  );
}
