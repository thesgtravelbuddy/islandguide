# Release Notes — Island Guide v1.0

**Released:** June 2026  
**Built by:** Claude (Anthropic) × Andrew (The SG Travel Buddy)  
**Live URL:** https://thesgtravelbuddy.github.io/islandguide/

---

## What's New in v1.0

This is a complete rebuild of the Island Guide from the ground up. The previous version was a monolithic hand-coded HTML/CSS/JS file (~1,500 lines). v1.0 replaces it with a modern React app that matches the homepage's visual identity exactly.

---

## Key Changes

### Visual redesign — dark theme
The previous guide used a light/white design (Nunito/Poppins fonts, white cards). v1.0 uses the same dark brand identity as `thesgtravelbuddy.com` — pure black background, glassmorphism cards, Inter font, gradient accents, and the `#1a0a1e → #7b1645` button gradient.

### React SPA architecture
- React 18 + TypeScript + Vite + Tailwind CSS v3.4
- Framer Motion for all animations (section transitions, accordion expand/collapse)
- Lucide React icons
- Single page, tab-based navigation (no page reloads)

### Built-in premium gating
Premium sections (Getting Around, Places, Food, Culture, SOS) now gate inline within the React app. No separate `/premium/` folder needed for the main guide — the `PremiumGate` component renders in place when `isPremium === false`. The `premium/` folder now simply redirects to `/?t=TOKEN`.

### Token auth via Cloudflare Worker
- URL token (`?t=TOKEN`) validated against `island-guide-backend.the-sg-travel-buddy.workers.dev`
- Token + validated state persisted in `localStorage` (survives browser restarts)
- Network-error permissive (doesn't lock out users with connectivity issues)
- Expired token shows appropriate message with re-purchase link

### Content
All existing content from the previous guide is preserved and expanded:

| Section | Notes |
|---|---|
| Home | Cover card, welcome letter, at-a-glance quick stats, Singapore time clock, section nav grid |
| Planning | SG Arrival Card, SIM cards, currency, Changi airport, apps, visa info, Day 1 checklist |
| Getting Around | MRT guide (with 2026 Circle Line note), bus guide, Grab/Gojek, walking areas, quick links |
| Places | 4 landmarks, 3 cultural districts, 2 island/nature, 4 neighbourhoods — each with practical tips |
| Food | 25 dishes with photos, spice levels, allergy notes, where to eat; hawker centre guide; Michelin 2024; late-night food; halal guide |
| Culture | Understanding Singaporeans, kiasu culture, MRT etiquette, religious site guide, 20-word Singlish dictionary, 6 laws tourists need to know |
| SOS | Emergency numbers (995/999), 5 hospitals with A&E numbers and MRT, lost passport steps, stolen card contacts, safety tips |

### Food photos
25 high-quality food photos from the previous guide are served from `food/` subfolder. All photographer credits preserved in the UI.

---

## Deployment architecture

| Component | Where |
|---|---|
| React app source | `thesgtravelbuddy/island-guide-v1.0` (local, not published) |
| Live files | `thesgtravelbuddy/islandguide` repo root (GitHub Pages) |
| Primary URL | `https://thesgtravelbuddy.github.io/islandguide/` |
| Secondary URL | `https://thesgtravelbuddy.com/guide/` (Vercel proxy) |
| Token validation | `island-guide-backend.the-sg-travel-buddy.workers.dev` (Cloudflare Worker, unchanged) |
| Premium redirect | `islandguide/premium/index.html` → redirects `?t=TOKEN` to `/?t=TOKEN` |

---

## What Didn't Change

- Stripe payment link: `https://buy.stripe.com/6oUeVc49helb4MLc7C5Rm01`
- Token validation Worker URL and API contract
- Content accuracy — all information carried over from the previous guide
- Food images — same 25 photos, served from `food/` subfolder
- Free sections: Home + Planning (same as before)

---

## Known Issues / Future Improvements

- **Image performance:** Food photos are unoptimised (1–2MB PNGs). Convert to WebP and add lazy loading in v1.1.
- **Search:** The previous guide had a global keyword search. Not yet implemented in v1.0 — planned for v1.1.
- **Flash sale overlay:** The previous guide had a promotional flash sale popup. Not included in v1.0.
- **Font size A+/A−:** The previous guide had font size controls. Not included in v1.0.
- **Currency converter:** Live currency rates widget from the previous guide. Not included in v1.0.

---

## Build info

```
Build tool:     Vite 8.x
Bundle size:    417KB JS (131KB gzip), 16KB CSS (4KB gzip)
Build time:     ~1.5 seconds
Node version:   18+
```
