/* Featured projects — single source of truth for the Work section
   and the /work/[slug] case-study routes. Order = showcase order. */

export type Study = {
  role: string;
  timeline: string;
  context: string;
  problem: string;
  process: { title: string; body: string }[];
  decisions: { title: string; why: string }[];
  outcomes: string[];
  reflection: string;
  note?: string;
};

export type StudyFr = Partial<Study>;

export type Cover = {
  bg: string;
  ink: "light" | "dark";
  src?: string;
  aspect?: number;
  variant?: "brand" | "photo";
  focus?: string;
  mark?: string;
};

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  oneLiner: string;
  contribution: string;
  coverLabel: string;
  cover?: Cover;
  site?: { url: string; label: string };
  repo?: string;
  award?: string;
  study: Study;
  fr?: {
    title?: string;
    oneLiner?: string;
    contribution?: string;
    tags?: string[];
    study?: StudyFr;
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "forensiq",
    title: "ForensIQ — AI-Assisted Forensic Face Enhancement & 3D Reconstruction",
    tags: ["AI", "Computer Vision", "Forensics", "Python"],
    year: "2026",
    oneLiner: "An AI-assisted forensic platform for processing low-quality CCTV footage through face detection, alignment, image enhancement, and facial feature extraction.",
    contribution: "Built a computer vision and facial-matching pipeline using YOLOv8, PyTorch, deep-learning embeddings, and FAISS.",
    coverLabel: "FORENSIQ",
    cover: { bg: "#0B0B0E", ink: "light", mark: "AI" },
    study: {
      role: "Full Stack AI Developer",
      timeline: "2026",
      context: "A system built to assist forensic investigators in analyzing low-quality CCTV footage.",
      problem: "CCTV footage is often too low quality for standard facial recognition.",
      process: [
        {
          title: "Computer Vision Pipeline",
          body: "Built using YOLOv8, PyTorch, deep-learning embeddings, and FAISS, supported by FastAPI, PostgreSQL, and Docker."
        }
      ],
      decisions: [],
      outcomes: ["Face detection, alignment, image enhancement, and facial feature extraction"],
      reflection: "Integrating multiple AI models into a real-time web application architecture was a challenging but rewarding experience."
    }
  },
  {
    slug: "link-roaster-ai",
    title: "Link Roaster AI — AI-Powered URL Intelligence Platform",
    tags: ["React.js", "AI", "Node.js", "Google Gemini"],
    year: "2026",
    oneLiner: "An AI-powered URL analysis platform generating summaries, trust scores, red flags, roasts, and verdicts using Google Gemini.",
    contribution: "Developed Battle Mode for comparing URLs with rate limiting, error handling, and decoupled frontend/backend deployment.",
    coverLabel: "LINK ROASTER AI",
    cover: { bg: "#F03A47", ink: "light", mark: "URL" },
    study: {
      role: "Full Stack Developer",
      timeline: "2026",
      context: "An AI platform utilizing Google Gemini to analyze and roast URLs based on their content and reputation.",
      problem: "Users need a fast, entertaining, and informative way to understand the trustworthiness and content of any URL.",
      process: [
        {
          title: "AI Integration",
          body: "Integrated Google Gemini for generating summaries, trust scores, and verdicts."
        },
        {
          title: "Battle Mode",
          body: "Developed Battle Mode for comparing URLs with rate limiting, error handling, and decoupled frontend/backend deployment."
        }
      ],
      decisions: [],
      outcomes: ["Platform generating summaries, trust scores, red flags, roasts, and verdicts"],
      reflection: "Decoupling the frontend and backend allowed for greater scalability and easier deployment."
    }
  },
  {
    slug: "civic-fix",
    title: "Civic-Fix — Civic Infrastructure Issue Reporting Platform",
    tags: ["React Native", "Expo", "TypeScript"],
    year: "2025",
    oneLiner: "A cross-platform mobile application using React Native, Expo, and TypeScript.",
    contribution: "Implemented file-based navigation with Expo Router for structured multi-screen application development.",
    coverLabel: "CIVIC-FIX",
    cover: { bg: "#00684A", ink: "light", mark: "FIX" },
    study: {
      role: "Mobile App Developer",
      timeline: "2025",
      context: "A civic infrastructure issue reporting platform for citizens to report local problems.",
      problem: "Citizens need a straightforward mobile application to report infrastructure issues directly to local authorities.",
      process: [
        {
          title: "Cross-Platform Development",
          body: "Developed a cross-platform mobile application using React Native, Expo, and TypeScript."
        },
        {
          title: "Navigation Architecture",
          body: "Implemented file-based navigation with Expo Router for structured multi-screen application development."
        }
      ],
      decisions: [],
      outcomes: ["A fully functional mobile application for issue reporting"],
      reflection: "Expo Router greatly simplified the navigation architecture and made the codebase more maintainable."
    }
  },
  {
    slug: "queue-cure",
    title: "Queue Cure — Real-Time Clinic Queue Management Platform",
    tags: ["React", "Socket.io", "Node.js", "Tailwind CSS"],
    year: "2026",
    oneLiner: "A real-time clinic queue management platform using React, Tailwind CSS, and Socket.io.",
    contribution: "Integrated Google Gemini and a Node.js server architecture to support AI-powered functionality and real-time application communication.",
    coverLabel: "QUEUE CURE",
    cover: { bg: "#1E3A8A", ink: "light", mark: "QC" },
    study: {
      role: "Full Stack Developer",
      timeline: "2026",
      context: "A real-time clinic queue management platform.",
      problem: "Waiting times at clinics are often uncertain and frustrating for patients.",
      process: [
        {
          title: "Real-Time Communication",
          body: "Developed a real-time clinic queue management platform using React, Tailwind CSS, and Socket.io."
        },
        {
          title: "AI Integration",
          body: "Integrated Google Gemini and a Node.js server architecture to support AI-powered functionality."
        }
      ],
      decisions: [],
      outcomes: ["Real-time application communication and AI-powered features"],
      reflection: "Socket.io proved to be a robust solution for handling real-time updates across multiple clients seamlessly."
    }
  }
];
