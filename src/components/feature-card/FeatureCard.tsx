import React from "react";
import { CardTitle, CardDescription } from "@/components/typography";
import styles from "./FeatureCard.module.css";
import { FeatureCardProps } from "./types";

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
  ...props
}) => {
  const classes = [styles.featureCard, className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      <div className={styles.iconWrapper} aria-hidden="true">
        {icon}
      </div>
      <div className={styles.featureContent}>
        <CardTitle size="sm" uppercase className={styles.featureTitle}>
          {title}
        </CardTitle>
        <CardDescription size="sm" className={styles.featureDescription}>
          {description}
        </CardDescription>
      </div>
    </div>
  );
};

export default FeatureCard;
