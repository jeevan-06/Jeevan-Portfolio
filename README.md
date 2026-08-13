<div align="center">

![Portfolio Banner](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop)

# 🚀 **JEEVAN** | Creative Developer Portfolio

**A modern, interactive portfolio built with cutting-edge web technologies.**

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](#-tech-stack)
[![Three.js](https://img.shields.io/badge/Three.js-3D-black?style=for-the-badge&logo=three.js&logoColor=white)](#-tech-stack)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#-tech-stack)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#-tech-stack)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](#-tech-stack)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](#-tech-stack)

</div>

<br />

## 🌟 Overview

Welcome to the source code of my personal portfolio! This project represents a culmination of modern web design, performance optimization, and interactive storytelling. Rather than a standard scrolling website, this portfolio is built to be a deeply immersive, single-page cinematic experience where scenes dynamically unfold as you scroll.

The primary goal is to showcase my skills as a creative developer by using cutting-edge tools to create fluid, hardware-accelerated animations and interactive 3D environments that run smoothly across all devices.

---

## 🎯 The Vision

The traditional portfolio often feels like a static PDF rendered in a browser. My vision for this project is to break that mold. I want visitors to feel a sense of discovery and interactivity. Every scroll event, hover state, and transition is meticulously designed to provide tactile feedback and visual delight, all while maintaining rigorous accessibility and performance standards.

---

## 🚀 Key Features & Interactive Elements

This project is actively evolving, but here are the core features that define its architecture and user experience:

- **Immersive 3D Environments:** Utilizing **Three.js** and **React Three Fiber (R3F)** to build interactive backgrounds and elements that respond to user interaction and scroll position. We utilize custom GLSL shaders to render unique lighting and particle effects.
- **Cinematic Scroll Animations:** Leveraging **GSAP (GreenSock Animation Platform)** and **ScrollTrigger** to pin sections, scrub timelines, and create a narrative flow as the user scrolls down the page. Scroll-jacking is avoided; instead, we scrub animations based on native scroll position.
- **Fluid Micro-Interactions:** Using **Framer Motion** for immediate, physics-based UI responses (hover states, button clicks, modal entrances, and page transitions).
- **Silky Smooth Scrolling:** Integrated with **Lenis** to hijack the native scroll and provide a buttery-smooth `requestAnimationFrame` loop that makes scroll-tied animations feel incredibly natural, without the jank of native browser rendering.
- **Accessible & Unstyled Components:** Built on top of **Radix UI** primitives via **shadcn/ui**. This ensures that all interactive elements (like modals, dropdowns, and tabs) are fully accessible to screen readers and keyboard users without sacrificing design flexibility.
- **Fully Responsive Design:** Tailored using **Tailwind CSS** to look stunning on massive 4K monitors down to the smallest mobile screens.
- **Type-Safe Data Architecture:** Strictly typed with **TypeScript**, ensuring that all portfolio content (projects, experience, bio) is validated before rendering, preventing runtime errors.

---

## 🛠️ Tech Stack & Architecture

This project is built using modern web development standards, prioritizing performance and fluid animations.

| Concern | Technology Choice | Description |
| :--- | :--- | :--- |
| ⚛️ **Framework** | **Next.js 16 (App Router)** | Powers the React application, server-side rendering, and routing. Provides optimized image delivery and static site generation for peak performance. |
| 🛡️ **Language** | **TypeScript** | Ensures type safety across all components and content files, significantly reducing bugs during the development cycle. |
| 🎨 **Styling** | **Tailwind CSS** | Utility-first styling alongside scoped CSS modules. Allows for rapid prototyping while keeping the CSS bundle minimal. |
| 🧩 **UI Components** | **shadcn/ui + Radix** | Accessible, headless components fully customized via Tailwind. Radix handles the complex ARIA logic. |
| 🎬 **Animation Engine**| **GSAP + Framer Motion** | GSAP handles complex scroll timelines; Framer Motion handles fluid micro-interactions and layout animations. |
| 📜 **Scrolling Mechanism**| **Lenis** | Provides a single `requestAnimationFrame` loop for silky smooth scrolling, essential for GSAP ScrollTrigger to feel responsive. |
| 🧊 **3D Rendering** | **Three.js + R3F + Drei**| Drives interactive 3D elements, custom GLSL shaders, and WebGL experiences straight inside React components. |
| 🚀 **Deployment** | **Vercel** | Optimized for Vercel's global CDN and Edge network with built-in CI/CD, delivering sub-second load times globally. |

---

## 📂 Project Structure & Anatomy

To keep the codebase maintainable and scalable, the project follows a strict directory structure inspired by Feature-Sliced Design (FSD) and standard Next.js conventions:

```text
├── app/                  # Next.js App Router: layout, globals.css, and main pages
├── components/           # React Components
│   ├── ui/               # Reusable UI elements (shadcn/ui buttons, cards, etc.)
│   ├── sections/         # Large page sections (Hero, About, Projects, Contact)
│   ├── layout/           # Structural components (Navbar, Footer, Layout wrappers)
│   └── canvas/           # All Three.js / R3F WebGL components
├── lib/                  # Utilities: GSAP/Lenis setup, fetchers, and helper functions
├── hooks/                # Custom React hooks (e.g., useWindowSize, useMousePosition)
├── styles/               # Global CSS variable definitions and theme configurations
├── content/              # Typed JSON/TS files storing the actual portfolio data
├── types/                # Global TypeScript definitions and interfaces
└── public/               # Static assets like images, fonts, and 3D models (.glb, .gltf)
```

---

## 🎨 Design Philosophy & Core Principles

My development approach for this project revolves around four key pillars:

1. **Accessibility First (a11y):** Every motion path checks `prefers-reduced-motion` and falls back to static readable content. Semantic HTML and ARIA labels are non-negotiable.
2. **Performance Optimized:** Only hardware-accelerated CSS properties (`transform` and `opacity`) are animated. WebGL canvases are heavily optimized, pausing render loops when off-screen using `IntersectionObserver`.
3. **Typography Matters:** Carefully selected fonts and scalable fluid typography (`clamp()`) to ensure maximum readability and hierarchy across all screen sizes.
4. **Content is King:** Animations exist to highlight the work, never to distract from it. The UI should fade into the background, letting the projects take center stage.

---

## ⚙️ The Scroll Architecture (Deep Dive)

The page is built as a **stack, not a column**. 

Each major scene is given a sticky `100svh` hold and paired with a "runway" sibling rendered directly under `<main>`.
- **The Outgoing Frame:** Stays pinned to the screen.
- **The Incoming Frame:** Physically rises from the bottom of the viewport to cover the previous frame.
- **Scroll-Driven Interiors:** Inner elements read their progress off the runway rather than pinning themselves. This means every transition is perfectly scrubbable—it reverses exactly as it plays forward based on scroll direction.

---

## ⚡ Getting Started (Local Development)

To run this project on your local machine, follow these steps:

### Prerequisites
- Node.js 18.17 or later (v20+ recommended).
- npm, yarn, pnpm, or bun.
- Git.

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/jeevan-06/Jeevan-Portfolio.git

# 2. Navigate to the project directory
cd Jeevan-Portfolio

# 3. Install dependencies
npm install

# 4. Set up Environment Variables
# Copy the example env file and fill in necessary keys (if any)
cp .env.example .env.local

# 5. Start the development server
npm run dev     
```

Once the server is running, open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

To create an optimized production build:

```bash
# Compile TypeScript, build Next.js output, and optimize assets
npm run build

# Start the production server
npm run start
```

---

## 🗺️ Roadmap & Upcoming Features

- [ ] Implement a fully functional custom 3D WebGL preloader.
- [ ] Add a dark/light mode toggle with smooth color interpolations.
- [ ] Integrate a CMS (like Sanity or Contentful) to manage projects remotely.
- [ ] Add post-processing effects (bloom, chromatic aberration) to the Three.js scenes.
- [ ] Expand the 'Experience' section with an interactive timeline.

---

## 📬 Contact & Socials

I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out or explore my other work!

- **GitHub:** [@jeevan-06](https://github.com/jeevan-06)
- **Email:** hello@jeevan.dev *(Example)*
- **LinkedIn:** [Coming Soon](#)
- **Twitter / X:** [Coming Soon](#)

---

## 📈 Performance & Core Web Vitals

Ensuring the site remains performant despite heavy 3D rendering and animations is a top priority. We target the following Core Web Vitals:

- **Largest Contentful Paint (LCP):** < 2.5s. Achieved through aggressive Next.js image optimization and preloading critical assets.
- **First Input Delay (FID):** < 100ms. GSAP animations run off the main thread whenever possible, and heavy Three.js calculations are optimized.
- **Cumulative Layout Shift (CLS):** 0.1 or less. All dimensions for images and 3D canvases are explicitly defined to prevent jank during load.

*Note: You can run a local Lighthouse audit by building the project (`npm run build`) and serving it locally, then checking the Chrome DevTools.*

---

## 🤔 Frequently Asked Questions

**Q: Why use GSAP instead of purely Framer Motion?**
A: While Framer Motion is incredible for state-based micro-interactions (like hover effects and modal popups), GSAP's ScrollTrigger is currently unparalleled for building complex, timeline-based animations that are scrubbable and tied directly to the viewport scroll position. Using both gives us the best of both worlds.

**Q: Isn't Three.js too heavy for a portfolio?**
A: It can be! That's why we use React Three Fiber to manage the scene graph declaratively, combined with `@react-three/drei` for optimized asset loading (like Draco compression for GLTF models) and performance scaling (dropping pixel ratio on low-end devices).

**Q: How do you handle accessibility with WebGL?**
A: The canvas acts as a progressive enhancement. The core content (text, links, buttons) exists in the DOM and is fully readable by screen readers. We ensure that `aria-hidden="true"` is set on purely decorative 3D canvases, and users preferring reduced motion are served simplified CSS transitions.

---

## 📝 License

This project is open-source and available under the MIT License. You are free to use this architecture as a learning resource or inspiration for your own portfolio. However, please **do not** directly clone the repository and pass off my design, personal content, or projects as your own. 

---

<div align="center">
  <b>Designed & Built with ❤️ by Jeevan</b>
</div>
