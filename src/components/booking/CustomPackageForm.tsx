"use client";

import { useState } from "react";
import {
  customPackageDestinations,
  travelStyles,
  accommodationTypes,
  specialInterests,
  budgetRanges,
} from "@/data/packages";
import {
  buildCustomPackageMessage,
  openWhatsApp,
  type CustomPackageData,
} from "@/lib/whatsapp";

const COUNTRIES = [
  "Australia","Austria","Belgium","Canada","China","Denmark","Finland",
  "France","Germany","India","Ireland","Italy","Japan","Netherlands",
  "New Zealand","Norway","Russia","Singapore","South Korea","Spain",
  "Sweden","Switzerland","United Kingdom","United States","Other",
];

const TOTAL_STEPS = 5;

const initData = (): CustomPackageData => ({
  arrivalDate:   "",
  durationDays:  7,
  adults:        2,
  children:      0,
  destinations:  [],
  travelStyle:   "",
  accommodation: "",
  interests:     [],
  budget:        "",
  fullName:      "",
  email:         "",
  phone:         "",
  country:       "",
  notes:         "",
});

export default function CustomPackageForm() {
  const [step, setStep]       = useState(1);
  const [data, setData]       = useState<CustomPackageData>(initData());
  const [submitted, setSubmitted] = useState(false);

  const update = (patch: Partial<CustomPackageData>) =>
    setData((d) => ({ ...d, ...patch }));

  const toggleDest = (d: string) =>
    update({ destinations: data.destinations.includes(d)
      ? data.destinations.filter((x) => x !== d)
      : [...data.destinations, d] });

  const toggleInterest = (i: string) =>
    update({ interests: data.interests.includes(i)
      ? data.interests.filter((x) => x !== i)
      : [...data.interests, i] });

  const handleSubmit = () => {
    const msg = buildCustomPackageMessage(data);
    openWhatsApp(msg);
    setSubmitted(true);
  };

  const stepTitles = [
    "When do you want to travel?",
    "Who's coming along?",
    "Which destinations?",
    "Your preferences",
    "Contact details",
  ];

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-16 px-4">
        <div className="text-6xl mb-5">✨</div>
        <h2 className="font-display text-3xl text-jungle-800 dark:text-jungle-200 font-semibold mb-3">
          Your Custom Package is Ready!
        </h2>
        <p className="font-sans text-jungle-600 dark:text-jungle-400 text-base mb-8">
          Complete the WhatsApp message to send it to our team. We&apos;ll craft your bespoke Sri Lanka journey within 24 hours!
        </p>
        <button
          onClick={() => { setSubmitted(false); setData(initData()); setStep(1); }}
          className="btn-outline"
        >
          ← Create Another Package
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-jungle-900 rounded-3xl shadow-xl shadow-jungle-900/10 border border-jungle-100 dark:border-jungle-800 overflow-hidden">

        {/* Progress header */}
        <div className="bg-gradient-to-r from-jungle-800 to-jungle-700 px-6 sm:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl text-white font-semibold">
              ✦ Custom Package Builder
            </h2>
            <span className="font-sans text-xs text-jungle-300">
              Step {step} of {TOTAL_STEPS}
            </span>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-jungle-600/40 rounded-full h-1.5">
            <div
              className="bg-gold-400 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            />
          </div>
          <p className="font-sans text-jungle-200 text-sm mt-3">
            {stepTitles[step - 1]}
          </p>
        </div>

        <div className="px-6 sm:px-8 py-8">

          {/* ── Step 1: Dates ──────────────────────────────── */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="label">Preferred Arrival Date</label>
                <input
                  className="input"
                  type="date"
                  value={data.arrivalDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => update({ arrivalDate: e.target.value })}
                />
              </div>
              <div>
                <label className="label">Duration (days)</label>
                <div className="flex flex-wrap gap-2">
                  {[3, 5, 6, 7, 10, 11, 14, 21].map((d) => (
                    <button
                      key={d}
                      onClick={() => update({ durationDays: d })}
                      className={`
                        px-5 py-3 rounded-xl text-sm font-sans font-semibold border-2 transition-all duration-200
                        ${data.durationDays === d
                          ? "bg-jungle-600 text-white border-jungle-600"
                          : "border-jungle-200 dark:border-jungle-700 text-jungle-700 dark:text-jungle-300 hover:border-jungle-400"
                        }
                      `}
                    >
                      {d} Days
                    </button>
                  ))}
                </div>
                <p className="text-xs text-jungle-500 mt-3 font-sans">
                  Can&apos;t find your exact duration? Just pick the closest — we&apos;ll adjust!
                </p>
              </div>
            </div>
          )}

          {/* ── Step 2: Group ──────────────────────────────── */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="label">Number of Adults</label>
                <div className="flex items-center gap-4">
                  <button onClick={() => update({ adults: Math.max(1, data.adults - 1) })}
                    className="w-12 h-12 rounded-xl bg-jungle-100 dark:bg-jungle-800 text-jungle-700 dark:text-jungle-300 font-bold text-2xl flex items-center justify-center hover:bg-jungle-200 transition-colors">−</button>
                  <span className="font-display text-4xl text-jungle-900 dark:text-jungle-100 w-12 text-center">{data.adults}</span>
                  <button onClick={() => update({ adults: data.adults + 1 })}
                    className="w-12 h-12 rounded-xl bg-jungle-100 dark:bg-jungle-800 text-jungle-700 dark:text-jungle-300 font-bold text-2xl flex items-center justify-center hover:bg-jungle-200 transition-colors">+</button>
                </div>
              </div>
              <div>
                <label className="label">Number of Children <span className="text-jungle-500 font-normal">(under 12)</span></label>
                <div className="flex items-center gap-4">
                  <button onClick={() => update({ children: Math.max(0, data.children - 1) })}
                    className="w-12 h-12 rounded-xl bg-jungle-100 dark:bg-jungle-800 text-jungle-700 dark:text-jungle-300 font-bold text-2xl flex items-center justify-center hover:bg-jungle-200 transition-colors">−</button>
                  <span className="font-display text-4xl text-jungle-900 dark:text-jungle-100 w-12 text-center">{data.children}</span>
                  <button onClick={() => update({ children: data.children + 1 })}
                    className="w-12 h-12 rounded-xl bg-jungle-100 dark:bg-jungle-800 text-jungle-700 dark:text-jungle-300 font-bold text-2xl flex items-center justify-center hover:bg-jungle-200 transition-colors">+</button>
                </div>
              </div>
            </div>
          )}

          {/* ── Step 3: Destinations ──────────────────────── */}
          {step === 3 && (
            <div>
              <p className="text-sm font-sans text-jungle-600 dark:text-jungle-400 mb-5">
                Select all destinations you&apos;d like to visit <span className="text-jungle-500">(choose as many as you like)</span>
              </p>
              <div className="flex flex-wrap gap-2.5">
                {customPackageDestinations.map((dest) => {
                  const sel = data.destinations.includes(dest);
                  return (
                    <button
                      key={dest}
                      onClick={() => toggleDest(dest)}
                      className={`
                        px-4 py-2.5 rounded-xl text-sm font-sans font-medium border-2 transition-all duration-200
                        ${sel
                          ? "bg-jungle-600 text-white border-jungle-600 shadow-md"
                          : "border-jungle-200 dark:border-jungle-700 text-jungle-700 dark:text-jungle-300 hover:border-jungle-400"
                        }
                      `}
                    >
                      {sel && <span className="mr-1">✓</span>}
                      {dest}
                    </button>
                  );
                })}
              </div>
              {data.destinations.length > 0 && (
                <p className="text-xs text-jungle-500 mt-4 font-sans">
                  Selected: {data.destinations.join(", ")}
                </p>
              )}
            </div>
          )}

          {/* ── Step 4: Preferences ──────────────────────── */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <label className="label">Travel Style</label>
                <div className="flex flex-wrap gap-2">
                  {travelStyles.map((s) => (
                    <button key={s} onClick={() => update({ travelStyle: s })}
                      className={`px-4 py-2.5 rounded-xl text-sm font-sans font-medium border-2 transition-all duration-200
                        ${data.travelStyle === s
                          ? "bg-jungle-600 text-white border-jungle-600"
                          : "border-jungle-200 dark:border-jungle-700 text-jungle-700 dark:text-jungle-300 hover:border-jungle-400"
                        }`}
                    >{s}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="label">Accommodation Preference</label>
                <div className="flex flex-wrap gap-2">
                  {accommodationTypes.map((a) => (
                    <button key={a} onClick={() => update({ accommodation: a })}
                      className={`px-4 py-2.5 rounded-xl text-sm font-sans font-medium border-2 transition-all duration-200
                        ${data.accommodation === a
                          ? "bg-jungle-600 text-white border-jungle-600"
                          : "border-jungle-200 dark:border-jungle-700 text-jungle-700 dark:text-jungle-300 hover:border-jungle-400"
                        }`}
                    >{a}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="label">Budget Range</label>
                <div className="flex flex-wrap gap-2">
                  {budgetRanges.map((b) => (
                    <button key={b} onClick={() => update({ budget: b })}
                      className={`px-4 py-2.5 rounded-xl text-sm font-sans font-medium border-2 transition-all duration-200
                        ${data.budget === b
                          ? "bg-gold-500 text-white border-gold-500"
                          : "border-jungle-200 dark:border-jungle-700 text-jungle-700 dark:text-jungle-300 hover:border-jungle-400"
                        }`}
                    >{b}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="label">Special Interests <span className="text-jungle-500 font-normal">(optional, multi-select)</span></label>
                <div className="flex flex-wrap gap-2">
                  {specialInterests.map((i) => {
                    const sel = data.interests.includes(i);
                    return (
                      <button key={i} onClick={() => toggleInterest(i)}
                        className={`px-3 py-2 rounded-xl text-xs font-sans font-medium border-2 transition-all duration-200
                          ${sel
                            ? "bg-jungle-600 text-white border-jungle-600"
                            : "border-jungle-200 dark:border-jungle-700 text-jungle-700 dark:text-jungle-300 hover:border-jungle-400"
                          }`}
                      >{sel && "✓ "}{i}</button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ── Step 5: Contact ───────────────────────────── */}
          {step === 5 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="label">Full Name *</label>
                  <input className="input" placeholder="Your full name" value={data.fullName}
                    onChange={(e) => update({ fullName: e.target.value })} />
                </div>
                <div>
                  <label className="label">WhatsApp / Phone *</label>
                  <input className="input" type="tel" placeholder="+1 234 567 8900" value={data.phone}
                    onChange={(e) => update({ phone: e.target.value })} />
                </div>
                <div>
                  <label className="label">Email</label>
                  <input className="input" type="email" placeholder="your@email.com" value={data.email}
                    onChange={(e) => update({ email: e.target.value })} />
                </div>
                <div className="sm:col-span-2">
                  <label className="label">Country</label>
                  <select className="input" value={data.country} onChange={(e) => update({ country: e.target.value })}>
                    <option value="">Select your country</option>
                    {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="label">Additional Notes</label>
                  <textarea
                    className="input min-h-[100px] resize-y"
                    placeholder="Any specific wishes, medical needs, celebration moments, or anything else we should know…"
                    value={data.notes}
                    onChange={(e) => update({ notes: e.target.value })}
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="bg-jungle-50 dark:bg-jungle-800/50 rounded-2xl p-5 text-sm border border-jungle-100 dark:border-jungle-800">
                <h4 className="font-display text-base font-semibold text-jungle-900 dark:text-jungle-100 mb-3">
                  Your Package Summary
                </h4>
                <div className="space-y-1.5 font-sans text-jungle-600 dark:text-jungle-400">
                  <p>📅 Arrival: <strong className="text-jungle-800 dark:text-jungle-200">{data.arrivalDate || "TBD"}</strong> · {data.durationDays} days</p>
                  <p>👥 Group: <strong className="text-jungle-800 dark:text-jungle-200">{data.adults} adults, {data.children} children</strong></p>
                  {data.destinations.length > 0 && (
                    <p>🗺️ Destinations: <strong className="text-jungle-800 dark:text-jungle-200">{data.destinations.slice(0, 3).join(", ")}{data.destinations.length > 3 ? ` +${data.destinations.length - 3} more` : ""}</strong></p>
                  )}
                  {data.budget && <p>💰 Budget: <strong className="text-jungle-800 dark:text-jungle-200">{data.budget}</strong></p>}
                </div>
              </div>
            </div>
          )}

          {/* ── Navigation ──────────────────────────────── */}
          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <button onClick={() => setStep(step - 1)} className="btn-ghost flex-1 border border-jungle-200 dark:border-jungle-700">
                ← Back
              </button>
            )}
            {step < TOTAL_STEPS ? (
              <button onClick={() => setStep(step + 1)} className="btn-primary flex-1">
                Continue →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!data.fullName || !data.phone}
                className="btn-gold flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send via WhatsApp
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
