import ServiceHero from "@/components/sections/ServiceHero";
import ServiceContent from "@/components/sections/ServiceContent";
import FoerderBanner from "@/components/sections/FoerderBanner";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/lib/site-config";

export const metadata = {
  title: "Heizungstechnik in Tübingen — Schreiner Heizungstechnik",
  description:
    "Wärmepumpe, Gas-Brennwert, Fernwärme — wir planen und installieren Ihre neue Heizung. Inklusive BAFA-/KfW-Förderberatung 2026.",
};

const service = services[0];

const BLOCKS = [
  {
    title: "Wärmepumpe — leise, effizient, förderfähig",
    text: "Luft-, Sole- oder Wasser-Wärmepumpe — wir prüfen, was zu Ihrem Haus passt, planen die Hydraulik sauber und holen das Maximum an Förderung heraus.",
  },
  {
    title: "Gas-Brennwert & Hybrid",
    text: "Wo Wärmepumpen heute noch nicht passen, sind moderne Brennwert- oder Hybrid-Lösungen die ehrliche Antwort. Wir bauen so, dass Sie morgen erweitern können.",
  },
  {
    title: "Fernwärme-Anschluss",
    text: "Tübingen baut sein Fernwärmenetz aus. Wir übernehmen die komplette Hausstation und sorgen für reibungslose Inbetriebnahme.",
  },
  {
    title: "Förderung 2026 — wir kümmern uns",
    text: "BAFA-Heizungsförderung, KfW-Kredit, BEG-Einzelmaßnahmen: wir kennen die aktuellen Sätze, koordinieren mit dem Energieberater und übernehmen die Anträge.",
  },
];

export default function HeizungstechnikPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Heizungstechnik"
        title="Heizung, die einfach"
        highlight="läuft."
        intro="Vom ersten Beratungstermin bis zur Inbetriebnahme — wir planen Ihre Heizung passgenau, kümmern uns um Förderung und Behördengänge und liefern saubere Handwerksarbeit. Aus Tübingen, mit eigenem Team."
      />
      <ServiceContent
        intro="Eine neue Heizung ist nicht nur eine technische Entscheidung — sie ist eine Investition in die nächsten 15 bis 20 Jahre. Wir nehmen uns Zeit, hören zu und sagen Ihnen ehrlich, was funktioniert."
        blocks={BLOCKS}
        bullets={[...service.bullets, "Eigene Service-Techniker für Wartung & Notdienst"]}
      />
      <FoerderBanner />
      <CTASection />
    </>
  );
}
