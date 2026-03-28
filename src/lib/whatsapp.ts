const WA_NUMBER = "94723133994";

/* ── Types ─────────────────────────────────────────────────────────────── */

export interface BookingData {
  fullName:      string;
  email:         string;
  phone:         string;
  country:       string;
  packageName:   string;
  adults:        number;
  children:      number;
  arrivalDate:   string;
  arrivalTime:   string;
  departureDate: string;
  departureTime: string;
  description:   string;
}

export interface CustomPackageData {
  // Step 1
  arrivalDate:   string;
  durationDays:  number;
  // Step 2
  adults:        number;
  children:      number;
  // Step 3
  destinations:  string[];
  // Step 4
  travelStyle:   string;
  accommodation: string;
  interests:     string[];
  budget:        string;
  // Step 5
  fullName:      string;
  email:         string;
  phone:         string;
  country:       string;
  notes:         string;
}

/* ── Message builders ───────────────────────────────────────────────────── */

export function buildBookingMessage(d: BookingData): string {
  const lines: string[] = [
    "🌿 *BOOKING INQUIRY — Shashi Lanka Tours* 🌿",
    "",
    "👤 *Personal Details*",
    `• Full Name : ${d.fullName}`,
    `• Email     : ${d.email}`,
    `• Phone     : ${d.phone}`,
    `• Country   : ${d.country}`,
    "",
    "📦 *Package Details*",
    `• Package   : ${d.packageName}`,
    `• Adults    : ${d.adults}`,
    `• Children  : ${d.children}`,
    "",
    "📅 *Travel Dates*",
    `• Arrival   : ${d.arrivalDate}${d.arrivalTime ? " at " + d.arrivalTime : ""}`,
    `• Departure : ${d.departureDate}${d.departureTime ? " at " + d.departureTime : ""}`,
  ];

  if (d.description.trim()) {
    lines.push("", "📝 *Special Requirements*", d.description.trim());
  }

  lines.push("", "---", "_Sent via shashilankatours.lk_");

  return lines.join("\n");
}

export function buildCustomPackageMessage(d: CustomPackageData): string {
  const departureDate = d.arrivalDate
    ? addDays(d.arrivalDate, d.durationDays)
    : "TBD";

  const lines: string[] = [
    "🌿 *CUSTOM PACKAGE REQUEST — Shashi Lanka Tours* 🌿",
    "",
    "📅 *Travel Dates*",
    `• Arrival        : ${d.arrivalDate || "TBD"}`,
    `• Duration       : ${d.durationDays} days`,
    `• Est. Departure : ${departureDate}`,
    "",
    "👥 *Group Size*",
    `• Adults         : ${d.adults}`,
    `• Children       : ${d.children}`,
    "",
    "🗺️ *Desired Destinations*",
    ...(d.destinations.length
      ? d.destinations.map((dest) => `  • ${dest}`)
      : ["  • Not specified"]),
    "",
    "🎯 *Preferences*",
    `• Travel Style   : ${d.travelStyle || "Not specified"}`,
    `• Accommodation  : ${d.accommodation || "Not specified"}`,
    `• Budget Range   : ${d.budget || "Not specified"}`,
  ];

  if (d.interests.length) {
    lines.push("", "⭐ *Special Interests*");
    d.interests.forEach((i) => lines.push(`  • ${i}`));
  }

  lines.push(
    "",
    "👤 *Contact Details*",
    `• Name    : ${d.fullName}`,
    `• Phone   : ${d.phone}`,
    `• Email   : ${d.email}`,
    `• Country : ${d.country}`,
  );

  if (d.notes.trim()) {
    lines.push("", "📝 *Additional Notes*", d.notes.trim());
  }

  lines.push("", "---", "_Custom Package Request via shashilankatours.lk_");

  return lines.join("\n");
}

/* ── Opener ─────────────────────────────────────────────────────────────── */

export function openWhatsApp(message: string): void {
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

/* ── Quick WhatsApp link (no pre-filled message) ────────────────────────── */
export const whatsappLink = `https://wa.me/${WA_NUMBER}`;

/* ── Helper ─────────────────────────────────────────────────────────────── */
function addDays(dateStr: string, days: number): string {
  try {
    const d = new Date(dateStr);
    d.setDate(d.getDate() + days);
    return d.toISOString().split("T")[0];
  } catch {
    return "TBD";
  }
}
