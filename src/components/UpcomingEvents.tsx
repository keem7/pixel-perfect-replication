import { useQuery } from "@tanstack/react-query";
import { upcomingEventsQuery } from "@/lib/events";
import { Reveal } from "@/components/Reveal";

export function UpcomingEvents() {
  const { data, isLoading } = useQuery(upcomingEventsQuery);

  return (
    <section className="edge mt-24 md:mt-40">
      <div className="rule-t flex items-baseline justify-between gap-6 pt-6">
        <h2 className="eyebrow">Upcoming Events</h2>
        <span className="eyebrow">{data ? String(data.length).padStart(2, "0") : "—"}</span>
      </div>

      {isLoading ? (
        <p className="mt-8 text-sm text-muted-foreground">Loading events…</p>
      ) : !data || data.length === 0 ? (
        <Reveal className="mt-8">
          <p className="display text-3xl md:text-5xl">New dates soon.</p>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            The next StressGods shows will be announced here. Follow us so you don't miss them.
          </p>
        </Reveal>
      ) : (
        <ul className="mt-8">
          {data.map((ev, i) => {
            const d = new Date(ev.event_date);
            return (
              <Reveal as="li" key={ev.id} delay={i * 90} className="border-b border-border">
                <div className="group grid grid-cols-[5rem_1fr] items-center gap-6 py-6 transition-colors md:grid-cols-[7rem_1fr_auto]">
                  <div className="text-signal">
                    <div className="display text-4xl md:text-5xl">{d.getDate()}</div>
                    <div className="eyebrow mt-1 text-signal">
                      {d.toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
                    </div>
                  </div>
                  <div>
                    <h3 className="display text-2xl transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                      {ev.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {[ev.venue, ev.city].filter(Boolean).join(" · ")}
                      {" · "}
                      {d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                    {ev.description && (
                      <p className="mt-2 max-w-xl text-sm leading-relaxed">{ev.description}</p>
                    )}
                  </div>
                  {ev.ticket_url && (
                    <a
                      href={ev.ticket_url}
                      target="_blank"
                      rel="noreferrer"
                      className="col-span-2 inline-flex w-fit items-center border border-foreground px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-colors hover:border-signal hover:bg-signal hover:text-signal-foreground md:col-span-1"
                    >
                      Tickets
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ul>
      )}
    </section>
  );
}
