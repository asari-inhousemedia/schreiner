"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { site } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden hero-grad text-white">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-custom relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow-light mb-6"
          >
            Tübingen · seit {site.founded}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[1.04] mb-6"
          >
            Wärme, Wasser,
            <br />
            <span className="text-[#f0b074]">Wohlfühlen.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed"
          >
            Heizung, Bad und Solar aus einer Hand — vom Tübinger Familienbetrieb,
            der seit über 50 Jahren für ehrliches Handwerk steht. Inklusive
            Förderberatung BAFA &amp; KfW 2026.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <Link
              href="/anfrage"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#c9742a] text-white font-medium text-base hover:bg-[#a85d1f] transition-all shadow-lg shadow-[#c9742a]/30 hover:-translate-y-0.5"
            >
              Anfrage in 60 Sekunden
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${site.phoneLink.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 backdrop-blur text-white font-medium text-base border border-white/20 hover:bg-white/15 transition-all"
            >
              <Phone className="w-4 h-4" />
              {site.phone}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/70"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#f0b074]" />
              Meisterbetrieb · Innung
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#f0b074]" />
              Förderberatung inklusive
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f0b074]" />
              Festtermine, ein Ansprechpartner
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 p-7 shadow-2xl">
            <div className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-[#c9742a] text-white text-[11px] uppercase tracking-[0.14em] font-medium">
              Förderung 2026
            </div>
            <div className="text-white/70 text-sm mb-2 mt-2">
              Heizungstausch &amp; Modernisierung
            </div>
            <div className="font-display text-5xl md:text-6xl font-semibold mb-4">
              bis 70%
            </div>
            <div className="text-white/85 leading-relaxed mb-6">
              staatliche Förderung sichern. Wir prüfen für Sie BAFA, KfW und
              BEG — kostenlos im Erstgespräch.
            </div>
            <Link
              href="/anfrage"
              className="inline-flex items-center gap-2 text-[#f0b074] font-medium hover:gap-3 transition-all"
            >
              Förderung jetzt prüfen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
