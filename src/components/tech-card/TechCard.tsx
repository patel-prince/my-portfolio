import React from "react";
import styles from "./TechCard.module.css";
import { TechCardProps } from "./types";

export const TechCard: React.FC<TechCardProps> = ({
  name,
  experience,
  logo,
  className,
  ...props
}) => {
  const classes = [styles.techCard, className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      <div className={styles.techLogoWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo}
          alt={`${name} logo`}
          className={styles.techLogo}
          loading="lazy"
        />
      </div>
      <h4 className={styles.techName}>{name}</h4>
      <span className={styles.techExperience}>{experience}</span>
    </div>
  );
};

export default TechCard;
