import { cn } from "@/lib/utils";

export function EventPoster({ url, date, className }: { url: string; date: string; className?: string }) {
  const d = new Date(date);
  return (
    <div className={cn("media-hover relative aspect-[4/5] w-full overflow-hidden bg-foreground text-background", className)}>
      {url ? (
        <img src={url} alt="Event poster" loading="lazy" className="size-full object-cover" />
      ) : (
        <div className="flex size-full flex-col justify-between p-2 md:p-3">
          <span className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-signal md:text-[0.6rem]">StressGods</span>
          <div>
            <div className="display text-3xl md:text-5xl">{d.getDate()}</div>
            <div className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] opacity-70 md:text-[0.6rem]">
              {d.toLocaleDateString("en-GB", { month: "short" })} · Flyer soon
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
