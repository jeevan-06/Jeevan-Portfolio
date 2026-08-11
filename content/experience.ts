/* Professional experience — from Gireesh's CV, positioned design-first per
   03_CONTENT_STRATEGY.md. Reverse chronological: newest first. */

export type Role = {
  company: string;
  role: string;
  type: "Internship" | "Full-time" | "Hackathon" | "Freelance";
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  outcome: string;
  skills: string[];
  /* panel color — intentional, one vibrant per role (Experience deck) */
  color: string;
  fg: "light" | "dark";
  /* Company mark. `variant` follows what the supplied file actually IS:
     · "tile"  — the logo ships with its own background baked in (square
                 avatars), so it is shown as a rounded tile, uncropped
     · "plate" — transparent artwork that needs a light ground to read;
                 the plate's width follows the logo's true aspect ratio
     · absent  — no official file supplied yet → typographic fallback */
  logo?: {
    src: string;
    variant: "tile" | "plate";
    aspect: number;
    /* Placement adapts to how dense the panel's copy is — a logo is not
       forced into the same slot for every company.
       "right" — sits beside the content (default, when there is room)
       "below" — closes the panel underneath the content (dense copy) */
    placement?: "right" | "below";
  };
  /* French copy for the translatable fields (see lib/i18n.tsx → L()) */
  fr?: { role?: string; summary?: string; outcome?: string; achievements?: string[] };
};

export const ROLES: Role[] = [
  {
    company: "Indiwebpros",
    role: "Full Stack Development Intern",
    type: "Internship",
    location: "Remote",
    period: "Jun 2026 – Aug 2026",
    summary:
      "Developed a responsive Meesho-inspired e-commerce application with authentication, dynamic product catalog, and checkout workflows.",
    achievements: [
      "Integrated Firebase Authentication and Firestore with reusable React components, responsive UI, and animations",
    ],
    outcome: "Built a complete responsive e-commerce app",
    skills: ["React 18", "Vite", "Tailwind CSS", "Firebase", "Firestore", "React Router", "Framer Motion"],
    color: "#F03A47",
    fg: "light",
  },
  {
    company: "Webstack Academy (WSA)",
    role: "MERN Stack Developer Intern",
    type: "Internship",
    location: "Remote",
    period: "Jun 2026 – Jul 2026",
    summary:
      "Developed a full-stack food ordering application with product browsing and ordering workflows.",
    achievements: [
      "Built responsive React interfaces and integrated Express.js APIs with MongoDB for data management",
    ],
    outcome: "Developed a full-stack food ordering application",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
    color: "#00684A",
    fg: "light",
  },
  {
    company: "Zintora Soft",
    role: "Cyber Security Intern",
    type: "Internship",
    location: "Remote",
    period: "Jun 2026 – Jul 2026",
    summary:
      "Developed PhishGuard for phishing URL detection using engineered URL features and a Random Forest classifier.",
    achievements: [
      "Built a web-based analysis workflow with FastAPI and SHAP for interpretable prediction results",
    ],
    outcome: "Interpretable phishing URL detection system",
    skills: ["Python", "FastAPI", "React.js", "Machine Learning", "Random Forest", "SHAP"],
    color: "#1E3A8A",
    fg: "light",
  },
  {
    company: "Let’s GameTech",
    role: "Full Stack Engineer / Development Intern",
    type: "Internship",
    location: "Remote",
    period: "Jun 2025 – Jul 2025",
    summary:
      "Completed hands-on full-stack development training across frontend, backend, and application workflows.",
    achievements: [
      "Built responsive web applications and gained practical experience with frontend–backend integration",
    ],
    outcome: "Gained practical full-stack integration experience",
    skills: ["Frontend", "Backend", "Full-Stack Development"],
    color: "#6D28D9",
    fg: "light",
  },
];
