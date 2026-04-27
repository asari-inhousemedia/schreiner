import { site } from "@/lib/site-config";

export const metadata = {
  title: "Datenschutz — Schreiner Heizungstechnik",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container-custom max-w-3xl">
        <div className="eyebrow mb-4">Rechtliches</div>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-3 text-[#1f2428]">
          Datenschutz
        </h1>
        <p className="text-sm text-[#5c6470] mb-10 italic">
          Hinweis: Demo-Stand für Pitch-Zwecke. Wird vor Live-Gang DSGVO-konform
          ausgearbeitet (Cookie-Banner, Auftragsverarbeitung Google Gemini etc.).
        </p>

        <div className="space-y-8 text-[#1f2428]">
          <div>
            <h2 className="font-display text-xl font-semibold mb-3">1. Verantwortlich</h2>
            <p className="leading-relaxed">
              {site.company}<br />
              {site.address.street}, {site.address.zip} {site.address.city}<br />
              E-Mail: {site.email}<br />
              Telefon: {site.phone}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold mb-3">2. Erhobene Daten</h2>
            <p className="leading-relaxed text-[#5c6470]">
              Wir erheben personenbezogene Daten ausschließlich, wenn Sie uns
              diese im Rahmen unseres Anfrageformulars oder per E-Mail
              freiwillig zur Verfügung stellen. Dies umfasst Name, E-Mail,
              Telefonnummer und die Inhalte Ihrer Nachricht.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold mb-3">3. Zweck der Verarbeitung</h2>
            <p className="leading-relaxed text-[#5c6470]">
              Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage und
              zur Vertragsanbahnung verarbeitet. Eine Weitergabe an Dritte
              erfolgt nicht ohne Ihre ausdrückliche Einwilligung.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold mb-3">
              4. KI-Chatbot (Google Gemini)
            </h2>
            <p className="leading-relaxed text-[#5c6470]">
              Auf dieser Website können Sie freiwillig einen KI-Chatbot
              nutzen. Die Verarbeitung erfolgt über die Google Gemini API.
              Bitte geben Sie keine personenbezogenen Daten in den Chat ein.
              Im Rahmen der finalen Datenschutzerklärung wird ein
              Auftragsverarbeitungsvertrag dokumentiert.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold mb-3">5. Ihre Rechte</h2>
            <p className="leading-relaxed text-[#5c6470]">
              Sie haben jederzeit das Recht auf Auskunft (Art. 15 DSGVO),
              Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der
              Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und
              Widerspruch (Art. 21). Eine Beschwerde bei der zuständigen
              Aufsichtsbehörde ist möglich.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold mb-3">6. Hosting</h2>
            <p className="leading-relaxed text-[#5c6470]">
              Diese Demo-Website wird auf Vercel Inc. (USA / EU) gehostet.
              Vercel verarbeitet bei Aufruf der Seite technisch notwendige
              Daten (Server-Logs). Vor Live-Gang prüfen wir die finale
              Hosting-Wahl gemeinsam mit Ihnen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
