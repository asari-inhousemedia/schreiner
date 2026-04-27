import ServiceHero from "@/components/sections/ServiceHero";
import ServiceContent from "@/components/sections/ServiceContent";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/lib/site-config";

export const metadata = {
  title: "Schöne Bäder — Schreiner Heizungstechnik Tübingen",
  description:
    "Komplette Badsanierung, barrierefreie Bäder, Sanitär & Fliesenarbeiten aus einer Hand — vom Tübinger Familienbetrieb.",
};

const service = services[1];

const BLOCKS = [
  {
    title: "Komplettbad — alles aus einer Hand",
    text: "Sie unterschreiben einmal — wir koordinieren Sanitär, Fliesenleger und Elektrik. Klare Termine, ein Ansprechpartner, eine Schlussrechnung.",
  },
  {
    title: "Barrierefrei und schön",
    text: "Bodengleiche Dusche, breitere Türen, durchdachte Lichtplanung — barrierefrei muss nicht klinisch aussehen. Wir gestalten so, dass es heute wie in 20 Jahren stimmt.",
  },
  {
    title: "Planung mit echten Visualisierungen",
    text: "Auf Wunsch erstellen wir eine 3D-Planung, damit Sie Ihr Bad sehen, bevor wir bauen. Material- und Fliesenmuster zeigen wir Ihnen vor Ort.",
  },
  {
    title: "Tübinger Qualität, faire Preise",
    text: "Wir machen keine Billig-Sanierungen. Aber wir machen ehrliche Angebote — transparent, ohne versteckte Kosten und mit Festtermin.",
  },
];

export default function BaederPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Schöne Bäder"
        title="Ihr neues Bad —"
        highlight="aus einer Hand."
        intro="Vom ersten Entwurf bis zur Übergabe planen, koordinieren und bauen wir Ihr Traumbad. Mit klaren Terminen, einem Ansprechpartner und der Tübinger Qualität, die seit über 50 Jahren unser Versprechen ist."
      />
      <ServiceContent
        intro="Ein Bad ist mehr als Sanitär — es ist Ihr persönlicher Rückzugsort. Wir nehmen das ernst und planen so, wie Sie tatsächlich leben."
        blocks={BLOCKS}
        bullets={[...service.bullets, "Wir koordinieren alle Gewerke für Sie"]}
      />
      <CTASection />
    </>
  );
}
