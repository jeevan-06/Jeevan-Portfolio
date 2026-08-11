<div align="center">

# 🚀 Jeevan — Cinematic Portfolio 

<p align="center">
  <strong>A cutting-edge, single-page cinematic portfolio built for immersive web experiences.</strong>
</p>

<p align="center">
  <a href="https://github.com/jeevan-06">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Profile" />
  </a>
  <a href="#-tech-stack">
    <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 16" />
  </a>
  <a href="#-tech-stack">
    <img src="https://img.shields.io/badge/Three.js-3D-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  </a>
</p>

</div>

<br />

## 📖 Overview

Welcome to the source code of my personal portfolio. This is not your typical scrolling website. Instead, it offers a **single-page cinematic experience** where full-screen scenes are stacked on top of each other. As you scroll, each new scene physically rises over the previous one, carrying with it deeply integrated scroll-driven animations and 3D environments.

---

## ✨ The Scenes & Features

The portfolio is structured as a series of meticulously crafted cinematic set pieces:

1. 🕳️ **Intro (3D Tunnel)** — A Three.js powered gallery tunnel travelled through the "JEEVAN" typography mask.
2. 🦸‍♂️ **Hero Section** — High-impact headline, core statistics, and direct Call-To-Action (CTA) buttons.
3. 🧠 **About & Philosophy** — Explores identity and design philosophy, featuring an infinite velocity marquee.
4. 🛤️ **The Journey** — Six resume chapters spanning multiple years, visualized inside a glowing light-cable tunnel.
5. 🛠️ **Design Stack** — An interactive tool spiral showcasing the software and technologies I use.
6. 💼 **Work Showcase** — 14 selected projects presented on a 3D perspective card arc. Each project includes a dedicated case-study route at `/work/[slug]`.
7. 🏢 **Experience** — Seven professional roles visualized as a stacked, interactive panel deck.
8. 📜 **Credentials** — Certification records complete with issuer marks, sliding in from right-to-centre.
9. 🖼️ **Gallery Wall** — *The People Behind the Work*: 14 photographs mounted on a slow-drifting digital wall.
10. 📬 **Connect** — Contact forms, social links, and the footer.

<br />

## 🛠️ Tech Stack & Architecture

This project is built using modern web development standards, prioritizing performance and fluid animations.

| Concern | Technology Choice | Description |
|:---|:---|:---|
| **Framework** | **Next.js 16 (App Router)** | Powers the React application, server-side rendering, and dynamic routing for case studies. |
| **Language** | **TypeScript** | Ensures type safety across all components and content files. |
| **Animation Engine**| **GSAP + ScrollTrigger** | Handles complex, timeline-based animations bound to the user's scroll position. |
| **Smooth Scrolling**| **Lenis** | Provides a single `requestAnimationFrame` loop for silky smooth scrolling (`lib/lenis.ts`). |
| **3D Rendering** | **Three.js** | Drives the interactive 3D elements like the intro tunnel and journey cables. |
| **Styling** | **CSS Modules** | Scoped styling with design tokens defined globally in `app/globals.css`. |
| **Content Config** | **Typed Local Files** | All data (projects, experience, etc.) is strictly typed and stored in the `content/` directory. |
| **i18n (Language)**| **React Context** | Supports EN/FR translation (`lib/i18n.tsx`) through pure state that survives scrolling. |

<br />

## 🏗️ How The Scroll Works (Architecture)

The page is built as a **stack, not a column**. 

Each scene is given a sticky `100svh` hold and paired with a "runway" sibling rendered directly under `<main>` (see `components/layout/Scene.tsx`). 
- **The Outgoing Frame:** Stays pinned to the screen.
- **The Incoming Frame:** Physically rises from the bottom of the viewport to cover the previous frame.
- **Scroll-Driven Interiors:** Inner elements read their progress off the runway (`lib/scene.ts`) rather than pinning themselves. This means every transition is perfectly scrubbable, meaning it reverses exactly as it plays forward based on scroll direction.

<br />

## 📂 Project Structure

```text
├── app/                  # App Router: layout, scene stack (page.tsx), /work/[slug], 404
├── components/           
│   ├── layout/           # Global UI: Nav, Scene Wrapper, LanguageToggle, SmoothScroll
│   ├── sections/         # The Scenes: One folder per scene (component + module.css)
│   └── ui/               # Reusable Elements: Button, VelocityMarquee
├── content/              # Typed JSON/TS files: projects, journey, experience, certifications
├── lib/                  # Utilities: GSAP/Lenis setup, i18n store, scroll scrubbers, site meta
└── public/               
    └── images/           # Static assets: covers, gallery photographs, company marks
```

<br />

## 🚀 Getting Started (Local Development)

To run this cinematic experience on your local machine, follow these steps:

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

```bash
# 1. Clone the repository (if you haven't already)
git clone https://github.com/jeevan-06/Jeevan-Portfolio.git

# 2. Navigate to the project directory
cd Jeevan-Portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev     
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

```bash
# Statically generates all routes for maximum performance
npm run build   
npm run start
```

> **Important Deployment Note:** Be sure to set the `NEXT_PUBLIC_SITE_URL` environment variable once a domain exists. The sitemap, robots.txt, Open Graph (OG) images, and JSON-LD metadata will follow automatically via `lib/site.ts`.

<br />

## 🎨 Content Customization

Want to update the text or add new projects? Everything is driven by typed content files.
Navigate to the `content/` folder where you will find:
- `projects.ts`: Update case studies and project cards.
- `experience.ts`: Update your work history and resume.
- `journey.ts`: Update the timeline milestones.
- `stack.ts`: Update the tools shown in the 3D spiral.

<br />

## 📜 UI & UX Conventions

- 🌟 **Accessibility First**: Every motion path checks `prefers-reduced-motion` via CSS/JS and ships a readable static fallback. Content is **never** gated behind an animation.
- 🏎️ **Performance Optimized**: Only hardware-accelerated properties (`transform` and `opacity`) are animated. Interiors run interpolation based on scroll targets, never raw scroll binding.
- 📐 **True Aspect Ratios**: Photographs and brand marks render at their true aspect ratios. They are cleanly cropped using `object-fit` when needed—never stretched, and never artificially dimmed.
- 🌍 **Localization**: Proper nouns (companies, products, tools, places) are preserved and never translated by the i18n engine.

---

<div align="center">
  <b>Designed & Built with ❤️ by Jeevan</b>
</div>
