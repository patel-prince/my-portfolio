import WavesBg from "@/assets/waves.png";
import {
  Button,
  SectionTagline,
  SectionTitle,
  SectionDescription,
  ExperienceCard,
} from "@/components";
import { experiencesData, siteConfig } from "@/config";
import styles from "./Experience.module.css";

const Experience = () => {
  const featuredItem = experiencesData.find((item) => item.featured);
  const gridItems = experiencesData.filter((item) => !item.featured);

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
                boldText="Made an Impact"
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
                href={siteConfig.resumeUrl}
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
