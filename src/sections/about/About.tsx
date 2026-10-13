import { FiCode, FiCloud, FiShield, FiLayout, FiDownload } from "react-icons/fi";
import {
  Button,
  SectionTagline,
  SectionTitle,
  SectionDescription,
  CardTitle,
  CardDescription,
} from "@/components";
import styles from "./About.module.css";

interface AboutFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ABOUT_FEATURES: AboutFeature[] = [
  {
    title: "MODERN FRONTEND",
    description: "Next.js, React, TypeScript, and state-of-the-art styling.",
    icon: <FiCode size={22} aria-hidden="true" />,
  },
  {
    title: "API & CLOUD SERVICES",
    description: "RESTful & GraphQL services, serverless, and cloud deployments.",
    icon: <FiCloud size={22} aria-hidden="true" />,
  },
  {
    title: "SYSTEM RESILIENCE",
    description: "Secure data flow, caching strategies, and fail-safe operations.",
    icon: <FiShield size={22} aria-hidden="true" />,
  },
  {
    title: "DESIGN TO CODE",
    description: "Translating intricate Figma designs into production-ready web apps.",
    icon: <FiLayout size={22} aria-hidden="true" />,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className={styles.aboutSection}
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Left Column: Heading, Description & CTA */}
          <div className={styles.aboutContent}>
            <SectionTagline>
              ABOUT <strong>ME</strong>
            </SectionTagline>

            <SectionTitle
              id="about-heading"
              size="md"
              stackLines
              uppercase
              lightText="I BUILD THINGS THAT FEEL"
              boldText="EFFORTLESS TO USE"
            />

            <SectionDescription maxWidth={520}>
              I&apos;m Prince Patel, a Full Stack Developer with 9+ years of
              experience. I build digital experiences where product thinking,
              frontend craftsmanship, and backend engineering come together.
              From intuitive interfaces to scalable APIs and cloud services, I
              turn complex requirements into reliable products built to perform
              and grow.
            </SectionDescription>

            <Button
              href="/resume.pdf"
              download="Prince_Patel_CV.pdf"
              size="lg"
              className={styles.aboutBtn}
              icon={<FiDownload size={18} />}
            >
              DOWNLOAD CV
            </Button>
          </div>

          {/* Right Column: 2x2 Feature Cross-Grid */}
          <div className={styles.featuresGrid}>
            {ABOUT_FEATURES.map((feature) => (
              <div key={feature.title} className={styles.featureItem}>
                <div className={styles.iconWrapper}>{feature.icon}</div>
                <div className={styles.featureContent}>
                  <CardTitle size="sm" uppercase className={styles.featureTitle}>
                    {feature.title}
                  </CardTitle>
                  <CardDescription
                    size="sm"
                    className={styles.featureDescription}
                  >
                    {feature.description}
                  </CardDescription>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
