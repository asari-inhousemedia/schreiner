"use client";

import { useReducer, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Flame,
  Bath,
  Sun,
  Wrench,
  Sparkles,
  Home,
  Building2,
  Building,
  Box,
  Zap,
  Calendar,
  Clock,
  ThumbsUp,
  ThumbsDown,
  HelpCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import ChoiceCard from "./ChoiceCard";
import {
  type FunnelState,
  initialState,
  type ServiceChoice,
  type ObjectChoice,
  type TimingChoice,
  type FoerderChoice,
  SERVICE_LABELS,
  OBJECT_LABELS,
  TIMING_LABELS,
  FOERDER_LABELS,
} from "./funnel-types";

type Action =
  | { type: "set"; field: keyof FunnelState; value: string | number | undefined }
  | { type: "next" }
  | { type: "back" };

function reducer(state: FunnelState, action: Action): FunnelState {
  switch (action.type) {
    case "set":
      return { ...state, [action.field]: action.value };
    case "next":
      return { ...state, step: state.step + 1 };
    case "back":
      return { ...state, step: Math.max(0, state.step - 1) };
  }
}

const TOTAL_STEPS = 6;

const SERVICE_OPTIONS: { id: ServiceChoice; label: string; description: string; icon: typeof Flame }[] = [
  { id: "heizung", label: "Neue Heizung", description: "Wärmepumpe, Gas-Brennwert, Fernwärme", icon: Flame },
  { id: "bad", label: "Schönes Bad", description: "Komplettsanierung oder Teilumbau", icon: Bath },
  { id: "solar", label: "Solar & PV", description: "Photovoltaik, Speicher, Solarthermie", icon: Sun },
  { id: "kundendienst", label: "Wartung & Reparatur", description: "Bestehende Anlage prüfen oder reparieren", icon: Wrench },
  { id: "foerderung", label: "Förderberatung", description: "Welche Programme passen zu meinem Vorhaben?", icon: Sparkles },
];

const OBJECT_OPTIONS: { id: ObjectChoice; label: string; description: string; icon: typeof Home }[] = [
  { id: "efh", label: "Einfamilienhaus", description: "Eigenes Haus, eine Wohneinheit", icon: Home },
  { id: "mfh", label: "Mehrfamilienhaus", description: "Mehrere Wohneinheiten", icon: Building2 },
  { id: "gewerbe", label: "Gewerbe", description: "Büro, Werkstatt, Praxis, Hotel", icon: Building },
  { id: "sonstiges", label: "Sonstiges", description: "Etwas anderes — wir hören zu", icon: Box },
];

const TIMING_OPTIONS: { id: TimingChoice; label: string; description: string; icon: typeof Zap }[] = [
  { id: "sofort", label: "So schnell wie möglich", description: "Es brennt — wir melden uns vorrangig", icon: Zap },
  { id: "1_3", label: "In 1 – 3 Monaten", description: "Geplant, aber zeitnah", icon: Calendar },
  { id: "3_6", label: "In 3 – 6 Monaten", description: "Sorgfältig planen", icon: Clock },
  { id: "flexibel", label: "Zeitlich flexibel", description: "Wir finden gemeinsam einen Termin", icon: Clock },
];

const FOERDER_OPTIONS: { id: FoerderChoice; label: string; description: string; icon: typeof ThumbsUp }[] = [
  { id: "ja", label: "Ja, bitte mitprüfen", description: "Wir holen das Maximum heraus", icon: ThumbsUp },
  { id: "beraten", label: "Bitte beraten Sie mich", description: "Ich weiß noch nicht genug — sagen Sie's mir", icon: HelpCircle },
  { id: "nein", label: "Nein, danke", description: "Ich brauche keine Förderung", icon: ThumbsDown },
];

export default function FunnelWizard() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const progress = Math.min(((state.step + 1) / TOTAL_STEPS) * 100, 100);

  const canProceed = () => {
    switch (state.step) {
      case 0: return !!state.service;
      case 1: return !!state.object;
      case 2: return !!state.timing;
      case 3: return !!state.foerderung;
      case 4: return state.name.length >= 2 && /\S+@\S+\.\S+/.test(state.email);
      case 5: return true;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      if (!res.ok) throw new Error("submit failed");
      router.push("/danke");
    } catch (e) {
      setError("Etwas ist schief gelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns an.");
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between text-xs uppercase tracking-[0.14em] text-[#5c6470] mb-3">
          <span>Schritt {Math.min(state.step + 1, TOTAL_STEPS)} von {TOTAL_STEPS}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 bg-[#e3dfd8] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#c9742a]"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={state.step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {state.step === 0 && (
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3 text-[#1f2428]">
                Was können wir für Sie tun?
              </h2>
              <p className="text-[#5c6470] mb-8">Wählen Sie aus, worum es Ihnen geht — gerne auch mehr im Gesprächstermin.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {SERVICE_OPTIONS.map((opt) => (
                  <ChoiceCard
                    key={opt.id}
                    icon={opt.icon}
                    label={opt.label}
                    description={opt.description}
                    selected={state.service === opt.id}
                    onClick={() => dispatch({ type: "set", field: "service", value: opt.id })}
                  />
                ))}
              </div>
            </div>
          )}

          {state.step === 1 && (
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3 text-[#1f2428]">
                Um welches Objekt geht es?
              </h2>
              <p className="text-[#5c6470] mb-8">Damit wir die richtige Person aus unserem Team einplanen.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {OBJECT_OPTIONS.map((opt) => (
                  <ChoiceCard
                    key={opt.id}
                    icon={opt.icon}
                    label={opt.label}
                    description={opt.description}
                    selected={state.object === opt.id}
                    onClick={() => dispatch({ type: "set", field: "object", value: opt.id })}
                  />
                ))}
              </div>
            </div>
          )}

          {state.step === 2 && (
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3 text-[#1f2428]">
                Wann soll's losgehen?
              </h2>
              <p className="text-[#5c6470] mb-8">Wir geben Ihnen einen ehrlichen Termin — keine Phantasiezahlen.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {TIMING_OPTIONS.map((opt) => (
                  <ChoiceCard
                    key={opt.id}
                    icon={opt.icon}
                    label={opt.label}
                    description={opt.description}
                    selected={state.timing === opt.id}
                    onClick={() => dispatch({ type: "set", field: "timing", value: opt.id })}
                  />
                ))}
              </div>
            </div>
          )}

          {state.step === 3 && (
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3 text-[#1f2428]">
                Sollen wir Förderungen für Sie mitprüfen?
              </h2>
              <p className="text-[#5c6470] mb-8">Wir kennen BAFA, KfW und BEG 2026 — und holen heraus, was geht.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {FOERDER_OPTIONS.map((opt) => (
                  <ChoiceCard
                    key={opt.id}
                    icon={opt.icon}
                    label={opt.label}
                    description={opt.description}
                    selected={state.foerderung === opt.id}
                    onClick={() => dispatch({ type: "set", field: "foerderung", value: opt.id })}
                  />
                ))}
              </div>
            </div>
          )}

          {state.step === 4 && (
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3 text-[#1f2428]">
                Wie erreichen wir Sie?
              </h2>
              <p className="text-[#5c6470] mb-8">Wir melden uns innerhalb eines Werktags zurück.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#1f2428] mb-2">Ihr Name *</label>
                  <input
                    type="text"
                    value={state.name}
                    onChange={(e) => dispatch({ type: "set", field: "name", value: e.target.value })}
                    placeholder="Vorname Nachname"
                    className="form-input"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1f2428] mb-2">E-Mail *</label>
                    <input
                      type="email"
                      value={state.email}
                      onChange={(e) => dispatch({ type: "set", field: "email", value: e.target.value })}
                      placeholder="ihre@adresse.de"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1f2428] mb-2">Telefon</label>
                    <input
                      type="tel"
                      value={state.phone}
                      onChange={(e) => dispatch({ type: "set", field: "phone", value: e.target.value })}
                      placeholder="07071 12345"
                      className="form-input"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1f2428] mb-2">
                    Möchten Sie noch etwas dazu sagen? (optional)
                  </label>
                  <textarea
                    value={state.message}
                    onChange={(e) => dispatch({ type: "set", field: "message", value: e.target.value })}
                    placeholder="z.B. Baujahr, aktuelle Heizung, besondere Wünsche..."
                    rows={4}
                    className="form-input resize-none"
                  />
                </div>
                {/* Honeypot */}
                <input
                  type="text"
                  name="website_url"
                  value={state.honeypot}
                  onChange={(e) => dispatch({ type: "set", field: "honeypot", value: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                />
              </div>
            </div>
          )}

          {state.step === 5 && (
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3 text-[#1f2428]">
                Passt das so?
              </h2>
              <p className="text-[#5c6470] mb-8">Kurz nochmal die Übersicht — dann geht's los.</p>
              <div className="bg-white border border-[#e3dfd8] rounded-2xl p-6 md:p-8 space-y-4">
                <SummaryRow label="Anliegen" value={state.service ? SERVICE_LABELS[state.service] : "—"} />
                <SummaryRow label="Objekt" value={state.object ? OBJECT_LABELS[state.object] : "—"} />
                <SummaryRow label="Zeitrahmen" value={state.timing ? TIMING_LABELS[state.timing] : "—"} />
                <SummaryRow label="Förderung" value={state.foerderung ? FOERDER_LABELS[state.foerderung] : "—"} />
                <hr className="border-[#e3dfd8]" />
                <SummaryRow label="Name" value={state.name} />
                <SummaryRow label="E-Mail" value={state.email} />
                {state.phone && <SummaryRow label="Telefon" value={state.phone} />}
                {state.message && <SummaryRow label="Nachricht" value={state.message} />}
              </div>
              {error && (
                <div className="mt-4 p-4 rounded-xl bg-[#fbe6e2] text-[#b44130] text-sm">{error}</div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between items-center mt-10">
        <button
          onClick={() => dispatch({ type: "back" })}
          disabled={state.step === 0 || submitting}
          className="inline-flex items-center gap-2 px-5 py-3 text-sm text-[#5c6470] disabled:opacity-30 hover:text-[#0e3a5f] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Zurück
        </button>

        {state.step < 5 ? (
          <button
            onClick={() => dispatch({ type: "next" })}
            disabled={!canProceed()}
            className="btn-primary disabled:opacity-40 disabled:hover:translate-y-0"
          >
            Weiter <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="btn-accent disabled:opacity-60"
          >
            {submitting ? (
              <>Sende…</>
            ) : (
              <>
                Anfrage absenden <CheckCircle2 className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
      <div className="text-xs uppercase tracking-[0.14em] text-[#5c6470] sm:w-32 shrink-0">
        {label}
      </div>
      <div className="text-[#1f2428] flex-1">{value}</div>
    </div>
  );
}
