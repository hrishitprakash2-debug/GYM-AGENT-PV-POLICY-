# GYM AGENT — Marketing Website

A production-ready SaaS landing page for **GYM AGENT**, an AI WhatsApp
automation platform for gyms. Built with Next.js 15 (App Router),
TypeScript, and Tailwind CSS. Fully static — no database, no
authentication, no server-side state.

## Stack

- **Next.js 15** — App Router, React Server Components
- **TypeScript** — strict mode
- **Tailwind CSS 3** — utility-first styling, dark mode via `class` strategy
- **next/font** — self-hosted Google Fonts (Space Grotesk + Inter)
- **next/og** — dynamically generated favicon and Open Graph image (no static image assets required)

## Pages

| Route       | Description                                |
| ----------- | ------------------------------------------- |
| `/`         | Home — hero, features, how it works, CTA    |
| `/privacy`  | Privacy Policy (Meta App Review–ready)      |
| `/terms`    | Terms of Service                            |
| `/contact`  | Contact details                             |

Also included: `/sitemap.xml`, `/robots.txt`, a generated `/icon`, a
generated `/opengraph-image`, and a custom 404 page.

## Project structure

```
app/
  layout.tsx          Root layout, fonts, global metadata, theme init script
  globals.css          Design tokens + Tailwind layers
  page.tsx              Home page
  icon.tsx              Generated favicon
  opengraph-image.tsx    Generated OG image
  sitemap.ts / robots.ts
  not-found.tsx
  privacy/page.tsx
  terms/page.tsx
  contact/page.tsx
components/
  Navbar.tsx, Footer.tsx, Logo.tsx, ThemeToggle.tsx
  Hero.tsx, PulseFlow.tsx, Features.tsx, HowItWorks.tsx, CTASection.tsx
  PageHero.tsx, LegalSection.tsx
lib/
  site-config.ts        Central copy/config (name, email, links, etc.)
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. No environment variables are required — the site is fully static.
4. Update `siteConfig.url` in `lib/site-config.ts` to your production domain (used for metadata, sitemap, and the OG image).

## Customizing content

All copy, the support email, and shared links live in `lib/site-config.ts`.
Feature cards live in `components/Features.tsx`, and the "How it Works"
steps live in `components/HowItWorks.tsx`.

## Design

Dark, high-contrast base (`ink` / `paper`) with a lime-to-blue "signal"
gradient accent, Space Grotesk for display type, and Inter for body copy.
Dark mode is on by default for system preference and toggleable via the
navbar switch; the choice is persisted to `localStorage`.
