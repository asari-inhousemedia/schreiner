"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site-config";

export default function CTASection() {
  return (
    <section className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl hero-grad text-white p-10 md:p-16 overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="eyebrow-light mb-5">Lassen Sie uns sprechen</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-5">
                In 60 Sekunden zu einer ehrlichen Antwort.
              </h2>
              <p className="text-white/75 text-lg leading-relaxed">
                Beantworten Sie ein paar kurze Fragen — wir melden uns
                innerhalb eines Werktags mit einer ersten Einschätzung
                inklusive Förderpotenzial.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-auto">
              <Link
                href="/anfrage"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#c9742a] text-white font-medium text-base hover:bg-[#a85d1f] transition-all whitespace-nowrap"
              >
                Anfrage starten
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${site.phoneLink.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur text-white font-medium border border-white/20 hover:bg-white/15 transition-all whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                Direkt anrufen
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
