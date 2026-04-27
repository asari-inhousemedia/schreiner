"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, Bath, Sun, Wrench, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site-config";

const ICONS = {
  heizungstechnik: Flame,
  "schoene-baeder": Bath,
  solartechnik: Sun,
  kundendienst: Wrench,
} as const;

export default function ServicesGrid() {
  return (
    <section id="leistungen" className="section bg-[#f7f5f2]">
      <div className="container-custom">
        <div className="max-w-3xl mb-14">
          <div className="eyebrow mb-4">Unsere Leistungen</div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-4 text-[#1f2428]">
            Vom Brennwert bis zur barrierefreien Dusche.
          </h2>
          <p className="text-lg text-[#5c6470] leading-relaxed">
            Wir kümmern uns um alles, was mit Wasser, Wärme und Komfort zu tun
            hat — geplant, koordiniert und sauber ausgeführt von einem Team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, idx) => {
            const Icon = ICONS[service.slug as keyof typeof ICONS];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
              >
                <Link
                  href={`/${service.slug}`}
                  className="card group block h-full relative overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#0e3a5f] text-white grid place-items-center group-hover:bg-[#c9742a] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#5c6470] group-hover:text-[#0e3a5f] group-hover:rotate-12 transition-all" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-2 text-[#1f2428]">
                    {service.title}
                  </h3>
                  <p className="text-[#5c6470] mb-5 leading-relaxed">
                    {service.short}
                  </p>
                  <ul className="space-y-1.5 text-sm text-[#1f2428]/85">
                    {service.bullets.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#c9742a]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
