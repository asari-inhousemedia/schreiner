import Image from "next/image";
import { team, site } from "@/lib/site-config";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Unser Team — Schreiner Heizungstechnik Tübingen",
  description:
    "Lernen Sie das Team von Schreiner Heizungstechnik kennen — Meister, Monteure und Planer aus Tübingen.",
};

export default function TeamPage() {
  return (
    <>
      <section className="relative pt-36 pb-16 hero-grad text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container-custom relative">
          <div className="eyebrow-light mb-5">Unser Team</div>
          <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.05] mb-6 max-w-4xl">
            Menschen, die zu <span className="text-[#f0b074]">Ihnen passen.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
            Hinter {site.company.split(" GmbH")[0]} stehen 29 Köpfe — Meister,
            Monteure, Planer, Büro. Viele davon seit Jahrzehnten im Betrieb. Ein
            paar von ihnen stellen wir Ihnen hier vor.
          </p>
        </div>
      </section>

      <section className="py-20 -mt-10">
        <div className="container-custom">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-20">
            <Image
              src="/team/gruppenfoto.jpg"
              alt="Team von Schreiner Heizungstechnik"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>

          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-4">Schlüsselpersonen</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight text-[#1f2428]">
              Sechs Gesichter, ein Team.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((person) => (
              <div
                key={person.name}
                className="group bg-white rounded-2xl border border-[#e3dfd8] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#ece8e2]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-[0.14em] text-[#a85d1f] mb-2">
                    {person.title}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#1f2428] mb-1.5">
                    {person.name}
                  </h3>
                  <p className="text-sm text-[#5c6470]">{person.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
