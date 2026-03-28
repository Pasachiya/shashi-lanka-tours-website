import Link from "next/link";
import { packages } from "@/data/packages";

const badgeColors: Record<string, string> = {
  "Best Seller": "bg-gold-500 text-white",
  Popular:       "bg-jungle-500 text-white",
  Flagship:      "bg-jungle-800 text-white",
};

export default function FeaturedPackages() {
  return (
    <section id="packages" className="py-20 lg:py-28">
      <div className="container-xl section-px">

        {/* ── Section Header ──────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="leaf-divider text-jungle-400 text-xs tracking-widest uppercase font-sans mb-5 justify-center">
            Our Packages
          </div>
          <h2 className="section-title mb-4">
            Curated{" "}
            <span className="italic font-light text-jungle-500 dark:text-jungle-400">
              Sri Lanka Journeys
            </span>
          </h2>
          <p className="section-sub">
            Three thoughtfully designed tours — from a compact 6-day odyssey to a sweeping
            14-day nature immersion. Or build your own bespoke experience.
          </p>
        </div>

        {/* ── Package Cards ───────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, i) => (
            <article
              key={pkg.id}
              className="card flex flex-col group"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Image / gradient banner */}
              <div className="relative overflow-hidden rounded-t-2xl aspect-[16/9] flex-shrink-0">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${pkg.image}')` }}
                />
                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full tracking-wide ${badgeColors[pkg.badge] ?? "bg-white/20 text-white"}`}>
                    {pkg.badge}
                  </span>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-jungle-900/90 backdrop-blur-sm rounded-xl px-3 py-2 text-center">
                  <div className="font-display text-xl font-semibold text-jungle-800 dark:text-jungle-200 leading-none">
                    {pkg.duration}
                  </div>
                  <div className="font-sans text-xs text-jungle-600 dark:text-jungle-400">
                    Days
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                {/* Theme tag */}
                <span className="text-xs font-sans font-semibold text-jungle-500 dark:text-jungle-400 uppercase tracking-widest mb-2">
                  {pkg.theme}
                </span>

                <h3 className="font-display text-2xl text-jungle-900 dark:text-jungle-100 font-semibold leading-tight mb-2">
                  {pkg.name}
                </h3>

                <p className="font-sans text-sm text-jungle-600 dark:text-jungle-400 leading-relaxed mb-5 line-clamp-3 flex-1">
                  {pkg.description}
                </p>

                {/* Key highlights preview */}
                <ul className="space-y-1.5 mb-5">
                  {pkg.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-jungle-700 dark:text-jungle-300">
                      <span className="text-jungle-500 mt-0.5 shrink-0">✓</span>
                      <span className="line-clamp-1">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Price & actions */}
                <div className="border-t border-jungle-100 dark:border-jungle-800 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs text-jungle-500 dark:text-jungle-500 block">Starting from</span>
                      <span className="font-display text-xl font-semibold text-jungle-800 dark:text-jungle-200">
                        {pkg.priceFrom}
                      </span>
                      <span className="text-xs text-jungle-500 ml-1">/ person</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-jungle-500 block">{pkg.durationNight}N / {pkg.duration}D</span>
                      <span className="text-xs text-jungle-600 dark:text-jungle-400">{pkg.groupSize}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <Link
                      href={`/packages/${pkg.id}`}
                      className="btn-outline text-xs py-2.5 px-3"
                    >
                      View Details
                    </Link>
                    <Link
                      href={`/booking?package=${pkg.id}`}
                      className="btn-primary text-xs py-2.5 px-3"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Custom Package CTA ───────────────────────────── */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-jungle-900 to-jungle-800 dark:from-jungle-950 dark:to-jungle-900 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">
              None of these quite right?
            </h3>
            <p className="text-jungle-300 text-sm sm:text-base">
              Design your own custom Sri Lanka itinerary — we&apos;ll build it around you.
            </p>
          </div>
          <Link
            href="/booking#custom"
            className="btn-gold whitespace-nowrap flex-shrink-0"
          >
            ✦ Create Custom Package
          </Link>
        </div>
      </div>
    </section>
  );
}
