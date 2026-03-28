import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets:  ["latin"],
  weight:   ["300", "400", "500", "600", "700"],
  style:    ["normal", "italic"],
  variable: "--font-cormorant",
  display:  "swap",
});

const dmSans = DM_Sans({
  subsets:  ["latin"],
  weight:   ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display:  "swap",
});

export const metadata: Metadata = {
  title: {
    default:  "Shashi Lanka Tours — Discover the Pearl of the Indian Ocean",
    template: "%s | Shashi Lanka Tours",
  },
  description:
    "A dedicated Sri Lankan travel agency offering luxury, cultural, and nature tours across the island. Heritage of the Island, Island Odyssey, Nature Paradise, and custom packages.",
  keywords:
    "Sri Lanka tours, Sri Lanka travel, Sri Lanka holiday packages, Colombo tours, Sigiriya, Kandy, Ella, whale watching Sri Lanka",
  openGraph: {
    type:        "website",
    siteName:    "Shashi Lanka Tours",
    title:       "Shashi Lanka Tours — Discover the Pearl of the Indian Ocean",
    description: "Luxury, cultural and nature tours across Sri Lanka.",
  },
  robots: {
    index:  true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width:              "device-width",
  initialScale:       1,
  maximumScale:       5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0faf4" },
    { media: "(prefers-color-scheme: dark)",  color: "#062418" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
