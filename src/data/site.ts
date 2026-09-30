/**
 * ─────────────────────────────────────────────────────────────
 *  STRESS GOD — EDIT EVERYTHING HERE
 * ─────────────────────────────────────────────────────────────
 *  This is the single file to change site text, links, artists
 *  and media. No other file needs editing for content updates.
 *
 *  Anything marked PLACEHOLDER still needs the real value.
 * ─────────────────────────────────────────────────────────────
 */

import heroCrowd from "@/assets/hero-crowd.jpg.asset.json";
import stageMic from "@/assets/stage-mic.jpg.asset.json";
import duoStage from "@/assets/duo-stage.jpg.asset.json";
import crowdFloor from "@/assets/crowd-floor.jpg.asset.json";
import blueStage from "@/assets/blue-stage.jpg.asset.json";

export const PLACEHOLDER_LINK = "#placeholder";

export const site = {
  name: "STRESS GOD",
  tagline: "Culture. Community. Expression.",
  intro:
    "Stress God is a creative community built around artists, culture, music and expression.",
  established: "Est. —", // PLACEHOLDER: add the founding year
  images: {
    hero: heroCrowd.url,
  },
};

/** Contact details — PLACEHOLDER until the real ones are supplied. */
export const contact = {
  email: "", // PLACEHOLDER e.g. "hello@stressgod.com"
  bookingEmail: "", // PLACEHOLDER e.g. "booking@stressgod.com"
  location: "", // PLACEHOLDER e.g. "Lagos, Nigeria"
};

export type SocialKey =
  | "whatsapp"
  | "instagram"
  | "youtube"
  | "x"
  | "tiktok"
  | "facebook"
  | "contact";

export interface SocialLink {
  key: SocialKey;
  label: string;
  /** Short line shown next to the button on the Connect page. */
  note: string;
  /** Real external URL. Leave as PLACEHOLDER_LINK until provided. */
  url: string;
  /** Marks the primary community entry point. */
  featured?: boolean;
}

/**
 * SOCIAL / COMMUNITY LINKS
 * Replace PLACEHOLDER_LINK with the real URL.
 * WhatsApp community invites look like: https://chat.whatsapp.com/XXXXXXXX
 */
export const socials: SocialLink[] = [
  {
    key: "whatsapp",
    label: "WhatsApp Community",
    note: "The main room. Everything happens here first.",
    url: PLACEHOLDER_LINK, // PLACEHOLDER
    featured: true,
  },
  {
    key: "instagram",
    label: "Instagram",
    note: "Photos, drops and day-to-day.",
    url: PLACEHOLDER_LINK, // PLACEHOLDER
  },
  {
    key: "youtube",
    label: "YouTube",
    note: "Sessions, videos and long-form.",
    url: PLACEHOLDER_LINK, // PLACEHOLDER
  },
  {
    key: "x",
    label: "X / Twitter",
    note: "Announcements and conversation.",
    url: PLACEHOLDER_LINK, // PLACEHOLDER
  },
  {
    key: "tiktok",
    label: "TikTok",
    note: "Short clips from the collective.",
    url: PLACEHOLDER_LINK, // PLACEHOLDER
  },
  {
    key: "facebook",
    label: "Facebook",
    note: "Events and community updates.",
    url: PLACEHOLDER_LINK, // PLACEHOLDER
  },
  {
    key: "contact",
    label: "Contact / Booking",
    note: "Work with us, book us, reach the team.",
    url: PLACEHOLDER_LINK, // PLACEHOLDER: use "mailto:booking@..." once known
  },
];

/** Home page — the three featured blocks. */
export const featured = [
  {
    index: "01",
    title: "Artists",
    copy: "The people who make the work. Musicians, writers, photographers, designers and everyone in between.",
    image: duoStage.url,
    to: "/artists" as const,
  },
  {
    index: "02",
    title: "Music",
    copy: "Sessions, releases and the sound the community is building together.",
    image: stageMic.url,
    to: "/media" as const,
  },
  {
    index: "03",
    title: "Community",
    copy: "Rooms, nights and conversations. The part that does not fit in a feed.",
    image: crowdFloor.url,
    to: "/connect" as const,
  },
];

