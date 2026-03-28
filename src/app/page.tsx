import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import FeaturedPackages from "@/components/home/FeaturedPackages";
import ValueProps from "@/components/home/ValueProps";
import Testimonials from "@/components/home/Testimonials";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

export const metadata: Metadata = {
  title: "Serendibroams — Discover the Pearl of the Indian Ocean",
  description:
    "Luxury, cultural, and nature tours across Sri Lanka. Heritage of the Island (11 days), Island Odyssey (6 days), Nature Paradise (14 days) and custom packages.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSnapshot />
      <FeaturedDestinations />
      <FeaturedPackages />
      <ValueProps />
      <Testimonials />
      <WhatsAppFAB />
    </>
  );
}
