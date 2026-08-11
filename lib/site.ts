/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const PERSON = {
  name: "Jeevan Kumar M",
  jobTitle: "Full Stack Developer | Cybersecurity Engineering Student",
  email: "jeevankumarm06@gmail.com",
  location: "Tamil Nadu, India",
  /* exact profile URLs as supplied — also consumed by JSON-LD */
  sameAs: [
    "https://www.linkedin.com/in/jeevankumar04/",
    "https://github.com/jeevan-06",
  ],
};
