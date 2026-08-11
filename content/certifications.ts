/* Credentials — professional certification records. */

export type Cert = {
  no: string; 
  issuer: string | null;
  logo?: { src: string; aspect: number };
  title: string;
  year: string | null;
  credentialId: string | null;
  credentialUrl?: string;
  verified: boolean;
  skills: string[];
  metric?: { value: string; label: string };
  fr?: { title?: string; skills?: string[]; metricLabel?: string };
};

export const CERTS: Cert[] = [
  {
    no: "1.1",
    issuer: "Coursera / Amazon",
    title: "Full-Stack Web Development",
    year: null,
    credentialId: null,
    verified: false,
    skills: [
      "Frontend & Backend Development",
      "Web Applications",
      "System Architecture"
    ]
  },
  {
    no: "1.2",
    issuer: "HackerRank",
    title: "Python Programming",
    year: null,
    credentialId: null,
    verified: false,
    skills: [
      "Python Basics & Advanced",
      "Algorithms",
      "Data Structures"
    ]
  },
  {
    no: "1.3",
    issuer: "MongoDB",
    title: "MongoDB Schema Design Patterns & AI-Powered Search",
    year: null,
    credentialId: null,
    verified: false,
    skills: [
      "Database Schema Design",
      "Vector Search",
      "NoSQL Optimization"
    ]
  },
  {
    no: "1.4",
    issuer: "IBM",
    title: "Artificial Intelligence Fundamentals",
    year: null,
    credentialId: null,
    verified: false,
    skills: [
      "AI Principles",
      "Machine Learning",
      "AI Applications"
    ]
  },
  {
    no: "1.5",
    issuer: "Anthropic",
    title: "AI Fluency Framework & Foundations",
    year: null,
    credentialId: null,
    verified: false,
    skills: [
      "Generative AI",
      "Prompt Engineering",
      "Large Language Models"
    ]
  },
  {
    no: "1.6",
    issuer: "Achievements",
    title: "Hackathons & Recognitions",
    year: "2025-2026",
    credentialId: null,
    verified: false,
    skills: [
      "Top Performer — IndiWebPros Internship",
      "GeeksforGeeks Campus Mantri",
      "Google Cloud Arcade Facilitator",
      "Smart India Hackathon 2025"
    ]
  }
];
