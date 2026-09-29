import { Link } from "@tanstack/react-router";
import { contact, nav, site } from "@/data/site";
import { SocialIcons } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="rule-t mt-24 md:mt-40">
      <div className="edge py-14 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="display text-5xl sm:text-6xl md:text-7xl">{site.name}</p>
            <p className="eyebrow mt-4">{site.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="link-underline text-[0.7rem] font-semibold uppercase tracking-[0.2em]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="rule-t mt-12 flex flex-col gap-6 pt-6 md:flex-row md:items-center md:justify-between">
          <SocialIcons />
          <div className="flex flex-col gap-1 text-xs text-muted-foreground md:flex-row md:items-center md:gap-8">
            <span>
              Contact:{" "}
              {contact.email ? (
                <a href={`mailto:${contact.email}`} className="link-underline text-foreground">
                  {contact.email}
                </a>
              ) : (
                <span>email not provided yet</span>
              )}
            </span>
            <span>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
