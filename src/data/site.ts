/**
 * ─────────────────────────────────────────────────────────────
 *  STRESSGODS — EDIT EVERYTHING HERE
 * ─────────────────────────────────────────────────────────────
 *  This is the single file to change site text, links, artists
 *  and media. No other file needs editing for content updates.
 *
 *  Anything marked PLACEHOLDER still needs the real value.
 * ─────────────────────────────────────────────────────────────
 */

/** Original photos shipped with every independent deployment. */
export const siteImages = {
  heroCrowd: "/images/hero-crowd.jpg",
  stageMic: "/images/stage-mic.jpg",
  duoStage: "/images/duo-stage.jpg",
  crowdFloor: "/images/crowd-floor.jpg",
  blueStage: "/images/blue-stage.jpg",
  romanoPhoto: "/images/romano.jpg",
  slField: "/images/sierra-leone-field.jpg",
  slGroup: "/images/sierra-leone-group.jpg",
  slEnergy: "/images/sierra-leone-energy.jpg",
  slMasks: "/images/sierra-leone-masks.jpg",
  chapterOneStage: "/images/chapter-one-stage.jpg",
  chapterOneMic: "/images/chapter-one-mic.jpg",
  chapterOneBooth: "/images/chapter-one-booth.jpg",
  kojumakoju: "/images/kojumakoju-festival.jpg",
};

/** Clips shipped with every independent deployment. */
export const siteVideos = {
  kojumakoju: "/media/kojumakoju-festival.mp4",
  kojumakojuWebm: "/media/kojumakoju-festival.webm",
};

export const PLACEHOLDER_LINK = "#placeholder";

export const site = {
  name: "STRESSGODS",
  tagline: "Africa to the World. Turn Stress Into Creation.",
  intro:
    "StressGods is a creative collective founded by Mo Haze and Steve Ricks — music, sports, fashion, culture, craftsmanship and self-expression under one movement. This site is the home of the official StressGods Sierra Leone community.",
  established: "Est. 2013",
  images: {
    hero: siteImages.heroCrowd,
  },
};

/** Contact details — PLACEHOLDER until the real ones are supplied. */
export const contact = {
  email: "stressgods@gmail.com",
  bookingEmail: "stressgods@gmail.com",
  location: "Sierra Leone",
};

export type SocialKey =
  | "whatsapp"
  | "instagram"
  | "youtube"
  | "spotify"
  | "x"
  | "threads"
  | "tiktok"
  | "store"
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
    url: "https://chat.whatsapp.com/Hte8xp9lj14DKQ1CLCBXO6",
    featured: true,
  },
  {
    key: "instagram",
    label: "Instagram",
    note: "Photos, drops and day-to-day.",
    url: "https://www.instagram.com/stressgods/",
  },
  {
    key: "youtube",
    label: "YouTube",
    note: "Sessions, videos and long-form.",
    url: "https://www.youtube.com/@stressgods",
  },
  {
    key: "spotify",
    label: "Spotify",
    note: "Stream the music.",
    url: "https://open.spotify.com/artist/7GerkwZX0S7fy9mssayeeQ",
  },
  {
    key: "x",
    label: "X / Twitter",
    note: "Announcements and conversation.",
    url: "https://x.com/stressgods",
  },
  {
    key: "threads",
    label: "Threads",
    note: "Conversation and daily posts.",
    url: "https://www.threads.com/@stressgods",
  },
  {
    key: "tiktok",
    label: "TikTok",
    note: "Short clips from the collective.",
    url: "https://www.tiktok.com/@stressgods",
  },
  {
    key: "store",
    label: "Store",
    note: "Official store and visuals.",
    url: "https://stressgods.bandzoogle.com/visuals",
  },
  {
    key: "facebook",
    label: "Facebook",
    note: "Videos, events and community updates.",
    url: "https://www.facebook.com/StressGods/videos/",
  },
  {
    key: "contact",
    label: "Contact / Booking",
    note: "Work with us, book us, reach the team.",
    url: "mailto:stressgods@gmail.com",
  },
];

