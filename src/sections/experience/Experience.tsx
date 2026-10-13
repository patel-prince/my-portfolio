import Image from "next/image";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
import WavesBg from "@/assets/waves.png";
import {
  Button,
  SectionTagline,
  SectionTitle,
  SectionDescription,
  CardTitle,
  CardDescription,
  StepNumber,
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
              <div className={styles.featuredCard}>
                <div className={styles.cardHeader}>
                  <StepNumber size="sm" className={styles.cardNumber}>
                    {featuredItem.number}
                  </StepNumber>
                  <div className={styles.arrowIconWrapper} aria-hidden="true">
                    <FiArrowUpRight size={18} />
                  </div>
                </div>

                <div className={styles.featuredBody}>
                  <div className={styles.featuredMain}>
                    <CardTitle size="lg" className={styles.companyName}>
                      {featuredItem.company}
                    </CardTitle>
                    <CardDescription size="md" className={styles.roleName}>
                      {featuredItem.role}
                    </CardDescription>
                  </div>

                  <div className={styles.featuredDivider} aria-hidden="true" />

                  <div className={styles.featuredMeta}>
                    <div className={styles.metaItem}>
                      <FiCalendar
                        size={16}
                        className={styles.metaIcon}
                        aria-hidden="true"
                      />
                      <span>{featuredItem.period}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FiMapPin
                        size={16}
                        className={styles.metaIcon}
                        aria-hidden="true"
                      />
                      <span>{featuredItem.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 02 - 05: 2x2 Grid Cards */}
            {gridItems.map((exp) => (
              <div key={exp.number} className={styles.experienceCard}>
                <div className={styles.cardHeader}>
                  <StepNumber size="sm" className={styles.cardNumber}>
                    {exp.number}
                  </StepNumber>
                  <div className={styles.arrowIconWrapper} aria-hidden="true">
                    <FiArrowUpRight size={18} />
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <CardTitle size="md" className={styles.companyName}>
                    {exp.company}
                    {exp.subtitle && (
                      <span className={styles.companySubtitle}>
                        {" "}
                        {exp.subtitle}
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription size="md" className={styles.roleName}>
                    {exp.role}
                  </CardDescription>
                </div>

                <div className={styles.cardMeta}>
                  <div className={styles.metaItem}>
                    <FiCalendar
                      size={15}
                      className={styles.metaIcon}
                      aria-hidden="true"
                    />
                    <span>{exp.period}</span>
                  </div>
                  <span className={styles.metaDivider} aria-hidden="true">
                    |
                  </span>
                  <div className={styles.metaItem}>
                    <FiMapPin
                      size={15}
                      className={styles.metaIcon}
                      aria-hidden="true"
                    />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
