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
  tagline: "Africa to the World. Turn Stress Into Creation.",
  intro:
    "StressGods is a creative collective founded by Mo Haze and Steve Ricks — music, sports, fashion, culture, craftsmanship and self-expression under one movement. Welcome to the official StressGods Sierra Leone community.",
  established: "Est. —", // PLACEHOLDER: add the founding year
  images: {
    hero: heroCrowd.url,
  },
};

/** Contact details — PLACEHOLDER until the real ones are supplied. */
export const contact = {
  email: "", // PLACEHOLDER e.g. "hello@stressgod.com"
  bookingEmail: "", // PLACEHOLDER e.g. "booking@stressgod.com"
  location: "Sierra Leone",
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

/** About page copy — from the official StressGods Sierra Leone Community text. */
export const about = {
  short:
    "StressGods is a creative collective founded by Mo Haze and Steve Ricks. With roots deeply connected to Africa and Jamaica, the duo brings together music, sports, fashion, culture, craftsmanship and self-expression — a movement built around community, creativity and opportunity.",
  sections: [
    {
      heading: "Who we are",
      body: [
        "StressGods is a dynamic creative collective founded by two influential and culturally rich creators, Mo Haze and Steve Ricks. With roots deeply connected to Africa and Jamaica, the duo brings together music, sports, fashion, culture, craftsmanship, creativity, natural remedies and self-expression.",
        "The vision extends beyond entertainment. StressGods is about creating a space where people can express themselves, discover their talents, connect with others, and transform everyday pressure into something meaningful.",
      ],
    },
    {
      heading: "Why StressGods",
      body: [
        "The name represents a philosophy centred around creativity as a form of relief and expression. Music, art, fashion, craftsmanship, sports and culture can all provide ways for people to escape everyday pressure, reconnect with themselves and discover new forms of inspiration.",
        "StressGods explores creativity as a source of expression, relief, positive energy and connection — while embracing traditional knowledge, craftsmanship and natural remedies as part of a broader relationship between culture, creativity and wellbeing.",
        "Turn stress into creation.",
      ],
    },
    {
      heading: "The Sierra Leone connection",
      body: [
        "With African roots that connect deeply with Sierra Leone, StressGods is building a growing community of supporters, creatives, athletes, entrepreneurs and fans across the country.",
        "The Sierra Leone community represents an important part of the broader StressGods vision: creating a platform where music, sports, creativity, culture and entrepreneurship come together — an environment where people can connect, collaborate, showcase their talents and discover opportunities that help them move forward.",
      ],
    },
    {
      heading: "Music, culture & expression",
      body: [
        "Music is at the heart of the StressGods movement. From Afrobeats and hip-hop to freestyle energy, experimental sounds and unexpected creative directions, StressGods embraces different sounds and styles without limiting creativity to one genre.",
        "Projects such as National Remedies reflect the movement's interest in combining music, culture, creativity and identity. StressGods is about exploring new ideas, breaking creative boundaries and keeping the energy moving.",
      ],
    },
    {
      heading: "Sports & community",
      body: [
        "The StressGods vision extends beyond music and fashion into sports and community development. One of the long-term goals is to establish StressGods FC and a StressGods Basketball Team in Sierra Leone.",
        "These teams and future sports initiatives are intended to create spaces where young people can develop their talents, compete, build discipline and connect with others — pathways for talented people who may not otherwise have access to the platforms, networks or opportunities they need.",
      ],
    },
    {
      heading: "The bigger vision",
      body: [
        "StressGods is also developing a distinctive clothing and fashion identity — combining culture, individuality, creativity, craftsmanship and modern streetwear into pieces that represent the spirit of the movement. Clothing can represent where someone comes from, what they believe and how they choose to express their identity.",
        "The long-term vision is a creative and community ecosystem where music, sports, fashion, craftsmanship, natural knowledge, creativity and community intersect. From Sierra Leone to Africa and eventually to the world — Africa to the World. Turn stress into creation.",
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

/** The founders — the only named members so far. Add individual profiles as the community grows. */
export const artists: Artist[] = [
  {
    name: "Mo Haze × Steve Ricks",
    role: "Founders of StressGods",
    bio: "The duo behind the movement. With roots deeply connected to Africa and Jamaica, they bring together music, sports, fashion, culture, craftsmanship and self-expression — and are building the StressGods community in Sierra Leone.",
    image: duoStage.url,
    links: [
      { label: "Instagram", url: PLACEHOLDER_LINK },
      { label: "YouTube", url: PLACEHOLDER_LINK },
    ],
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
