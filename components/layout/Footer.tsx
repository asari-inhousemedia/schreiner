import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site, nav, services } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-[#0b2e4b] text-white pt-20 pb-10 mt-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-10 h-10 rounded-xl bg-white text-[#0e3a5f] grid place-items-center font-display font-semibold text-lg">
                S
              </span>
              <div className="leading-tight">
                <div className="font-display text-lg font-semibold">
                  Schreiner
                </div>
                <div className="text-[10px] tracking-[0.18em] uppercase text-white/60">
                  Heizungstechnik
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {site.company}. Ihr Tübinger Handwerksbetrieb für Heizung,
              Sanitär, Solar und Kundendienst — seit über 50 Jahren.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.14em] text-white/60 mb-4">
              Leistungen
            </h3>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-white/85 hover:text-[#c9742a] transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.14em] text-white/60 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-white/85 hover:text-[#c9742a] transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/anfrage"
                  className="text-white/85 hover:text-[#c9742a] transition-colors"
                >
                  Anfrage starten
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.14em] text-white/60 mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-[#c9742a] shrink-0" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-[#c9742a] shrink-0" />
                <a
                  href={`tel:${site.phoneLink.replace(/\s+/g, "")}`}
                  className="hover:text-[#c9742a]"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-[#c9742a] shrink-0" />
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-[#c9742a]"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 text-[#c9742a] shrink-0" />
                <div>
                  {site.hours.map((h) => (
                    <div key={h.days}>
                      <span className="font-medium">{h.days}:</span> {h.time}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/55">
          <div>© {new Date().getFullYear()} {site.company}. Alle Rechte vorbehalten.</div>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
