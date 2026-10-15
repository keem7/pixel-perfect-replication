import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ArtistCard } from "@/components/ArtistCard";
import { Reveal } from "@/components/Reveal";
import { artists } from "@/data/site";

export const Route = createFileRoute("/artists")({
  head: () => ({
    meta: [
      { title: "Artists & Community — STRESS GOD" },
      {
        name: "description",
        content:
          "The artists, makers and members who form the Stress God creative community.",
      },
      { property: "og:title", content: "Artists & Community — STRESS GOD" },
      {
        property: "og:description",
        content:
          "The artists, makers and members who form the Stress God creative community.",
      },
    ],
  }),
  component: Artists,
});

function Artists() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        title="Artists"
        lede="The founders and the team behind the movement — Steve Ricks, Mo Haze and producer Romano. New profiles are added as the community grows."
      />

      <section className="edge mt-16 md:mt-24">
        <div className="rule-t grid grid-cols-1 gap-x-6 gap-y-16 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <ArtistCard artist={artist} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="edge mt-24 md:mt-32">
        <div className="rule-t grid gap-6 pt-10 md:grid-cols-12">
          <p className="eyebrow md:col-span-4">Join</p>
          <div className="md:col-span-8">
            <h2 className="display text-[11vw] leading-[0.88] sm:text-5xl lg:text-6xl">
              Want to be listed here?
            </h2>
            <Link
              to="/connect"
              className="mt-7 inline-flex items-center border border-foreground px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
            >
              Reach the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
