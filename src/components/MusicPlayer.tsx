import { Reveal } from "@/components/Reveal";

export function MusicPlayer() {
  return (
    <section className="edge mt-24 md:mt-40">
      <div className="rule-t flex items-baseline justify-between gap-6 pt-6">
        <h2 className="eyebrow">Listen</h2>
        <a
          href="https://open.spotify.com/artist/7GerkwZX0S7fy9mssayeeQ"
          target="_blank"
          rel="noreferrer"
          className="link-underline text-[0.7rem] font-semibold uppercase tracking-[0.2em]"
        >
          Open in Spotify
        </a>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <h3 className="display text-5xl md:text-6xl">
            Press
            <br />
            play.
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Stream StressGods right here — the sound of Sierra Leone, built for the world.
          </p>
        </Reveal>
        <Reveal delay={120} className="md:col-span-8">
          <iframe
            title="StressGods on Spotify"
            src="https://open.spotify.com/embed/artist/7GerkwZX0S7fy9mssayeeQ?utm_source=generator&theme=0"
            width="100%"
            height="352"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="block w-full border-0"
          />
        </Reveal>
      </div>
    </section>
  );
}
