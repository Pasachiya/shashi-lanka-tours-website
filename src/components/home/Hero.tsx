"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Background Image + Gradient ─────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        role="img"
        aria-label="Aerial view of Sri Lanka's lush landscape"
      />
      {/* Gradient overlay — also serves as fallback if no image */}
      <div className="absolute inset-0 bg-gradient-to-br from-jungle-950/95 via-jungle-900/85 to-jungle-800/70" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #4ade80 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative z-10 container-xl section-px pt-24 pb-16 sm:pt-32">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div
            className={`
              inline-flex items-center gap-2 mb-6
              bg-jungle-700/40 backdrop-blur-sm
              border border-jungle-500/30
              rounded-full px-4 py-2
              transition-all duration-700
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-jungle-200 text-xs sm:text-sm font-sans font-medium tracking-wider uppercase">
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
            {" "}of{" "}
            <span className="text-jungle-300">Sri Lanka</span>
          </h1>

          {/* Subheading */}
          <p
            className={`
              font-sans text-jungle-200 text-base sm:text-lg lg:text-xl
              leading-relaxed max-w-xl mb-10
              transition-all duration-700 delay-300
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            Shashi Lanka Tours crafts extraordinary journeys through ancient kingdoms,
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
            <Link href="/booking" className="btn-outline border-white/50 text-white hover:bg-white/10 hover:border-white text-sm sm:text-base">
              Book Your Journey →
            </Link>
          </div>

          {/* Trust signals */}
          <div
            className={`
              flex flex-wrap gap-6 mt-12
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
                <div className="font-sans text-xs text-jungle-400 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ────────────────────────────── */}
      <div
        className={`
          absolute bottom-8 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-2
          transition-all duration-700 delay-1000
          ${mounted ? "opacity-100" : "opacity-0"}
        `}
      >
        <span className="font-sans text-xs text-jungle-400 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-jungle-400 to-transparent animate-pulse" />
      </div>

      {/* ── Decorative bottom curve ──────────────────────── */}
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
