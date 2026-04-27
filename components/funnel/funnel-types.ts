export type ServiceChoice =
  | "heizung"
  | "bad"
  | "solar"
  | "kundendienst"
  | "foerderung";

export type ObjectChoice = "efh" | "mfh" | "gewerbe" | "sonstiges";

export type TimingChoice = "sofort" | "1_3" | "3_6" | "flexibel";

export type FoerderChoice = "ja" | "nein" | "beraten";

export type FunnelState = {
  step: number;
  service?: ServiceChoice;
  object?: ObjectChoice;
  timing?: TimingChoice;
  foerderung?: FoerderChoice;
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string;
};

export const initialState: FunnelState = {
  step: 0,
  name: "",
  email: "",
  phone: "",
  message: "",
  honeypot: "",
};

export const SERVICE_LABELS: Record<ServiceChoice, string> = {
  heizung: "Heizung",
  bad: "Schönes Bad",
  solar: "Solar / PV",
  kundendienst: "Wartung / Kundendienst",
  foerderung: "Förderberatung",
};

export const OBJECT_LABELS: Record<ObjectChoice, string> = {
  efh: "Einfamilienhaus",
  mfh: "Mehrfamilienhaus",
  gewerbe: "Gewerbe",
  sonstiges: "Sonstiges",
};

export const TIMING_LABELS: Record<TimingChoice, string> = {
  sofort: "So schnell wie möglich",
  "1_3": "In 1 – 3 Monaten",
  "3_6": "In 3 – 6 Monaten",
  flexibel: "Zeitlich flexibel",
};

export const FOERDER_LABELS: Record<FoerderChoice, string> = {
  ja: "Ja, bitte mitprüfen",
  nein: "Nein, danke",
  beraten: "Bitte beraten Sie mich",
};
