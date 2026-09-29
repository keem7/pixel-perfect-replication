import { PLACEHOLDER_LINK, type Artist } from "@/data/site";

export function ArtistCard({ artist, index }: { artist: Artist; index: number }) {
  return (
    <article className="group">
      <div className="media-hover aspect-[4/5] w-full bg-muted">
        <img
          src={artist.image}
          alt={artist.name}
          loading="lazy"
          width={912}
          height={1104}
          className="size-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="display text-xl md:text-2xl">{artist.name}</h3>
        <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p className="eyebrow mt-1.5">{artist.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{artist.bio}</p>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {artist.links.map((link) =>
          link.url === PLACEHOLDER_LINK ? (
            <span
              key={link.label}
              className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60"
            >
              {link.label} — pending
            </span>
          ) : (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline text-[0.65rem] font-semibold uppercase tracking-[0.2em]"
            >
              {link.label}
            </a>
          ),
        )}
      </div>
    </article>
  );
}
