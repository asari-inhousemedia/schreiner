import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { site, nav, services } from "@/lib/site-config";

const MAP_LAT = 48.5257;
const MAP_LON = 9.0249;
const MAP_BBOX = "9.0149,48.5207,9.0349,48.5307";
const MAP_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${MAP_BBOX}&layer=mapnik&marker=${MAP_LAT},${MAP_LON}`;
const MAP_LINK = `https://www.openstreetmap.org/?mlat=${MAP_LAT}&mlon=${MAP_LON}#map=17/${MAP_LAT}/${MAP_LON}`;

export default function Footer() {
  return (
    <footer className="bg-[#0b2e4b] text-white pt-20 pb-10 mt-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6" aria-label="Schreiner Heizungstechnik — Startseite">
              <Image
                src="/logo.svg"
                alt="Schreiner Heizungstechnik"
                width={220}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              {site.company}. Ihr Tübinger Handwerksbetrieb für Heizung,
              Sanitär, Solar und Kundendienst — seit über 50 Jahren.
            </p>
          </div>

          <div className="lg:col-span-2">
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

          <div className="lg:col-span-2">
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

          <div className="lg:col-span-4 flex flex-col gap-5">
            <div>
              <h3 className="text-sm uppercase tracking-[0.14em] text-white/60 mb-4">
                Kontakt
              </h3>
              <ul className="space-y-3 text-sm text-white/85">
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
                    className="hover:text-[#c9742a] break-all"
                  >
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-2.5">
                  <Clock className="w-4 h-4 mt-0.5 text-[#c9742a] shrink-0" />
                  <div>
                    {site.hours.map((h) => (
                      <div key={h.days}>
                        <span className="font-medium">{h.days}:</span>{" "}
                        {h.time}
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/15 hover:ring-[#c9742a] transition-all"
              aria-label={`${site.address.street}, ${site.address.zip} ${site.address.city} auf OpenStreetMap öffnen`}
            >
              <div className="relative h-44 sm:h-48 bg-white">
                <iframe
                  src={MAP_SRC}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  title={`Standort ${site.short}`}
                  className="pointer-events-none"
                />
              </div>
              <div className="flex items-start gap-2.5 px-4 py-3 bg-white text-[#1f2428]">
                <MapPin className="w-4 h-4 mt-0.5 text-[#c9742a] shrink-0" />
                <div className="flex-1 text-xs leading-relaxed">
                  <div className="font-medium">{site.address.street}</div>
                  <div className="text-[#5c6470]">
                    {site.address.zip} {site.address.city}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#5c6470] group-hover:text-[#c9742a] group-hover:rotate-12 transition-all shrink-0" />
              </div>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/55">
          <div>
            © {new Date().getFullYear()} {site.company}. Alle Rechte vorbehalten.
          </div>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
