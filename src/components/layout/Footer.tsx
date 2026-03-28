import Link from "next/link";
import { siteConfig } from "@/data/site";
import { packages } from "@/data/packages";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-jungle-950 text-jungle-200" id="contact">
      {/* ── WhatsApp CTA Banner ──────────────────────────── */}
      <div className="bg-jungle-600 dark:bg-jungle-700">
        <div className="container-xl section-px py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display text-2xl text-white">Ready to explore Sri Lanka?</p>
            <p className="text-jungle-100 text-sm mt-0.5">Chat with us directly — we reply within the hour.</p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-white text-jungle-800 font-bold px-6 py-3.5 rounded-xl
                       hover:bg-jungle-50 transition-all duration-300 hover:-translate-y-0.5
                       shadow-xl shadow-jungle-900/30 whitespace-nowrap text-sm min-h-[48px]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-jungle-600">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* ── Main Footer ─────────────────────────────────── */}
      <div className="container-xl section-px py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-xl font-semibold text-white">
                <span className="text-gold-400">✦</span> Shashi{" "}
                <span className="italic font-light">Lanka</span> Tours
              </span>
            </Link>
            <p className="text-jungle-400 text-sm leading-relaxed mb-5">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-jungle-800 hover:bg-jungle-700 flex items-center justify-center text-jungle-300 hover:text-white transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-jungle-800 hover:bg-jungle-700 flex items-center justify-center text-jungle-300 hover:text-white transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-jungle-800 hover:bg-jungle-700 flex items-center justify-center text-jungle-300 hover:text-white transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-white text-sm tracking-widest uppercase mb-5">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home",            href: "/" },
                { label: "Our Packages",    href: "/#packages" },
                { label: "Destinations",    href: "/#destinations" },
                { label: "About Us",        href: "/#about" },
                { label: "Book a Tour",     href: "/booking" },
                { label: "Custom Package",  href: "/booking#custom" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-jungle-400 hover:text-jungle-200 text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h3 className="font-sans font-semibold text-white text-sm tracking-widest uppercase mb-5">
              Our Packages
            </h3>
            <ul className="space-y-3">
              {packages.map((pkg) => (
                <li key={pkg.id}>
                  <Link
                    href={`/packages/${pkg.id}`}
                    className="text-jungle-400 hover:text-jungle-200 text-sm transition-colors duration-200"
                  >
                    {pkg.name}
                    <span className="text-jungle-600 ml-1">({pkg.duration}D)</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-semibold text-white text-sm tracking-widest uppercase mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <span className="text-jungle-500 mt-0.5 shrink-0">📍</span>
                <span className="text-jungle-400">{siteConfig.contact.address}</span>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="text-jungle-500 shrink-0">📞</span>
                <a href={`tel:${siteConfig.contact.phone}`} className="text-jungle-400 hover:text-jungle-200 transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="text-jungle-500 shrink-0">✉️</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-jungle-400 hover:text-jungle-200 transition-colors break-all">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────── */}
      <div className="border-t border-jungle-800">
        <div className="container-xl section-px py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-jungle-600">
          <p>© {year} Shashi Lanka Tours. All rights reserved.</p>
          <p>Designed with 💚 for Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
