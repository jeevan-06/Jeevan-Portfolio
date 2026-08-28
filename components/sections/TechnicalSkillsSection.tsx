"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { sceneScrub } from "@/lib/scene";
import styles from "./TechnicalSkillsSection.module.css";

// Full data for the final constellation
const allSkills = [
  { name: "React.js", category: "01 / FRONTEND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "TypeScript", category: "01 / FRONTEND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", category: "01 / FRONTEND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Vite", category: "01 / FRONTEND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: "HTML5", category: "01 / FRONTEND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", category: "01 / FRONTEND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Responsive", category: "01 / FRONTEND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },

  { name: "Node.js", category: "02 / BACKEND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "FastAPI", category: "02 / BACKEND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "Spring Boot", category: "02 / BACKEND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "Express.js", category: "02 / BACKEND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Flask", category: "02 / BACKEND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
  { name: "REST API", category: "02 / BACKEND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },

  { name: "PostgreSQL", category: "03 / DATABASE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", category: "03 / DATABASE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Supabase", category: "03 / DATABASE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Firebase", category: "03 / DATABASE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "Neon", category: "03 / DATABASE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg" },
  { name: "AWS", category: "03 / DATABASE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },

  { name: "Python", category: "04 / AI & ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "PyTorch", category: "04 / AI & ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
  { name: "YOLOv8", category: "04 / AI & ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
  { name: "OpenCV", category: "04 / AI & ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
  { name: "FAISS", category: "04 / AI & ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg" },
  { name: "Scikit-Learn", category: "04 / AI & ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },

  { name: "Kali Linux", category: "05 / CYBER", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "JWT", category: "05 / CYBER", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" },
  { name: "Secure API", category: "05 / CYBER", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Network Sec", category: "05 / CYBER", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/networkx/networkx-original.svg" },
  { name: "Ethical Hack", category: "05 / CYBER", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" },

  { name: "Git", category: "06 / TOOLS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", category: "06 / TOOLS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Docker", category: "06 / TOOLS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Postman", category: "06 / TOOLS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "VS Code", category: "06 / TOOLS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "IntelliJ", category: "06 / TOOLS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" }
];

const categories = Array.from(new Set(allSkills.map(skill => skill.category)));

export default function TechnicalSkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    let ctx = gsap.context(() => {
      const numCategories = categories.length;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          ...sceneScrub(sectionRef.current!),
          scrub: 1,
        }
      });

      // Initial state setup
      gsap.set(".techCard", { opacity: 0, y: 50 });
      gsap.set(".catTitle", { opacity: 0, y: "50px" });
      gsap.set(".catTitle-0", { opacity: 1, y: "0px" });
      gsap.set(".techGrid-0 .techCard", { opacity: 1, y: 0 });

      // Move the track horizontally
      tl.to(trackRef.current, {
        x: `-${(numCategories - 1) * 100}vw`,
        ease: "none",
        duration: numCategories - 1
      }, 0);

      categories.forEach((_, index) => {
        // Animate tech cards on entrance
        if (index > 0) {
          const cards = gsap.utils.toArray(`.techGrid-${index} .techCard`);
          tl.to(cards, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "back.out(1.7)",
            duration: 0.5
          }, index - 0.4); 
        }

        // Animate category titles fading and sliding
        if (index > 0) {
          tl.to(`.catTitle-${index}`, {
            opacity: 1,
            y: 0,
            duration: 0.3
          }, index - 0.3);

          tl.to(`.catTitle-${index - 1}`, {
            opacity: 0,
            y: "-50px",
            duration: 0.3
          }, index - 0.3);
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.viewport} ref={sectionRef} id="skills">
      <div className={styles.pinContainer}>
        
        {/* Sticky Category Titles */}
        <div className={styles.categoryDisplay}>
          <div className={`${styles.monoSmall} ${styles.categoryLabel}`}>CATEGORY</div>
          <div className={styles.categoryTitleWrapper}>
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className={`${styles.categoryTitle} catTitle catTitle-${idx}`}
              >
                {cat.split(' / ')[1] || cat}
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling Track */}
        <div className={styles.scrollTrack} ref={trackRef}>
          {categories.map((category, catIdx) => {
            const categorySkills = allSkills.filter(s => s.category === category);

            return (
              <div key={catIdx} className={styles.categoryBlock}>
                <div className={`${styles.techGrid} techGrid-${catIdx}`}>
                  {categorySkills.map((skill, skillIdx) => (
                    <div key={skillIdx} className={`${styles.techCard} techCard`}>
                      <img src={skill.icon} alt={skill.name} className={styles.techIcon} />
                      <div className={styles.techName}>{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