/** Home "Who we are" + About page copy. PLACEHOLDER text — replace with the real story. */
export const about = {
  short:
    "We are a community before we are anything else. Stress God exists so artists have somewhere to build, share work, and be taken seriously — a place where culture, music and expression sit in the same room.",
  sections: [
    {
      heading: "Who we are",
      body: [
        "PLACEHOLDER — Stress God is a creative community built around artists, culture, music and expression. Replace this paragraph with the real introduction to who Stress God is and the people behind it.",
        "PLACEHOLDER — a second paragraph describing the character of the community and what it feels like from the inside.",
      ],
    },
    {
      heading: "Where we came from",
      body: [
        "PLACEHOLDER — the origin story. Where the community started, the city, the room, the first people involved.",
      ],
    },
    {
      heading: "How it started",
      body: [
        "PLACEHOLDER — how the community formed and grew, and the moments that shaped it.",
      ],
    },
    {
      heading: "What we represent",
      body: [
        "PLACEHOLDER — the values and the standard. What Stress God stands for and refuses to compromise on.",
      ],
    },
    {
      heading: "Artists, music and culture",
      body: [
        "PLACEHOLDER — the relationship between the community and the artists, the music and the wider culture it belongs to.",
      ],
    },
    {
      heading: "Where we are going",
      body: [
        "PLACEHOLDER — the vision for the future: what is being built next and who it is for.",
      ],
    },
  ],
};

export interface Artist {
  name: string;
  role: string;
  bio: string;
  image: string;
  links: { label: string; url: string }[];
}

/** PLACEHOLDER profiles — replace names, bios, photos and links. */
export const artists: Artist[] = [
  {
    name: "Artist Name",
    role: "Vocalist / Writer",
    bio: "PLACEHOLDER — a short two-line bio for this member of the community. Replace with the real profile.",
    image: stageMic.url,
    links: [
      { label: "Instagram", url: PLACEHOLDER_LINK },
      { label: "YouTube", url: PLACEHOLDER_LINK },
    ],
  },
  {
    name: "Artist Name",
    role: "Photographer",
    bio: "PLACEHOLDER — a short two-line bio for this member of the community. Replace with the real profile.",
    image: blueStage.url,
    links: [
      { label: "Instagram", url: PLACEHOLDER_LINK },
      { label: "X", url: PLACEHOLDER_LINK },
    ],
  },
  {
    name: "Artist Name",
    role: "Producer / DJ",
    bio: "PLACEHOLDER — a short two-line bio for this member of the community. Replace with the real profile.",
    image: duoStage.url,
    links: [
      { label: "Instagram", url: PLACEHOLDER_LINK },
      { label: "TikTok", url: PLACEHOLDER_LINK },
    ],
  },
  {
    name: "Artist Name",
    role: "Designer",
    bio: "PLACEHOLDER — a short two-line bio for this member of the community. Replace with the real profile.",
    image: crowdFloor.url,
    links: [{ label: "Instagram", url: PLACEHOLDER_LINK }],
  },
];

export type MediaCategory = "Photos" | "Videos" | "Events" | "Artist moments";

export interface MediaItem {
  title: string;
  category: MediaCategory;
  caption: string;
  image: string;
  /** Set for videos: a full YouTube watch URL or the 11-character video ID. */
  youtube?: string;
  /** Layout weight in the gallery grid. */
  wide?: boolean;
}

/** PLACEHOLDER media — swap in real photos and YouTube links. */
/** Live photos from the community's shows — swap captions and add YouTube links. */
export const media: MediaItem[] = [
  {
    title: "Phone lights",
    category: "Events",
    caption: "The room lit up mid-set.",
    image: heroCrowd.url,
    wide: true,
  },
  {
    title: "On the mic",
    category: "Videos",
    caption: "PLACEHOLDER — add the real YouTube link",
    image: stageMic.url,
    youtube: "", // PLACEHOLDER: e.g. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
  },
  {
    title: "Full room",
    category: "Events",
    caption: "Packed from the bar to the front of house.",
    image: crowdFloor.url,
  },
  {
    title: "Two on stage",
    category: "Artist moments",
    caption: "Trading verses under the stage lights.",
    image: duoStage.url,
  },
  {
    title: "Blue set",
    category: "Photos",
    caption: "Late set, blue lights.",
    image: blueStage.url,
    wide: true,
  },
  {
    title: "From the floor",
    category: "Photos",
    caption: "The crowd mid-song.",
    image: crowdFloor.url,
  },
  {
    title: "Front of stage",
    category: "Artist moments",
    caption: "Eye level with the performance.",
    image: heroCrowd.url,
  },
  {
    title: "Session light",
    category: "Photos",
    caption: "Warm room, cold drinks, live sound.",
    image: stageMic.url,
  },
];

export const nav = [
  { label: "About", to: "/about" as const },
  { label: "Artists", to: "/artists" as const },
  { label: "Media", to: "/media" as const },
  { label: "Connect", to: "/connect" as const },
];
