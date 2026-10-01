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
  /** Point de cadrage quand l'image est recadrée, ex. "30% center" (centré par défaut) */
  focus?: string;
};

/** Photo ou courte vidéo (MP4, quelques Mo maximum) d'un événement */
export type GalleryItem =
  | { type: "photo"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

export type SoliEvent = {
  /** Format AAAA-MM-JJ */
  date: string;
  /** Format HH:MM, optionnel */
  time?: string;
  /** "public" : ouvert à tous — "private" : prestation privée */
  access: "public" | "private";
  /** Ex. « Concert de Noël », « Mariage », « Réception d'entreprise » */
  context: string;
  /** Lieu et ville : optionnels tant qu'ils ne sont pas confirmés */
  venue?: string;
  city?: string;
  works: Work[];
  /** Miniature de la carte d'accueil — à défaut : affiche, 1re photo de la galerie, photo du lieu */
  thumbnail?: Photo;
  /** Photo du lieu */
  photo?: Photo;
  /** Affiche de l'événement, affichée en entier */
  poster?: Photo;
  /** Photos et courtes vidéos de l'événement */
  gallery?: GalleryItem[];
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
    { name: "Stéphanie Chenot", role: "Soprano" },
    { name: "Isabelle Nel", role: "Soprano" },
    { name: "Alexandra", role: "Mezzo-soprano" },
    { name: "Caroline", role: "Mezzo-soprano" },
    { name: "Didier Mauger", role: "Ténor" },
    { name: "Antoine", role: "Basse" },
    { name: "Marie-Marguerite", role: "Clavier" },
  ] satisfies Member[],

  events: [
    {
      date: "2026-12-20",
      access: "private",
      context: "Concert",
      venue: "EHPAD Le Grand Clos",
      city: "Le Plessis-Bouchard",
      thumbnail: {
        src: "/images/evenements/2026-12-20-le-plessis-bouchard/salon-grand-clos.jpg",
        alt: "Le salon de l'EHPAD Le Grand Clos, avec son piano à queue et sa cheminée",
        focus: "20% center",
      },
      works: [],
    },
    {
      date: "2026-11-28",
      access: "private",
      context: "Concert vocal — Musique sacrée, opéra, mélodie",
      venue: "Fondation d'Aligre et Marie-Thérèse, Ancienne Abbaye de Josaphat",
      city: "Lèves",
      works: [],
      thumbnail: {
        src: "/images/evenements/2026-11-28-leves/chapelle-josaphat.jpg",
        alt: "La chapelle de l'Ancienne Abbaye de Josaphat à Lèves",
        focus: "63% center",
      },
    },
    {
      date: "2026-03-22",
      access: "public",
      context: "Concert de musique sacrée",
      venue: "Église Saint-Philippe-Saint-Jacques, place de la Mairie",
      city: "Châtillon",
      works: [],
      note: "Entrée libre",
      thumbnail: {
        src: "/images/evenements/2026-03-22-chatillon/eglise.jpg",
        alt: "L'église Saint-Philippe-Saint-Jacques de Châtillon",
        focus: "center 25%",
      },
      gallery: [
        {
          type: "photo",
          src: "/images/evenements/2026-03-22-chatillon/ensemble-1.jpg",
          alt: "Soli7 en concert dans le chœur de l'église Saint-Philippe-Saint-Jacques de Châtillon",
        },
        {
          type: "photo",
          src: "/images/evenements/2026-03-22-chatillon/ensemble-2.jpg",
          alt: "Le salut final des artistes de Soli7, main dans la main, devant le public",
        },
      ],
    },
  ] satisfies SoliEvent[] as SoliEvent[],

  media: [] as Media[],

  /** Lien vers un profil Spotify, SoundCloud, etc. — optionnel */
  listenUrl: undefined as Social | undefined,

  socials: [] as Social[],
};
