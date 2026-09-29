import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { SocialList } from "@/components/SocialLinks";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/data/site";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: "Connect — STRESS GOD" },
      {
        name: "description",
        content:
          "Join the Stress God WhatsApp community and follow us on Instagram, YouTube, X, TikTok and Facebook.",
      },
      { property: "og:title", content: "Connect — STRESS GOD" },
      {
        property: "og:description",
        content:
          "Join the Stress God WhatsApp community and follow us on Instagram, YouTube, X, TikTok and Facebook.",
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
        lede="Every official channel in one place. The WhatsApp community is the main room."
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
