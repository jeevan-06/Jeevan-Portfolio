/* My Tech Stack — tools shown in the spiral orbit. */

export type Tool = {
  name: string;
  group: string;
  src?: string;
  mono?: string;
  color?: string;
};

export const TOOLS: Tool[] = [
  /* — Languages — */
  { name: "Python", group: "Languages", mono: "Py", color: "#306998" },
  { name: "Java", group: "Languages", mono: "Jv", color: "#b07219" },
  { name: "TypeScript", group: "Languages", mono: "TS", color: "#3178C6" },
  { name: "JavaScript", group: "Languages", mono: "JS", color: "#F7DF1E" },
  
  /* — Frontend — */
  { name: "React", group: "Frontend", mono: "Re", color: "#61DAFB" },
  { name: "Tailwind CSS", group: "Frontend", mono: "TW", color: "#06B6D4" },
  { name: "HTML5", group: "Frontend", mono: "H5", color: "#E34F26" },
  { name: "Vite", group: "Frontend", mono: "Vt", color: "#646CFF" },

  /* — Backend & DB — */
  { name: "FastAPI", group: "Backend", mono: "FA", color: "#009688" },
  { name: "Node.js", group: "Backend", mono: "Nd", color: "#339933" },
  { name: "PostgreSQL", group: "Backend", mono: "Pg", color: "#336791" },
  { name: "MongoDB", group: "Backend", mono: "Mg", color: "#47A248" },

  /* — AI / ML — */
  { name: "PyTorch", group: "AI/ML", mono: "PT", color: "#EE4C2C" },
  { name: "OpenCV", group: "AI/ML", mono: "CV", color: "#5C3EE8" },
  { name: "YOLOv8", group: "AI/ML", mono: "YO", color: "#00FFFF" },

  /* — Cybersecurity — */
  { name: "Kali Linux", group: "Cybersecurity", mono: "KL", color: "#557C94" },
  { name: "Ethical Hacking", group: "Cybersecurity", mono: "EH", color: "#000000" },
  { name: "OWASP", group: "Cybersecurity", mono: "OW", color: "#000000" },
];
