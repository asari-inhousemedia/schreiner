"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight, Calculator, FileCheck, Users } from "lucide-react";

const STEPS = [
  {
    icon: Calculator,
    title: "Wir prüfen Ihre Förderung",
    text: "BAFA, KfW, BEG 2026 — wir kennen die aktuellen Sätze und sagen Ihnen ehrlich, was möglich ist.",
  },
  {
    icon: FileCheck,
    title: "Wir übernehmen die Anträge",
    text: "Sie unterschreiben, wir erledigen den Papierkram. Auch der Energieberater kommt aus unserem Netzwerk.",
  },
  {
    icon: Users,
    title: "Vor-Ort-Termin in Tübingen",
    text: "Persönlich, ohne Druck, kostenlos. Wir schauen uns Ihr Haus an und planen passgenau.",
  },
];

export default function FoerderBanner() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="relative rounded-3xl overflow-hidden bg-[#f7f5f2] border border-[#e3dfd8] p-10 md:p-16">
          <div
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 90% 10%, rgba(201, 116, 42, 0.15), transparent 50%), radial-gradient(ellipse at 10% 90%, rgba(14, 58, 95, 0.08), transparent 50%)",
            }}
          />
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c9742a]/10 text-[#a85d1f] text-xs uppercase tracking-[0.14em] font-medium mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                Förderung 2026
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-5 text-[#1f2428]">
                Bis zu 70% Förderung — wir machen den Papierkram.
              </h2>
              <p className="text-lg text-[#5c6470] leading-relaxed">
                Heizungstausch oder Sanierung kann teuer sein — muss es aber
                nicht. Wir kennen die aktuellen Programme von BAFA und KfW und
                holen für Sie heraus, was rauszuholen ist.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-[#e3dfd8]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0e3a5f] text-white grid place-items-center">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <span className="font-display text-3xl font-semibold text-[#0e3a5f]/30">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-[#1f2428]">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#5c6470] leading-relaxed">{s.text}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/anfrage" className="btn-accent">
              Förderung kostenlos prüfen lassen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
