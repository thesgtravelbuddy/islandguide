# CLAUDE.md — Island Guide v1.0

> **Read this first.** This file documents everything about the Island Guide React app — architecture, auth flow, deployment, and how to make changes safely.

---

## What This Is

The Island Guide is a mobile-first React SPA (single-page app) for The SG Travel Buddy brand. It's a travel guide to Singapore with 7 content sections, a free/premium gating model, and token-based authentication validated against a Cloudflare Worker.

**Live URL:** `https://thesgtravelbuddy.github.io/islandguide/`  
**Also accessible at:** `https://thesgtravelbuddy.com/guide/` (via Vercel proxy)  
**Premium entry:** `https://thesgtravelbuddy.github.io/islandguide/premium/?t=TOKEN`

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| TypeScript | ~6.x | Type safety |
| Vite | 8.x | Build tool |
| Tailwind CSS | 3.4 | Styling (utility-first) |
| Framer Motion | 12.x | Animations |
| Lucide React | 1.x | Icons |

Matches the homepage stack exactly. See `THEME.md` in the homepage repo for the full design system.

---

## Project Structure

```
island-guide-v1.0/
├── src/
│   ├── App.tsx                  # Root component: layout, nav, section router
│   ├── main.tsx                 # React entry point
│   ├── index.css                # Tailwind base + custom utilities
│   ├── context/
│   │   └── AuthContext.tsx      # Token auth state, Worker validation, localStorage
│   ├── components/
│   │   ├── Accordion.tsx        # Animated expand/collapse content block
│   │   ├── InfoCard.tsx         # Styled card with icon, title, accent colour
│   │   ├── PremiumGate.tsx      # Paywall UI shown for locked sections
│   │   └── SectionHeader.tsx    # Emoji + title + subtitle + divider
│   └── sections/
│       ├── HomeSection.tsx      # Cover card, welcome letter, at-a-glance, nav grid
│       ├── PlanningSection.tsx  # Arrival card, SIM, currency, Changi, apps, visa
│       ├── GroundSection.tsx    # MRT, buses, Grab, walking areas, quick links
│       ├── PlacesSection.tsx    # Landmarks, cultural districts, islands, neighbourhoods
│       ├── FoodSection.tsx      # Hawker centres, 25 dishes with photos, Michelin, halal
│       ├── CultureSection.tsx   # Singaporean culture, Singlish dict, MRT etiquette, laws
│       └── SOSSection.tsx       # Emergency numbers, hospitals, lost passport, safety tips
├── public/
│   ├── logo.png                 # Brand logo
│   └── food/                   # 25 food photos (PNG/JPG)
├── tailwind.config.js           # Brand colours + Inter font
├── vite.config.ts               # base: '/'
└── CLAUDE.md                    # This file
```

---

## Free vs Premium

| Section | Access |
|---|---|
| Home | Free |
| Planning | Free |
| Getting Around (Toolbox) | **Premium** |
| Places | **Premium** |
| Food Guide | **Premium** |
| Culture & Locals | **Premium** |
| Emergency & Safety (SOS) | **Premium** |

The `PremiumGate` component renders in place of each premium section when `isPremium === false`. It shows a Stripe payment link and an "already have a code?" input.

---

## Auth Flow

```
Stripe payment
    ↓
island-guide-backend Cloudflare Worker
    ↓ sends email with link
User receives: https://thesgtravelbuddy.github.io/islandguide/premium/?t=TOKEN
    ↓ premium/index.html redirects to
/?t=TOKEN
    ↓ AuthContext.tsx reads URL param
GET https://island-guide-backend.the-sg-travel-buddy.workers.dev/validate?t=TOKEN
    ↓ Worker returns { valid: true, email, customerName, daysLeft }
Token + validated state stored in localStorage
    ↓
isPremium = true → all sections unlocked
```

**Token persistence:** Stored in `localStorage` under key `ig_token`. Re-validated on next load only if the stored token doesn't match. Network errors are permissive (keeps access if previously valid).

**Token expiry:** The Worker returns `daysLeft` and a `reason: "expired"` on failure. The app shows an appropriate error message.

---

## Deployment

**Repo:** `thesgtravelbuddy/islandguide` (GitHub Pages, `main` branch, root path)  
**Build command:** `npm run build` → output in `dist/`  
**Deploy:** Push `dist/` contents to repo root

### To deploy a new version:

```bash
cd island-guide-v1.0
npm run build

# Then push dist/ files to islandguide repo:
# - dist/index.html → repo root index.html
# - dist/assets/*.css → repo assets/
# - dist/assets/*.js → repo assets/
# - dist/food/* → repo food/ (only if changed)
# - dist/logo.png → repo logo.png (only if changed)
```

The GitHub token is: `ghp_[REDACTED — use your GitHub PAT with repo scope]`

### URL routing note

`thesgtravelbuddy.com/guide/` works via a Vercel rewrite in the homepage repo (`vercel.json`):
```json
{ "source": "/guide/:path*", "destination": "https://thesgtravelbuddy.github.io/islandguide/:path*" }
```

If the Vercel proxy has CORS issues with food images or assets, users should use the direct GitHub Pages URL.

---

## Design System

This app follows `THEME.md` from the homepage repo exactly:
- **Background:** `#000` black
- **Text:** white with opacity variants (`/80`, `/60`, `/40`)
- **Accent:** `#C64B5F` (brand-red) for premium badges, highlights
- **Glass cards:** `bg-white/10 backdrop-blur-xl border border-white/20`
- **Primary button gradient:** `linear-gradient(135deg, #1a0a1e, #3d0a2e, #7b1645)` (`.gradient-btn`)
- **Font:** Inter, Google Fonts, weights 400–900
- **Animations:** Framer Motion only (no CSS keyframes)

---

## Making Changes

### Add/edit content in a section
Edit the relevant `src/sections/*.tsx` file. Content is hardcoded (no CMS). Rebuild and redeploy.

### Add a new dish to Food section
In `FoodSection.tsx`, add to the `DISHES` array:
```typescript
{
  name: 'Dish Name',
  tag: 'Tag Label',
  category: 'Category',
  spice: 0-3,
  spiceNote: 'Note about spice',
  img: 'Food-FileName.jpg',    // must exist in public/food/
  credit: 'Photo credit',
  desc: 'Description...',
  allergy: 'Allergy notes',
  where: 'Where to eat',
}
```
Add the photo to `public/food/` and push it to `islandguide/food/` in the repo.

### Change the Stripe link
Search for `STRIPE_URL` — it appears in `HomeSection.tsx` and `PremiumGate.tsx`.

### Change the Worker URL
In `AuthContext.tsx`, update `WORKER_URL`.

---

## Known Limitations

- Food images are large (1–2MB each, unoptimised). Performance could be improved with WebP conversion and lazy loading.
- GitHub Pages doesn't support server-side redirects. The `404.html` trick handles direct URL access.
- The Vercel `/guide/*` proxy may add latency vs direct GitHub Pages URL.
