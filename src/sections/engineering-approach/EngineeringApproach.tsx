import React from "react";
import {
  SectionTagline,
  SectionTitle,
  SectionDescription,
  StepCard,
} from "@/components";
import { approachSteps } from "@/config";
import styles from "./EngineeringApproach.module.css";


const EngineeringApproach: React.FC = () => {
  return (
    <section
      id="how-i-work"
      className={styles.approachSection}
      aria-labelledby="approach-heading"
    >
      <span id="approach" style={{ position: "absolute", top: 0 }} aria-hidden="true" />
      <div className="container">
        {/* Section Tagline matching About & Experience */}
        <SectionTagline>
          ENGINEERING <strong>APPROACH</strong>
        </SectionTagline>

        {/* Header Row */}
        <div className={styles.headerRow}>
          <SectionTitle
            id="approach-heading"
            size="lg"
            className={styles.sectionTitle}
          >
            How I Work.
          </SectionTitle>
          <SectionDescription
            size="lg"
            className={styles.sectionDescription}
          >
            A practical, thoughtful, and results-driven approach to building
            scalable and reliable digital products.
          </SectionDescription>
        </div>

        {/* 4 Cards Grid */}
        <div className={styles.stepsGrid}>
          {approachSteps.map((item) => (
            <StepCard
              key={item.step}
              className={styles.stepCard}
              step={item.step}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringApproach;
