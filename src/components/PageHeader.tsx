import { Reveal } from "@/components/Reveal";

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="edge pt-28 md:pt-36">
      <div className="rule-t pt-6">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-6 text-[16vw] leading-[0.84] sm:text-[12vw] lg:text-[9vw]">
          {title}
        </h1>
        {lede && (
          <Reveal delay={100}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {lede}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
