import React from "react";
import { StepNumber, CardTitle, CardDescription } from "@/components/typography";
import styles from "./StepCard.module.css";
import { StepCardProps } from "./types";

export const StepCard: React.FC<StepCardProps> = ({
  step,
  title,
  description,
  icon,
  className,
  ...props
}) => {
  const classes = [styles.stepCard, className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      <StepNumber size="lg" className={styles.stepNumber}>
        {step}
      </StepNumber>
      <div className={styles.stepIcon} aria-hidden="true">
        {icon}
      </div>
      <CardTitle size="md" className={styles.stepTitle}>
        {title}
      </CardTitle>
      <CardDescription size="md" className={styles.stepDescription}>
        {description}
      </CardDescription>
    </div>
  );
};

export default StepCard;
