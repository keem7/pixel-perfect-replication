import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { MediaGallery } from "@/components/MediaGallery";
import { Reveal } from "@/components/Reveal";
import { featured, site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STRESS GOD — Africa to the World. Turn Stress Into Creation." },
      {
        name: "description",
        content:
          "StressGods is a creative collective founded by Mo Haze and Steve Ricks — music, sports, fashion, culture and craftsmanship. Welcome to the official StressGods Sierra Leone community.",
      },
      {
        property: "og:title",
        content: "STRESS GOD — Africa to the World. Turn Stress Into Creation.",
      },
      {
        property: "og:description",
        content:
          "StressGods is a creative collective founded by Mo Haze and Steve Ricks — music, sports, fashion, culture and craftsmanship. Welcome to the official StressGods Sierra Leone community.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutSection />

      <section className="edge mt-24 md:mt-40">
        <div className="rule-t flex items-baseline justify-between gap-6 pt-6">
          <h2 className="eyebrow">Featured</h2>
          <span className="eyebrow">03</span>
        </div>

        <div className="mt-8 grid gap-x-6 gap-y-14 md:grid-cols-3">
          {featured.map((block, i) => (
            <Reveal key={block.title} delay={i * 110} className={i === 1 ? "md:mt-16" : undefined}>
              <Link to={block.to} className="group block">
                <div className="media-hover aspect-[4/5] w-full bg-muted">
                  <img
                    src={block.image}
                    alt={block.title}
                    loading="lazy"
                    width={1080}
                    height={720}
                    className="size-full object-cover"
                  />
                </div>
                <div className="mt-4 flex items-baseline gap-4">
                  <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-signal">
                    {block.index}
                  </span>
                  <h3 className="display text-2xl transition-colors group-hover:text-signal md:text-3xl">
                    {block.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {block.copy}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="edge mt-24 md:mt-40">
        <div className="rule-t flex items-baseline justify-between gap-6 pt-6">
          <h2 className="eyebrow">Media</h2>
          <Link
            to="/media"
            className="link-underline text-[0.7rem] font-semibold uppercase tracking-[0.2em]"
          >
            View all
          </Link>
        </div>
        <div className="mt-8">
          <MediaGallery limit={5} showFilters={false} />
        </div>
      </section>

      <section className="edge mt-24 md:mt-40">
        <div className="rule-t grid gap-8 pt-6 md:grid-cols-12">
          <p className="eyebrow md:col-span-4">Connect</p>
          <div className="md:col-span-8">
            <h2 className="display text-[12vw] leading-[0.86] sm:text-6xl lg:text-7xl">
              Come and
              <br />
              build with us.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {site.tagline} Every room, every channel, every way in — all in one place.
            </p>
            <Link
              to="/connect"
              className="mt-8 inline-flex items-center border border-foreground bg-foreground px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:border-signal hover:bg-signal"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
