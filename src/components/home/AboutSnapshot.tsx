import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function AboutSnapshot() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container-xl section-px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Image side ────────────────────────────────── */}
          <div className="relative order-2 lg:order-1">
            {/* Main image block */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-jungle-900/20">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
              />
              {/* Dark overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-jungle-950/60 to-transparent" />

              {/* Overlay text */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-2xl italic text-white leading-tight">
                  "The island that changes you forever"
                </p>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -right-4 sm:-right-8 -top-6 sm:-top-8 bg-white dark:bg-jungle-900 rounded-2xl p-4 sm:p-5 shadow-xl border border-jungle-100 dark:border-jungle-800">
              <div className="font-display text-3xl sm:text-4xl text-gold-500 font-semibold">3+</div>
              <div className="font-sans text-xs text-jungle-600 dark:text-jungle-400 mt-0.5">Years crafting<br/>Sri Lankan dreams</div>
            </div>

            {/* Decorative leaf */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl bg-jungle-100 dark:bg-jungle-800 opacity-60 rotate-12" />
          </div>

          {/* ── Text side ─────────────────────────────────── */}
          <div className="order-1 lg:order-2">
            <div className="leaf-divider text-jungle-400 text-xs tracking-widest uppercase font-sans mb-5">
              Our Story
            </div>

            <h2 className="section-title mb-6">
              Sri Lanka through<br />
              <span className="italic font-light text-jungle-500 dark:text-jungle-400">
                the eyes of a local
              </span>
            </h2>

            <p className="section-sub mb-5">
              Shashi Lanka Tours was born from a deep love of this extraordinary island. For three
              years, we've been connecting travelers from around the world with the authentic heart
              of Sri Lanka — its ancient history, vibrant culture, and breathtaking natural beauty.
            </p>

            <p className="section-sub mb-8">
              Every journey we craft is personal. Whether you're climbing the Sigiriya Rock at
              sunrise or sipping Ceylon tea beside a misty plantation, we handle every detail so
              you can be fully present in every magical moment.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
              {siteConfig.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-jungle-50 dark:bg-jungle-900/60 rounded-2xl p-4 text-center border border-jungle-100 dark:border-jungle-800"
                >
                  <div className="font-display text-2xl sm:text-3xl text-jungle-700 dark:text-jungle-300 font-semibold">
                    {stat.value}
                  </div>
                  <div className="font-sans text-xs text-jungle-500 dark:text-jungle-500 mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/booking" className="btn-primary">
              Start Your Journey →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
