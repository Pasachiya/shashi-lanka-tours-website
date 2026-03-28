"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Packages", href: "/#packages" },
  { label: "About",    href: "/#about" },
  { label: "Contact",  href: "/#contact" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [drawerOpen,  setDrawerOpen]  = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close drawer on route change
  useEffect(() => { setDrawerOpen(false); }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-in-out
          ${transparent
            ? "bg-transparent"
            : "bg-white/95 dark:bg-jungle-950/95 backdrop-blur-xl shadow-lg shadow-jungle-900/10"
          }
        `}
      >
        <div className="container-xl section-px">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* ── Logo ───────────────────────────────────── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Shashi Lanka Tours — Home"
            >
              <span
                className={`
                  text-2xl font-display font-semibold tracking-tight
                  transition-colors duration-300
                  ${transparent
                    ? "text-white"
                    : "text-jungle-800 dark:text-jungle-100"
                  }
                `}
              >
                <span className="text-gold-500">✦</span>{" "}
                Shashi{" "}
                <span className="italic font-light">Lanka</span> Tours
              </span>
            </Link>

            {/* ── Desktop Nav ─────────────────────────────── */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-sans font-medium
                    transition-all duration-200
                    ${transparent
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "text-jungle-700 dark:text-jungle-300 hover:text-jungle-900 dark:hover:text-white hover:bg-jungle-50 dark:hover:bg-jungle-800"
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* ── Desktop CTA ─────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/booking" className="btn-gold text-xs px-5 py-2.5">
                Book Now
              </Link>
            </div>

            {/* ── Mobile Hamburger ────────────────────────── */}
            <button
              onClick={() => setDrawerOpen(true)}
              className={`
                lg:hidden p-2.5 rounded-xl min-h-[44px] min-w-[44px]
                flex flex-col items-center justify-center gap-1.5
                transition-all duration-200
                ${transparent
                  ? "text-white hover:bg-white/10"
                  : "text-jungle-700 dark:text-jungle-300 hover:bg-jungle-100 dark:hover:bg-jungle-800"
                }
              `}
              aria-label="Open menu"
              aria-expanded={drawerOpen}
            >
              <span className="w-5 h-0.5 bg-current rounded-full" />
              <span className="w-5 h-0.5 bg-current rounded-full" />
              <span className="w-3.5 h-0.5 bg-current rounded-full self-end" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer Backdrop ──────────────────────── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-[60] bg-jungle-950/70 backdrop-blur-sm lg:hidden"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile Drawer ───────────────────────────────── */}
      <aside
        className={`
          fixed top-0 right-0 bottom-0 z-[70]
          w-[85vw] max-w-sm
          bg-white dark:bg-jungle-900
          shadow-2xl
          flex flex-col
          transition-transform duration-400 ease-out
          lg:hidden
          ${drawerOpen ? "translate-x-0" : "translate-x-full"}
        `}
        aria-label="Mobile navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-jungle-100 dark:border-jungle-800">
          <span className="font-display text-lg font-semibold text-jungle-800 dark:text-jungle-100">
            <span className="text-gold-500">✦</span> Menu
          </span>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 rounded-xl text-jungle-600 dark:text-jungle-400 hover:bg-jungle-50 dark:hover:bg-jungle-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="2" x2="16" y2="16"/>
              <line x1="16" y1="2" x2="2" y2="16"/>
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 px-4 py-4 rounded-xl text-base font-sans font-medium
                         text-jungle-700 dark:text-jungle-200
                         hover:bg-jungle-50 dark:hover:bg-jungle-800
                         hover:text-jungle-900 dark:hover:text-white
                         transition-colors duration-200
                         min-h-[52px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className="px-6 py-6 border-t border-jungle-100 dark:border-jungle-800 pb-safe">
          <Link href="/booking" className="btn-gold w-full">
            📋 Book Your Tour
          </Link>
          <a
            href="https://wa.me/94723133994"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 btn-outline w-full"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </aside>
    </>
  );
}
