import WavesBg from "@/assets/waves.png";
import {
  Button,
  SectionTagline,
  SectionTitle,
  SectionDescription,
  ExperienceCard,
} from "@/components";
import styles from "./Experience.module.css";

interface ExperienceItem {
  number: string;
  company: string;
  subtitle?: string;
  role: string;
  period: string;
  location: string;
  featured?: boolean;
}

const EXPERIENCES: ExperienceItem[] = [
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

const Experience = () => {
  const featuredItem = EXPERIENCES.find((item) => item.featured);
  const gridItems = EXPERIENCES.filter((item) => !item.featured);

  return (
    <section
      id="experience"
      className={styles.experienceSection}
      aria-labelledby="experience-heading"
    >
      <div className="container">
        {/* Section Eyebrow / Tagline */}
        <SectionTagline>
          MY <strong>EXPERIENCE</strong>
        </SectionTagline>

        {/* Main Experience Layout: Left Banner Card + Right Experience Grid */}
        <div className={styles.experienceLayout}>
          {/* Left Column: Impact Hero Card */}
          <div className={styles.impactCard}>
            <div
              className={styles.impactCardBg}
              style={{ backgroundImage: `url(${WavesBg.src})` }}
              aria-hidden="true"
            />
            <div className={styles.impactCardOverlay} aria-hidden="true" />
            <div className={styles.impactContent}>
              <SectionTitle
                id="experience-heading"
                size="md"
                stackLines
                lightText="Where I’ve"
                boldText="Made an Impact."
                className={styles.impactTitle}
              />
              <SectionDescription
                size="md"
                maxWidth={270}
                className={styles.impactDescription}
              >
                A summary of my professional journey across companies,
                technologies, and products.
              </SectionDescription>
              <Button
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className={styles.resumeBtn}
              >
                VIEW FULL RESUME
              </Button>
            </div>
          </div>

          {/* Right Column: Experience Cards Grid */}
          <div className={styles.experienceGrid}>
            {/* 01: Featured Full-Width Card */}
            {featuredItem && (
              <ExperienceCard
                number={featuredItem.number}
                company={featuredItem.company}
                role={featuredItem.role}
                period={featuredItem.period}
                location={featuredItem.location}
                featured
              />
            )}

            {/* 02 - 05: 2x2 Grid Cards */}
            {gridItems.map((exp) => (
              <ExperienceCard
                key={exp.number}
                number={exp.number}
                company={exp.company}
                subtitle={exp.subtitle}
                role={exp.role}
                period={exp.period}
                location={exp.location}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
