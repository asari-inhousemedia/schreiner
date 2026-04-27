import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { site } from "@/lib/site-config";

export const metadata = {
  title: "Kontakt — Schreiner Heizungstechnik Tübingen",
  description:
    "So erreichen Sie uns: Anschrift, Telefon, E-Mail, Öffnungszeiten. Anton & Ulf Schreiner GmbH & Co. KG, Tübingen.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="relative pt-36 pb-16 hero-grad text-white overflow-hidden">
        <div className="container-custom relative">
          <div className="eyebrow-light mb-5">Kontakt</div>
          <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.05] mb-6 max-w-3xl">
            So erreichen Sie uns —{" "}
            <span className="text-[#f0b074]">persönlich.</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl leading-relaxed">
            Telefon, E-Mail, oder direkt vorbei in der Werkstatt — wir freuen
            uns auf Ihre Anfrage.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <div className="card flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0e3a5f] text-white grid place-items-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-[#5c6470] mb-1.5">
                  Anschrift
                </div>
                <div className="font-medium text-[#1f2428] leading-relaxed">
                  {site.company}
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}
                </div>
              </div>
            </div>

            <div className="card flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0e3a5f] text-white grid place-items-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-[#5c6470] mb-1.5">
                  Telefon
                </div>
                <a
                  href={`tel:${site.phoneLink.replace(/\s+/g, "")}`}
                  className="font-medium text-[#1f2428] hover:text-[#0e3a5f] text-lg"
                >
                  {site.phone}
                </a>
              </div>
            </div>

            <div className="card flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0e3a5f] text-white grid place-items-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-[#5c6470] mb-1.5">
                  E-Mail
                </div>
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-[#1f2428] hover:text-[#0e3a5f]"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="card flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0e3a5f] text-white grid place-items-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-[#5c6470] mb-1.5">
                  Öffnungszeiten
                </div>
                <div className="space-y-1 text-[#1f2428]">
                  {site.hours.map((h) => (
                    <div key={h.days}>
                      <span className="font-medium">{h.days}:</span>{" "}
                      <span className="text-[#5c6470]">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0b2e4b] text-white rounded-3xl p-10 flex flex-col">
            <div className="eyebrow-light mb-5">Lieber direkt anfragen?</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-5">
              60 Sekunden — und wir wissen, worum es geht.
            </h2>
            <p className="text-white/75 leading-relaxed mb-8">
              Mit unserem Anfrage-Funnel beantworten Sie ein paar kurze Fragen.
              Wir melden uns innerhalb eines Werktags mit einer ersten
              ehrlichen Einschätzung — inklusive Förderpotenzial.
            </p>
            <Link
              href="/anfrage"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#c9742a] text-white font-medium hover:bg-[#a85d1f] transition-all w-fit"
            >
              Anfrage starten
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
