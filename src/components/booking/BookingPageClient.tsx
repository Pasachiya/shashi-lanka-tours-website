"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import StandardBookingForm from "./StandardBookingForm";
import CustomPackageForm from "./CustomPackageForm";

function BookingContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"book" | "custom">("book");
  const initialPackage = searchParams.get("package") ?? "";

  useEffect(() => {
    // If URL hash is #custom, switch to custom tab
    if (window.location.hash === "#custom") {
      setActiveTab("custom");
    }
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-16 bg-jungle-50 dark:bg-jungle-950">
      {/* ── Page Header ─────────────────────────────────── */}
      <div className="bg-gradient-to-br from-jungle-900 to-jungle-800 py-16 sm:py-20 relative overflow-hidden">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #86efac 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 container-xl section-px text-center">
          <div className="inline-flex items-center gap-2 mb-5 bg-jungle-700/40 border border-jungle-500/30 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-jungle-200 text-xs font-sans tracking-wider uppercase">
              Ready to Explore Sri Lanka?
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-light leading-tight mb-3">
            Plan Your Journey
          </h1>
          <p className="font-sans text-jungle-300 text-base sm:text-lg max-w-lg mx-auto">
            Fill in the form — we&apos;ll confirm your booking via WhatsApp within the hour.
          </p>
        </div>
      </div>

      {/* ── Tabs ─────────────────────────────────────────── */}
      <div className="container-xl section-px -mt-6 relative z-10">
        <div className="flex gap-2 bg-white dark:bg-jungle-900 rounded-2xl p-2 shadow-xl shadow-jungle-900/10 border border-jungle-100 dark:border-jungle-800 max-w-lg mx-auto">
          <button
            onClick={() => setActiveTab("book")}
            className={`
              flex-1 py-3.5 rounded-xl text-sm font-sans font-semibold
              transition-all duration-200
              ${activeTab === "book"
                ? "bg-jungle-600 text-white shadow-md"
                : "text-jungle-600 dark:text-jungle-400 hover:text-jungle-800 dark:hover:text-jungle-200"
              }
            `}
          >
            📋 Book a Package
          </button>
          <button
            id="custom"
            onClick={() => setActiveTab("custom")}
            className={`
              flex-1 py-3.5 rounded-xl text-sm font-sans font-semibold
              transition-all duration-200
              ${activeTab === "custom"
                ? "bg-gold-500 text-white shadow-md"
                : "text-jungle-600 dark:text-jungle-400 hover:text-jungle-800 dark:hover:text-jungle-200"
              }
            `}
          >
            ✦ Custom Package
          </button>
        </div>
      </div>

      {/* ── Form Area ─────────────────────────────────────── */}
      <div className="container-xl section-px mt-8">
        {activeTab === "book"
          ? <StandardBookingForm initialPackage={initialPackage} />
          : <CustomPackageForm />
        }
      </div>
    </div>
  );
}

export default function BookingPageClient() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-jungle-500 font-sans">Loading...</div>
      </div>
    }>
      <BookingContent />
    </Suspense>
  );
}
