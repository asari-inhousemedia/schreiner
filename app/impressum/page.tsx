import { site } from "@/lib/site-config";

export const metadata = {
  title: "Impressum — Schreiner Heizungstechnik",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <section className="pt-32 pb-32 md:pb-40">
      <div className="container-custom max-w-3xl mx-auto">
        <div className="eyebrow mb-4">Rechtliches</div>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-3 text-[#1f2428]">
          Impressum
        </h1>
        <p className="text-sm text-[#5c6470] mb-10 italic">
          Hinweis: Demo-Stand für Pitch-Zwecke. Wird vor Live-Gang 1:1 mit den
          finalen Angaben des Kunden ersetzt.
        </p>

        <div className="prose prose-neutral max-w-none space-y-8 text-[#1f2428]">
          <div>
            <h2 className="font-display text-xl font-semibold mb-3">Angaben gemäß § 5 TMG</h2>
            <p className="leading-relaxed">
              {site.company}<br />
              {site.address.street}<br />
              {site.address.zip} {site.address.city}<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold mb-3">Kontakt</h2>
            <p className="leading-relaxed">
              Telefon: {site.phone}<br />
              E-Mail: {site.email}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold mb-3">Vertretungsberechtigt</h2>
            <p className="leading-relaxed">Geschäftsführer: Ulf Schreiner</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold mb-3">Registereintrag</h2>
            <p className="leading-relaxed">
              Registergericht: Amtsgericht Stuttgart<br />
              Registernummer: HRA &lt;wird ergänzt&gt;
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold mb-3">Umsatzsteuer-ID</h2>
            <p className="leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: &lt;wird ergänzt&gt;
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="leading-relaxed">
              Ulf Schreiner<br />
              {site.address.street}, {site.address.zip} {site.address.city}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold mb-3">Haftung für Inhalte</h2>
            <p className="leading-relaxed text-[#5c6470]">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Verpflichtungen zur Entfernung oder Sperrung
              der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