/** Home page — the three featured blocks. */
export const featured = [
  {
    index: "01",
    title: "Artists",
    copy: "The people who make the work. Musicians, writers, photographers, designers and everyone in between.",
    image: siteImages.duoStage,
    to: "/artists" as const,
  },
  {
    index: "02",
    title: "Music",
    copy: "Sessions, releases and the sound the community is building together.",
    image: siteImages.stageMic,
    to: "/media" as const,
  },
  {
    index: "03",
    title: "Community",
    copy: "Rooms, nights and conversations. The part that does not fit in a feed.",
    image: siteImages.crowdFloor,
    to: "/connect" as const,
  },
];

/** About page copy — from the official StressGods Sierra Leone Community text. */
export const about = {
  short:
    "StressGods is a creative collective founded by Mo Haze and Steve Ricks. With roots deeply connected to Africa and Jamaica, the duo brings together music, sports, fashion, culture, craftsmanship and self-expression — a movement built around community, creativity and opportunity. This site is the home of its Sierra Leone community.",
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
      heading: "The Sierra Leone community",
      body: [
        "This website is the StressGods Sierra Leone community — not a slice of something happening elsewhere. It is the home of a growing circle of supporters, creatives, athletes, entrepreneurs and fans across the country, with African roots that connect deeply with Sierra Leone.",
        "It is where music, sports, creativity, culture and entrepreneurship come together: an environment where people can connect, collaborate, showcase their talents and discover opportunities that help them move forward.",
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

/** The founders — one profile each. */
export const artists: Artist[] = [
  {
    name: "Steve Ricks",
    role: "Founder of StressGods",
    bio: "Founder of StressGods. With roots in Jamaica, he helps drive the movement's music, culture, craftsmanship and community — turning stress into creation, from Sierra Leone outward.",
    image: siteImages.stageMic,
    links: [
      { label: "Spotify", url: "https://open.spotify.com/artist/7GerkwZX0S7fy9mssayeeQ" },
      { label: "Apple Music", url: "https://music.apple.com/us/artist/stressgods/1097961733" },
      { label: "Amazon Music", url: "https://www.amazon.com/s?k=StressGods&i=digital-music" },
      { label: "StressGods Medical Center", url: "https://stressgods.com" },
      { label: "Pandora", url: "https://www.pandora.com/artist/stressgods/asylum-phase-1/in-the-flesh/TRb6j6bJdKKmjkk" },
    ],
  },
  {
    name: "Mo Haze",
    role: "Founder of StressGods",
    bio: "Founder of StressGods. With roots in Sierra Leone and Guinea, he brings music, sports, fashion, culture, craftsmanship and self-expression together — and is building the StressGods community in Sierra Leone.",
    image: siteImages.blueStage,
    links: [
      { label: "Spotify", url: "https://open.spotify.com/artist/7GerkwZX0S7fy9mssayeeQ" },
      { label: "Apple Music", url: "https://music.apple.com/us/artist/stressgods/1097961733" },
      { label: "Amazon Music", url: "https://www.amazon.com/s?k=StressGods&i=digital-music" },
      { label: "StressGods Medical Center", url: "https://stressgods.com" },
      { label: "Pandora", url: "https://www.pandora.com/artist/stressgods/asylum-phase-1/in-the-flesh/TRb6j6bJdKKmjkk" },
    ],
  },
  {
    name: "Romano",
    role: "Producer",
    bio: "Producer and part of the StressGods team. Romano shapes the sound behind the movement — the beats, sessions and studio work that carry the community's music from an idea to something you can hear. He works across the collective's projects, turning everyday pressure into record.",
    image: siteImages.romanoPhoto,
    links: [{ label: "Instagram", url: "https://www.instagram.com/realxromano" }],
  },
];

export type MediaCategory =
  | "Photos"
  | "Videos"
  | "Events"
  | "Artist moments"
  | "Sierra Leone"
  | "Live Shows";

export interface MediaItem {
  title: string;
  category: MediaCategory;
  caption: string;
  image: string;
  /** Set for videos: a full YouTube watch URL or the 11-character video ID. */
  youtube?: string;
  /** Set for clips hosted with the site: a root-relative video file path. */
  video?: string;
  /** Optional second copy of the same clip in WebM for browsers without H.264. */
  videoWebm?: string;
  /** Layout weight in the gallery grid. */
  wide?: boolean;
}

/** PLACEHOLDER media — swap in real photos and YouTube links. */
/** Live photos from the community's shows — swap captions and add YouTube links. */
/** Photos from when StressGods were on the ground in Sierra Leone. */
export const media: MediaItem[] = [
  {
    title: "Kojumakoju Festival",
    category: "Live Shows",
    caption: "Performing at the Kojumakoju festival in Sierra Leone.",
    image: siteImages.kojumakoju,
    video: siteVideos.kojumakoju,
    videoWebm: siteVideos.kojumakojuWebm,
  },
  {
    title: "Chapter One",
    category: "Live Shows",
    caption: "Live on stage at Chapter One in Sierra Leone.",
    image: siteImages.chapterOneStage,
    wide: true,
  },
  {
    title: "Under the lights",
    category: "Live Shows",
    caption: "Mid-verse under the magenta lights at Chapter One.",
    image: siteImages.chapterOneMic,
  },
  {
    title: "At the booth",
    category: "Live Shows",
    caption: "The Chapter One stage, crest and all.",
    image: siteImages.chapterOneBooth,
  },
  {
    title: "On the ground",
    category: "Sierra Leone",
    caption: "Out in the field with the community.",
    image: siteImages.slField,
  },
  {
    title: "With the people",
    category: "Sierra Leone",
    caption: "Standing together with the people of the community.",
    image: siteImages.slGroup,
    wide: true,
  },
  {
    title: "Clean energy",
    category: "Sierra Leone",
    caption: "Solar backpacks delivered with Ideal Technologies Clean Energy.",
    image: siteImages.slEnergy,
  },
  {
    title: "The mask room",
    category: "Sierra Leone",
    caption: "Carved masks, woodwork and traditional instruments.",
    image: siteImages.slMasks,
  },
  {
    title: "Phone lights",
    category: "Events",
    caption: "The room lit up mid-set.",
    image: siteImages.heroCrowd,
    wide: true,
  },
  {
    title: "On the mic",
    category: "Videos",
    caption: "Autobahn — the StressGods video on YouTube.",
    image: siteImages.stageMic,
    youtube: "https://www.youtube.com/watch?v=uwkmzy3WNxA",
  },
  {
    title: "Full room",
    category: "Events",
    caption: "Packed from the bar to the front of house.",
    image: siteImages.crowdFloor,
  },
  {
    title: "Two on stage",
    category: "Artist moments",
    caption: "Trading verses under the stage lights.",
    image: siteImages.duoStage,
  },
  {
    title: "Blue set",
    category: "Photos",
    caption: "Late set, blue lights.",
    image: siteImages.blueStage,
    wide: true,
  },
  {
    title: "From the floor",
    category: "Photos",
    caption: "The crowd mid-song.",
    image: siteImages.crowdFloor,
  },
  {
    title: "Front of stage",
    category: "Artist moments",
    caption: "Eye level with the performance.",
    image: siteImages.heroCrowd,
  },
  {
    title: "Session light",
    category: "Photos",
    caption: "Warm room, cold drinks, live sound.",
    image: siteImages.stageMic,
  },
];

export const nav = [
  { label: "About", to: "/about" as const },
  { label: "Artists", to: "/artists" as const },
  { label: "Media", to: "/media" as const },
  { label: "Connect", to: "/connect" as const },
];
