import React from "react";
import {
  LuSearch,
  LuLayers,
  LuCodeXml,
  LuChartNoAxesCombined,
} from "react-icons/lu";
import {
  SectionTagline,
  SectionTitle,
  SectionDescription,
  CardTitle,
  CardDescription,
  StepNumber,
} from "@/components";
import styles from "./EngineeringApproach.module.css";

interface ApproachStep {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const APPROACH_STEPS: ApproachStep[] = [
  {
    step: "01",
    title: "Understand",
    description: "Understand the problem, user needs, and business goals.",
    icon: <LuSearch size={32} strokeWidth={2} aria-hidden="true" />,
  },
  {
    step: "02",
    title: "Architect",
    description: "Design scalable architecture and reusable components.",
    icon: <LuLayers size={32} strokeWidth={2} aria-hidden="true" />,
  },
  {
    step: "03",
    title: "Build",
    description: "Turn ideas into clean, performant, and accessible experiences.",
    icon: <LuCodeXml size={32} strokeWidth={2} aria-hidden="true" />,
  },
  {
    step: "04",
    title: "Refine",
    description: "Test, measure, optimize, and continuously improve.",
    icon: (
      <LuChartNoAxesCombined size={32} strokeWidth={2} aria-hidden="true" />
    ),
  },
];

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
          {APPROACH_STEPS.map((item) => (
            <div key={item.step} className={styles.stepCard}>
              <StepNumber size="lg" className={styles.stepNumber}>
                {item.step}
              </StepNumber>
              <div className={styles.stepIcon}>{item.icon}</div>
              <CardTitle size="md" className={styles.stepTitle}>
                {item.title}
              </CardTitle>
              <CardDescription
                size="md"
                className={styles.stepDescription}
              >
                {item.description}
              </CardDescription>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringApproach;
