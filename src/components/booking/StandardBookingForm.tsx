"use client";

import { useState } from "react";
import { packages } from "@/data/packages";
import { buildBookingMessage, openWhatsApp, type BookingData } from "@/lib/whatsapp";

interface Props { initialPackage?: string }

const COUNTRIES = [
  "Australia","Austria","Belgium","Canada","China","Denmark","Finland",
  "France","Germany","India","Ireland","Italy","Japan","Netherlands",
  "New Zealand","Norway","Russia","Singapore","South Korea","Spain",
  "Sweden","Switzerland","United Kingdom","United States","Other",
];

const initForm = (pkg: string): BookingData => ({
  fullName:      "",
  email:         "",
  phone:         "",
  country:       "",
  packageName:   pkg,
  adults:        2,
  children:      0,
  arrivalDate:   "",
  arrivalTime:   "",
  departureDate: "",
  departureTime: "",
  description:   "",
});

type Errors = Partial<Record<keyof BookingData, string>>;

function validate(d: BookingData): Errors {
  const e: Errors = {};
  if (!d.fullName.trim())    e.fullName    = "Full name is required";
  if (!d.email.includes("@")) e.email      = "Valid email is required";
  if (!d.phone.trim())       e.phone       = "Phone number is required";
  if (!d.country)            e.country     = "Please select your country";
  if (!d.packageName)        e.packageName = "Please select a package";
  if (!d.arrivalDate)        e.arrivalDate = "Arrival date is required";
  if (!d.departureDate)      e.departureDate = "Departure date is required";
  return e;
}

