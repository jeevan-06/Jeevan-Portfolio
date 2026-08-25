"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sceneScrub } from "@/lib/scene";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Data with Devicon Logos ---
const SKILL_CATEGORIES = [
  { title: "Languages", items: [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" }
  ]},
  { title: "Frontend", items: [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
    { name: "TSX", icon: null },
    { name: "Responsive UI", icon: null }
  ]},
  { title: "Backend", items: [
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" }, 
    { name: "REST API", icon: null },
    { name: "Microservices", icon: null }
  ]},
  { title: "AI & ML", items: [
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
    { name: "YOLOv8", icon: null },
    { name: "FAISS", icon: null },
    { name: "Computer Vision", icon: null },
    { name: "Machine Learning", icon: null },
    { name: "Random Forest", icon: null }
  ]},
  { title: "DB & Cloud", items: [
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Neon", icon: null },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
    { name: "Cloud Deploy", icon: null }
  ]},
  { title: "Cybersecurity", items: [
    { name: "Ethical Hacking", icon: null },
    { name: "Network Security", icon: null },
    { name: "Vulnerability", icon: null },
    { name: "Kali Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kalilinux/kalilinux-original.svg" }
  ]},
  { title: "AI & LLM", items: [
    { name: "Generative AI", icon: null },
    { name: "AI Agents", icon: null },
    { name: "RAG", icon: null },
    { name: "LangChain", icon: null },
    { name: "MCP", icon: null },
    { name: "Gemini API", icon: null },
    { name: "Ollama", icon: null }
  ]},
  { title: "Practices", items: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Agile", icon: null },
    { name: "Version Control", icon: null },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "CI/CD", icon: null },
    { name: "JWT", icon: null }
  ]},
  { title: "Concepts", items: [
    { name: "DSA", icon: null },
    { name: "OOP", icon: null },
    { name: "DBMS", icon: null },
    { name: "Networks", icon: null },
    { name: "OS", icon: null },
    { name: "SDLC", icon: null }
  ]},
  { title: "Env & Design", items: [
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: "IntelliJ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
    { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Stitch", icon: null }
  ]}
];

const SKILLS = SKILL_CATEGORIES.flatMap(cat => cat.items.map(skill => ({ ...skill, category: cat.title })));
const TOTAL_SKILLS = SKILLS.length;

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
    skill: { name: string; category: string; icon: string | null };
    index: number;
    total: number;
    phase: AnimationPhase;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

// --- FlipCard Component ---
const IMG_WIDTH = 70;  
const IMG_HEIGHT = 90; 

