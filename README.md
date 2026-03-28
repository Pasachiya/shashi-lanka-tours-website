# 🌿 Shashi Lanka Tours — Website

A modern, mobile-first travel website built with **Next.js 14**, **React**, and **Tailwind CSS**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 📁 Project Structure

```
shashi-lanka-tours/
├── public/
│   └── images/
│       ├── hero-bg.jpg              ← HOME: Full-screen hero background
│       ├── about-bg.jpg             ← HOME: About section right panel
│       ├── destinations/
│       │   ├── dambulla.jpg         ← Dambulla Cave Temple
│       │   ├── temple-of-tooth.jpg  ← Temple of the Tooth, Kandy
│       │   ├── sigiriya.jpg         ← Sigiriya Rock Fortress
│       │   └── anuradhapura.jpg     ← Anuradhapura
│       ├── packages/
│       │   ├── heritage.jpg         ← Heritage of the Island (11 Days)
│       │   ├── odyssey.jpg          ← Island Odyssey (6 Days)
│       │   └── nature.jpg           ← Nature Paradise (14 Days)
│       └── gallery/                 ← (Optional) General gallery images
│
├── src/
│   ├── app/
│   │   ├── layout.tsx               ← Root layout (fonts, metadata, navbar, footer)
│   │   ├── page.tsx                 ← Home page
│   │   ├── globals.css              ← Global styles + Tailwind + CSS component classes
│   │   ├── not-found.tsx            ← 404 page
│   │   ├── booking/
│   │   │   └── page.tsx             ← Booking page
│   │   └── packages/
│   │       └── [id]/
│   │           └── page.tsx         ← Dynamic package detail pages
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           ← Responsive navbar + mobile drawer
│   │   │   ├── Footer.tsx           ← Site footer with WhatsApp CTA
│   │   │   └── WhatsAppFAB.tsx      ← Floating WhatsApp button
│   │   ├── home/
│   │   │   ├── Hero.tsx             ← Full-screen hero section
│   │   │   ├── AboutSnapshot.tsx    ← About us snapshot
│   │   │   ├── FeaturedDestinations.tsx ← Destinations cards grid
│   │   │   ├── FeaturedPackages.tsx ← Package cards with Book Now
│   │   │   ├── ValueProps.tsx       ← Why choose us / 6 value props
│   │   │   └── Testimonials.tsx     ← Traveler reviews carousel
│   │   ├── packages/
│   │   │   └── PackageDetailClient.tsx ← Full package detail page w/ accordion itinerary
│   │   └── booking/
│   │       ├── BookingPageClient.tsx   ← Tab switcher (Standard / Custom)
│   │       ├── StandardBookingForm.tsx ← Standard booking form → WhatsApp
│   │       └── CustomPackageForm.tsx   ← 5-step custom package builder → WhatsApp
│   │
│   ├── data/
│   │   ├── site.ts          ← Global config, contact, value props, testimonials
│   │   ├── destinations.ts  ← 4 featured destinations
│   │   └── packages.ts      ← All 3 tour packages with full itineraries
│   │
│   └── lib/
│       └── whatsapp.ts      ← WhatsApp message builders + openWhatsApp()
```

---

## 📸 Adding Real Photos

**All photos go in `public/images/`.** Replace each placeholder (currently SVG) with a real `.jpg`.

| File | Recommended size | What it shows |
|---|---|---|
| `hero-bg.jpg` | 1920×1080 | Aerial / landscape of Sri Lanka |
| `about-bg.jpg` | 800×600 | Team or scenic Sri Lanka shot |
| `destinations/dambulla.jpg` | 800×1000 (portrait) | Dambulla Cave Temple interior or exterior |
| `destinations/temple-of-tooth.jpg` | 800×1000 | Kandy Temple of the Tooth |
| `destinations/sigiriya.jpg` | 800×1000 | Sigiriya Rock panorama |
| `destinations/anuradhapura.jpg` | 800×1000 | Anuradhapura ruins / stupa |
| `packages/heritage.jpg` | 800×450 | Cultural / historical collage |
| `packages/odyssey.jpg` | 800×450 | Mixed Sri Lanka landscapes |
| `packages/nature.jpg` | 800×450 | Wildlife / nature / elephant |

> **Tip:** Use WebP format for 30-40% better performance. Simply rename to `.webp` and update the `src` in the data files.

---

## 🔧 Updating Content

All editable content is centralized in `src/data/`:

### Contact Details — `src/data/site.ts`
```ts
contact: {
  phone:     "+94 72 313 3994",
  whatsapp:  "94723133994",     // ← Used for all WhatsApp links
  email:     "info@shashilankatours.lk",
  address:   "No. 45, Galle Road, Colombo 03, Sri Lanka",
},
```

### Adding a New Package — `src/data/packages.ts`
Copy an existing package object and update all fields. The new package will automatically appear in:
- Home page package cards
- Footer package links
- Booking form dropdown

### Adding a Testimonial — `src/data/site.ts`
Add a new object to the `testimonials` array. No other changes needed.

---

## 📱 WhatsApp Integration

No backend required. When users submit a booking:

1. Their form data is formatted into a structured WhatsApp message
2. `window.open('https://wa.me/94723133994?text=...')` is called
3. The user's WhatsApp opens with the message pre-filled
4. They tap **Send** — you receive it instantly

The message builders are in `src/lib/whatsapp.ts`.

---

## 🎨 Color System

| Token | Hex | Usage |
|---|---|---|
| `jungle-500` | `#219c62` | Primary brand green |
| `jungle-600` | `#157d4e` | Buttons, interactive |
| `jungle-900` | `#0c4129` | Dark surfaces |
| `jungle-950` | `#062418` | Darkest backgrounds |
| `gold-500` | `#d4a017` | Accent, CTAs, highlights |

---

## 🌙 Dark Mode

Dark mode is **automatic** — it reads `prefers-color-scheme` from the browser/OS. No toggle needed.

---

## 🚢 Deployment (Vercel — Recommended)

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/shashi-lanka-tours
git push -u origin main

# 2. Import on Vercel
# Go to vercel.com → Import Git Repository → Done!
```

The site is statically optimized (SSG) and will build in ~30 seconds on Vercel.

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 14 | Framework (App Router, SSG) |
| React | 18 | UI |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Styling |
| Cormorant Garamond | — | Display / heading font |
| DM Sans | — | Body font |

---

## ⚠️ Content Notes

1. **Meals & Tickets**: Currently marked as **Excluded** across all packages (safest policy). Update `packages.ts` once the client clarifies.
2. **Nature Paradise Days 7–14**: Filled with realistic demo data. Replace with client's actual itinerary when available.
3. **Address / Email**: Replace with actual business address and email in `src/data/site.ts`.
4. **Social Links**: Update Facebook and Instagram URLs in `src/data/site.ts`.

---

Built with 💚 for Shashi Lanka Tours
