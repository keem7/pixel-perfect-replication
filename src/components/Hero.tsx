import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

const WORDS = ["STRESS", "GOD"];

export function Hero() {
  return (
    <section className="edge pt-28 md:pt-36">
      <div className="rule-t pt-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
          <p className="eyebrow">{site.tagline}</p>
          <p className="eyebrow">{site.established}</p>
        </div>
      </div>

      <h1 className="display mt-8 flex flex-wrap items-baseline gap-x-[0.28em] text-[17vw] leading-[0.82] sm:text-[15vw] lg:text-[12.5vw]">
        {WORDS.map((word, w) => (
          <span key={word} className="inline-flex" aria-label={word}>
            {word.split("").map((ch, i) => (
              <span
                key={`${ch}-${i}`}
                aria-hidden
                className="reveal is-in inline-block"
                style={{
                  animationDelay: `${80 + (w * word.length + i) * 45}ms`,
                  animationDuration: "1s",
                }}
              >
                {ch}
              </span>
            ))}
          </span>
        ))}
      </h1>

      <div
        className="reveal is-in relative mt-10 aspect-[4/5] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[21/9]"
        style={{ animationDelay: "560ms" }}
      >
        <img
          src={site.images.hero}
          alt="The Stress God community"
          width={1080}
          height={608}
          className="size-full object-cover object-center"
        />
      </div>

      <div
        className="reveal is-in mt-10 grid gap-10 md:grid-cols-12"
        style={{ animationDelay: "700ms" }}
      >
        <p className="text-xl leading-snug tracking-tight md:col-span-7 md:text-3xl">
          {site.intro}
        </p>
        <div className="flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end">
          <Link
            to="/about"
            className="inline-flex items-center border border-foreground bg-foreground px-7 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-signal hover:border-signal"
          >
            Our Story
          </Link>
          <Link
            to="/connect"
            className="inline-flex items-center border border-foreground px-7 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
          >
            Join the Community
          </Link>
        </div>
      </div>
    </section>
  );
}
