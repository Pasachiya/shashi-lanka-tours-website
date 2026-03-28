"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/hero-bg.jpg",
    label: "Sri Lanka's Lush Highlands",
    location: "Hill Country",
  },
  {
    image: "/images/destinations/sigiriya.jpg",
    label: "Ancient Rock Fortress",
    location: "Sigiriya",
  },
  {
    image: "/images/destinations/dambulla.jpg",
    label: "Sacred Cave Temples",
    location: "Dambulla",
  },
  {
    image: "/images/destinations/temple-of-tooth.jpg",
    label: "Temple of the Sacred Tooth Relic",
    location: "Kandy",
  },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Slideshow Backgrounds ────────────────────────── */}
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${slide.image}')`,
            opacity: i === current ? 1 : 0,
            transform: i === current ? "scale(1.06)" : "scale(1)",
            transition: "opacity 1.2s ease-in-out, transform 7s ease-in-out",
          }}
          role="img"
          aria-label={slide.label}
        />
      ))}

      {/* Cinematic dark overlay — minimal green */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative z-10 container-xl section-px pt-24 pb-16 sm:pt-32">
        <div className="max-w-3xl">

          {/* Eyebrow badge */}
          <div
            className={`
              inline-flex items-center gap-2 mb-6
              bg-white/10 backdrop-blur-sm
              border border-white/20
              rounded-full px-4 py-2
              transition-all duration-700
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-white/90 text-xs sm:text-sm font-sans font-medium tracking-wider uppercase">
              Sri Lanka&apos;s Premier Travel Experience
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`
              font-display font-light italic
              text-5xl sm:text-6xl lg:text-7xl xl:text-8xl
              text-white leading-[1.05] tracking-tight mb-6
              transition-all duration-700 delay-150
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            Discover the{" "}
            <span className="text-gold-400 not-italic font-normal">Soul</span>
            {" "}
            <span className="whitespace-nowrap">of <span className="text-amber-200">Sri Lanka</span></span>
          </h1>

          {/* Subheading */}
          <p
            className={`
              font-sans text-white/75 text-base sm:text-lg lg:text-xl
              leading-relaxed max-w-xl mb-10
              transition-all duration-700 delay-300
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            Serendibroams crafts extraordinary journeys through ancient kingdoms,
            misty highlands, and pristine coastlines — with luxury, safety, and genuine care.
          </p>

          {/* CTA Buttons */}
          <div
            className={`
              flex flex-col sm:flex-row gap-4
              transition-all duration-700 delay-500
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            <Link href="/#packages" className="btn-gold text-sm sm:text-base">
              ✦ Explore Packages
            </Link>
            <Link
              href="/booking"
              className="btn-outline border-white/50 text-white hover:bg-white/10 hover:border-white text-sm sm:text-base"
            >
              Book Your Journey →
            </Link>
          </div>

          {/* Trust signals */}
          <div
            className={`
              flex flex-wrap gap-8 mt-12
              transition-all duration-700 delay-700
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            {[
              { value: "3+", label: "Years of Excellence" },
              { value: "500+", label: "Happy Travelers" },
              { value: "30+", label: "Destinations" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-display text-2xl sm:text-3xl text-gold-400 font-semibold">
                  {stat.value}
                </div>
                <div className="font-sans text-xs text-white/50 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Slide indicators & location label ───────────── */}
      <div
        className={`
          absolute bottom-20 left-1/2 -translate-x-1/2 z-20
          flex flex-col items-center gap-3
          transition-all duration-700 delay-1000
          ${mounted ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* Current location pill */}
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/15">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-white/80 text-xs font-sans tracking-widest uppercase">
            {slides[current].location}
          </span>
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}: ${slides[i].location}`}
              className={`rounded-full transition-all duration-400 ${
                i === current
                  ? "w-8 h-2 bg-gold-400"
                  : "w-2 h-2 bg-white/35 hover:bg-white/65"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ────────────────────────────── */}
      <div
        className={`
          absolute bottom-7 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-1.5
          transition-all duration-700 delay-1200
          ${mounted ? "opacity-100" : "opacity-0"}
        `}
      >
        <span className="font-sans text-[10px] text-white/35 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-6 bg-gradient-to-b from-white/35 to-transparent animate-pulse" />
      </div>

      {/* ── Bottom curve ────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 lg:h-16 fill-jungle-50 dark:fill-jungle-950"
        >
          <path d="M0 60 C360 20 1080 20 1440 60 L1440 60 L0 60 Z" />
        </svg>
      </div>
    </section>
  );
}
