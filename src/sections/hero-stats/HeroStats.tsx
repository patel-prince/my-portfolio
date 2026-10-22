import { Fragment } from "react";
import { StatItem } from "@/components";
import { statsData } from "@/config";
import styles from "./HeroStats.module.css";


const HeroStats = () => {
  return (
    <section
      className={styles.statsSection}
      aria-label="Key Highlights and Statistics"
    >
      <div className="container">
        <div className={styles.statsCard}>
          {statsData.map((stat, index) => (
            <Fragment key={stat.label}>
              <StatItem value={stat.value} label={stat.label} />
              {index < statsData.length - 1 && (
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
