"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

export type LifePhoto = {
  label: string;
  src: string;
  alt: string;
  objectPosition?: string;
};

export function LifeWordPreviews({ photos }: { photos: readonly LifePhoto[] }) {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();
  const activeWord = photos.find((photo) => photo.label === activeLabel);
  const wallPhotos = [...photos].sort((a, b) => {
    if (a.label === "pindou") return -1;
    if (b.label === "pindou") return 1;
    return a.label.localeCompare(b.label);
  });

  if (photos.length === 0) return null;

  return (
    <div className="life-words">
      {photos.map((photo) => (
        <button
          type="button"
          key={photo.label}
          onMouseEnter={() => setActiveLabel(photo.label)}
          onMouseLeave={() => setActiveLabel(null)}
          onFocus={() => setActiveLabel(photo.label)}
          onBlur={() => setActiveLabel(null)}
          aria-label={`Preview ${photo.label} photo`}
        >
          {photo.label}
        </button>
      ))}

      <AnimatePresence>
        <motion.figure
          className="life-word-preview"
          key={activeWord?.label ?? "photo-wall"}
          initial={reducedMotion ? false : { opacity: 0, scale: 0.82, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 10 }}
          transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {activeWord ? (
            <Image
              src={activeWord.src}
              alt={activeWord.alt}
              fill
              sizes="(max-width: 768px) 80vw, 27rem"
              style={{ objectPosition: activeWord.objectPosition }}
            />
          ) : (
            <div className="life-photo-wall" aria-label="A collage of life beyond work">
              {wallPhotos.map((photo) => (
                <div className="life-photo-wall-cell" key={photo.label}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 40vw, 14rem"
                    style={{ objectPosition: photo.objectPosition }}
                  />
                </div>
              ))}
            </div>
          )}
        </motion.figure>
      </AnimatePresence>
    </div>
  );
}
