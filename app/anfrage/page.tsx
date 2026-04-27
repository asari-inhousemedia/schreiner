import FunnelWizard from "@/components/funnel/FunnelWizard";

export const metadata = {
  title: "Anfrage starten — Schreiner Heizungstechnik",
  description:
    "In 60 Sekunden zu einer ehrlichen Antwort. Beantworten Sie ein paar kurze Fragen — wir melden uns innerhalb eines Werktags zurück.",
};

export default function AnfragePage() {
  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <div className="eyebrow justify-center mb-4">Anfrage in 60 Sekunden</div>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-tight text-[#1f2428] mb-4">
            Lassen Sie uns Ihr Vorhaben verstehen.
          </h1>
          <p className="text-lg text-[#5c6470] leading-relaxed">
            Sechs kurze Schritte — kein Login, keine versteckten Felder. Wir
            melden uns innerhalb eines Werktags zurück.
          </p>
        </div>
        <FunnelWizard />
      </div>
    </section>
  );
}
