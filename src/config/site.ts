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
  phone?: string;
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
  phone: "+91 9974270604",
  resumeUrl: "/resume.pdf",
  resumeFileName: "Prince_Patel_CV.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/prpatel0949/",
    github: "https://github.com/patel-prince",
    email: "mailto:prpatel0949@gmail.com",
    whatsapp: "https://wa.me/919974270604",
  },
  copyrightYear: 2026,
};
