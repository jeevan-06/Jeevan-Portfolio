"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { sceneScrub } from "@/lib/scene";
import styles from "./WorkSection.module.css";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    number: "01",
    title: "FORENSIQ",
    category: "AI · CYBER SECURITY · COMPUTER VISION",
    description: "AI-powered forensic face enhancement and 3D reconstruction system.",
    github: "[ADD MY FORENSIQ GITHUB URL HERE]",
  },
  {
    number: "02",
    title: "PHISHGUARD",
    category: "CYBER SECURITY · MACHINE LEARNING",
    description: "ML-powered phishing domain detection and security analysis platform.",
    github: "https://github.com/jeevan-06/Phish-Guard",
  },
  {
    number: "03",
    title: "LINK ROASTER AI",
    category: "GENAI · REACT · GEMINI",
    description: "AI-powered website roasting and battle platform built with React and Gemini AI.",
    github: "https://github.com/jeevan-06/link-roaster",
  },
  {
    number: "04",
    title: "VIBE CODING STUDIO",
    category: "AI · REACT · DESIGN TO CODE",
    description: "AI-powered design-to-code playground that converts screenshots, wireframes and text requirements into interactive React applications.",
    github: "https://github.com/jeevan-06/vibe-coding-studio",
  },
  {
    number: "05",
    title: "AIRSHARE AI",
    category: "AI · COMPUTER VISION · GESTURE",
    description: "Gesture-driven AI file transfer system using computer vision and hand gestures.",
    github: "https://github.com/jeevan-06/Airshare-ai",
  },
  {
    number: "06",
    title: "CIVICFIX",
    category: "PRODUCT · UX · FULL STACK",
    description: "A civic issue reporting platform designed to help users report and track local infrastructure problems.",
    github: "https://github.com/jeevan-06/Civic-Fix",
  },
  {
    number: "07",
    title: "QUEUE CURE '27",
    category: "HACKATHON · FULL STACK · PRODUCT",
    description: "A digital queue management solution designed to reduce waiting time and improve service efficiency.",
    github: "https://github.com/jeevan-06/Queue-Cure-27",
  },
  {
    number: "08",
    title: "INDIWEBPROS MEESHO CLONE",
    category: "E-COMMERCE · JAVASCRIPT · FRONTEND",
    description: "E-commerce interface inspired by Meesho, focused on product discovery and shopping experience.",
    github: "https://github.com/jeevan-06/Indiwebpros-Meesho",
  },
  {
    number: "09",
    title: "ETHICAL AI DECISION SYSTEM 2.0",
    category: "AI · ETHICS · DECISION SYSTEM",
    description: "AI-based decision system designed around ethical reasoning and responsible AI principles.",
    github: "https://github.com/jeevan-06/ethical-AI-decision-system-2.0",
  },
  {
    number: "10",
    title: "SEVEN WORLD EXPLORER",
    category: "FRONTEND · INTERACTIVE UI · WEB",
    description: "Interactive web experience for exploring the seven continents through an engaging visual interface.",
    github: "https://github.com/jeevan-06/Seven-World-Explorer",
  }
];

// Group into 5 pairs
const PAIRS = [
  [PROJECTS[0], PROJECTS[1]],
  [PROJECTS[2], PROJECTS[3]],
  [PROJECTS[4], PROJECTS[5]],
  [PROJECTS[6], PROJECTS[7]],
  [PROJECTS[8], PROJECTS[9]],
];

