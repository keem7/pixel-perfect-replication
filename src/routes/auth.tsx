import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      { title: "Admin Sign In — StressGods" },
      { name: "description", content: "Sign in to manage StressGods upcoming events." },
      { property: "og:title", content: "Admin Sign In — StressGods" },
      { property: "og:description", content: "Sign in to manage StressGods upcoming events." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function toEmail(username: string) {
  const u = username.trim().toLowerCase();
  return u.includes("@") ? u : `${u.replace(/[^a-z0-9._-]/g, "")}@stressgods.local`;
}

function AuthPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    const { error } = await supabase.auth.signInWithPassword({ email: toEmail(username), password });
    setBusy(false);
    if (error) return setMsg("Wrong username or password.");
    navigate({ to: "/admin" });
  }

  const input = "w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-signal";

  return (
    <section className="edge flex min-h-screen items-center pt-24">
      <form onSubmit={submit} className="mx-auto w-full max-w-sm space-y-4">
        <p className="eyebrow">Admin</p>
        <h1 className="display text-5xl">Sign in</h1>
        <input className={input} required autoComplete="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className={input} type="password" required autoComplete="current-password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button disabled={busy} className="w-full border border-foreground bg-foreground px-6 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:border-signal hover:bg-signal disabled:opacity-50">
          {busy ? "Please wait…" : "Sign in"}
        </button>
        {msg && <p className="text-sm text-destructive">{msg}</p>}
      </form>
    </section>
  );
}
