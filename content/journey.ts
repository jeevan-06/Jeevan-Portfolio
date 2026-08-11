/* THE JOURNEY — the chapters the light tunnel travels through. */

export type Chapter = {
  id: string;
  year: string;
  title: string;
  place: string;
  story: string;
  bridge: string;
  fr?: { title?: string; place?: string; story?: string; bridge?: string };
};

export const CHAPTERS: Chapter[] = [
  {
    id: "hsc",
    year: "2023",
    title: "High School to Engineering",
    place: "Government Higher Secondary School",
    story:
      "Graduated High School (Bio-Maths) with 75.1% and immediately embarked on a B.E. in Computer Science and Engineering with a specialization in Cyber Security at Sri Venkateswaraa College of Technology.",
    bridge: "Building the foundation for a career bridging software development and cybersecurity."
  },
  {
    id: "early-tech",
    year: "2024",
    title: "Entering Tech and Development",
    place: "Sri Venkateswaraa College of Technology",
    story:
      "Explored deep into the fundamentals of Computer Science and Cyber Security. Cultivated a strong foundation in languages like Python and Java, while getting hands-on with ethical hacking and vulnerability assessment.",
    bridge: "The academic foundation translated quickly into practical building."
  },
  {
    id: "full-stack",
    year: "2025",
    title: "Hackathons and Full-Stack Mastery",
    place: "Hackathons & Let's GameTech",
    story:
      "Participated in Simverse Hackathon and completed a Full Stack Engineer Internship at Let's GameTech. Mastered frontend-backend integrations and began connecting React applications with robust backends.",
    bridge: "From learning to competing, to shipping production-level applications."
  },
  {
    id: "ai-cyber",
    year: "2026",
    title: "AI, Cyber, and Scalable Products",
    place: "Indiwebpros, Webstack Academy, Zintora Soft",
    story:
      "A year of intense building: developed e-commerce apps at Indiwebpros, food ordering platforms at Webstack Academy, and phishing URL detection systems at Zintora Soft. Participated in multiple hackathons including Google x Gemini and Project Viksit Bharat.",
    bridge: "Merging AI, Cybersecurity, and Web Development into a cohesive skill set."
  },
  {
    id: "future",
    year: "2027",
    title: "Graduation and Beyond",
    place: "Sri Venkateswaraa College of Technology",
    story:
      "Approaching the completion of my B.E. degree with a CGPA of 8.20/10. Focused on integrating AI technologies and rigorous security measures into the next generation of scalable web platforms.",
    bridge: "The journey is just beginning."
  }
];
