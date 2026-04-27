"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "Wir wollten endlich raus aus der alten Ölheizung. Schreiner hat uns ehrlich beraten, die Förderung beantragt und in zwei Wochen montiert — sauber, freundlich, pünktlich.",
    name: "Familie M.",
    place: "Tübingen-Lustnau",
  },
  {
    text: "Unser neues Bad ist ein Traum. Ein Ansprechpartner für alles, klare Termine, fairer Preis. Wir würden jederzeit wieder bei Schreiner anrufen.",
    name: "B. Schäfer",
    place: "Rottenburg",
  },
  {
    text: "Solar plus Wärmepumpe — das hatten wir nirgends sonst so klar erklärt bekommen. Top-Beratung, top-Umsetzung, alles aus einer Hand.",
    name: "T. Kühnle",
    place: "Mössingen",
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-[#f7f5f2]">
      <div className="container-custom">
        <div className="max-w-2xl mb-14">
          <div className="eyebrow mb-4">Stimmen unserer Kunden</div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight text-[#1f2428]">
            Vertrauen, das gewachsen ist.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card flex flex-col"
            >
              <Quote className="w-7 h-7 text-[#c9742a] mb-5" />
              <p className="text-[#1f2428]/85 leading-relaxed mb-6 flex-1">
                „{t.text}"
              </p>
              <div className="pt-5 border-t border-[#e3dfd8]">
                <div className="font-medium text-[#1f2428]">{t.name}</div>
                <div className="text-sm text-[#5c6470]">{t.place}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-[#5c6470]/70 text-center mt-10 italic">
          Beispielhafte Kundenstimmen — werden vor Live-Gang gegen echte
          Referenzen ausgetauscht.
        </p>
      </div>
    </section>
  );
}