export default function WorkSection() {
  const rootEl = useRef<HTMLDivElement>(null);
  const pairsRef = useRef<(HTMLDivElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootEl.current) return;

    let ctx = gsap.context(() => {
      // Check for reduced motion preference
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const reducedMotion = mediaQuery.matches;

      // Wait a tick to ensure layout is ready
      const timer = setTimeout(() => {
        const tl = gsap.timeline();
        const w = window.innerWidth;
        const h = window.innerHeight;
        const isMobile = w <= 1000;

        // 1. Initial Setup: Cinematic Hierarchy
        pairsRef.current.forEach((pairEl, i) => {
          if (!pairEl) return;
          
          const leftCard = pairEl.children[0] as HTMLElement;
          const rightCard = pairEl.children[1] as HTMLElement;

          if (i === 0) {
            gsap.set(pairEl, { autoAlpha: 1, zIndex: 10 });
            if (leftCard) gsap.set(leftCard, { x: 0, y: 0, rotateY: 0, rotation: 0, scale: 1, autoAlpha: 1 });
            if (rightCard) gsap.set(rightCard, { x: 0, y: 0, rotateY: 0, rotation: 0, scale: 1, autoAlpha: 1 });
          } else {
            // Hide all other pairs completely using autoAlpha (visibility: hidden)
            gsap.set(pairEl, { autoAlpha: 0, zIndex: 1 });
            if (leftCard) gsap.set(leftCard, { autoAlpha: 0 });
            if (rightCard) gsap.set(rightCard, { autoAlpha: 0 });
          }
        });

        // 2. SVG Line Setup (Red Timeline)
        if (pathRef.current) {
          const length = pathRef.current.getTotalLength();
          gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
          tl.to(pathRef.current, { strokeDashoffset: 0, ease: "none", duration: 4 }, 0);
        }

        // 3. Cinematic 2-Stage Alternating Journey
        // 3. Cinematic 2-Stage Alternating Journey
        for (let i = 0; i < 4; i++) {
          const current = pairsRef.current[i];
          const next = pairsRef.current[i + 1];

          // PHASE A — CURRENT PAIR (Resting Period)
          // By adding this empty tween and NOT using `<` for the next tween,
          // we force a 0.8s gap (rest) where no transitions happen.
          tl.to({}, { duration: 0.8 }); 

          // Create a synchronization label for the transition
          const tLabel = `trans-${i}`;
          tl.addLabel(tLabel);

          // PHASE B — TRANSFORMATION
          const transDur = 1.0; 

          if (current && next) {
            const curLeft = current.children[0] as HTMLElement;
            const curRight = current.children[1] as HTMLElement;
            const nextLeft = next.children[0] as HTMLElement;
            const nextRight = next.children[1] as HTMLElement;

            // Counter Animation
            if (counterRef.current) {
              tl.to(counterRef.current, { y: `${-(i + 1) * 1.2}em`, duration: transDur, ease: "power2.inOut" }, tLabel);
            }

            // Internal Micro-Parallax & Kinetic Typography
            if (!reducedMotion && !isMobile) {
              const parallaxElements = [
                { sel: `.${styles.projectVisual}`, offset: -20 },
                { sel: `.${styles.projectTitle}`, offset: -10 },
              ];

              parallaxElements.forEach(({ sel, offset }) => {
                tl.to(current.querySelectorAll(sel), { y: offset, duration: transDur, ease: "power2.inOut" }, tLabel);
                gsap.set(next.querySelectorAll(sel), { y: -offset });
                tl.to(next.querySelectorAll(sel), { y: 0, duration: transDur, ease: "power2.inOut" }, tLabel);
              });

              // Kinetic Background Typography (Horizontal Drift)
              const bgTextSel = `.${styles.visualTextWrapper}`;
              tl.to(current.querySelectorAll(bgTextSel), { x: -w * 0.15, duration: transDur, ease: "power2.inOut" }, tLabel);
              gsap.set(next.querySelectorAll(bgTextSel), { x: w * 0.15 });
              tl.to(next.querySelectorAll(bgTextSel), { x: 0, duration: transDur, ease: "power2.out" }, tLabel);
            }

            tl.set(next, { zIndex: 10 }, tLabel);
            tl.set(current, { zIndex: 1 }, tLabel);

            if (reducedMotion || isMobile) {
              // Mobile / Reduced Motion: Subtle Vertical Wipe
              tl.to(current, { autoAlpha: 0, display: "none", y: -20, duration: transDur, ease: "power2.inOut" }, tLabel);
              tl.to(curLeft, { autoAlpha: 0, duration: transDur }, tLabel);
              tl.to(curRight, { autoAlpha: 0, duration: transDur }, tLabel);
              
              gsap.set(next, { y: 20 });
              tl.fromTo(next, { display: "none" }, { autoAlpha: 1, display: "flex", y: 0, duration: transDur, ease: "power2.out" }, tLabel);
              tl.to(nextLeft, { autoAlpha: 1, duration: transDur }, tLabel);
              tl.to(nextRight, { autoAlpha: 1, duration: transDur }, tLabel);
            } else {
              // Alternate between Wheel (0) and Infinity (1)
              const transitionType = i % 2;
              
              // Fade out current cards explicitly to fix 3D opacity bug, adding Lens Blur
              tl.to(current, { autoAlpha: 0, display: "none", duration: transDur * 0.8, ease: "power2.inOut" }, tLabel);
              tl.to(curLeft, { autoAlpha: 0, filter: "blur(12px)", duration: transDur * 0.8, ease: "power2.inOut" }, tLabel);
              tl.to(curRight, { autoAlpha: 0, filter: "blur(12px)", duration: transDur * 0.8, ease: "power2.inOut" }, tLabel);
              
              if (transitionType === 0) {
                // 🎡 WHEEL
                tl.to(curLeft, { x: -w * 0.3, y: -h * 0.3, rotation: -15, duration: transDur, ease: "power2.inOut" }, tLabel);
                tl.to(curRight, { x: w * 0.3, y: h * 0.3, rotation: 15, duration: transDur, ease: "power2.inOut" }, tLabel);
                
                gsap.set(nextLeft, { x: w * 0.3, y: -h * 0.3, rotation: 15, filter: "blur(12px)" });
                gsap.set(nextRight, { x: -w * 0.3, y: h * 0.3, rotation: -15, filter: "blur(12px)" });
                
                tl.fromTo(next, { display: "none" }, { autoAlpha: 1, display: "flex", duration: transDur * 0.3 }, tLabel);
                tl.to(nextLeft, { autoAlpha: 1, filter: "blur(0px)", x: 0, y: 0, rotation: 0, duration: transDur, ease: "power2.out" }, tLabel);
                tl.to(nextRight, { autoAlpha: 1, filter: "blur(0px)", x: 0, y: 0, rotation: 0, duration: transDur, ease: "power2.out" }, tLabel);
              } else {
                // ∞ INFINITY
                tl.to(curLeft, { x: w * 0.35, y: h * 0.2, rotation: 20, duration: transDur, ease: "power1.inOut" }, tLabel);
                tl.to(curRight, { x: -w * 0.35, y: -h * 0.2, rotation: -20, duration: transDur, ease: "power1.inOut" }, tLabel);
                
                gsap.set(nextLeft, { x: w * 0.35, y: -h * 0.2, rotation: -20, filter: "blur(12px)" });
                gsap.set(nextRight, { x: -w * 0.35, y: h * 0.2, rotation: 20, filter: "blur(12px)" });
                
                tl.fromTo(next, { display: "none" }, { autoAlpha: 1, display: "flex", duration: transDur * 0.3 }, tLabel);
                tl.to(nextLeft, { autoAlpha: 1, filter: "blur(0px)", x: 0, y: 0, rotation: 0, duration: transDur, ease: "power1.out" }, tLabel);
                tl.to(nextRight, { autoAlpha: 1, filter: "blur(0px)", x: 0, y: 0, rotation: 0, duration: transDur, ease: "power1.out" }, tLabel);
              }
            }
          }
        }

        // PHASE C — FINAL PAIR REST
        tl.to({}, { duration: 0.8 });

        // 4. EXIT
        const lastPair = pairsRef.current[4];
        if (lastPair) {
          if (!reducedMotion && !isMobile) {
            tl.to(lastPair, { 
              scale: 1.05, 
              y: -80, 
              autoAlpha: 0, 
              duration: 1.5, 
              ease: "power1.in" 
            });
          } else {
            tl.to(lastPair, { autoAlpha: 0, y: -30, duration: 1.0 });
          }
        }

        // Link to ScrollTrigger
        ScrollTrigger.create({
          ...sceneScrub(rootEl.current!),
          scrub: 1.2,
          animation: tl,
        });
      }, 100);

      // We cannot easily clear the timer from here, so we just let it run.
      // If the component unmounts within 100ms, GSAP's revert will kill any timelines created anyway.
    }, rootEl);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.wrap} id="work" ref={rootEl}>
      
      {/* Absolute Header Info */}
      <div className={styles.eyebrow}>
        02 / SELECTED WORK
        <div className={styles.eyebrowSub}>
          10 PROJECTS<br />
          5 PAIRS<br />
          ONE CONTINUOUS JOURNEY
        </div>
      </div>

      {/* Fixed Counter */}
      <div className={styles.progressContainer}>
        <div className={styles.progressCounter}>
          <div className={styles.counterMask}>
            <div className={styles.counterNumbers} ref={counterRef}>
              <div>01—02</div>
              <div>03—04</div>
              <div>05—06</div>
              <div>07—08</div>
              <div>09—10</div>
            </div>
          </div>
          <span className={styles.counterTotal}>/ 10</span>
        </div>
      </div>

      <div className={styles.zContainer}>
        {/* Background SVG Z-Line */}
        <svg className={styles.zLineBg} viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            ref={pathRef} 
            d="M 20 10 L 80 30 L 20 50 L 80 70 L 20 90" 
            fill="none" 
            stroke="var(--accent, #c0392b)" 
            strokeWidth="0.08" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>

        {PAIRS.map((pair, i) => (
            <div 
              key={i} 
              className={styles.pairContainer} 
              ref={(el) => { pairsRef.current[i] = el; }}
            >
              {pair.map((p, j) => (
                <a 
                  key={j} 
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectCard}
                  aria-label={`View ${p.title} on GitHub`}
                >
                  <div className={styles.projectVisual}>
                    <div className={styles.visualTextWrapper}>
                      <span className={styles.visualText}>{p.title}</span>
                    </div>
                    <div className={styles.visualCategory}>{p.category}</div>
                    <div className={styles.imageOverlay} />
                  </div>
                  
                  <div className={styles.projectMeta}>
                    <div className={styles.projectHeader}>
                      <span className={styles.projectNumber}>{p.number} / 10</span>
                    </div>
                    
                    <h3 className={styles.projectTitle}>{p.title}</h3>
                    <div className={styles.projectCategory}>{p.category}</div>
                    <div className={styles.projectDesc}>{p.description}</div>
                    
                    <div className={styles.projectLink}>
                      VIEW ON GITHUB <ArrowRight size={16} className={styles.arrow} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ))}
      </div>

    </section>
  );
}
