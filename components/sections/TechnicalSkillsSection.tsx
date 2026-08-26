"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { sceneScrub } from "@/lib/scene";
import styles from "./TechnicalSkillsSection.module.css";
import { Monitor, Server, Cloud, Brain, Shield, PenTool, ArrowRight, Code } from "lucide-react";

export default function TechnicalSkillsSection() {
  const rootEl = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootEl.current || !scrollContainerRef.current) return;

    let ctx = gsap.context(() => {
      // 1. Dynamically scale the grid to fit vertically if it's too tall
      const grid = document.querySelector(`.${styles.galleryGrid}`) as HTMLElement;
      let currentScale = 1;
      
      if (grid) {
        const gridHeight = grid.offsetHeight;
        const vh = window.innerHeight;
        // Leave ~80px of breathing room (40px top/bottom)
        const availableHeight = vh - 80;
        
        if (gridHeight > availableHeight) {
          currentScale = availableHeight / gridHeight;
          gsap.set(grid, { scale: currentScale, transformOrigin: "left top" });
        }
      }

      // 2. Horizontal Scroll for the massive grid
      const container = scrollContainerRef.current!;
      
      const tl = gsap.timeline();
      // Calculate how far to move taking the scale into account
      const scaledWidth = grid ? grid.offsetWidth * currentScale : container.scrollWidth;
      // Move left so the right edge hits the viewport right edge (plus some padding)
      const moveAmount = Math.max(0, scaledWidth - window.innerWidth + 100);

      tl.to(container, {
        x: -moveAmount,
        ease: "none"
      });

      ScrollTrigger.create({
        ...sceneScrub(rootEl.current!),
        scrub: 1,
        animation: tl,
      });

    }, rootEl);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.viewport} ref={rootEl} id="skills">
      <div className={styles.scrollContainer} ref={scrollContainerRef}>
        
        <div className={styles.galleryGrid}>
          
          {/* INTRO COLUMN (C1, R1+R2) */}
          <div className={`${styles.cell} ${styles.cellIntro}`}>
            <div className={styles.headerPre}>THE TECHNOLOGIES BEHIND WHAT I BUILD</div>
            <h2 className={styles.headerTitle}>TECHNICAL<br/>SKILLS</h2>
            <p className={styles.headerDesc}>
              An interactive gallery of the technologies, tools and platforms I use to build modern, scalable and intelligent applications.
            </p>
            
            <div className={styles.illustration}>
            </div>
          </div>

          {/* 01 FRONTEND (C2, R1) */}
          <div className={`${styles.cell} ${styles.cellFrontend}`}>
            <div className={styles.colHeader}>
              <div>
                <div className={styles.colNumber}>01</div>
                <div className={styles.colTitle}>FRONTEND<br/>DEVELOPMENT</div>
              </div>
              <Monitor className={styles.colIcon} />
            </div>
            <div className={styles.cardsGrid}>
              {frontendSkills.map((s, i) => (
                <div key={i} className={styles.cardItem} style={s.span ? { gridColumn: 'span 2' } : {}}>
                  <img src={s.icon} alt={s.name} className={styles.cardImage} />
                  <span className={styles.cardName}>{s.name}</span>
                </div>
              ))}
            </div>
            <button className={styles.viewSkillsBtn}>+ VIEW SKILLS</button>
          </div>

          {/* 02 BACKEND (C3, R1) */}
          <div className={`${styles.cell} ${styles.cellBackend}`}>
            <div className={styles.colHeader}>
              <div>
                <div className={styles.colNumber}>02</div>
                <div className={styles.colTitle}>BACKEND<br/>DEVELOPMENT</div>
              </div>
              <Server className={styles.colIcon} />
            </div>
            <div className={styles.cardsGrid}>
              {backendSkills.map((s, i) => (
                <div key={i} className={styles.cardItem}>
                  <img src={s.icon} alt={s.name} className={styles.cardImage} />
                  <span className={styles.cardName}>{s.name}</span>
                </div>
              ))}
            </div>
            <button className={styles.viewSkillsBtn}>+ VIEW SKILLS</button>
          </div>

          {/* 03 DATABASE (C4, R1) */}
          <div className={`${styles.cell} ${styles.cellDatabase}`}>
            <div className={styles.colHeader}>
              <div>
                <div className={styles.colNumber}>03</div>
                <div className={styles.colTitle}>DATABASE &<br/>CLOUD</div>
              </div>
              <Cloud className={styles.colIcon} />
            </div>
            <div className={styles.cardsGrid}>
              {dbSkills.map((s, i) => (
                <div key={i} className={styles.cardItem} style={s.span ? { gridColumn: 'span 2' } : {}}>
                  <img src={s.icon} alt={s.name} className={styles.cardImage} />
                  <span className={styles.cardName}>{s.name}</span>
                </div>
              ))}
            </div>
            <button className={styles.viewSkillsBtn}>+ VIEW SKILLS</button>
          </div>

          {/* 04 AI / ML (C5, R1) */}
          <div className={`${styles.cell} ${styles.cellAI}`}>
            <div className={styles.colHeader}>
              <div>
                <div className={styles.colNumber}>04</div>
                <div className={styles.colTitle}>AI / MACHINE<br/>LEARNING</div>
              </div>
              <Brain className={styles.colIcon} />
            </div>
            <div className={styles.cardsGrid}>
              {aiSkills.map((s, i) => (
                <div key={i} className={styles.cardItem} style={s.span ? { gridColumn: 'span 2' } : {}}>
                  <img src={s.icon} alt={s.name} className={styles.cardImage} />
                  <span className={styles.cardName}>{s.name}</span>
                </div>
              ))}
            </div>
            <button className={styles.viewSkillsBtn}>+ VIEW SKILLS</button>
          </div>

          {/* 05 CYBERSECURITY (C2-C3, R2) */}
          <div className={`${styles.cell} ${styles.cellCyber}`}>
            <div className={styles.colHeader}>
              <div>
                <div className={styles.colNumber}>05</div>
                <div className={styles.colTitle}>CYBERSECURITY</div>
              </div>
            </div>
            <div className={styles.horizontalRow}>
              {cyberSkills.map((s, i) => (
                <div key={i} className={`${styles.cardItem} ${styles.cardItemHorizontal}`}>
                  <img src={s.icon} alt={s.name} className={styles.cardImage} style={{ width: 24, height: 24, filter: 'grayscale(100%)' }} />
                  <span className={styles.cardName} style={{ textAlign: 'center' }}>{s.name}</span>
                </div>
              ))}
            </div>
            <button className={styles.viewSkillsBtn} style={{ marginTop: '1.5rem' }}>+ VIEW SKILLS</button>
          </div>

          {/* 06 TOOLS (C4, R2) */}
          <div className={`${styles.cell} ${styles.cellTools}`}>
            <div className={styles.colHeader}>
              <div>
                <div className={styles.colNumber}>06</div>
                <div className={styles.colTitle}>TOOLS & ENVIRONMENT</div>
              </div>
            </div>
            <div className={styles.horizontalRow}>
              {toolSkills.map((s, i) => (
                <div key={i} className={`${styles.cardItem} ${styles.cardItemHorizontal}`} style={{ minWidth: '50px', padding: '1rem 0.25rem' }}>
                  <img src={s.icon} alt={s.name} className={styles.cardImage} style={{ width: 24, height: 24 }} />
                  <span className={styles.cardName} style={{ fontSize: '0.65rem' }}>{s.name}</span>
                </div>
              ))}
            </div>
            <button className={styles.viewSkillsBtn} style={{ marginTop: '1.5rem' }}>+ VIEW SKILLS</button>
          </div>

          {/* ALL TECH ONE STACK (C5, R2) */}
          <div className={`${styles.cell} ${styles.cellStack}`}>
            <div>
              <div className={styles.stackHeader}>ALL TECH.</div>
              <div className={styles.stackHeader}>ONE STACK.</div>
            </div>
            
            <div className={styles.stackGraphic}>
              <div className={styles.stackCenter}>JR</div>
              <div className={styles.stackRing}>
                <div className={styles.stackNode} style={{ top: '-12px', left: '50%', transform: 'translateX(-50%)' }}>
                  <Monitor size={12} color="#000" />
                </div>
                <div className={styles.stackNode} style={{ bottom: '-12px', left: '50%', transform: 'translateX(-50%)' }}>
                  <Server size={12} color="#000" />
                </div>
                <div className={styles.stackNode} style={{ top: '50%', left: '-12px', transform: 'translateY(-50%)' }}>
                  <Brain size={12} color="#000" />
                </div>
                <div className={styles.stackNode} style={{ top: '50%', right: '-12px', transform: 'translateY(-50%)' }}>
                  <Shield size={12} color="#000" />
                </div>
              </div>
            </div>

            <div>
              <div className={styles.stackFooterText}>
                I connect technologies to build real-world solutions.
              </div>
              <button className={styles.connectBtn}>
                LET'S BUILD SOMETHING GREAT <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Devicon CDN paths for "real" colored logos
const frontendSkills = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Responsive Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", span: true }
];

const backendSkills = [
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
  { name: "REST API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" }
];

const dbSkills = [
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Neon", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg" },
  { name: "Firestore", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
  { name: "Cloud Deployment", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", span: true }
];

const aiSkills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
  { name: "YOLOv8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
  { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
  { name: "FAISS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg" },
  { name: "Random Forest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "Computer Vision", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg", span: true }
];

// Using simple black icons for cybersecurity to match image
const cyberSkills = [
  { name: "Kali Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "Network Security", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/networkx/networkx-original.svg" },
  { name: "Ethical Hacking", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" },
  { name: "Vulnerability", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg" },
  { name: "JWT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" },
  { name: "Secure API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" }
];

const toolSkills = [
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "IntelliJ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
  { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" }
];
