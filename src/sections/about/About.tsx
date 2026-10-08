import { FiCode, FiCloud, FiShield, FiLayout, FiDownload } from "react-icons/fi";
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
            <div className={styles.tagline}>
              <span>
                ABOUT <strong>ME</strong>
              </span>
            </div>

            <h2 id="about-heading" className={styles.heading}>
              <span className={styles.headingLight}>
                I BUILD THINGS THAT FEEL
              </span>
              <span className={styles.headingBold}>EFFORTLESS TO USE</span>
            </h2>

            <p className={styles.description}>
              I’m Prince Patel, a Senior Frontend Engineer with 9+ years of
              experience. I craft digital experiences where form, function, and
              engineering converge. Refined by design. Built to perform.
            </p>

            <a
              href="/resume.pdf"
              download="Prince_Patel_CV.pdf"
              className={`app-button app-button-lg ${styles.aboutBtn}`}
            >
              <span>DOWNLOAD CV</span>
              <span className="app-button-icon" aria-hidden="true">
                <FiDownload size={18} />
              </span>
            </a>
          </div>

          {/* Right Column: 2x2 Feature Cross-Grid */}
          <div className={styles.featuresGrid}>
            {ABOUT_FEATURES.map((feature) => (
              <div key={feature.title} className={styles.featureItem}>
                <div className={styles.iconWrapper}>{feature.icon}</div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
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
