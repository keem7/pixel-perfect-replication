import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { MediaGallery } from "@/components/MediaGallery";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Media — STRESSGODS" },
      {
        name: "description",
        content:
          "Photos, videos, events, artist moments and life in Sierra Leone from the StressGods community.",
      },
      { property: "og:title", content: "Media — STRESSGODS" },
      {
        property: "og:description",
        content:
          "Photos, videos, events, artist moments and life in Sierra Leone from the StressGods community.",
      },
    ],
  }),
  component: Media,
});

function Media() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Media"
        lede="Photos, videos, events, artist moments and life in Sierra Leone. Video tiles open a YouTube player once a link is added."
      />
      <section className="edge mt-12 md:mt-20">
        <MediaGallery />
      </section>
    </>
  );
}
