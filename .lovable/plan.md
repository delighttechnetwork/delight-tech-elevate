# Delight Tech Network — Premium Multi-Page Site

## Stack note (important)
You asked for Next.js. This Lovable project uses **React + Vite + TypeScript + Tailwind + shadcn/ui + Framer Motion + Lucide** (Next.js isn't supported in this environment). The visual result and feature set will be identical — just client-side routed with React Router instead of Next pages. If you need Next.js specifically (SSR/SEO server rendering), say so and I'll stop.

## Brand
- Logo: uploaded `Delight Tech` bulb mark → `src/assets/logo.png`
- Founder photo: uploaded portrait → `src/assets/founder.jpg`
- Palette: deep navy `#0A0F1F`, black, white, electric blue `#3B82F6`/`#06B6D4`, purple gradient `#7C3AED → #A855F7`, soft glow highlights
- Fonts: Sora (display) + Inter (body) via Google Fonts
- Tokens defined in `index.css` + `tailwind.config.ts` (HSL semantic tokens, no hard-coded colors in components)

## Pages & routes
1. `/` Home — hero (animated gradient + floating tech orbs), about, services overview (15 cards), why-us, featured projects, animated stats counters, testimonials, Founder/CEO spotlight (John O. Adeagbo + photo), CTA banner, footer
2. `/services` — detailed sections for all 15 services grouped (Digital: Web Dev, Cyber Security, UI/UX, Graphics, Flyer, Poster, Banner, ID Card; Branding/Print: Souvenir, Jotters, Frames, Books, Shirts, Cups; Repair: GSM), each with icon, description, features, pricing placeholder, "Get Started" CTA; accordion FAQ
3. `/portfolio` — filterable categories (All / Web / Branding / Print / Repair), masonry grid, hover reveal, modal preview, client showcase, stats
4. `/contact` — glass contact form (name/email/phone/service/message), business info card, hours, WhatsApp quick-chat floating button (`07089627177`), embedded map placeholder for Heritage Mall Dugbe Ibadan, social placeholders, FAQ

## Global
- Sticky glass nav with mobile sheet menu
- Dark/light theme toggle (next-themes), dark default
- Scroll progress bar (Framer Motion `useScroll`)
- Back-to-top button
- Page transitions (`AnimatePresence`)
- Floating WhatsApp + Call buttons site-wide
- SEO: per-page `<title>`, meta description, canonical, Organization JSON-LD with company details, single H1, semantic landmarks, alt text
- Lazy-load route components

## Component structure
```
src/
  components/
    layout/ (Navbar, Footer, ScrollProgress, BackToTop, FloatingContact, ThemeToggle, PageTransition)
    sections/ (Hero, About, ServicesGrid, WhyUs, FeaturedProjects, Stats, Testimonials, FounderSpotlight, CtaBanner, FAQ)
    ui/ (shadcn primitives + GlassCard, GradientButton, AnimatedCounter, ServiceCard, ProjectCard)
  pages/ (Home, Services, Portfolio, Contact, NotFound)
  data/ (services.ts, projects.ts, testimonials.ts, faqs.ts)
  assets/ (logo.png, founder.jpg)
  lib/ (utils, seo)
```

## Animations (Framer Motion)
Fade/slide-up on scroll reveal, hover scale+glow on cards, floating orbs in hero, animated gradient mesh background, stat counters on in-view, staggered grid entrance.

## Content
All copy written fresh — corporate, concise, Nigerian-tech-agency tone. No lorem ipsum. Testimonials use realistic Nigerian business names with neutral, plausible quotes (clearly framed as sample client feedback).

## Out of scope (ask if you want them)
- Working contact form backend (will be UI-only with toast confirmation) — enable Lovable Cloud + Resend later for real email
- Real Google Map embed (placeholder iframe with the address)
- CMS for projects
