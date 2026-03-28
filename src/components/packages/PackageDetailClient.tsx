"use client";

import { useState } from "react";
import Link from "next/link";
import type { TourPackage } from "@/data/packages";
import { buildBookingMessage, openWhatsApp } from "@/lib/whatsapp";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

interface Props { pkg: TourPackage }

export default function PackageDetailClient({ pkg }: Props) {
  const [openDay, setOpenDay] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"itinerary" | "includes">("itinerary");

  // Quick-book CTA handler — opens WhatsApp with a basic inquiry
  const handleQuickBook = () => {
    const msg = buildBookingMessage({
      fullName:      "",
      email:         "",
      phone:         "",
      country:       "",
      packageName:   pkg.name,
      adults:        2,
      children:      0,
      arrivalDate:   "",
      arrivalTime:   "",
      departureDate: "",
      departureTime: "",
      description:   `I'm interested in the ${pkg.name} (${pkg.duration} days) package. Please send me more details.`,
    });
    openWhatsApp(msg);
  };

  return (
    <>
      {/* ── Hero Banner ──────────────────────────────────── */}
      <div className="relative min-h-[50vh] sm:min-h-[55vh] flex flex-col justify-end overflow-hidden pt-20">
        {/* Bg image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${pkg.image}')` }}
        />
        {/* Fallback gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-jungle-950 via-jungle-900/60 to-transparent" />

        <div className="relative z-10 container-xl section-px pb-10 sm:pb-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-sans text-jungle-300/70 mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/#packages" className="hover:text-white transition-colors">Packages</Link>
            <span>›</span>
            <span className="text-white">{pkg.name}</span>
          </nav>

          {/* Badge & theme */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-gold-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
              {pkg.badge}
            </span>
            <span className="text-jungle-300 text-xs font-sans tracking-wider uppercase">
              {pkg.theme}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight mb-3">
            {pkg.name}
          </h1>
          <p className="font-sans text-jungle-200 text-base sm:text-lg italic max-w-xl">
            {pkg.tagline}
          </p>

          {/* Quick stats row */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { icon: "🗓️", label: "Duration",   value: `${pkg.duration} Days / ${pkg.durationNight} Nights` },
              { icon: "👥", label: "Group Size", value: pkg.groupSize },
              { icon: "💰", label: "From",       value: pkg.priceFrom },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5">
                <span className="text-lg">{s.icon}</span>
                <div>
                  <div className="text-jungle-300 text-xs font-sans">{s.label}</div>
                  <div className="text-white text-sm font-sans font-semibold">{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────── */}
      <div className="container-xl section-px py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

          {/* ── LEFT: Main content ──────────────────────── */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white dark:bg-jungle-900 rounded-2xl p-6 sm:p-8 border border-jungle-100 dark:border-jungle-800">
              <h2 className="font-display text-2xl text-jungle-900 dark:text-jungle-100 font-semibold mb-3">
                About This Journey
              </h2>
              <p className="font-sans text-jungle-600 dark:text-jungle-400 leading-relaxed">
                {pkg.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-jungle-50 dark:bg-jungle-900/50 rounded-2xl p-6 sm:p-8 border border-jungle-100 dark:border-jungle-800">
              <h2 className="font-display text-2xl text-jungle-900 dark:text-jungle-100 font-semibold mb-5">
                Tour Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-jungle-600 dark:bg-jungle-500 text-white text-xs flex items-center justify-center mt-0.5 flex-shrink-0">✓</span>
                    <span className="font-sans text-sm text-jungle-700 dark:text-jungle-300 leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tabs: Itinerary | Includes */}
            <div>
              {/* Tab headers */}
              <div className="flex gap-1 bg-jungle-100 dark:bg-jungle-900 rounded-xl p-1.5 mb-5">
                {(["itinerary", "includes"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
                      flex-1 py-3 rounded-lg text-sm font-sans font-semibold capitalize
                      transition-all duration-200
                      ${activeTab === tab
                        ? "bg-white dark:bg-jungle-800 text-jungle-900 dark:text-white shadow-sm"
                        : "text-jungle-600 dark:text-jungle-400 hover:text-jungle-800 dark:hover:text-jungle-200"
                      }
                    `}
                  >
                    {tab === "itinerary" ? "📅 Day-by-Day Itinerary" : "✅ Includes & Excludes"}
                  </button>
                ))}
              </div>

              {/* Itinerary accordion */}
              {activeTab === "itinerary" && (
                <div className="space-y-3">
                  {pkg.itinerary.map((day, i) => {
                    const isOpen = openDay === i;
                    return (
                      <div
                        key={day.day}
                        className={`
                          rounded-2xl border overflow-hidden
                          transition-all duration-300
                          ${isOpen
                            ? "border-jungle-400 dark:border-jungle-600 shadow-lg shadow-jungle-900/10"
                            : "border-jungle-100 dark:border-jungle-800"
                          }
                          bg-white dark:bg-jungle-900
                        `}
                      >
                        {/* Accordion trigger */}
                        <button
                          onClick={() => setOpenDay(isOpen ? null : i)}
                          className="w-full flex items-center gap-4 p-5 text-left min-h-[64px]"
                          aria-expanded={isOpen}
                        >
                          {/* Day badge */}
                          <div className={`
                            w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex-shrink-0
                            flex flex-col items-center justify-center
                            font-display font-semibold
                            transition-all duration-300
                            ${isOpen
                              ? "bg-jungle-600 text-white"
                              : "bg-jungle-100 dark:bg-jungle-800 text-jungle-700 dark:text-jungle-300"
                            }
                          `}>
                            <span className="text-xs leading-none">Day</span>
                            <span className="text-sm leading-none">{day.day}</span>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="font-display text-base sm:text-lg text-jungle-900 dark:text-jungle-100 font-semibold leading-snug">
                              {day.title}
                            </div>
                            <div className="font-sans text-xs text-jungle-500 dark:text-jungle-400 mt-0.5 flex items-center gap-1.5">
                              <span>{day.from}</span>
                              {day.from !== day.to && (
                                <>
                                  <span>→</span>
                                  <span>{day.to}</span>
                                </>
                              )}
                            </div>
                          </div>

                          <div className={`
                            w-8 h-8 rounded-full flex items-center justify-center
                            border transition-all duration-300 flex-shrink-0
                            ${isOpen
                              ? "border-jungle-400 bg-jungle-50 dark:bg-jungle-800 text-jungle-600 rotate-45"
                              : "border-jungle-200 dark:border-jungle-700 text-jungle-400"
                            }
                          `}>
                            +
                          </div>
                        </button>

                        {/* Accordion content */}
                        {isOpen && (
                          <div className="px-5 pb-6 animate-accordion">
                            <div className="pl-14 sm:pl-16 space-y-4">
                              {/* Activities */}
                              <ul className="space-y-2.5">
                                {day.activities.map((act, j) => (
                                  <li key={j} className="flex items-start gap-3">
                                    <span className="text-jungle-500 mt-0.5 flex-shrink-0 text-base">◈</span>
                                    <span className="font-sans text-sm text-jungle-700 dark:text-jungle-300 leading-relaxed">
                                      {act}
                                    </span>
                                  </li>
                                ))}
                              </ul>

                              {/* Meta */}
                              <div className="flex flex-wrap gap-3 pt-2 border-t border-jungle-100 dark:border-jungle-800">
                                <div className="flex items-center gap-2 text-xs text-jungle-500 dark:text-jungle-400">
                                  <span>🏨</span>
                                  <span>{day.accommodation}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Includes / Excludes */}
              {activeTab === "includes" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="bg-jungle-50 dark:bg-jungle-900/60 rounded-2xl p-6 border border-jungle-200 dark:border-jungle-800">
                    <h3 className="font-display text-xl text-jungle-900 dark:text-jungle-100 font-semibold mb-4 flex items-center gap-2">
                      <span className="text-jungle-500">✓</span> Includes
                    </h3>
                    <ul className="space-y-3">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm">
                          <span className="w-5 h-5 rounded-full bg-jungle-500 text-white text-xs flex items-center justify-center mt-0.5 flex-shrink-0">✓</span>
                          <span className="font-sans text-jungle-700 dark:text-jungle-300 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/10 rounded-2xl p-6 border border-red-100 dark:border-red-900/30">
                    <h3 className="font-display text-xl text-jungle-900 dark:text-jungle-100 font-semibold mb-4 flex items-center gap-2">
                      <span className="text-red-400">✕</span> Excludes
                    </h3>
                    <ul className="space-y-3">
                      {pkg.excludes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm">
                          <span className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-400 text-xs flex items-center justify-center mt-0.5 flex-shrink-0">✕</span>
                          <span className="font-sans text-jungle-700 dark:text-jungle-300 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT: Booking sidebar ──────────────────── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Book card */}
              <div className="bg-white dark:bg-jungle-900 rounded-2xl p-6 border border-jungle-100 dark:border-jungle-800 shadow-xl shadow-jungle-900/10">
                <div className="mb-5">
                  <span className="font-sans text-xs text-jungle-500 dark:text-jungle-400">Starting from</span>
                  <div className="font-display text-4xl text-jungle-800 dark:text-jungle-200 font-semibold">
                    {pkg.priceFrom}
                  </div>
                  <div className="font-sans text-xs text-jungle-500 mt-1">per person · {pkg.duration} days</div>
                </div>

                {/* Info pills */}
                <div className="space-y-2.5 mb-6">
                  {[
                    { label: "Duration",   val: `${pkg.duration} Days / ${pkg.durationNight} Nights` },
                    { label: "Group Size", val: pkg.groupSize },
                    { label: "Theme",      val: pkg.theme },
                  ].map((r) => (
                    <div key={r.label} className="flex justify-between text-sm py-2 border-b border-jungle-100 dark:border-jungle-800 last:border-0">
                      <span className="text-jungle-500 dark:text-jungle-500">{r.label}</span>
                      <span className="font-semibold text-jungle-800 dark:text-jungle-200">{r.val}</span>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <Link
                  href={`/booking?package=${pkg.id}`}
                  className="btn-primary w-full mb-3"
                >
                  📋 Book This Package
                </Link>
                <button
                  onClick={handleQuickBook}
                  className="btn-outline w-full"
                >
                  💬 Quick WhatsApp Inquiry
                </button>
              </div>

              {/* Help card */}
              <div className="bg-jungle-50 dark:bg-jungle-900/50 rounded-2xl p-5 border border-jungle-100 dark:border-jungle-800 text-center">
                <p className="font-sans text-sm text-jungle-600 dark:text-jungle-400 mb-3">
                  Not sure? Our travel experts are happy to help you choose.
                </p>
                <a
                  href="https://wa.me/94723133994"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jungle-600 dark:text-jungle-400 font-semibold text-sm hover:underline"
                >
                  Chat with us →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom sticky bar on mobile ────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 dark:bg-jungle-950/95 backdrop-blur-xl border-t border-jungle-100 dark:border-jungle-800 px-4 py-3 pb-safe">
        <div className="flex gap-3 max-w-lg mx-auto">
          <button
            onClick={handleQuickBook}
            className="flex-1 btn-outline py-3 text-sm"
          >
            💬 Inquire
          </button>
          <Link
            href={`/booking?package=${pkg.id}`}
            className="flex-1 btn-primary py-3 text-sm"
          >
            📋 Book Now
          </Link>
        </div>
      </div>

      <WhatsAppFAB />
    </>
  );
}
