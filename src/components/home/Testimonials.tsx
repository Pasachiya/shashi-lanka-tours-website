"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";

export default function Testimonials() {
  const reviews = siteConfig.testimonials;
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? reviews.length - 1 : a - 1));
  const next = () => setActive((a) => (a === reviews.length - 1 ? 0 : a + 1));

  const r = reviews[active];

  return (
    <section className="py-20 lg:py-28 bg-jungle-50 dark:bg-jungle-900/20">
      <div className="container-xl section-px">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="leaf-divider text-jungle-400 text-xs tracking-widest uppercase font-sans mb-5 justify-center">
            Traveler Stories
          </div>
          <h2 className="section-title mb-4">
            Moments they{" "}
            <span className="italic font-light text-jungle-500 dark:text-jungle-400">
              cherished forever
            </span>
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-jungle-900 rounded-3xl p-8 sm:p-10 shadow-xl shadow-jungle-900/10 border border-jungle-100 dark:border-jungle-800 relative overflow-hidden">

            {/* Large quote mark */}
            <div className="absolute top-4 right-8 font-display text-9xl text-jungle-100 dark:text-jungle-800 leading-none select-none pointer-events-none">
              "
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: r.rating }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" fill="#d4a017" className="w-5 h-5">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Review text */}
            <blockquote className="font-display text-xl sm:text-2xl text-jungle-800 dark:text-jungle-200 font-light italic leading-relaxed mb-8">
              {r.text}
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-jungle-600 flex items-center justify-center text-white font-display text-lg font-semibold flex-shrink-0">
                {r.avatar}
              </div>
              <div>
                <div className="font-sans font-semibold text-jungle-900 dark:text-jungle-100">
                  {r.name}
                </div>
                <div className="font-sans text-sm text-jungle-500 dark:text-jungle-400">
                  {r.country} · {r.package}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-11 h-11 rounded-full border-2 border-jungle-300 dark:border-jungle-700 flex items-center justify-center text-jungle-600 dark:text-jungle-400 hover:bg-jungle-100 dark:hover:bg-jungle-800 hover:border-jungle-500 transition-all duration-200"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Review ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-8 h-3 bg-jungle-600 dark:bg-jungle-400"
                      : "w-3 h-3 bg-jungle-200 dark:bg-jungle-700 hover:bg-jungle-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next review"
              className="w-11 h-11 rounded-full border-2 border-jungle-300 dark:border-jungle-700 flex items-center justify-center text-jungle-600 dark:text-jungle-400 hover:bg-jungle-100 dark:hover:bg-jungle-800 hover:border-jungle-500 transition-all duration-200"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
