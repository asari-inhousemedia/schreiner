"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "50+", label: "Jahre Tübinger Handwerk" },
  { value: "29", label: "Mitarbeitende im Team" },
  { value: "1.000+", label: "Bäder & Heizungen umgesetzt" },
  { value: "1972", label: "gegründet von Familie Schreiner" },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-[#e3dfd8]">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="text-center md:text-left"
            >
              <div className="font-display text-5xl md:text-6xl font-semibold text-[#0e3a5f] leading-none mb-2.5">
                {s.value}
              </div>
              <div className="text-[#5c6470] text-sm md:text-[15px]">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
