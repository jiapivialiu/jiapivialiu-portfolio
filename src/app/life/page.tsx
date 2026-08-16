import type { Metadata } from "next";
import { readdir } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";

import { LifeWordPreviews, type LifePhoto } from "@/components/life-word-previews";

export const metadata: Metadata = {
  title: "Life",
  description: "Life in Vancouver beyond the work: mountains, movement, food, photography, and community.",
  alternates: { canonical: "/life" },
};

const photoDetails: Record<string, Pick<LifePhoto, "alt" | "objectPosition">> = {
  fitness: {
    alt: "Strength training with a barbell in a gym",
    objectPosition: "center 68%",
  },
  food: {
    alt: "A colorful bowl of noodles, vegetables, and chili",
  },
  mountain: {
    alt: "A mountain overlook framed by trees above a blue lake",
    objectPosition: "center 72%",
  },
  pindou: {
    alt: "A colorful bead-craft project arranged on a white table",
    objectPosition: "center 54%",
  },
  ubc: {
    alt: "A seagull at an outdoor table on the UBC campus",
    objectPosition: "center 70%",
  },
};

async function getLifePhotos(): Promise<LifePhoto[]> {
  const directory = path.join(process.cwd(), "public", "images", "personal");
  const filenames = await readdir(directory);

  return filenames
    .filter((filename) => /\.(avif|jpe?g|png|webp)$/i.test(filename))
    .sort((a, b) => a.localeCompare(b))
    .map((filename) => {
      const label = path.parse(filename).name.toLowerCase();
      const details = photoDetails[label];

      return {
        label,
        src: `/images/personal/${filename}`,
        alt: details?.alt ?? `${label.replaceAll(/[-_]/g, " ")} from life beyond work`,
        objectPosition: details?.objectPosition,
      };
    });
}

export default async function LifePage() {
  const photos = await getLifePhotos();

  return (
    <main className="life-page">
      <header className="route-hero container life-hero">
        <p className="section-label">03 / Life</p>
        <h1>Curiosity needs<br /><em>a landscape.</em></h1>
        <div className="life-hero-aside">
          <p>UBC’s long perspectives, Vancouver weather, steep trails, good food, strength training, photography, and the people who make a place feel lived in.</p>
          <blockquote>
            “In the midst of winter, I found there was, within me, an invincible summer.”
            <cite>— Albert Camus, <em>Return to Tipasa</em></cite>
          </blockquote>
        </div>
      </header>

      <section className="life-feature" aria-labelledby="life-feature-title">
        <div className="container life-feature-layout">
          <div className="life-feature-copy">
            <p className="section-label">Vancouver / 49° N</p>
            <h2 id="life-feature-title">The landscape is part of the practice.</h2>
            <p>Outside work, I return to movement and observation: watching familiar views change, trying new food with friends, and staying curious about the texture of ordinary days.</p>
            <LifeWordPreviews photos={photos} />
            <div className="life-credential">
              <span>Work out with me</span>
              <div>
                <strong>ACE Certified Personal Trainer</strong>
                <a href="https://www.acefitness.org/resources/everyone/find-ace-pro/dwy366yx/jiaping-liu/?srsltid=AfmBOoq5JmMgkYAf11MCW_R1u-1AEY53xFKNC2z_p4DyX4wIKb9KXjRo" target="_blank" rel="noreferrer">View ACE profile ↗</a>
                <Link className="life-wechat-link" href="/wechat">Add me on WeChat ↗</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
