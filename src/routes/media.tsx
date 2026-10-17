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
          "Photos, videos, live shows and life in Sierra Leone from the StressGods community, including a night at Chapter One.",
      },
      { property: "og:title", content: "Media — STRESSGODS" },
      {
        property: "og:description",
        content:
          "Photos, videos, live shows and life in Sierra Leone from the StressGods community, including a night at Chapter One.",
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
        lede="Photos, videos, live shows and life in Sierra Leone — the night at Chapter One, the Kojumakoju festival and more. Tiles with a play mark open a player right here."
      />
      <section className="edge mt-12 md:mt-20">
        <MediaGallery />
      </section>
    </>
  );
}
