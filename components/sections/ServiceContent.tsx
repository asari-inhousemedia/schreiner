"use client";

import { motion } from "framer-motion";
import { CheckCircle2, type LucideIcon } from "lucide-react";

type Block = {
  title: string;
  text: string;
};

type Props = {
  intro: string;
  blocks: Block[];
  bullets: string[];
  ProcessIcon?: LucideIcon;
};

export default function ServiceContent({ intro, blocks, bullets }: Props) {
  return (
    <section className="section">
      <div className="container-custom grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <p className="text-xl text-[#1f2428] leading-relaxed mb-12 font-display">
            {intro}
          </p>

          <div className="space-y-10">
            {blocks.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l-2 border-[#c9742a] pl-6 py-1"
              >
                <h3 className="font-display text-2xl font-semibold mb-2 text-[#1f2428]">
                  {b.title}
                </h3>
                <p className="text-[#5c6470] leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl border border-[#e3dfd8] p-8 sticky top-28"
          >
            <h3 className="font-display text-xl font-semibold mb-5 text-[#1f2428]">
              Was bei uns dazugehört
            </h3>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[15px]">
                  <CheckCircle2 className="w-5 h-5 text-[#0e3a5f] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
