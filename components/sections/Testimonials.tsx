"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "Zur Reparatur und Wartung unserer Heizung mussten an verschiedenen Tagen Monteure zu uns kommen. Firma Schreiner bot uns häufig Termine noch am selben Tag, spätestens jedoch am nächsten Tag an! Man muss fast schon aufpassen, die E-Mails schnell genug zu lesen, denn sonst ist der vorgeschlagene Termin womöglich schon vorbei.",
    name: "Frank Löffler",
    when: "vor 2 Monaten",
  },
  {
    text: "Freundliches Personal und mir wurde schnell geholfen. Die Preise sind sehr fair.",
    name: "Dom Be",
    when: "vor 7 Monaten",
  },
  {
    text: "Dieses Jahr haben wir im Büro (Bayer & Kastner GmbH Tübingen) die Mischbatterie in der Küche und 2 Toilettensitze tauschen lassen. Schneller Service, freundlich, kompetent.",
    name: "Sa Na",
    when: "vor einem Jahr",
  },
];

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.61z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="section bg-[#f7f5f2]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-14 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-4">Stimmen unserer Kunden</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight text-[#1f2428]">
              Vertrauen, das gewachsen ist.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="inline-flex items-center gap-4 bg-white border border-[#e3dfd8] rounded-2xl px-5 py-4 shadow-[0_8px_30px_-12px_rgba(14,58,95,0.12)]">
              <GoogleG className="w-9 h-9 shrink-0" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-semibold text-[#1f2428] leading-none">
                    5,0
                  </span>
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]"
                      />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-[#5c6470] mt-1">
                  Bewertungen auf Google
                </div>
              </div>
            </div>
          </div>
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
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]"
                    />
                  ))}
                </div>
                <GoogleG className="w-5 h-5" />
              </div>
              <p className="text-[#1f2428]/90 leading-relaxed mb-6 flex-1">
                „{t.text}"
              </p>
              <div className="pt-5 border-t border-[#e3dfd8] flex items-center justify-between gap-3">
                <div className="font-medium text-[#1f2428]">{t.name}</div>
                <div className="text-xs text-[#5c6470]">{t.when}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
