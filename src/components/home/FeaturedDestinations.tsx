import Link from "next/link";
import { destinations } from "@/data/destinations";

export default function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-20 lg:py-28 bg-white dark:bg-jungle-900/30">
      <div className="container-xl section-px">

        {/* ── Section Header ──────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="leaf-divider text-jungle-400 text-xs tracking-widest uppercase font-sans mb-5 justify-center">
            Where to Explore
          </div>
          <h2 className="section-title mb-4">
            Iconic{" "}
            <span className="italic font-light text-jungle-500 dark:text-jungle-400">
              Destinations
            </span>
          </h2>
          <p className="section-sub">
            From UNESCO World Heritage sites to pristine beaches — Sri Lanka packs a
            lifetime of wonder into one extraordinary island.
          </p>
        </div>

        {/* ── Cards — horizontal scroll on mobile ─────────── */}
        <div
          className="
            flex gap-4 overflow-x-auto pb-4 -mx-4 px-4
            sm:mx-0 sm:px-0
            lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0
            snap-x snap-mandatory
          "
          style={{ scrollbarWidth: "none" }}
        >
          {destinations.map((dest, i) => (
            <div
              key={dest.id}
              className="
                group relative overflow-hidden rounded-2xl
                min-w-[72vw] sm:min-w-[46vw] lg:min-w-0
                aspect-[3/4] flex-shrink-0
                shadow-lg cursor-default
                snap-start
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-2xl hover:shadow-jungle-900/30
              "
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${dest.image}')` }}
              />
              {/* Fallback gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${dest.gradient}`} />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-jungle-950 via-jungle-900/40 to-transparent" />

              {/* Badge */}
              {dest.badge && (
                <div className="absolute top-4 left-4">
                  <span className="bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                    {dest.badge}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-xl text-white font-semibold leading-tight mb-2">
                  {dest.name}
                </h3>
                <p className="font-sans text-jungle-300 text-xs leading-relaxed line-clamp-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {dest.description}
                </p>
                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5">
                  {dest.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs bg-white/15 text-white px-2.5 py-1 rounded-full border border-white/20"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ─────────────────────────────────────────── */}
        <div className="text-center mt-12">
          <Link href="/#packages" className="btn-outline">
            See Tour Packages →
          </Link>
        </div>
      </div>
    </section>
  );
}
