"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site-config";

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  intro: string;
};

export default function ServiceHero({ eyebrow, title, highlight, intro }: Props) {
  return (
    <section className="relative pt-36 pb-20 hero-grad text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow-light mb-5"
        >
          {eyebrow}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.05] mb-6 max-w-4xl"
        >
          {title}{" "}
          {highlight && <span className="text-[#f0b074]">{highlight}</span>}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed mb-10"
        >
          {intro}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap gap-3"
        >
          <Link
            href="/anfrage"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#c9742a] text-white font-medium hover:bg-[#a85d1f] transition-all shadow-lg shadow-[#c9742a]/30 hover:-translate-y-0.5"
          >
            Anfrage starten
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`tel:${site.phoneLink.replace(/\s+/g, "")}`}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 backdrop-blur text-white font-medium border border-white/20 hover:bg-white/15 transition-all"
          >
            <Phone className="w-4 h-4" />
            {site.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
