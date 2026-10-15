import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { about, site } from "@/data/site";
import stageMic from "@/assets/stage-mic.jpg.asset.json";
import crowdFloor from "@/assets/crowd-floor.jpg.asset.json";
import duoStage from "@/assets/duo-stage.jpg.asset.json";

const inlineImages = [crowdFloor.url, stageMic.url, duoStage.url];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — STRESS GOD" },
      {
        name: "description",
        content:
          "The story of StressGods — the creative collective founded by Mo Haze and Steve Ricks, and the Sierra Leone community this site is the home of.",
      },
      { property: "og:title", content: "Our Story — STRESS GOD" },
      {
        property: "og:description",
        content:
          "The story of StressGods — the creative collective founded by Mo Haze and Steve Ricks, and the Sierra Leone community this site is the home of.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="Our Story" title="About" lede={about.short} />

      <Reveal className="edge mt-14">
        <div className="media-hover aspect-[4/5] w-full bg-muted sm:aspect-[16/9]">
          <img
            src={site.images.hero}
            alt="The Stress God community"
            loading="lazy"
            width={1080}
            height={608}
            className="size-full object-cover"
          />
        </div>
      </Reveal>

      <div className="edge mt-20 md:mt-32">
        {about.sections.map((section, i) => (
          <section key={section.heading} className="rule-t grid gap-8 py-12 md:grid-cols-12 md:py-20">
            <Reveal className="md:col-span-4">
              <span className="eyebrow block">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="display mt-3 text-3xl md:text-4xl">{section.heading}</h2>
            </Reveal>
            <div className="md:col-span-7 md:col-start-6">
              {section.body.map((p, j) => (
                <Reveal key={j} delay={j * 90}>
                  <p className="mb-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {p}
                  </p>
                </Reveal>
              ))}
              {i % 2 === 1 && (
                <Reveal delay={140} className="mt-8">
                  <div className="media-hover aspect-[16/10] w-full bg-muted">
                    <img
                      src={inlineImages[Math.floor(i / 2) % inlineImages.length]}
                      alt=""
                      loading="lazy"
                      className="size-full object-cover"
                    />
                  </div>
                </Reveal>
              )}
            </div>
          </section>
        ))}
      </div>

      <section className="edge">
        <div className="rule-t pt-10">
          <Link
            to="/artists"
            className="display block text-[12vw] leading-none transition-colors hover:text-signal sm:text-6xl lg:text-7xl"
          >
            Meet the artists →
          </Link>
        </div>
      </section>
    </>
  );
}
