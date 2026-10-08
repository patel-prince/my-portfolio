import { Fragment } from "react";
import styles from "./HeroStats.module.css";

interface StatItem {
  value: string;
  label: string;
}

const STATS_DATA: StatItem[] = [
  { value: "9+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "3", label: "Global Clients" },
  { value: "100%", label: "Focus on User Experience" },
];

const HeroStats = () => {
  return (
    <section className={styles.statsSection} aria-label="Key Highlights and Statistics">
      <div className="container">
        <div className={styles.statsCard}>
          {STATS_DATA.map((stat, index) => (
            <Fragment key={stat.label}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
              {index < STATS_DATA.length - 1 && (
                <div className={styles.divider} aria-hidden="true" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroStats;
