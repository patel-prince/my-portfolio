export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  description: string;
  url: string;
  resumeUrl: string;
  resumeFileName: string;
  social: {
    linkedin: string;
    github: string;
    email: string;
    whatsapp: string;
  };
  copyrightYear: number;
}

export const siteConfig: SiteConfig = {
  name: "Prince Patel",
  title: "Prince Patel | Full Stack Developer",
  role: "Full Stack Developer",
  description:
    "Full Stack Developer with 9+ years of experience bridging product thinking and engineering to create simple, resilient, and performant digital experiences.",
  url: "https://princepatel.dev",
  resumeUrl: "/resume.pdf",
  resumeFileName: "Prince_Patel_CV.pdf",
  social: {
    linkedin: "https://linkedin.com/in/prince-patel",
    github: "https://github.com/princepatel",
    email: "mailto:contact@princepatel.dev",
    whatsapp: "https://wa.me/",
  },
  copyrightYear: 2026,
};
