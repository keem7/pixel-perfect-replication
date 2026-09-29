import {
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Music2,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { PLACEHOLDER_LINK, socials, type SocialKey } from "@/data/site";
import { cn } from "@/lib/utils";

const icons: Record<SocialKey, LucideIcon> = {
  whatsapp: MessageCircle,
  instagram: Instagram,
  youtube: Youtube,
  x: Twitter,
  tiktok: Music2,
  facebook: Facebook,
  contact: Mail,
};

function isReady(url: string) {
  return url !== PLACEHOLDER_LINK && url.trim().length > 0;
}

/** Full-width stacked list used on the Connect page. */
export function SocialList() {
  return (
    <ul>
      {socials.map((s) => {
        const Icon = icons[s.key];
        const ready = isReady(s.url);
        const Tag = ready ? "a" : "div";
        return (
          <li key={s.key} className="border-b border-border first:border-t">
            <Tag
              {...(ready
                ? { href: s.url, target: "_blank", rel: "noreferrer noopener" }
                : { "aria-disabled": true })}
              className={cn(
                "group flex items-center gap-5 py-6 transition-colors md:py-8",
                ready ? "hover:text-signal" : "cursor-not-allowed text-muted-foreground",
                s.featured && ready && "text-signal",
              )}
            >
              <Icon className="size-5 shrink-0 md:size-6" strokeWidth={1.5} />
              <div className="min-w-0 flex-1">
                <span className="display block text-2xl sm:text-3xl md:text-5xl">{s.label}</span>
                <span className="mt-1.5 block text-sm text-muted-foreground">
                  {ready ? s.note : "Link not provided yet"}
                </span>
              </div>
              <span
                className={cn(
                  "shrink-0 text-xs font-semibold uppercase tracking-[0.2em] transition-transform duration-500",
                  ready ? "group-hover:translate-x-1" : "text-muted-foreground",
                )}
              >
                {ready ? "Open" : "—"}
              </span>
            </Tag>
          </li>
        );
      })}
    </ul>
  );
}

/** Compact icon row used in the footer. */
export function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-5", className)}>
      {socials
        .filter((s) => s.key !== "contact")
        .map((s) => {
          const Icon = icons[s.key];
          const ready = isReady(s.url);
          return ready ? (
            <a
              key={s.key}
              href={s.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={s.label}
              className="transition-colors hover:text-signal"
            >
              <Icon className="size-5" strokeWidth={1.5} />
            </a>
          ) : (
            <span key={s.key} aria-label={`${s.label} (link pending)`} className="text-muted-foreground/50">
              <Icon className="size-5" strokeWidth={1.5} />
            </span>
          );
        })}
    </div>
  );
}
