import React from "react";
import { SectionTagline, SectionTitle, CardTitle, TechCard } from "@/components";
import { skillCategories } from "@/config";
import styles from "./TechnicalExpertise.module.css";


const TechnicalExpertise: React.FC = () => {
  return (
    <section
      id="tools-stack"
      className={styles.expertiseSection}
      aria-labelledby="technical-expertise-heading"
    >
      <span id="skills" style={{ position: "absolute", top: 0 }} aria-hidden="true" />
      <div className="container">
        {/* Section Tagline matching About & Experience */}
        <SectionTagline>
          TECHNICAL <strong>EXPERTISE</strong>
        </SectionTagline>

        {/* Top Header Row */}
        <div className={styles.headerRow}>
          <SectionTitle
            id="technical-expertise-heading"
            size="lg"
            lightText="Tools & "
            boldText="Stack"
            className={styles.sectionTitle}
          />
        </div>

        {/* 2x2 Category Cards Grid */}
        <div className={styles.categoryGrid}>
          {skillCategories.map((category) => (
            <div key={category.id} className={styles.categoryCard}>
              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.cardIconBox} aria-hidden="true">
                  {category.icon}
                </div>
                <div className={styles.cardHeaderInfo}>
                  <CardTitle
                    size="sm"
                    uppercase
                    className={styles.cardHeaderTitle}
                  >
                    {category.headerTitle}
                  </CardTitle>
                </div>
              </div>

              {/* Grid of Technology Cards inside Category */}
              <div className={styles.techGrid}>
                {category.items.map((item) => (
                  <TechCard
                    key={item.name}
                    name={item.name}
                    experience={item.experience}
                    logo={item.logo}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
