import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { MediaGallery } from "@/components/MediaGallery";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media — STRESS GOD" },
      {
        name: "description",
        content:
          "Photos, videos, events and artist moments from the Stress God community.",
      },
      { property: "og:title", content: "Media — STRESS GOD" },
      {
        property: "og:description",
        content:
          "Photos, videos, events and artist moments from the Stress God community.",
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
        lede="Photos, videos, events and artist moments. Video tiles open a YouTube player once a link is added."
      />
      <section className="edge mt-12 md:mt-20">
        <MediaGallery />
      </section>
    </>
  );
}
