"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TeamTeaser() {
  return (
    <section className="section bg-[#0b2e4b] text-white relative overflow-hidden">
      <div className="container-custom grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/team/gruppenfoto.jpg"
              alt="Team von Schreiner Heizungstechnik"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-[#c9742a] rounded-2xl px-6 py-5 shadow-xl hidden md:block">
            <div className="font-display text-3xl font-semibold leading-none">
              29
            </div>
            <div className="text-xs uppercase tracking-[0.14em] mt-1 opacity-90">
              starke Köpfe
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-6"
        >
          <div className="eyebrow-light mb-5">Unser Team</div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Menschen, die zu Ihnen passen.
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-4">
            Hinter jedem Projekt stehen erfahrene Meister, Monteure und Planer
            — viele davon seit Jahrzehnten im Betrieb. Sie sehen bei uns immer
            das gleiche Gesicht von der ersten Beratung bis zur Übergabe.
          </p>
          <p className="text-white/65 leading-relaxed mb-10">
            Inhabergeführt in der zweiten Generation. Kurze Wege, klare
            Ansagen, ehrliche Termine.
          </p>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-[#f0b074] font-medium hover:gap-3 transition-all"
          >
            Lernen Sie das Team kennen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
