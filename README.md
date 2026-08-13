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

## 🚀 Key Features & Roadmap

While this project is actively evolving, here are the core features that define its architecture and user experience:

- **Immersive 3D Environments:** Utilizing Three.js and React Three Fiber to build interactive backgrounds and elements that respond to user interaction and scroll position.
- **Cinematic Scroll Animations:** Leveraging GSAP (GreenSock Animation Platform) and ScrollTrigger to pin sections, scrub timelines, and create a narrative flow as the user scrolls down the page.
- **Fluid Micro-Interactions:** Using Framer Motion for immediate, physics-based UI responses (hover states, button clicks, modal entrances, and page transitions).
- **Silky Smooth Scrolling:** Integrated with Lenis to hijack the native scroll and provide a buttery-smooth `requestAnimationFrame` loop that makes scroll-tied animations feel incredibly natural.
- **Accessible & Unstyled Components:** Built on top of Radix UI primitives via shadcn/ui, ensuring that all interactive elements (like modals, dropdowns, and tabs) are fully accessible to screen readers and keyboard users without sacrificing design flexibility.
- **Fully Responsive Design:** Tailored using Tailwind CSS to look stunning on massive 4K monitors down to the smallest mobile screens.
- **Type-Safe Data:** Strictly typed with TypeScript, ensuring that all portfolio content (projects, experience, bio) is validated before rendering.

---

## 🛠️ Tech Stack & Architecture

This project is built using modern web development standards, prioritizing performance and fluid animations.

| Concern | Technology Choice | Description |
| :--- | :--- | :--- |
| ⚛️ **Framework** | **Next.js 16** | Powers the React application, server-side rendering, and routing. |
| 🛡️ **Language** | **TypeScript** | Ensures type safety across all components and content files. |
| 🎨 **Styling** | **Tailwind CSS** | Utility-first styling alongside scoped CSS modules. |
| 🧩 **UI Components** | **shadcn/ui + Radix** | Accessible, headless components fully customized via Tailwind. |
| 🎬 **Animation**| **GSAP + Motion** | GSAP handles complex scroll timelines; Framer Motion handles fluid micro-interactions. |
| 📜 **Scrolling**| **Lenis** | Provides a single `requestAnimationFrame` loop for silky smooth scrolling. |
| 🧊 **3D Rendering** | **Three.js + R3F**| Drives interactive 3D elements, custom GLSL shaders, and WebGL experiences. |
| 🚀 **Deployment** | **Vercel** | Optimized for Vercel's global CDN and Edge network with built-in CI/CD. |

---

## 📂 Project Structure

To keep the codebase maintainable and scalable, the project follows a strict directory structure:

```text
├── app/                  # Next.js App Router: layout, globals.css, and main pages
├── components/           # React Components
│   ├── ui/               # Reusable UI elements (shadcn/ui buttons, cards, etc.)
│   ├── sections/         # Large page sections (Hero, About, Projects, Contact)
│   └── layout/           # Structural components (Navbar, Footer, Layout wrappers)
├── lib/                  # Utilities: GSAP/Lenis setup, fetchers, and helper functions
├── hooks/                # Custom React hooks (e.g., useWindowSize, useMousePosition)
├── content/              # Typed JSON/TS files storing the actual portfolio data
└── public/               # Static assets like images, fonts, and 3D models (.glb, .gltf)
```

---

## 🎨 Design Philosophy

1. **Accessibility First:** Every motion path checks `prefers-reduced-motion` and falls back to static readable content.
2. **Performance Optimized:** Only hardware-accelerated properties (`transform` and `opacity`) are animated.
3. **Typography Matters:** Carefully selected fonts and typographic scales to ensure maximum readability.
4. **Content is King:** Animations exist to highlight the work, never to distract from it.

---

## ⚡ Getting Started (Local Development)

To run this project on your local machine, follow these steps:

### Prerequisites
- Node.js 18.17 or later.
- npm, yarn, pnpm, or bun.

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

### Building for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

---

## 📬 Contact & Socials

I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 

- **GitHub:** [@jeevan-06](https://github.com/jeevan-06)
- **LinkedIn:** [Coming Soon](#)
- **Twitter / X:** [Coming Soon](#)

---

<div align="center">
  <b>Designed & Built with ❤️ by Jeevan</b>
</div>
