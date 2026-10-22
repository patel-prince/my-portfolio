import { FiDownload } from "react-icons/fi";
import {
  Button,
  SectionTagline,
  SectionTitle,
  SectionDescription,
  FeatureCard,
} from "@/components";
import { aboutConfig, siteConfig } from "@/config";
import styles from "./About.module.css";


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
              href={siteConfig.resumeUrl}
              download={siteConfig.resumeFileName}
              size="lg"
              className={styles.aboutBtn}
              icon={<FiDownload size={18} />}
            >
              DOWNLOAD CV
            </Button>
          </div>

          {/* Right Column: 2x2 Feature Cross-Grid */}
          <div className={styles.featuresGrid}>
            {aboutConfig.features.map((feature) => (
              <FeatureCard
                key={feature.title}
                className={styles.featureItem}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
