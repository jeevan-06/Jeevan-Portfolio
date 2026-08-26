<div align="center">

![Portfolio Banner](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop)

# 🚀 **JEEVAN** | Creative Developer Portfolio

**A modern, interactive portfolio built with cutting-edge web technologies, 3D WebGL, and buttery-smooth animations.**

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](#-tech-stack)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#-tech-stack)
[![Three.js](https://img.shields.io/badge/Three.js-3D-black?style=for-the-badge&logo=three.js&logoColor=white)](#-tech-stack)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#-tech-stack)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#-tech-stack)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](#-tech-stack)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](#-tech-stack)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](#-tech-stack)

</div>

<br />

## 🌟 Overview

Welcome to the source code of my personal portfolio! This project represents a culmination of modern web design, performance optimization, and interactive storytelling. Rather than a standard scrolling website, this portfolio is built to be a deeply immersive, single-page cinematic experience where scenes dynamically unfold as you scroll.

The primary goal is to showcase my skills as a creative frontend developer by using cutting-edge tools to create fluid, hardware-accelerated animations and interactive 3D environments that run smoothly across all devices.

---

## ✨ Outstanding Features & Interactions

This portfolio doesn't just look good; it feels alive. Here are some of the standout interactive components that make up the experience:

- 🧊 **3D Interactive Lanyard & Badge:** Built using `@react-three/fiber` and `@react-three/rapier` for rigid-body physics, rendering a realistic, interactive 3D ID badge that reacts to your mouse movements.
- 🌊 **Gooey SVG Navigation:** A fluid, liquid-like navigation menu powered by custom SVG filters (`feColorMatrix`, `feGaussianBlur`) offering a highly tactile user experience.
- 💨 **Cinematic Scroll Animations:** Leveraging **GSAP (GreenSock Animation Platform)** and **ScrollTrigger** to pin sections, scrub timelines, and create a narrative flow. Scroll-jacking is avoided; instead, we scrub animations based on native scroll position.
- ✨ **Dynamic Text Effects:** Including `BlurText` and `StarBorder` components that elevate typography into interactive art pieces.
- 🪶 **Silky Smooth Scrolling:** Integrated with **Lenis** to hijack the native scroll and provide a buttery-smooth `requestAnimationFrame` loop.
- 📱 **Fully Responsive Design:** Meticulously tailored using **Tailwind CSS** to look stunning on massive 4K monitors down to the smallest mobile screens.
- 🛡️ **Type-Safe Data Architecture:** Strictly typed with **TypeScript**, ensuring that all portfolio content is validated before rendering, preventing runtime errors.

---

## 🛠️ Tech Stack & Architecture

This project is built using modern web development standards, prioritizing performance and fluid animations.

| Concern | Technology Choice | Description |
| :--- | :--- | :--- |
| ⚛️ **Framework** | **Next.js (App Router)** | Powers the React application, server-side rendering, and routing. |
| 🛡️ **Language** | **TypeScript** | Ensures type safety across all components and content files, significantly reducing bugs. |
| 🎨 **Styling** | **Tailwind CSS** | Utility-first styling alongside scoped CSS modules for rapid UI development. |
| 🎬 **Animation Engine**| **GSAP + Framer Motion** | GSAP handles complex scroll timelines; Framer Motion handles fluid micro-interactions. |
| 📜 **Scrolling Mechanism**| **Lenis** | Provides a single `requestAnimationFrame` loop for silky smooth scrolling. |
| 🧊 **3D Rendering** | **Three.js + R3F + Rapier**| Drives interactive 3D elements, custom GLSL shaders, and WebGL physics inside React components. |
| 🚀 **Deployment** | **Vercel** | Optimized for Vercel's Edge network, delivering sub-second load times globally. |

---

## 📂 Project Structure & Anatomy

To keep the codebase maintainable and scalable, the project follows a strict directory structure:

```text
├── app/                  # Next.js App Router: layout, globals.css, and main pages
├── components/           
│   ├── ui/               # Reusable, highly interactive UI elements (GooeyNav, StarBorder, etc.)
│   ├── sections/         # Large page sections (HomeHero, Experience, TechnicalSkills)
│   ├── layout/           # Structural components (Navbar, Footer, LanguageToggle)
│   └── reactbits/        # Specialized interactive components (Lanyard 3D component)
├── lib/                  # Utilities: GSAP/Lenis setup, fetchers, and helper functions
├── hooks/                # Custom React hooks (e.g., useWindowSize, usePrefersReducedMotion)
├── styles/               # Global CSS variable definitions and theme configurations
├── types/                # Global TypeScript definitions and interfaces
└── public/               # Static assets like images, fonts, and 3D models (.glb, .gltf)
```

---

## 🎨 Design Philosophy & Core Principles

My development approach for this project revolves around four key pillars:

1. **Accessibility First (a11y):** Every motion path checks `prefers-reduced-motion` and falls back to static readable content. Semantic HTML and ARIA labels are implemented.
2. **Performance Optimized:** Only hardware-accelerated CSS properties (`transform` and `opacity`) are animated. WebGL canvases are heavily optimized.
3. **Typography Matters:** Carefully selected fonts and scalable fluid typography (`clamp()`) to ensure maximum readability and hierarchy across all screen sizes.
4. **Content is King:** Animations exist to highlight the work, never to distract from it. The UI fades into the background, letting the projects take center stage.

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

# 4. Start the development server
npm run dev     
```

Once the server is running, open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🗺️ Roadmap & Upcoming Features

- [ ] Implement a fully functional custom 3D WebGL preloader.
- [ ] Add a dark/light mode toggle with smooth color interpolations.
- [ ] Add post-processing effects (bloom, chromatic aberration) to the Three.js scenes.
- [ ] Expand the 'Experience' section with an interactive timeline.

---

## 📬 Contact & Socials

I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out or explore my other work!

- **GitHub:** [@jeevan-06](https://github.com/jeevan-06)
- **LinkedIn:** [Coming Soon](#)
- **Twitter / X:** [Coming Soon](#)

---

## 📝 License

This project is open-source and available under the MIT License. You are free to use this architecture as a learning resource or inspiration for your own portfolio. However, please **do not** directly clone the repository and pass off my design, personal content, or projects as your own. 

<br />

<div align="center">
  <b>Designed & Built with ❤️ by Jeevan</b>
</div>
