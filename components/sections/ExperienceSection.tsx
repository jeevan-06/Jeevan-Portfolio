"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { sceneScrub } from "@/lib/scene";
import styles from "./ExperienceSection.module.css";

export default function ExperienceSection() {
  const rootEl = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // HUD Refs
  const hudLensRef = useRef<HTMLDivElement>(null);
  const hudFocusRef = useRef<HTMLDivElement>(null);
  const hudExpRef = useRef<HTMLDivElement>(null);

  // Scene Refs
  const introRef = useRef<HTMLDivElement>(null);
  const s1Ref = useRef<HTMLDivElement>(null);
  const s2Ref = useRef<HTMLDivElement>(null);
  const s3Ref = useRef<HTMLDivElement>(null);
  const s4Ref = useRef<HTMLDivElement>(null);
  const s5Ref = useRef<HTMLDivElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);
  const apertureRef = useRef<HTMLDivElement>(null);
  const s6Ref = useRef<HTMLDivElement>(null);
  const s7Ref = useRef<HTMLDivElement>(null);
  const s8Ref = useRef<HTMLDivElement>(null);
  const outroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootEl.current) return;

    let ctx = gsap.context(() => {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const reducedMotion = mediaQuery.matches;

      setTimeout(() => {
        const tl = gsap.timeline();

        // Helpers to update HUD safely without React renders
        const updateHUD = (lens: string, focus: string, exp: string) => {
          if (hudLensRef.current) hudLensRef.current.innerText = lens;
          if (hudFocusRef.current) hudFocusRef.current.innerText = focus;
          if (hudExpRef.current) hudExpRef.current.innerText = exp;
        };

        if (reducedMotion) {
           // Fallback for accessibility...
           tl.to(introRef.current, { autoAlpha: 0, duration: 1 });
           [s1Ref, s2Ref, s3Ref, s4Ref, s5Ref, s6Ref, s7Ref, s8Ref].forEach((sRef, i) => {
             tl.to(sRef.current, { autoAlpha: 1, duration: 1 });
             tl.to(sRef.current, { autoAlpha: 0, duration: 1 });
           });
           tl.to(outroRef.current, { autoAlpha: 1, duration: 1 });
        } else {

          // Initialize all states AT TIME 0
          tl.set(introRef.current, { autoAlpha: 1, filter: "blur(18px)", scale: 1.08 });
          tl.set(s1Ref.current, { autoAlpha: 0, scale: 0.5, filter: "blur(15px)" });
          tl.set(s2Ref.current, { autoAlpha: 0, scale: 0.8, rotationY: -15, xPercent: 20 });
          tl.set(s3Ref.current, { autoAlpha: 0, xPercent: 100, filter: "blur(5px)" });
          tl.set(s4Ref.current, { autoAlpha: 0 });
          const s4Text = s4Ref.current?.querySelector(`.${styles.textContent}`);
          const s4Vis = s4Ref.current?.querySelector(`.${styles.visualContent}`);
          if (s4Vis && s4Text) {
            tl.set(s4Vis, { filter: "blur(0px)", scale: 1.1, opacity: 1 });
            tl.set(s4Text, { filter: "blur(15px)", scale: 0.9, opacity: 0 });
          }
          tl.set(s5Ref.current, { autoAlpha: 0, filter: "blur(10px)" });
          tl.set(scanLineRef.current, { xPercent: -100, autoAlpha: 0 });
          tl.set(apertureRef.current, { autoAlpha: 0, clipPath: "circle(100% at center)" });
          tl.set(s6Ref.current, { autoAlpha: 0 });
          tl.set(s7Ref.current, { autoAlpha: 0, yPercent: 100 });
          tl.set(s8Ref.current, { autoAlpha: 0, scale: 1.5, filter: "blur(5px)" });
          tl.set(outroRef.current, { autoAlpha: 0, scale: 0.8 });

          // ==========================================
          // 0. INTRO -> CAMERA STARTUP
          // ==========================================
          tl.to(introRef.current, { filter: "blur(0px)", scale: 1, duration: 2, ease: "power2.out" });
          tl.to({}, { duration: 3 }); // hold
          tl.to(introRef.current, { autoAlpha: 0, filter: "blur(10px)", scale: 0.9, duration: 1.5, ease: "power2.inOut" }, "introOut");

          // ==========================================
          // 1. COGNIFYZ -> PUSH IN
          // ==========================================
          tl.call(() => updateHUD("35MM", "∞", "01 / 08"), undefined, "introOut");
          tl.to(s1Ref.current, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 3, ease: "power2.out" }, "introOut");
          tl.to({}, { duration: 3 });
          tl.to(s1Ref.current, { scale: 2.5, autoAlpha: 0, filter: "blur(20px)", duration: 2, ease: "power2.in" }, "trans1");

          // ==========================================
          // 2. WEBSTACK -> PULL OUT & ORBIT
          // ==========================================
          tl.call(() => updateHUD("50MM", "12M", "02 / 08"), undefined, "trans1");
          tl.to(s2Ref.current, { autoAlpha: 1, scale: 1, rotationY: 0, xPercent: 0, duration: 2.5, ease: "power2.out" }, "trans1+=1");
          tl.to({}, { duration: 3 });
          tl.to(s2Ref.current, { autoAlpha: 0, scale: 0.9, duration: 1.5, ease: "power2.inOut" }, "trans2");

          // ==========================================
          // 3. GOOGLE CLOUD -> LATERAL PAN
          // ==========================================
          tl.call(() => updateHUD("35MM", "4M", "03 / 08"), undefined, "trans2");
          tl.to(s3Ref.current, { autoAlpha: 1, xPercent: 0, filter: "blur(0px)", duration: 2, ease: "power2.inOut" }, "trans2");
          tl.to({}, { duration: 3 });
          tl.to(s3Ref.current, { xPercent: -100, autoAlpha: 0, duration: 1.5, ease: "power2.inOut" }, "trans3");

          // ==========================================
          // 4. INDIWEBPROS -> RACK FOCUS
          // ==========================================
          tl.call(() => updateHUD("85MM", "1.2M", "04 / 08"), undefined, "trans3");
          tl.to(s4Ref.current, { autoAlpha: 1, duration: 0.1 }, "trans3");
          if (s4Vis && s4Text) {
             tl.to(s4Vis, { filter: "blur(15px)", opacity: 0.2, duration: 2, ease: "power1.inOut" }, "trans3");
             tl.to(s4Text, { filter: "blur(0px)", scale: 1, opacity: 1, duration: 2, ease: "power1.inOut" }, "trans3");
          }
          tl.to({}, { duration: 3 });
          tl.to(s4Ref.current, { autoAlpha: 0, duration: 1.5 }, "trans4");

          // ==========================================
          // 5. ZINTORA -> SCAN & FOCUS LOCK
          // ==========================================
          tl.call(() => updateHUD("50MM", "SCAN", "05 / 08"), undefined, "trans4");
          tl.to(s5Ref.current, { autoAlpha: 1, duration: 0.1 }, "trans4");
          tl.to(scanLineRef.current, { autoAlpha: 1, duration: 0.1 }, "trans4");
          tl.to(scanLineRef.current, { xPercent: 100, duration: 2, ease: "linear" }, "trans4");
          tl.to(s5Ref.current, { filter: "blur(0px)", duration: 2, ease: "power1.out" }, "trans4+=0.5");
          tl.call(() => updateHUD("50MM", "LOCKED", "05 / 08"), undefined, "trans4+=2.5");
          tl.to(scanLineRef.current, { autoAlpha: 0, duration: 0.5 }, "trans4+=2.5");
          tl.to({}, { duration: 3 });

          // ==========================================
          // 6. NOVASHYLD -> APERTURE
          // ==========================================
          tl.addLabel("apertureClose");
          tl.call(() => updateHUD("APERTURE", "f/16", "06 / 08"), undefined, "apertureClose");
          tl.to(apertureRef.current, { autoAlpha: 1, duration: 0.1 }, "apertureClose");
          tl.to(apertureRef.current, { clipPath: "circle(0% at center)", duration: 1.5, ease: "power3.inOut" }, "apertureClose");
          
          tl.addLabel("apertureOpen");
          tl.to(s5Ref.current, { autoAlpha: 0, duration: 0.1 }, "apertureOpen");
          tl.to(s6Ref.current, { autoAlpha: 1, duration: 0.1 }, "apertureOpen");
          tl.call(() => updateHUD("50MM", "2.8M", "06 / 08"), undefined, "apertureOpen");
          tl.to(apertureRef.current, { clipPath: "circle(100% at center)", duration: 1.5, ease: "power3.inOut" }, "apertureOpen");
          tl.to(apertureRef.current, { autoAlpha: 0, duration: 0.1 }, "apertureOpen+=1.5");
          tl.to({}, { duration: 3 });

          // ==========================================
          // 7. MAIN CRAFTS -> FILM ADVANCE
          // ==========================================
          tl.addLabel("filmAdvance");
          tl.call(() => updateHUD("35MM", "FILM", "07 / 08"), undefined, "filmAdvance");
          tl.to(s7Ref.current, { autoAlpha: 1, duration: 0.1 }, "filmAdvance");
          tl.to(s6Ref.current, { yPercent: -100, filter: "blur(8px)", duration: 1, ease: "power2.inOut" }, "filmAdvance");
          tl.to(s7Ref.current, { yPercent: 0, filter: "blur(0px)", duration: 1, ease: "power2.inOut" }, "filmAdvance");
          tl.to({}, { duration: 3 });
          tl.to(s7Ref.current, { autoAlpha: 0, scale: 0.9, duration: 1 }, "trans7");

          // ==========================================
          // 8. LET'S GAMETECH -> FINAL PULL OUT
          // ==========================================
          tl.call(() => updateHUD("14MM", "∞", "08 / 08"), undefined, "trans7");
          tl.to(s8Ref.current, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 2, ease: "power2.out" }, "trans7");
          tl.to({}, { duration: 3 });

          tl.addLabel("finalPull");
          tl.to(s8Ref.current, { scale: 0.2, yPercent: 40, autoAlpha: 0.3, duration: 4, ease: "power1.inOut" }, "finalPull");
          
          const prevScenes = [s1Ref, s2Ref, s3Ref, s4Ref, s5Ref, s6Ref, s7Ref];
          prevScenes.forEach((s, idx) => {
             tl.to(s.current, { autoAlpha: 0.1, scale: 0.1, xPercent: 0, yPercent: -40 + (idx * 10), duration: 0.1 }, "finalPull");
             tl.to(s.current, { autoAlpha: 0, duration: 3 }, "finalPull+=1");
          });

          tl.to(outroRef.current, { autoAlpha: 1, scale: 1, duration: 3, ease: "power2.out" }, "finalPull+=2");
          tl.to({}, { duration: 2 });
        }

        // Apply ScrollTrigger scrubbing
        ScrollTrigger.create({
          ...sceneScrub(rootEl.current!),
          scrub: 1.5, // High value for smooth inertia / cinematic mass
          animation: tl,
        });
      }, 100);
    }, rootEl);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.wrap} id="experience" ref={rootEl}>
      
      {/* CAMERA HUD */}
      <div className={styles.cameraFrame}>
        <div className={styles.frameCornerTopLeft} />
        <div className={styles.frameCornerTopRight} />
        <div className={styles.frameCornerBottomLeft} />
        <div className={styles.frameCornerBottomRight} />
        
        <div className={styles.hudTop}>
          <div className={styles.hudItem}>
            <div className={styles.recDot} /> REC
          </div>
          <div className={styles.hudItem} ref={hudLensRef}>50MM</div>
        </div>
        
        <div className={styles.hudBottom}>
          <div className={styles.hudItem}>FOCUS <span ref={hudFocusRef}>∞</span></div>
          <div className={styles.hudItem} ref={hudExpRef}>00 / 08</div>
        </div>
      </div>

      <div className={styles.filmGrain} />
      
      {/* GLOBAL APERTURE MASK */}
      <div className={styles.apertureMask} ref={apertureRef} />
      {/* SCAN LINE */}
      <div className={styles.scanLine} ref={scanLineRef} />

      <div className={styles.sceneContainer} ref={containerRef}>
        
        {/* INTRO */}
        <div className={styles.introScene} ref={introRef}>
          <div className={styles.introEyebrow}>2025 — 2026 • WORK / EXPERIENCE</div>
          <h2 className={styles.introTitle}>
            FROM BUILDING<br />
            TO BREAKING<br />
            TO SECURING.
          </h2>
        </div>

        {/* 01 COGNIFYZ (PUSH IN) */}
        <div className={styles.scene} ref={s1Ref}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <div className={styles.expNumber}>01</div>
              <h3 className={styles.expRole}>Software Development Intern</h3>
              <div className={styles.expCompany}>Cognifyz Technologies</div>
              <div className={styles.expDate}>Aug 2026 — Present</div>
            </div>
            <div className={styles.visualContent}>
              <div className={styles.visualWrapper}>
                {/* Abstract Build Visual */}
                <div style={{ width: '60%', height: '20%', background: 'var(--ink)', opacity: 0.1, marginBottom: '1rem' }} />
                <div style={{ width: '80%', height: '40%', background: 'var(--ink)', opacity: 0.1 }} />
              </div>
            </div>
          </div>
        </div>

        {/* 02 WEBSTACK (ORBIT) */}
        <div className={styles.scene} ref={s2Ref}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <div className={styles.expNumber}>02</div>
              <h3 className={styles.expRole}>Full Stack Engineer</h3>
              <div className={styles.expCompany}>Webstack Academy</div>
              <div className={styles.expDate}>Jul 2026 — Present</div>
            </div>
            <div className={styles.visualContent}>
              <div className={styles.visualWrapper} style={{ borderRadius: '50%' }}>
                {/* Abstract Orbit Visual */}
                <div style={{ width: '10px', height: '10px', background: 'var(--ink)', borderRadius: '50%', position: 'absolute' }} />
                <div style={{ width: '80%', height: '80%', border: '1px solid var(--line)', borderRadius: '50%', position: 'absolute' }} />
              </div>
            </div>
          </div>
        </div>

        {/* 03 GOOGLE CLOUD (PAN) */}
        <div className={styles.scene} ref={s3Ref}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <div className={styles.expNumber}>03</div>
              <h3 className={styles.expRole}>Arcade Facilitator</h3>
              <div className={styles.expCompany}>Google Cloud</div>
              <div className={styles.expDate}>Jul 2026 — Present</div>
            </div>
            <div className={styles.visualContent}>
              <div className={styles.visualWrapper} style={{ background: 'transparent', border: 'none' }}>
                <svg width="100%" height="100%" viewBox="0 0 100 100">
                  <path d="M 20 50 Q 50 20 80 50 T 20 50" fill="none" stroke="var(--ink)" strokeWidth="0.5" opacity="0.3" />
                  <circle cx="20" cy="50" r="3" fill="var(--ink)" />
                  <circle cx="80" cy="50" r="2" fill="var(--ink)" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 04 INDIWEBPROS (RACK FOCUS) */}
        <div className={`${styles.scene} ${styles.scene04}`} ref={s4Ref}>
          <div className={styles.contentWrapper}>
            <div className={styles.visualContent}>INDIWEBPROS</div>
            <div className={styles.textContent}>
              <div className={styles.expNumber}>04</div>
              <h3 className={styles.expRole}>Full Stack Development Intern</h3>
              <div className={styles.expDate}>Jun 2026 — Aug 2026</div>
            </div>
          </div>
        </div>

        {/* 05 ZINTORA (SCAN) */}
        <div className={styles.scene} ref={s5Ref}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <div className={styles.expNumber}>05</div>
              <h3 className={styles.expRole}>Cyber Security Intern</h3>
              <div className={styles.expCompany}>Zintora Soft</div>
              <div className={styles.expDate}>Jun 2026 — Jul 2026</div>
            </div>
          </div>
        </div>

        {/* 06 NOVASHYLD (APERTURE) */}
        <div className={styles.scene} ref={s6Ref}>
          <div className={styles.contentWrapper} style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div className={styles.textContent}>
              <div className={styles.expNumber}>06</div>
              <h3 className={styles.expRole}>Assistant</h3>
              <div className={styles.expCompany}>NovaShyld Technologies</div>
              <div className={styles.expDate}>Mar 2026 — May 2026</div>
            </div>
          </div>
        </div>

        {/* 07 MAIN CRAFTS (FILM ADVANCE) */}
        <div className={styles.scene} ref={s7Ref}>
          <div className={styles.contentWrapper}>
             <div className={styles.visualContent}>
              <div className={styles.visualWrapper} style={{ background: 'var(--ink)', color: 'white', padding: '2rem', fontFamily: 'monospace', fontSize: '0.6rem' }}>
                <p>{'>'} SYSTEM_SCAN_INIT</p>
                <p>{'>'} DETECTING_VULN...</p>
                <p>{'>'} BYPASS_OK</p>
              </div>
            </div>
            <div className={styles.textContent} style={{ paddingLeft: '4vw' }}>
              <div className={styles.expNumber}>07</div>
              <h3 className={styles.expRole}>Ethical Hacking Intern</h3>
              <div className={styles.expCompany}>Main Crafts Technology</div>
              <div className={styles.expDate}>Nov 2025 — Dec 2025</div>
            </div>
          </div>
        </div>

        {/* 08 GAMETECH (FINAL PULL OUT) */}
        <div className={styles.scene} ref={s8Ref}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <div className={styles.expNumber}>08</div>
              <h3 className={styles.expRole}>Full Stack Engineer</h3>
              <div className={styles.expCompany}>Let's Gametech</div>
              <div className={styles.expDate}>Jun 2025 — Jul 2025</div>
            </div>
          </div>
        </div>

        {/* OUTRO */}
        <div className={styles.outroScene} ref={outroRef}>
          <h2 className={styles.outroTitle}>
            BUILD.<br />
            SECURE.<br />
            EVOLVE.
          </h2>
          <div className={styles.outroMeta}>
            08 EXPERIENCES<br />
            2025 — 2026
          </div>
        </div>

      </div>
    </section>
  );
}
