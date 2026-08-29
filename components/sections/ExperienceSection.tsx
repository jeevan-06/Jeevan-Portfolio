"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";
import { sceneScrub } from "@/lib/scene";
import styles from "./ExperienceSection.module.css";
import KlarnaCarousel, { CarouselItem } from "@/components/originkit/KlarnaCarousel";

const experiences = [
  { id: "01", role: "Software Development Intern", company: "Cognifyz Technologies", date: "Aug 2026 — Present", description: "Worked on developing full-stack web applications and improving system architecture." },
  { id: "02", role: "Full Stack Engineer", company: "Webstack Academy", date: "Jul 2026 — Present", description: "Built and maintained multiple client-facing applications using modern web technologies." },
  { id: "03", role: "Arcade Facilitator", company: "Google Cloud", date: "Jul 2026 — Present", description: "Facilitated Google Cloud Arcade events and helped students learn cloud infrastructure." },
  { id: "04", role: "Full Stack Development Intern", company: "INDIWEBPROS", date: "Jun 2026 — Aug 2026", description: "Developed dynamic user interfaces and optimized backend API performance." },
  { id: "05", role: "Cyber Security Intern", company: "Zintora Soft", date: "Jun 2026 — Jul 2026", description: "Conducted vulnerability assessments and implemented security best practices." },
  { id: "06", role: "Assistant", company: "NovaShyld Technologies", date: "Mar 2026 — May 2026", description: "Assisted the technical team with deployments, testing, and documentation." },
  { id: "07", role: "Ethical Hacking Intern", company: "Main Crafts Technology", date: "Nov 2025 — Dec 2025", description: "Performed penetration testing and secured internal company networks." },
  { id: "08", role: "Full Stack Engineer", company: "Let's Gametech", date: "Jun 2025 — Jul 2025", description: "Contributed to the development of a gaming community platform." }
];

export default function ExperienceSection() {
  const rootEl = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!rootEl.current) return;

    let ctx = gsap.context(() => {
      gsap.to(rootEl.current, {
        scrollTrigger: {
          ...sceneScrub(rootEl.current!),
          scrub: 1,
          onUpdate: (self) => {
            // Cap the progress for the carousel at 80% so the last 20% is a pause (gap)
            // self.progress goes from 0 to 1 over the 10 runways
            const adjustedProgress = Math.min(1, self.progress / 0.8);
            setScrollProgress(adjustedProgress);
          }
        }
      });
    }, rootEl);

    return () => ctx.revert();
  }, []);

  const carouselItems: CarouselItem[] = experiences.map((exp, index) => {
    // Generate initials for the button
    const initials = exp.company.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();

    return {
      id: exp.id,
      buttonContent: <span style={{ fontSize: '16px', fontFamily: 'var(--font-ui)' }}>{initials}</span>,
      content: (
        <div className={styles.cardContent}>
          <div className={styles.sceneMarker}>SCENE {exp.id}</div>
          <div className={styles.company}>{exp.company}</div>
          <h3 className={styles.role}>{exp.role}</h3>
          <div className={styles.date}>{exp.date}</div>
          <p className={styles.description}>{exp.description}</p>
        </div>
      )
    };
  });

  return (
    <section className={styles.viewport} id="experience" ref={rootEl}>
      <div className={styles.carouselWrapper}>
        <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.sectionSubtitle}>Scroll to view roles</p>
        </div>
        <KlarnaCarousel 
          items={carouselItems} 
          scrollProgress={scrollProgress}
          buttonCount={7} 
          buttonSize={60} 
          buttonRadius={30} 
          imageWidth="100%"
          imageHeight={420}
        />
      </div>
    </section>
  );
}
