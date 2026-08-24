"use client";

import { useRef, useEffect, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { sceneScrub } from "@/lib/scene";
import { Code2, GraduationCap, Lightbulb, Star, ArrowUpRight, Menu, Mail, ArrowDown } from "lucide-react";
import GooeyNav from "@/components/ui/GooeyNav";
import SplitText from "@/components/ui/SplitText";
import BlurText from "@/components/ui/BlurText";
import styles from "./HomeHero.module.css";

const IMAGE_SRC = "/images/Jeevan%20images/c2c1b306-85ca-4e44-a1ba-5ad8441a825e.png";

export default function HomeHero() {
  const rootRef = useRef<HTMLElement>(null);
  
  // Element refs
  const introBlockRef = useRef<HTMLDivElement>(null);
  const nameJeevanRef = useRef<HTMLSpanElement>(null);
  const nameKumarRef = useRef<HTMLSpanElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);
  const detailsBlockRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const fillElRef = useRef<HTMLSpanElement>(null);
  const stageTextRef = useRef<HTMLSpanElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  const [cursorVisible, setCursorVisible] = useState(false);
  const cursorX = useRef<any>(null);
  const cursorY = useRef<any>(null);
  const imageX = useRef<any>(null);
  const imageY = useRef<any>(null);

  // Mouse Parallax Logic
  useEffect(() => {
    if (!cursorRef.current || !imageRef.current) return;
    cursorX.current = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3" });
    cursorY.current = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3" });
    imageX.current = gsap.quickTo(imageRef.current, "x", { duration: 1, ease: "power3.out" });
    imageY.current = gsap.quickTo(imageRef.current, "y", { duration: 1, ease: "power3.out" });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) return;
      
      if (cursorVisible && cursorX.current && cursorY.current) {
        cursorX.current(e.clientX);
        cursorY.current(e.clientY);
      }
      
      // Calculate slight offset based on screen center (max 15px)
      if (imageX.current && imageY.current && window.innerWidth > 1000) {
        const xOffset = ((e.clientX / window.innerWidth) - 0.5) * 20;
        const yOffset = ((e.clientY / window.innerHeight) - 0.5) * 20;
        imageX.current(-xOffset);
        imageY.current(-yOffset);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorVisible]);

  // Image Hover Scale
  const handleImageEnter = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || window.innerWidth <= 1000) return;
    setCursorVisible(true);
    gsap.to(imageRef.current, { scale: 1.02, duration: 0.8, ease: "power2.out" });
  };
  const handleImageLeave = () => {
    setCursorVisible(false);
    gsap.to(imageRef.current, { scale: 1, duration: 0.8, ease: "power2.out" });
    if (imageX.current) imageX.current(0);
    if (imageY.current) imageY.current(0);
  };

  // Main Animations
  useEffect(() => {
    const rootEl = rootRef.current;
    if (!rootEl) return;

    let ctx = gsap.context(() => {
      
      /* ================= LOAD ANIMATION ================= */
      const tlLoad = gsap.timeline({ delay: 0.2 });

      // Image arrives
      tlLoad.to(imageWrapRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        ease: "power3.inOut"
      }, 0);

      // Jeevan
      if (nameJeevanRef.current) {
        const jeevanChars = nameJeevanRef.current.querySelectorAll(`.${styles.splitChar}`);
        tlLoad.fromTo(jeevanChars, 
          { y: "110%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, stagger: 0.05, ease: "power3.out" },
          0
        );
      }

      // Kumar
      if (nameKumarRef.current) {
        const kumarChars = nameKumarRef.current.querySelectorAll(`.${styles.splitChar}`);
        tlLoad.fromTo(kumarChars, 
          { y: "110%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, stagger: 0.05, ease: "power3.out" },
          0.15
        );
      }

      // Software Developer
      tlLoad.fromTo(roleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        0.5
      );

      // Description Blur Reveal
      tlLoad.fromTo(descRef.current,
        { opacity: 0, filter: "blur(8px)" },
        { opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power2.out" },
        0.75
      );

      // Bottom Labels Horizontal Reveal
      tlLoad.fromTo(labelsRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
        1.0
      );

      // Accent Line
      tlLoad.fromTo(accentLineRef.current,
        { scaleY: 0 },
        { scaleY: 0.2, duration: 1, ease: "power3.out", transformOrigin: "top" },
        1.0
      );

      // Scroll Indicator
      tlLoad.fromTo(scrollIndicatorRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        1.2
      );

      /* ================= SCROLL ANIMATION ================= */
      const tlScroll = gsap.timeline({ paused: true });
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isMobile = window.innerWidth <= 1000;
      
      const parallaxMult = reducedMotion ? 0 : (isMobile ? 0.3 : 1);

      // 1. Parallax and fade out introBlock
      if (parallaxMult > 0) {
        tlScroll.to(nameJeevanRef.current, { y: -80 * parallaxMult, ease: "none", duration: 0.4 }, 0);
        tlScroll.to(nameKumarRef.current, { y: -100 * parallaxMult, ease: "none", duration: 0.4 }, 0);
        tlScroll.to(roleRef.current, { y: -120 * parallaxMult, ease: "none", duration: 0.4 }, 0);
        tlScroll.to(descRef.current, { y: -140 * parallaxMult, ease: "none", duration: 0.4 }, 0);
        tlScroll.to(labelsRef.current, { x: -80 * parallaxMult, ease: "none", duration: 0.4 }, 0);
      }
      
      tlScroll.to(introBlockRef.current, { opacity: 0, pointerEvents: "none", duration: 0.3, ease: "power2.inOut" }, 0);

      // Accent line grows
      tlScroll.to(accentLineRef.current, { scaleY: 1, ease: "none", duration: 0.4 }, 0);

      // Fade out scroll indicator immediately
      tlScroll.to(scrollIndicatorRef.current, { opacity: 0, duration: 0.1 }, 0);
      
      // Nav shrinks slightly
      tlScroll.to(navRef.current, { scale: 0.95, opacity: 0.8, y: -10, ease: "power1.inOut", duration: 0.3 }, 0);

      // 2. Fade in details block
      tlScroll.fromTo(detailsBlockRef.current, 
        { opacity: 0, y: 40, pointerEvents: "none" },
        { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.3, ease: "power2.out" },
        0.2
      );

      // 3. Fade out left column completely as we move to work transition
      tlScroll.to(leftColRef.current, { opacity: 0, x: -40, pointerEvents: "none", duration: 0.3, ease: "power2.inOut" }, 0.6);

      // 4. Cinematic Image Transition to Work Section
      tlScroll.to(imageWrapRef.current, {
        width: "90vw",
        height: "90vh",
        x: "-25vw", // Move towards center from the right column
        duration: 0.4,
        ease: "power2.inOut"
      }, 0.6);

      tlScroll.to(imageRef.current, {
        filter: "grayscale(70%) contrast(1.1) sepia(0%) blur(0px)",
        objectPosition: "center center",
        duration: 0.4,
        ease: "power1.inOut"
      }, 0.6);

      // Link timeline to ScrollTrigger
      ScrollTrigger.create({
        ...sceneScrub(rootEl),
        scrub: true,
        animation: tlScroll,
        onUpdate: (self) => {
          if (fillElRef.current) {
            fillElRef.current.style.transform = `scaleX(${self.progress})`;
          }
          if (stageTextRef.current) {
            stageTextRef.current.innerText = self.progress > 0.6 ? "02" : "01";
          }
        }
      });

    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.wrap} ref={rootRef} id="home">
      
      {/* Custom Cursor */}
      <div 
        ref={cursorRef} 
        className={`${styles.cursor} ${cursorVisible ? styles.cursorVisible : ""}`}
      >
        SCROLL
      </div>

      {/* GLOBAL NAV */}
      <nav className={styles.topNav} ref={navRef}>
        <div className={styles.logo}>
          J<span className={styles.logoDot}>.</span>
        </div>
        <div className={styles.navLinks}>
          <GooeyNav 
            items={[
              { label: "Home", href: "#" },
              { label: "Work", href: "#work" },
              { label: "About", href: "#" },
              { label: "Journey", href: "#" },
              { label: "Contact", href: "#" },
            ]} 
          />
        </div>
        <div className={styles.menuBtn}>
          <Menu size={20} />
        </div>
      </nav>

      <div className={styles.inner}>
        
        {/* LEFT COLUMN */}
        <div className={styles.leftCol} ref={leftColRef}>
          
          <div className={styles.introBlock} ref={introBlockRef}>
            <div className={styles.eyebrow}>
              01 / Introduction
            </div>
            
            <div className={styles.nameWrap}>
              <div className={styles.accentLine} ref={accentLineRef} />
              <h1 className={styles.nameBlock}>
                <span className={styles.revealWrap}>
                  <span ref={nameJeevanRef} style={{ display: 'block' }}>
                    <SplitText 
                      text="Jeevan" 
                      className={styles.firstName} 
                      charClassName={styles.splitChar}
                    />
                  </span>
                </span>
                <span className={styles.revealWrap}>
                  <span ref={nameKumarRef} style={{ display: 'block' }}>
                    <SplitText 
                      text="Kumar" 
                      className={styles.lastName} 
                      charClassName={styles.splitChar}
                    />
                  </span>
                </span>
              </h1>
              
              <div className={styles.role} ref={roleRef}>
                Software Developer
              </div>
              
              <div className={styles.subRole} ref={descRef}>
                <BlurText text="Cyber Security Engineering student exploring AI, full-stack, and product development." />
              </div>

              <div className={styles.bottomLabels} ref={labelsRef}>
                BUILD <span className={styles.dot}>·</span> EXPLORE <span className={styles.dot}>·</span> CREATE
              </div>
            </div>
          </div>

          {/* THE DETAILS GRID & BUTTONS */}
          <div className={styles.detailsBlock} ref={detailsBlockRef}>
            <div className={styles.statsGrid}>
              <div className={styles.statRow}>
                <Code2 size={24} strokeWidth={1.5} className={styles.statIcon} />
                <div className={styles.statLabel}>Projects</div>
                <div className={styles.statValue}>15+</div>
              </div>
              <div className={styles.statRow}>
                <GraduationCap size={24} strokeWidth={1.5} className={styles.statIcon} />
                <div className={styles.statLabel}>Education</div>
                <div className={styles.statValue}>Cyber Security<br/>Engineering</div>
              </div>
              <div className={styles.statRow}>
                <Lightbulb size={24} strokeWidth={1.5} className={styles.statIcon} />
                <div className={styles.statLabel}>Focus</div>
                <div className={styles.statValue}>Software<br/>Development</div>
              </div>
              <div className={styles.statRow}>
                <Star size={24} strokeWidth={1.5} className={styles.statIcon} />
                <div className={styles.statLabel}>Interests</div>
                <div className={styles.statValue}>AI, Full Stack,<br/>Problem Solving</div>
              </div>
            </div>

            <div className={styles.actions}>
              <button className={styles.btnPrimary}>
                EXPLORE MY WORK <ArrowUpRight size={16} />
              </button>
              <button className={styles.btnSecondary}>
                ABOUT ME <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className={styles.rightCol}>
          <div 
            className={styles.imageWrap} 
            ref={imageWrapRef}
            onMouseEnter={handleImageEnter}
            onMouseLeave={handleImageLeave}
          >
            <img 
              ref={imageRef}
              src={IMAGE_SRC} 
              alt="Jeevan Kumar" 
              className={styles.image} 
              style={{ willChange: "transform, filter" }}
            />
          </div>
          <div className={styles.verticalText}>
            TURNING IDEAS INTO <span className={styles.accent}>IMPACT.</span>
          </div>
        </div>

      </div>

      {/* BOTTOM NAV */}
      <footer className={styles.bottomNav}>
        <div className={styles.bottomLeft}>
          <div className={styles.progress}>
            <span ref={stageTextRef}>01</span>
            <div className={styles.progLine}>
              <span className={styles.progFill} ref={fillElRef}></span>
            </div>
            <span>02</span>
          </div>
        </div>

        <div className={styles.scrollHint} ref={scrollIndicatorRef}>
          SCROLL TO EXPLORE
          <ArrowDown size={16} className={styles.arrowDown} />
        </div>

        <div className={styles.socials}>
          <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Email"><Mail size={16} /></a>
        </div>
      </footer>

    </section>
  );
}
