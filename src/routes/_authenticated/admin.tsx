import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin")({
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      { title: "Manage Events — StressGods Admin" },
      { name: "description", content: "Add and remove StressGods upcoming events." },
      { property: "og:title", content: "Manage Events — StressGods Admin" },
      { property: "og:description", content: "Add and remove StressGods upcoming events." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

const empty = { title: "", date: "", venue: "", city: "", description: "", ticket_url: "" };

function AdminPage() {
  const qc = useQueryClient();
  const navigate = useNavigate();
  const [form, setForm] = useState(empty);
  const [msg, setMsg] = useState<string | null>(null);

  const role = useQuery({
    queryKey: ["is-admin"],
    queryFn: async () => {
      const { data: u } = await supabase.auth.getUser();
      const { data } = await supabase.rpc("has_role", { _user_id: u.user!.id, _role: "admin" });
      return { isAdmin: !!data, email: u.user?.email };
    },
  });

  const events = useQuery({
    queryKey: ["events", "all"],
    queryFn: async () => {
      const { data, error } = await supabase.from("events").select("*").order("event_date");
      if (error) throw error;
      return data;
    },
  });

  function refresh() {
    qc.invalidateQueries({ queryKey: ["events"] });
  }

  async function add(e: FormEvent) {
    e.preventDefault();
    setMsg(null);
    const { error } = await supabase.from("events").insert({
      title: form.title.trim(),
      event_date: new Date(form.date).toISOString(),
      venue: form.venue.trim(),
      city: form.city.trim(),
      description: form.description.trim(),
      ticket_url: form.ticket_url.trim(),
    });
    if (error) return setMsg(error.message);
    setForm(empty);
    setMsg("Event added.");
    refresh();
  }

  async function remove(id: string) {
    if (!confirm("Delete this event?")) return;
    const { error } = await supabase.from("events").delete().eq("id", id);
    if (error) return setMsg(error.message);
    refresh();
  }

  async function signOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const input = "w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-signal";

  if (role.isLoading) return <section className="edge pt-32">Loading…</section>;

  return (
    <section className="edge pb-24 pt-32">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <p className="eyebrow">Admin · {role.data?.email}</p>
          <h1 className="display mt-2 text-5xl md:text-7xl">Events</h1>
        </div>
        <button onClick={signOut} className="link-underline text-xs uppercase tracking-[0.2em]">Sign out</button>
      </div>

      {!role.data?.isAdmin ? (
        <p className="mt-10 max-w-lg text-sm text-muted-foreground">
          This account doesn't have admin access. Sign in with the official StressGods email to manage events.
        </p>
      ) : (
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <form onSubmit={add} className="space-y-3">
            <h2 className="eyebrow">Add an event</h2>
            <input className={input} required placeholder="Event name" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            <input className={input} required type="datetime-local" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            <input className={input} placeholder="Venue" value={form.venue} onChange={(e) => setForm({ ...form, venue: e.target.value })} />
            <input className={input} placeholder="City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
            <textarea className={input} rows={3} placeholder="Short description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            <input className={input} type="url" placeholder="Ticket link (optional)" value={form.ticket_url} onChange={(e) => setForm({ ...form, ticket_url: e.target.value })} />
            <button className="w-full border border-foreground bg-foreground px-6 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:border-signal hover:bg-signal">
              Add event
            </button>
            {msg && <p className="text-sm text-muted-foreground">{msg}</p>}
          </form>

          <div>
            <h2 className="eyebrow">All events</h2>
            <ul className="mt-3">
              {events.data?.length === 0 && <li className="text-sm text-muted-foreground">No events yet.</li>}
              {events.data?.map((ev) => (
                <li key={ev.id} className="flex items-start justify-between gap-4 border-b border-border py-4">
                  <div>
                    <p className="font-semibold">{ev.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(ev.event_date).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" })}
                      {ev.venue && ` · ${ev.venue}`}
                      {ev.city && ` · ${ev.city}`}
                    </p>
                  </div>
                  <button onClick={() => remove(ev.id)} className="text-xs uppercase tracking-[0.2em] text-destructive hover:underline">
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
