import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-500",
        scrolled && "border-border bg-background/92 backdrop-blur-[2px]",
      )}
    >
      <div
        className={cn(
          "edge flex items-center justify-between transition-all duration-500",
          scrolled ? "h-14" : "h-20",
        )}
      >
        <Link
          to="/"
          className={cn(
            "display leading-none transition-all duration-500",
            scrolled ? "text-base" : "text-lg md:text-xl",
          )}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline text-[0.7rem] font-semibold uppercase tracking-[0.2em]"
              activeProps={{ className: "text-signal" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="-mr-2 p-2 md:hidden"
        >
          {open ? <X className="size-6" strokeWidth={1.5} /> : <Menu className="size-6" strokeWidth={1.5} />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-14 bottom-0 z-40 origin-top border-t border-border bg-background transition-all duration-400 md:hidden",
          open ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
        )}
      >
        <nav className="edge flex flex-col pt-6">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="display border-b border-border py-5 text-4xl transition-colors hover:text-signal"
              style={{ transitionDelay: `${i * 30}ms` }}
              activeProps={{ className: "text-signal" }}
            >
              {item.label}
            </Link>
          ))}
          <p className="eyebrow mt-8">{site.tagline}</p>
        </nav>
      </div>
    </header>
  );
}