function FlipCard({ skill, index, target }: FlipCardProps) {
    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{ type: "spring", stiffness: 40, damping: 15 }}
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d", 
                perspective: "1000px",
            }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180, scale: 1.5, zIndex: 50 }}
            >
                {/* Front Face (White, Minimalist with Logo) */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-white border border-black/5 flex items-center justify-center p-2 text-center"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    {skill.icon ? (
                        <img 
                            src={skill.icon} 
                            alt={skill.name}
                            className="h-[60%] w-[60%] object-contain"
                        />
                    ) : (
                        <span className="text-[10px] font-medium leading-tight text-black tracking-tight">{skill.name}</span>
                    )}
                </div>

                {/* Back Face (Dark, Name + Category) */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-[#111] flex flex-col items-center justify-center p-2 border border-gray-800 text-center"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <p className="text-[8px] font-bold text-gray-200 leading-tight mb-1">{skill.name}</p>
                    <p className="text-[6px] font-medium text-gray-500 uppercase tracking-widest">{skill.category}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function TechnicalSkillsSection() {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };
        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);
        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });
        return () => observer.disconnect();
    }, []);

    // --- Integration with Global Scroll (GSAP) ---
    const virtualScroll = useMotionValue(0);

    useEffect(() => {
      if (!containerRef.current) return;
      
      const { trigger, start, end } = sceneScrub(containerRef.current);

      ScrollTrigger.create({
        trigger,
        start,
        end,
        onUpdate: (self) => {
          virtualScroll.set(self.progress * 3000);
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach(t => {
          if (t.vars.trigger === trigger) t.kill();
        });
      };
    }, [virtualScroll]);

    const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });
    const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;
            const normalizedX = (relativeX / rect.width) * 2 - 1;
            mouseX.set(normalizedX * 100);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    const scatterPositions = useMemo(() => {
        return SKILLS.map(() => ({
            x: (Math.random() - 0.5) * 2000,
            y: (Math.random() - 0.5) * 1500,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, []);

    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
        const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
        const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
        return () => {
            unsubscribeMorph();
            unsubscribeRotate();
            unsubscribeParallax();
        };
    }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

    const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

    return (
        <section ref={containerRef} className="relative w-full h-[100vh] bg-white overflow-hidden text-black flex items-center justify-center perspective-1000">

            <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
                <motion.h1
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-7xl font-medium tracking-tight text-black"
                >
                    THE STACK.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.5 - morphValue } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mt-4 text-xs font-bold tracking-[0.2em] text-gray-500 uppercase"
                >
                    Scroll To Explore
                </motion.p>
            </div>

            <motion.div
                style={{ opacity: contentOpacity, y: contentY }}
                className="absolute top-[15%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
            >
                <h2 className="text-3xl md:text-5xl font-medium text-black tracking-tight mb-4">
                    60+ Technologies
                </h2>
                <p className="text-sm md:text-base text-gray-600 max-w-lg leading-relaxed">
                    Hover over any component in the orbital ring to inspect. <br className="hidden md:block" />
                    Keep scrolling to scrub through the entire architecture.
                </p>
            </motion.div>

            <div className="relative flex items-center justify-center w-full h-full">
                {SKILLS.map((skill, i) => {
                    let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                    if (introPhase === "scatter") {
                        target = scatterPositions[i];
                    } else if (introPhase === "line") {
                        const lineSpacing = 30; 
                        const lineTotalWidth = TOTAL_SKILLS * lineSpacing;
                        const lineX = i * lineSpacing - lineTotalWidth / 2;
                        target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                    } else {
                        const isMobile = containerSize.width < 768;
                        const minDimension = Math.min(containerSize.width, containerSize.height);

                        const circleRadius = Math.min(minDimension * 0.45, 450); 
                        const circleAngle = (i / TOTAL_SKILLS) * 360;
                        const circleRad = (circleAngle * Math.PI) / 180;
                        const circlePos = {
                            x: Math.cos(circleRad) * circleRadius,
                            y: Math.sin(circleRad) * circleRadius,
                            rotation: circleAngle + 90,
                        };

                        const baseRadius = Math.min(containerSize.width, containerSize.height * 2.0);
                        const arcRadius = baseRadius * (isMobile ? 1.6 : 1.3);
                        const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
                        const arcCenterY = arcApexY + arcRadius;

                        const spreadAngle = 300; 
                        const startAngle = -90 - (spreadAngle / 2);
                        const step = spreadAngle / (TOTAL_SKILLS - 1);

                        const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
                        const maxRotation = spreadAngle * 0.85; 
                        const boundedRotation = -scrollProgress * maxRotation;

                        const currentArcAngle = startAngle + (i * step) + boundedRotation;
                        const arcRad = (currentArcAngle * Math.PI) / 180;

                        const arcPos = {
                            x: Math.cos(arcRad) * arcRadius + parallaxValue,
                            y: Math.sin(arcRad) * arcRadius + arcCenterY,
                            rotation: currentArcAngle + 90,
                            scale: isMobile ? 1.2 : 1.5, 
                        };

                        target = {
                            x: lerp(circlePos.x, arcPos.x, morphValue),
                            y: lerp(circlePos.y, arcPos.y, morphValue),
                            rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                            scale: lerp(1, arcPos.scale, morphValue),
                            opacity: 1,
                        };
                    }

                    return (
                        <FlipCard
                            key={`${skill.name}-${i}`}
                            skill={skill}
                            index={i}
                            total={TOTAL_SKILLS}
                            phase={introPhase}
                            target={target}
                        />
                    );
                })}
            </div>
        </section>
    );
}