export default function StandardBookingForm({ initialPackage = "" }: Props) {
  const pkgLabel =
    packages.find((p) => p.id === initialPackage)?.name || initialPackage;
  const [form,   setForm]   = useState<BookingData>(initForm(pkgLabel));
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof BookingData, value: string | number) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = () => {
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const msg = buildBookingMessage(form);
    openWhatsApp(msg);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-16 px-4">
        <div className="text-6xl mb-5">🎉</div>
        <h2 className="font-display text-3xl text-jungle-800 dark:text-jungle-200 font-semibold mb-3">
          WhatsApp Opening…
        </h2>
        <p className="font-sans text-jungle-600 dark:text-jungle-400 text-base mb-8">
          Your booking inquiry has been prepared. Complete it in WhatsApp to send it to our team.
          We typically reply within an hour!
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(initForm("")); }}
          className="btn-outline"
        >
          ← Start a New Booking
        </button>
      </div>
    );
  }

  const err = (f: keyof BookingData) =>
    errors[f] ? (
      <p className="text-red-500 text-xs mt-1.5 font-sans">{errors[f]}</p>
    ) : null;

  const fieldClass = (f: keyof BookingData) =>
    `input ${errors[f] ? "ring-2 ring-red-400 border-red-300" : ""}`;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-jungle-900 rounded-3xl shadow-xl shadow-jungle-900/10 border border-jungle-100 dark:border-jungle-800 overflow-hidden">

        {/* Form header */}
        <div className="bg-jungle-50 dark:bg-jungle-900/60 px-6 sm:px-8 py-5 border-b border-jungle-100 dark:border-jungle-800">
          <h2 className="font-display text-2xl text-jungle-900 dark:text-jungle-100 font-semibold">
            Booking Inquiry
          </h2>
          <p className="font-sans text-sm text-jungle-500 dark:text-jungle-400 mt-1">
            Fill in your details — your message will open directly in WhatsApp.
          </p>
        </div>

        <div className="px-6 sm:px-8 py-8 space-y-6">

          {/* ── Section: Personal Details ─────────────────── */}
          <div>
            <h3 className="font-display text-lg text-jungle-800 dark:text-jungle-200 font-semibold mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-jungle-100 dark:bg-jungle-800 text-jungle-600 dark:text-jungle-400 flex items-center justify-center text-sm">👤</span>
              Personal Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="label">Full Name *</label>
                <input className={fieldClass("fullName")} placeholder="John Smith" value={form.fullName}
                  onChange={(e) => set("fullName", e.target.value)} autoComplete="name" />
                {err("fullName")}
              </div>
              <div>
                <label className="label">Email Address *</label>
                <input className={fieldClass("email")} type="email" placeholder="john@email.com" value={form.email}
                  onChange={(e) => set("email", e.target.value)} autoComplete="email" />
                {err("email")}
              </div>
              <div>
                <label className="label">Phone / WhatsApp *</label>
                <input className={fieldClass("phone")} type="tel" placeholder="+1 234 567 8900" value={form.phone}
                  onChange={(e) => set("phone", e.target.value)} autoComplete="tel" />
                {err("phone")}
              </div>
              <div className="sm:col-span-2">
                <label className="label">Country *</label>
                <select className={fieldClass("country")} value={form.country}
                  onChange={(e) => set("country", e.target.value)}>
                  <option value="">Select your country</option>
                  {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                {err("country")}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-jungle-100 dark:border-jungle-800" />

          {/* ── Section: Package Details ──────────────────── */}
          <div>
            <h3 className="font-display text-lg text-jungle-800 dark:text-jungle-200 font-semibold mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-jungle-100 dark:bg-jungle-800 text-jungle-600 dark:text-jungle-400 flex items-center justify-center text-sm">📦</span>
              Package & Group
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="label">Package *</label>
                <select className={fieldClass("packageName")} value={form.packageName}
                  onChange={(e) => set("packageName", e.target.value)}>
                  <option value="">Select a package</option>
                  {packages.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} — {p.duration} Days ({p.priceFrom})
                    </option>
                  ))}
                  <option value="Custom Package">Custom Package (I&apos;ll describe below)</option>
                </select>
                {err("packageName")}
              </div>
              <div>
                <label className="label">Adults</label>
                <div className="flex items-center gap-3">
                  <button onClick={() => set("adults", Math.max(1, form.adults - 1))}
                    className="w-11 h-11 rounded-xl bg-jungle-100 dark:bg-jungle-800 text-jungle-700 dark:text-jungle-300 font-bold text-xl flex items-center justify-center hover:bg-jungle-200 transition-colors">
                    −
                  </button>
                  <span className="flex-1 text-center font-display text-2xl text-jungle-900 dark:text-jungle-100">
                    {form.adults}
                  </span>
                  <button onClick={() => set("adults", form.adults + 1)}
                    className="w-11 h-11 rounded-xl bg-jungle-100 dark:bg-jungle-800 text-jungle-700 dark:text-jungle-300 font-bold text-xl flex items-center justify-center hover:bg-jungle-200 transition-colors">
                    +
                  </button>
                </div>
              </div>
              <div>
                <label className="label">Children</label>
                <div className="flex items-center gap-3">
                  <button onClick={() => set("children", Math.max(0, form.children - 1))}
                    className="w-11 h-11 rounded-xl bg-jungle-100 dark:bg-jungle-800 text-jungle-700 dark:text-jungle-300 font-bold text-xl flex items-center justify-center hover:bg-jungle-200 transition-colors">
                    −
                  </button>
                  <span className="flex-1 text-center font-display text-2xl text-jungle-900 dark:text-jungle-100">
                    {form.children}
                  </span>
                  <button onClick={() => set("children", form.children + 1)}
                    className="w-11 h-11 rounded-xl bg-jungle-100 dark:bg-jungle-800 text-jungle-700 dark:text-jungle-300 font-bold text-xl flex items-center justify-center hover:bg-jungle-200 transition-colors">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-jungle-100 dark:border-jungle-800" />

          {/* ── Section: Travel Dates ─────────────────────── */}
          <div>
            <h3 className="font-display text-lg text-jungle-800 dark:text-jungle-200 font-semibold mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-jungle-100 dark:bg-jungle-800 text-jungle-600 dark:text-jungle-400 flex items-center justify-center text-sm">📅</span>
              Travel Dates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="label">Arrival Date *</label>
                <input className={fieldClass("arrivalDate")} type="date" value={form.arrivalDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => set("arrivalDate", e.target.value)} />
                {err("arrivalDate")}
              </div>
              <div>
                <label className="label">Arrival Time (approx.)</label>
                <input className="input" type="time" value={form.arrivalTime}
                  onChange={(e) => set("arrivalTime", e.target.value)} />
              </div>
              <div>
                <label className="label">Departure Date *</label>
                <input className={fieldClass("departureDate")} type="date" value={form.departureDate}
                  min={form.arrivalDate || new Date().toISOString().split("T")[0]}
                  onChange={(e) => set("departureDate", e.target.value)} />
                {err("departureDate")}
              </div>
              <div>
                <label className="label">Departure Time (approx.)</label>
                <input className="input" type="time" value={form.departureTime}
                  onChange={(e) => set("departureTime", e.target.value)} />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-jungle-100 dark:border-jungle-800" />

          {/* ── Special requirements ──────────────────────── */}
          <div>
            <label className="label">Special Requirements / Notes</label>
            <textarea
              className="input min-h-[110px] resize-y"
              placeholder="Any dietary requirements, accessibility needs, special occasions, or custom requests…"
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
            />
          </div>

          {/* WhatsApp note */}
          <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl px-4 py-3 flex items-start gap-3">
            <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5 flex-shrink-0 mt-0.5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <p className="font-sans text-xs text-jungle-700 dark:text-jungle-300 leading-relaxed">
              Clicking &quot;Send via WhatsApp&quot; will open WhatsApp with your booking details pre-filled.
              Simply send the message to our team and we&apos;ll get back to you within the hour.
            </p>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="btn-gold w-full text-base py-4"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
