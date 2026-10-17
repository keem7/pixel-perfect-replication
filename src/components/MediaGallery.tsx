import { useMemo, useState } from "react";
import { Play } from "lucide-react";
import { media, type MediaCategory, type MediaItem } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const CATEGORIES: (MediaCategory | "All")[] = [
  "All",
  "Sierra Leone",
  "Live Shows",
  "Photos",
  "Videos",
  "Events",
  "Artist moments",
];

function youtubeId(input: string) {
  const trimmed = input.trim();
  if (!trimmed) return "";
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed;
  const match = trimmed.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
  return match ? match[1] : "";
}

function Tile({ item }: { item: MediaItem }) {
  const [playing, setPlaying] = useState(false);
  const id = item.youtube ? youtubeId(item.youtube) : "";
  const isVideo = item.category === "Videos";

  if (playing && id) {
    return (
      <div className="aspect-[16/10] w-full bg-foreground">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={item.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="size-full"
        />
      </div>
    );
  }

  return (
    <figure className="group">
      <button
        type="button"
        disabled={!isVideo || !id}
        onClick={() => setPlaying(true)}
        className={cn(
          "media-hover relative block w-full bg-muted",
          item.wide ? "aspect-[16/10]" : "aspect-[4/5]",
          isVideo && id ? "cursor-pointer" : "cursor-default",
        )}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="size-full object-cover"
        />
        {isVideo && (
          <span className="absolute inset-0 flex items-center justify-center bg-foreground/25 transition-colors group-hover:bg-foreground/10">
            <span className="flex size-14 items-center justify-center border border-background text-background">
              <Play className="size-5" strokeWidth={1.5} />
            </span>
          </span>
        )}
      </button>
      <figcaption className="mt-3 flex items-baseline justify-between gap-4">
        <span className="text-sm font-semibold tracking-tight">{item.title}</span>
        <span className="eyebrow">{item.category}</span>
      </figcaption>
      <p className="mt-1 text-xs text-muted-foreground">
        {isVideo && !id ? "YouTube link not provided yet" : item.caption}
      </p>
    </figure>
  );
}

export function MediaGallery({ limit, showFilters = true }: { limit?: number; showFilters?: boolean }) {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  const items = useMemo(() => {
    const filtered = active === "All" ? media : media.filter((m) => m.category === active);
    return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
  }, [active, limit]);

  return (
    <div>
      {showFilters && (
        <div className="rule-t flex flex-wrap gap-x-6 gap-y-2 py-4">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                "text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-colors",
                active === c ? "text-signal" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal
            key={`${item.title}-${i}`}
            delay={(i % 3) * 90}
            className={cn(item.wide && "sm:col-span-2")}
          >
            <Tile item={item} />
          </Reveal>
        ))}
      </div>

      {items.length === 0 && (
        <p className="py-16 text-sm text-muted-foreground">Nothing here yet.</p>
      )}
    </div>
  );
}
