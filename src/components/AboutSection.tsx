import { Link } from "@tanstack/react-router";
import { about } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section className="edge mt-24 md:mt-40">
      <div className="rule-t grid gap-8 pt-6 md:grid-cols-12 md:gap-12">
        <Reveal className="md:col-span-4">
          <p className="eyebrow">Who we are</p>
        </Reveal>
        <div className="md:col-span-8">
          <Reveal as="h2" className="display text-[10vw] leading-[0.86] sm:text-6xl lg:text-7xl">
            A room for
            <br />
            people who
            <br />
            <span className="text-signal">make things.</span>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {about.short}
            </p>
            <Link
              to="/about"
              className="link-underline mt-8 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.2em]"
            >
              Read the full story
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
