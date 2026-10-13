import { Fragment } from "react";
import { StatItem } from "@/components";
import styles from "./HeroStats.module.css";

interface StatData {
  value: string;
  label: string;
}

const STATS_DATA: StatData[] = [
  { value: "9+", label: "Years Experience" },
  { value: "29+", label: "Projects Delivered" },
  { value: "5", label: "Global Clients" },
  { value: "100%", label: "Focus on User Experience" },
];

const HeroStats = () => {
  return (
    <section
      className={styles.statsSection}
      aria-label="Key Highlights and Statistics"
    >
      <div className="container">
        <div className={styles.statsCard}>
          {STATS_DATA.map((stat, index) => (
            <Fragment key={stat.label}>
              <StatItem value={stat.value} label={stat.label} />
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
