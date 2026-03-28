import { siteConfig } from "@/data/site";

export default function ValueProps() {
  return (
    <section className="py-20 lg:py-28 bg-jungle-900 dark:bg-jungle-950 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 3px 3px, #86efac 1.5px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Gradient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-jungle-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 container-xl section-px">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="leaf-divider text-jungle-500 text-xs tracking-widest uppercase font-sans mb-5 justify-center before:bg-jungle-700 after:bg-jungle-700">
            Why Choose Us
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight mb-4">
            The Serendibroams{" "}
            <span className="italic font-light text-jungle-400">Promise</span>
          </h2>
          <p className="font-sans text-jungle-400 text-base sm:text-lg leading-relaxed">
            Every detail, every moment, every memory — we make it extraordinary.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {siteConfig.valueProps.map((prop, i) => (
            <div
              key={prop.title}
              className="
                group relative
                bg-white/5 hover:bg-white/10
                border border-white/10 hover:border-jungle-500/40
                rounded-2xl p-6 sm:p-7
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl hover:shadow-jungle-950/60
              "
            >
              {/* Icon */}
              <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block">
                {prop.icon}
              </div>

              <h3 className="font-display text-xl text-white font-semibold mb-2 leading-snug">
                {prop.title}
              </h3>
              <p className="font-sans text-jungle-400 text-sm leading-relaxed">
                {prop.description}
              </p>

              {/* Subtle number */}
              <div className="absolute top-5 right-5 font-display text-5xl text-white/5 font-bold leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
