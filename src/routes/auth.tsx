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

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    if (mode === "in") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(false);
      if (error) return setMsg(error.message);
      navigate({ to: "/admin" });
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/admin` },
      });
      setBusy(false);
      if (error) return setMsg(error.message);
      setMsg("Check your email to confirm your account, then sign in.");
    }
  }

  const input =
    "w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-signal";

  return (
    <section className="edge flex min-h-screen items-center pt-24">
      <form onSubmit={submit} className="mx-auto w-full max-w-sm space-y-4">
        <p className="eyebrow">Admin</p>
        <h1 className="display text-5xl">{mode === "in" ? "Sign in" : "Create account"}</h1>
        <input className={input} type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className={input} type="password" required minLength={6} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button
          disabled={busy}
          className="w-full border border-foreground bg-foreground px-6 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:border-signal hover:bg-signal disabled:opacity-50"
        >
          {busy ? "Please wait…" : mode === "in" ? "Sign in" : "Create account"}
        </button>
        {msg && <p className="text-sm text-muted-foreground">{msg}</p>}
        <button type="button" onClick={() => setMode(mode === "in" ? "up" : "in")} className="link-underline text-xs uppercase tracking-[0.2em]">
          {mode === "in" ? "First time? Create account" : "Have an account? Sign in"}
        </button>
      </form>
    </section>
  );
}
