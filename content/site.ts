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
  | "Piano";

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
  venue: string;
  city: string;
  works: Work[];
  photo?: Photo;
  /** Lien billetterie ou réservation, affiché seulement pour un événement public */
  ticketUrl?: string;
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
    { name: "Prénom Nom", role: "Piano" },
  ] satisfies Member[],

  events: [
    {
      date: "2026-12-13",
      time: "17:00",
      access: "public",
      context: "Concert de Noël",
      venue: "Église Saint-Exemple",
      city: "Paris",
      works: [
        { title: "Cantique de Jean Racine", composer: "Gabriel Fauré" },
        { title: "Ave verum corpus", composer: "W. A. Mozart" },
        { title: "Minuit, chrétiens", composer: "Adolphe Adam" },
      ],
    },
    {
      date: "2027-02-06",
      access: "private",
      context: "Réception d'entreprise",
      venue: "Salons de l'Hôtel Exemple",
      city: "Versailles",
      works: [
        { title: "Barcarolle (Les Contes d'Hoffmann)", composer: "Jacques Offenbach" },
        { title: "Libiamo ne' lieti calici (La Traviata)", composer: "Giuseppe Verdi" },
      ],
    },
    {
      date: "2026-09-12",
      access: "private",
      context: "Mariage",
      venue: "Château Exemple",
      city: "Chantilly",
      works: [
        { title: "Duo des fleurs (Lakmé)", composer: "Léo Delibes" },
        { title: "O mio babbino caro (Gianni Schicchi)", composer: "Giacomo Puccini" },
      ],
    },
    {
      date: "2026-06-21",
      time: "20:30",
      access: "public",
      context: "Fête de la musique",
      venue: "Jardin Exemple",
      city: "Paris",
      works: [
        { title: "Va, pensiero (Nabucco)", composer: "Giuseppe Verdi" },
        { title: "Habanera (Carmen)", composer: "Georges Bizet" },
        { title: "Chœur des bohémiens (Il Trovatore)", composer: "Giuseppe Verdi" },
      ],
    },
  ] satisfies SoliEvent[] as SoliEvent[],

  media: [] as Media[],

  /** Lien vers un profil Spotify, SoundCloud, etc. — optionnel */
  listenUrl: undefined as Social | undefined,

  socials: [] as Social[],
};
