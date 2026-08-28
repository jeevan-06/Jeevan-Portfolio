"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sceneScrub } from "@/lib/scene";
import styles from "./ExperienceSection.module.css";

const experiences = [
  { id: "01", role: "Software Development Intern", company: "Cognifyz Technologies", date: "Aug 2026 — Present" },
  { id: "02", role: "Full Stack Engineer", company: "Webstack Academy", date: "Jul 2026 — Present" },
  { id: "03", role: "Arcade Facilitator", company: "Google Cloud", date: "Jul 2026 — Present" },
  { id: "04", role: "Full Stack Development Intern", company: "INDIWEBPROS", date: "Jun 2026 — Aug 2026" },
  { id: "05", role: "Cyber Security Intern", company: "Zintora Soft", date: "Jun 2026 — Jul 2026" },
  { id: "06", role: "Assistant", company: "NovaShyld Technologies", date: "Mar 2026 — May 2026" },
  { id: "07", role: "Ethical Hacking Intern", company: "Main Crafts Technology", date: "Nov 2025 — Dec 2025" },
  { id: "08", role: "Full Stack Engineer", company: "Let's Gametech", date: "Jun 2025 — Jul 2025" }
];

export default function ExperienceSection() {
  const rootEl = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!rootEl.current || !trackRef.current) return;

    let ctx = gsap.context(() => {
      const numItems = experiences.length;

      // Force the first item to be active immediately on mount
      if (indexRefs.current[0]) {
        indexRefs.current[0].classList.add(styles.active);
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          ...sceneScrub(rootEl.current!),
          scrub: 1,
          onUpdate: (self) => {
            // Calculate which item should be active based on progress (0 to 1)
            let activeIdx = Math.floor(self.progress * numItems);
            // Cap at array bounds
            if (activeIdx >= numItems) activeIdx = numItems - 1;
            
            // Toggle active classes on the left index
            indexRefs.current.forEach((el, i) => {
              if (!el) return;
              if (i === activeIdx) {
                el.classList.add(styles.active);
              } else {
                el.classList.remove(styles.active);
              }
            });
          }
        }
      });

      // Animate the right column sliding up
      tl.to(trackRef.current, {
        y: `-${(numItems - 1) * 100}vh`,
        ease: "none",
        duration: 1
      }, 0);

      // Add a subtle drift to the abstract background blob
      tl.to(`.${styles.glowBlob}`, {
        y: "30vh",
        x: "5vw",
        scale: 1.5,
        ease: "none",
        duration: 1
      }, 0);

    }, rootEl);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.viewport} id="experience" ref={rootEl}>

      {/* --- Left Side: 40% Sticky Index --- */}
      <div className={styles.leftSide}>
        <div className={styles.eyebrow}>2025 — 2026 / EXPERIENCE</div>
        <div className={styles.indexList}>
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className={styles.indexItem}
              ref={el => { indexRefs.current[idx] = el }}
            >
              <div className={styles.indexIndicator} />
              {exp.company}
            </div>
          ))}
        </div>
      </div>

      {/* --- Right Side: 60% Scrolling Content --- */}
      <div className={styles.rightSide}>
        <div className={styles.rightTrack} ref={trackRef}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={styles.expBlock}>
              <div className={styles.expNumber}>{exp.id} / 08</div>
              <h3 className={styles.expRole}>{exp.role}</h3>
              <div className={styles.expDate}>{exp.date}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
