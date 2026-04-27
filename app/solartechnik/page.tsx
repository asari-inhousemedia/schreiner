import ServiceHero from "@/components/sections/ServiceHero";
import ServiceContent from "@/components/sections/ServiceContent";
import FoerderBanner from "@/components/sections/FoerderBanner";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/lib/site-config";

export const metadata = {
  title: "Solartechnik & Photovoltaik — Schreiner Heizungstechnik",
  description:
    "Photovoltaik, Solarthermie und Speicher — kombiniert mit Wärmepumpe für maximale Unabhängigkeit. Mit Förderberatung 2026.",
};

const service = services[2];

const BLOCKS = [
  {
    title: "Photovoltaik mit Speicher",
    text: "Strom vom eigenen Dach — wir planen die Anlage so, dass möglichst viel davon bei Ihnen bleibt. Inklusive Speicher und smarter Steuerung.",
  },
  {
    title: "Solarthermie für Warmwasser",
    text: "Wenn das Dach für mehr nicht reicht, ist Solarthermie oft die elegantere Lösung — günstiger Warmwasser-Boost, der jahrzehntelang läuft.",
  },
  {
    title: "Hybrid: Solar + Wärmepumpe",
    text: "Die Königsklasse: PV plus Wärmepumpe plus Speicher. Wir planen so, dass die Komponenten wirklich zusammenarbeiten — nicht nur nebeneinander stehen.",
  },
  {
    title: "Förderung & Steuer 2026",
    text: "Nullsteuersatz auf private PV, KfW-Kredite, BAFA für Solarthermie — wir kennen die Förderlandschaft und sagen Ihnen, was sich für Sie rechnet.",
  },
];

export default function SolartechnikPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Solartechnik"
        title="Strom und Wärme —"
        highlight="vom eigenen Dach."
        intro="Wir kombinieren Photovoltaik, Speicher und Wärmepumpe zu einem System, das wirklich zusammenarbeitet. Geplant, montiert und gewartet vom selben Team."
      />
      <ServiceContent
        intro="Solar lohnt sich heute mehr denn je — wenn man es richtig plant. Wir schauen uns Ihr Dach, Ihren Verbrauch und Ihre Heizung an, bevor wir empfehlen."
        blocks={BLOCKS}
        bullets={[...service.bullets, "Eigene Wartung & Reinigung der Anlage"]}
      />
      <FoerderBanner />
      <CTASection />
    </>
  );
}
