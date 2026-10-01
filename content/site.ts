// Tout le contenu du site est ici. Les valeurs actuelles sont provisoires.
// Pour les photos : déposer le fichier dans public/images/ et indiquer
// son chemin, par exemple "/images/groupe.jpg".

export type Role =
  | "Soprano"
  | "Mezzo-soprano"
  | "Alto"
  | "Contre-ténor"
  | "Ténor"
  | "Baryton"
  | "Basse"
  | "Piano"
  | "Clavier";

export type Member = {
  name: string;
  role: Role;
};

export type Work = {
  title: string;
  composer: string;
};

export type Photo = {
  src: string;
  alt: string;
};

export type SoliEvent = {
  /** Format AAAA-MM-JJ */
  date: string;
  /** Format HH:MM, optionnel */
  time?: string;
  /** "public" : ouvert à tous — "private" : prestation privée */
  access: "public" | "private";
  /** Ex. « Concert de Noël », « Mariage », « Réception d'entreprise » */
  context: string;
  /** Optionnel tant que le lieu n'est pas confirmé */
  venue?: string;
  city: string;
  works: Work[];
  photo?: Photo;
  /** Lien billetterie ou réservation, affiché seulement pour un événement public */
  ticketUrl?: string;
  /** Info pratique, ex. « Entrée libre » */
  note?: string;
};

export type Media = {
  title: string;
  /** Identifiant de la vidéo YouTube (la partie après « v= » dans l'URL) */
  youtubeId: string;
};

export type Social = {
  label: string;
  url: string;
};

export const site = {
  name: "Soli7",
  tagline: "Ensemble vocal lyrique",
  description:
    "Soli7 réunit six voix lyriques accompagnées d'une pianiste, autour d'un répertoire allant de l'opéra à la mélodie, de l'air sacré au contemporain.",
  email: "ensemble.soli7@gmail.com",

  about: [
    "Soli7 est un ensemble de six chanteurs lyriques et d'une pianiste, né de l'envie de partager le plaisir de chanter.",
    "Des airs d'opéra aux pièces sacrées, en solo, en duo ou en tutti, l'ensemble construit des programmes sur mesure, en concert ou lors d'événements privés.",
  ],

  groupPhoto: {
    src: "/images/groupe.jpg",
    alt: "Les six chanteurs et la pianiste de l'ensemble Soli7, réunis et souriants",
  } as Photo | undefined,

  members: [
    { name: "Stéphanie", role: "Soprano" },
    { name: "Isabelle", role: "Soprano" },
    { name: "Alexandra", role: "Mezzo-soprano" },
    { name: "Caroline", role: "Alto" },
    { name: "Didier", role: "Ténor" },
    { name: "Antoine", role: "Baryton" },
    { name: "Marie-Marguerite", role: "Clavier" },
  ] satisfies Member[],

  events: [
    {
      date: "2026-11-28",
      access: "public",
      context: "Concert vocal — Musique sacrée, opéra, mélodie",
      city: "Chartres",
      works: [],
    },
    {
      date: "2026-03-22",
      access: "public",
      context: "Concert de musique sacrée",
      venue: "Église Saint-Philippe-Saint-Jacques, place de la Mairie",
      city: "Châtillon",
      works: [],
      note: "Entrée libre",
    },
  ] satisfies SoliEvent[] as SoliEvent[],

  media: [] as Media[],

  /** Lien vers un profil Spotify, SoundCloud, etc. — optionnel */
  listenUrl: undefined as Social | undefined,

  socials: [] as Social[],
};
