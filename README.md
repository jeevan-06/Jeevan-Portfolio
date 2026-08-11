<div align="center">

# 🚀 Jeevan — Cinematic Portfolio

<p align="center">
  <strong>A single-page cinematic experience: full-screen scenes stacked on top of each other, each one rising over the last as you scroll.</strong>
</p>

<p align="center">
  <a href="https://github.com/jeevan-06">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Profile" />
  </a>
</p>

</div>

<br />

## ✨ The Scenes

The portfolio is structured as a series of scroll-driven cinematic set pieces:

1. 🕳️ **Intro** — Three.js gallery tunnel travelled through the "JEEVAN" mask
2. 🦸‍♂️ **Hero** — Headline, stats, CTAs
3. 🧠 **About** — Identity, philosophy, velocity marquee
4. 🛤️ **Journey** — Six resume chapters (2021–2026) inside a light-cable tunnel
5. 🛠️ **Design Stack** — Tool spiral
6. 💼 **Work** — 14 selected projects on a perspective card arc, each with a case-study route at `/work/[slug]`
7. 🏢 **Experience** — Seven roles as a stacked panel deck
8. 📜 **Credentials** — Certification records with issuer marks, right-to-centre deck
9. 🖼️ **Gallery** — *The People Behind the Work*: 14 photographs on a drifting wall
10. 📬 **Connect** — Contact, socials, footer

<br />

## 🛠️ Tech Stack

| Concern | Choice |
|:---|:---|
| **Framework** | Next.js 16 (App Router) + TypeScript ⚡ |
| **Animation** | GSAP + ScrollTrigger 🎬 |
| **Smooth Scroll** | Lenis (single rAF loop, see `lib/lenis.ts`) 🏂 |
| **3D** | Three.js (intro tunnel, journey light cables) 🧊 |
| **Styling** | CSS Modules + design tokens in `app/globals.css` 🎨 |
| **Content** | Typed local files in `content/` 📝 |
| **i18n** | EN/FR React context (`lib/i18n.tsx`) — pure state, survives scroll 🌍 |

<br />

## 🏗️ Scroll Architecture

The page is a **stack, not a column**. Each scene is a sticky `100svh` hold plus a runway sibling rendered directly under `<main>` (`components/layout/Scene.tsx`): 

The outgoing frame stays pinned while the next one physically rises from the bottom of the viewport and covers it. Scroll-driven interiors read their progress off the runway (`lib/scene.ts`) rather than pinning themselves, so every transition is scrubbable and reverses exactly.

<br />

## 📂 Project Structure

```text
app/            layout, the scene stack (page.tsx), /work/[slug] case studies, sitemap, robots, 404, /tunnel lab route
components/
  layout/       Nav, Scene, LanguageToggle, SmoothScroll
  sections/     one folder per scene (component + module.css)
  ui/           Button (the site-wide CTA standard), VelocityMarquee
content/        typed content: projects, journey, experience, certifications, gallery, stack
lib/            gsap/lenis integration, i18n store, scene scrub helper, site meta
public/images/  covers, gallery photographs, issuer + company marks
```

<br />

## 🚀 Running Locally

Get the cinematic experience up and running on your local machine:

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev     # Available at http://localhost:3000

# 3. Build for production
npm run build   # Statically generates all routes
```

> **Note:** Set `NEXT_PUBLIC_SITE_URL` once a domain exists — sitemap, robots, OG and JSON-LD follow automatically (`lib/site.ts`).

<br />

## 📜 Conventions

- 🌟 **Accessibility First**: Every motion path checks `prefers-reduced-motion` and ships a readable static fallback; content is never gated behind an animation.
- 🏎️ **Performance Optimized**: Only `transform` / `opacity` are animated; interiors run scroll → target → interpolation, never raw scroll binding.
- 📐 **True Aspect Ratios**: Photographs and brand marks render at their true aspect ratios — cropped by `object-fit` when needed, never stretched, never dimmed.
- 🌍 **Localization**: Proper nouns (companies, products, tools, places) are never translated.

---

<div align="center">
  Built with ❤️ by Jeevan
</div>
