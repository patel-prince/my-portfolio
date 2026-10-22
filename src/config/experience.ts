export interface ExperienceItem {
  number: string;
  company: string;
  subtitle?: string;
  role: string;
  period: string;
  location: string;
  featured?: boolean;
}

export const experiencesData: ExperienceItem[] = [
  {
    number: "01",
    company: "Globant India Pvt. Ltd.",
    role: "Senior Software Developer (Web UI Developer)",
    period: "Nov 2021 – Jul 2026",
    location: "Ahmedabad, India",
    featured: true,
  },
  {
    number: "02",
    company: "Silicon IT Hub Pvt. Ltd.",
    role: "Senior Software Developer",
    period: "Jul 2020 – Nov 2021",
    location: "Ahmedabad, India",
  },
  {
    number: "03",
    company: "Brainbees Solutions Pvt. Ltd.",
    role: "Software Developer",
    period: "Sep 2019 – Jul 2020",
    location: "Pune, India",
  },
  {
    number: "04",
    company: "TM Systems Pvt. Ltd.",
    role: "Software Developer",
    period: "Dec 2017 – Sep 2019",
    location: "Ahmedabad, India",
  },
  {
    number: "05",
    company: "Bimsym EBusiness Solution",
    role: "Software Developer",
    period: "Jan 2017 – Aug 2017",
    location: "Ahmedabad, India",
  },
];
