import type { Metadata } from "next";
import BookingPageClient from "@/components/booking/BookingPageClient";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

export const metadata: Metadata = {
  title: "Book Your Tour",
  description:
    "Book your Sri Lanka tour package with Shashi Lanka Tours. Choose from Heritage of the Island, Island Odyssey, Nature Paradise, or build a custom package.",
};

export default function BookingPage() {
  return (
    <>
      <BookingPageClient />
      <WhatsAppFAB />
    </>
  );
}
