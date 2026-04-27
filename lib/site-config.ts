export const site = {
  company: "Anton & Ulf Schreiner GmbH & Co. KG",
  short: "Schreiner Heizungstechnik",
  tagline: "Heizung. Bad. Solar. Aus Tübingen.",
  city: "Tübingen",
  address: {
    street: "Vor dem Kreuzberg 30",
    zip: "72070",
    city: "Tübingen",
  },
  phone: "07071 40720",
  phoneLink: "+4970714072 0",
  email: "info@ulf-schreiner.de",
  hours: [
    { days: "Mo – Do", time: "7:30 – 12:00 & 13:00 – 16:30" },
    { days: "Freitag", time: "7:30 – 13:00" },
  ],
  founded: 1972,
  social: {
    facebook: "https://www.facebook.com/",
  },
} as const;

export const nav = [
  { href: "/", label: "Start" },
  { href: "/heizungstechnik", label: "Heizung" },
  { href: "/schoene-baeder", label: "Bäder" },
  { href: "/solartechnik", label: "Solar" },
  { href: "/kundendienst", label: "Kundendienst" },
  { href: "/team", label: "Team" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const team = [
  {
    name: "Ulf Schreiner",
    title: "Inhaber & Gründer",
    note: "Dipl.-Ing. (FH) Versorgungstechnik",
    image: "/team/ulf-schreiner.jpg",
  },
  {
    name: "Anton Schreiner",
    title: "Meister",
    note: "Im Betrieb seit 2023",
    image: "/team/anton-schreiner.jpg",
  },
  {
    name: "Ludmila Schreiner",
    title: "Büro & Verwaltung",
    note: "Auftragsabwicklung",
    image: "/team/ludmila-schreiner.jpg",
  },
  {
    name: "Bernd Göhring",
    title: "Meister",
    note: "Im Betrieb seit 1999",
    image: "/team/bernd-goehring.jpg",
  },
  {
    name: "Robert Braun",
    title: "Projektleiter",
    note: "Im Betrieb seit 2005",
    image: "/team/robert-braun.jpg",
  },
  {
    name: "Antje Wiede",
    title: "Büro",
    note: "Im Betrieb seit 2008",
    image: "/team/antje-wiede.jpg",
  },
] as const;

export const services = [
  {
    slug: "heizungstechnik",
    title: "Heizungstechnik",
    short: "Gas-Brennwert, Wärmepumpe, Fernwärme",
    description:
      "Von der Beratung bis zur Inbetriebnahme — wir planen Ihre Heizung passgenau und kümmern uns um die Förderung.",
    bullets: [
      "Gas-Brennwert & Hybridlösungen",
      "Wärmepumpen (Luft, Sole, Wasser)",
      "Fernwärme-Anschluss in Tübingen",
      "Förderberatung BAFA / KfW (BEG 2026)",
    ],
  },
  {
    slug: "schoene-baeder",
    title: "Schöne Bäder",
    short: "Komplettbäder vom Handwerksbetrieb",
    description:
      "Vom ersten Entwurf bis zur Übergabe — Ihr neues Bad aus einer Hand. Klare Termine, ein Ansprechpartner, Tübinger Qualität.",
    bullets: [
      "Komplette Badsanierung",
      "Barrierefreie Bäder",
      "Sanitär & Fliesenarbeiten koordiniert",
      "3D-Planung auf Wunsch",
    ],
  },
  {
    slug: "solartechnik",
    title: "Solartechnik",
    short: "Photovoltaik & Solarthermie",
    description:
      "Strom und Warmwasser vom eigenen Dach. Wir kombinieren Solar mit Wärmepumpe oder Pufferspeicher — und holen das Maximum an Förderung heraus.",
    bullets: [
      "Photovoltaik-Anlagen",
      "Solarthermie für Warmwasser",
      "Speicher & Hybrid-Systeme",
      "Anbindung an die Heizung",
    ],
  },
  {
    slug: "kundendienst",
    title: "Kundendienst",
    short: "Wartung, Notdienst, Reparatur",
    description:
      "Wenn etwas tropft oder die Heizung ausfällt — wir sind schnell vor Ort. Mit Wartungsverträgen halten Sie Ihre Anlage langfristig effizient.",
    bullets: [
      "Wartung & Inspektion",
      "Reparaturen aller Marken",
      "Wartungsverträge",
      "Notdienst für Bestandskunden",
    ],
  },
] as const;
