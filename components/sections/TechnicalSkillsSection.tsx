"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { sceneScrub } from "@/lib/scene";
import styles from "./TechnicalSkillsSection.module.css";

const pages = [
  {
    title: "FRONTEND\n& BACKEND",
    groups: [
      {
        name: "Frontend Development",
        skills: [
          { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
          { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
          { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
          { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
          { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
          { name: "TSX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" },
          { name: "Responsive Web Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
        ]
      },
      {
        name: "Backend Development",
        skills: [
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
          { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
          { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
          { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
          { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
          { name: "REST API Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" },
          { name: "RESTful Web Services", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        ]
      }
    ]
  },
  {
    title: "LANGUAGES\n& CLOUD",
    groups: [
      {
        name: "Programming Languages",
        skills: [
          { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
          { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
          { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
          { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
          { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        ]
      },
      {
        name: "Databases & Cloud",
        skills: [
          { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
          { name: "Neon", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg" },
          { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
          { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
          { name: "Cloud Deployment", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
        ]
      }
    ]
  },
  {
    title: "AI, ML\n& TOOLS",
    groups: [
      {
        name: "AI / Machine Learning",
        skills: [
          { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
          { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
          { name: "YOLOv8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-plain.svg" },
          { name: "FAISS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" },
          { name: "Computer Vision", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg" },
          { name: "Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
          { name: "Random Forest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
        ]
      },
      {
        name: "Tools & Development Practices",
        skills: [
          { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
          { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
          { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
          { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
          { name: "Agile Development", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
          { name: "Version Control", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/subversion/subversion-original.svg" },
          { name: "Unit Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
          { name: "CI/CD Basics", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
        ]
      }
    ]
  },
  {
    title: "SECURITY\n& ENV",
    groups: [
      {
        name: "Cybersecurity",
        skills: [
          { name: "Ethical Hacking", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" },
          { name: "Network Security", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/networkx/networkx-original.svg" },
          { name: "Vulnerability Assessment", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/putty/putty-original.svg" },
          { name: "Kali Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kalilinux/kalilinux-original.svg" },
          { name: "JWT Authentication", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" },
        ]
      },
      {
        name: "Developer Environment & Design",
        skills: [
          { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
          { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
          { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
          { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" },
          { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
          { name: "Stitch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg" }
        ]
      }
    ]
  }
];

export default function TechnicalSkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    let ctx = gsap.context(() => {
      const numPages = pages.length;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          ...sceneScrub(sectionRef.current!),
          scrub: 1,
        }
      });

      // Initial state setup
      gsap.set(".techCard", { opacity: 0, y: 30 });
      gsap.set(".catTitle", { opacity: 0, y: "100px" });
      gsap.set(".catTitle-0", { opacity: 1, y: "0px" });
      gsap.set(".techGrid-0 .techCard", { opacity: 1, y: 0 });

      // Move the track horizontally
      tl.to(trackRef.current, {
        x: `-${(numPages - 1) * 100}vw`,
        ease: "none",
        duration: numPages - 1
      }, 0);

      pages.forEach((_, index) => {
        // Animate tech cards on entrance
        if (index > 0) {
          const cards = gsap.utils.toArray(`.techGrid-${index} .techCard`);
          tl.to(cards, {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            ease: "back.out(1.5)",
            duration: 0.4
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
            y: "-100px",
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
          <div className={`${styles.monoSmall} ${styles.categoryLabel}`}>SKILLS</div>
          <div className={styles.categoryTitleWrapper}>
            {pages.map((page, idx) => (
              <div 
                key={idx} 
                className={`${styles.categoryTitle} catTitle catTitle-${idx}`}
                style={{ whiteSpace: 'pre-line' }}
              >
                {page.title}
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling Track */}
        <div className={styles.scrollTrack} ref={trackRef}>
          {pages.map((page, pageIdx) => (
            <div key={pageIdx} className={`${styles.categoryBlock} categoryBlock-${pageIdx}`}>
              <div className={`${styles.groupsContainer} groupsContainer-${pageIdx}`}>
                {page.groups.map((group, groupIdx) => (
                  <div key={groupIdx} className={styles.groupWrapper}>
                    <h3 className={styles.groupTitle}>{group.name}</h3>
                    <div className={`${styles.techGrid} techGrid-${pageIdx}`}>
                      {group.skills.map((skill, skillIdx) => (
                        <div key={skillIdx} className={`${styles.techCard} techCard`}>
                          <img src={skill.icon} alt={skill.name} className={styles.techIcon} />
                          <div className={styles.techName}>{skill.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
