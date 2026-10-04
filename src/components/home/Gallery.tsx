"use client";

import { useCallback, useEffect, useState } from "react";

const images = [
  { src: "/images/gallry/gallry_1.jpeg", alt: "Sri Lanka travel moment 1" },
  { src: "/images/gallry/gallry_2.jpeg", alt: "Sri Lanka travel moment 2" },
  { src: "/images/gallry/gallry_3.jpeg", alt: "Sri Lanka travel moment 3" },
  { src: "/images/gallry/gallry_4.jpeg", alt: "Sri Lanka travel moment 4" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev  = useCallback(() => setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length)), []);
  const next  = useCallback(() => setActive((i) => (i === null ? i : (i + 1) % images.length)), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     close();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white dark:bg-jungle-900/30">
      <div className="container-xl section-px">

        {/* ── Section Header ──────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="leaf-divider text-jungle-400 text-xs tracking-widest uppercase font-sans mb-5 justify-center">
            Moments Captured
          </div>
          <h2 className="section-title mb-4">
            Our{" "}
            <span className="italic font-light text-jungle-500 dark:text-jungle-400">
              Gallery
            </span>
          </h2>
          <p className="section-sub">
            A glimpse of the journeys, smiles and landscapes our travellers have
            experienced across the island.
          </p>
        </div>

        {/* ── Image Grid ──────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              className="
                group relative overflow-hidden rounded-2xl aspect-square
                shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500
              "
              aria-label={`Open image ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-jungle-950/0 group-hover:bg-jungle-950/30 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* ── Lightbox ──────────────────────────────────────── */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 sm:left-6 text-white/80 hover:text-white text-4xl px-3"
            aria-label="Previous image"
          >
            ‹
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[active].src}
            alt={images[active].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-xl shadow-2xl object-contain"
          />
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 sm:right-6 text-white/80 hover:text-white text-4xl px-3"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
