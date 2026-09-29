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

import heroImage from "@/assets/hero.jpg";
import featureArtists from "@/assets/feature-artists.jpg";
import featureMusic from "@/assets/feature-music.jpg";
import featureCommunity from "@/assets/feature-community.jpg";
import artist1 from "@/assets/artist-1.jpg";
import artist2 from "@/assets/artist-2.jpg";
import artist3 from "@/assets/artist-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

export const PLACEHOLDER_LINK = "#placeholder";

export const site = {
  name: "STRESS GOD",
  tagline: "Culture. Community. Expression.",
  intro:
    "Stress God is a creative community built around artists, culture, music and expression.",
  established: "Est. —", // PLACEHOLDER: add the founding year
  images: {
    hero: heroImage,
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
    image: featureArtists,
    to: "/artists" as const,
  },
  {
    index: "02",
    title: "Music",
    copy: "Sessions, releases and the sound the community is building together.",
    image: featureMusic,
    to: "/media" as const,
  },
  {
    index: "03",
    title: "Community",
    copy: "Rooms, nights and conversations. The part that does not fit in a feed.",
    image: featureCommunity,
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
    image: artist1,
    links: [
      { label: "Instagram", url: PLACEHOLDER_LINK },
      { label: "YouTube", url: PLACEHOLDER_LINK },
    ],
  },
  {
    name: "Artist Name",
    role: "Photographer",
    bio: "PLACEHOLDER — a short two-line bio for this member of the community. Replace with the real profile.",
    image: artist2,
    links: [
      { label: "Instagram", url: PLACEHOLDER_LINK },
      { label: "X", url: PLACEHOLDER_LINK },
    ],
  },
  {
    name: "Artist Name",
    role: "Producer / DJ",
    bio: "PLACEHOLDER — a short two-line bio for this member of the community. Replace with the real profile.",
    image: artist3,
    links: [
      { label: "Instagram", url: PLACEHOLDER_LINK },
      { label: "TikTok", url: PLACEHOLDER_LINK },
    ],
  },
  {
    name: "Artist Name",
    role: "Designer",
    bio: "PLACEHOLDER — a short two-line bio for this member of the community. Replace with the real profile.",
    image: featureArtists,
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
export const media: MediaItem[] = [
  {
    title: "Street session",
    category: "Photos",
    caption: "PLACEHOLDER caption",
    image: heroImage,
    wide: true,
  },
  {
    title: "Studio night",
    category: "Videos",
    caption: "PLACEHOLDER — add the real YouTube link",
    image: featureMusic,
    youtube: "", // PLACEHOLDER: e.g. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
  },
  {
    title: "Live room",
    category: "Events",
    caption: "PLACEHOLDER caption",
    image: featureCommunity,
  },
  {
    title: "Between takes",
    category: "Artist moments",
    caption: "PLACEHOLDER caption",
    image: artist3,
  },
  {
    title: "Rooftop",
    category: "Photos",
    caption: "PLACEHOLDER caption",
    image: gallery1,
    wide: true,
  },
  {
    title: "Portrait",
    category: "Artist moments",
    caption: "PLACEHOLDER caption",
    image: artist2,
  },
  {
    title: "Studio portrait",
    category: "Photos",
    caption: "PLACEHOLDER caption",
    image: featureArtists,
  },
  {
    title: "Community night",
    category: "Events",
    caption: "PLACEHOLDER caption",
    image: artist1,
  },
];

export const nav = [
  { label: "About", to: "/about" as const },
  { label: "Artists", to: "/artists" as const },
  { label: "Media", to: "/media" as const },
  { label: "Connect", to: "/connect" as const },
];
