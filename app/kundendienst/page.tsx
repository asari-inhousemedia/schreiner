import ServiceHero from "@/components/sections/ServiceHero";
import ServiceContent from "@/components/sections/ServiceContent";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/lib/site-config";

export const metadata = {
  title: "Kundendienst & Wartung — Schreiner Heizungstechnik Tübingen",
  description:
    "Wartung, Reparaturen, Notdienst — wir sind schnell vor Ort. Wartungsverträge halten Ihre Anlage langfristig effizient.",
};

const service = services[3];

const BLOCKS = [
  {
    title: "Wartung & Inspektion",
    text: "Einmal im Jahr richtig schauen — und Ihre Heizung läuft länger und sparsamer. Wir dokumentieren sauber und sagen Ihnen, was wirklich nötig ist.",
  },
  {
    title: "Reparaturen aller Marken",
    text: "Egal welcher Hersteller — unsere Service-Techniker sind eingespielt und haben die gängigsten Ersatzteile direkt im Servicewagen.",
  },
  {
    title: "Wartungsverträge",
    text: "Feste Preise, feste Termine, Vorrang im Notfall. Mit einem Wartungsvertrag müssen Sie nie wieder daran denken.",
  },
  {
    title: "Notdienst für Bestandskunden",
    text: "Heizung aus, Wasser läuft? Wenn Sie unser Kunde sind, sind wir schnell da. Tübingen und Umgebung, persönlich erreichbar.",
  },
];

export default function KundendienstPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Kundendienst"
        title="Wenn's klemmt —"
        highlight="sind wir da."
        intro="Wartung, Reparatur und Notdienst aus Tübingen. Persönlich, schnell und mit eigenen Service-Technikern, die Ihre Anlage kennen."
      />
      <ServiceContent
        intro="Eine gute Heizung braucht jemanden, der sich kümmert. Wir sind dieser Jemand — auch nach 10, 15 oder 20 Jahren."
        blocks={BLOCKS}
        bullets={[...service.bullets, "Persönlicher Ansprechpartner pro Kunde"]}
      />
      <CTASection />
    </>
  );
}
