import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { SocialList } from "@/components/SocialLinks";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/data/site";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Connect — STRESSGODS" },
      {
        name: "description",
        content:
          "Every official channel of the StressGods Sierra Leone community in one place: the WhatsApp community, Instagram, YouTube, Spotify, X, Threads, TikTok, Facebook, the store and booking.",
      },
      { property: "og:title", content: "Connect — STRESSGODS" },
      {
        property: "og:description",
        content:
          "Every official channel of the StressGods Sierra Leone community in one place: the WhatsApp community, Instagram, YouTube, Spotify, X, Threads, TikTok, Facebook, the store and booking.",
      },
    ],
  }),
  component: Connect,
});

function Connect() {
  return (
    <>
      <PageHeader
        eyebrow="Join"
        title="Connect"
        lede="Every official channel of the Sierra Leone community in one place. The WhatsApp room is where it all starts."
      />

      <section className="edge mt-14 md:mt-20">
        <Reveal>
          <SocialList />
        </Reveal>
      </section>

      <section className="edge mt-20">
        <div className="rule-t grid gap-6 pt-8 md:grid-cols-12">
          <p className="eyebrow md:col-span-4">Direct</p>
          <div className="md:col-span-8 text-base leading-relaxed text-muted-foreground">
            <p>
              Booking:{" "}
              {contact.bookingEmail ? (
                <a href={`mailto:${contact.bookingEmail}`} className="link-underline text-foreground">
                  {contact.bookingEmail}
                </a>
              ) : (
                "email not provided yet"
              )}
            </p>
            <p className="mt-2">
              General:{" "}
              {contact.email ? (
                <a href={`mailto:${contact.email}`} className="link-underline text-foreground">
                  {contact.email}
                </a>
              ) : (
                "email not provided yet"
              )}
            </p>
            <p className="mt-2">Based in: {contact.location || "location not provided yet"}</p>
          </div>
        </div>
      </section>
    </>
  );
}
