import React from "react";
import styles from "./Typography.module.css";
import { StepNumberProps } from "./types";

export const StepNumber: React.FC<StepNumberProps> = ({
  size = "lg",
  as: Tag = "span",
  className,
  children,
  ...props
}) => {
  const classes = [
    styles.stepNumber,
    size === "sm" ? styles.stepNumberSm : styles.stepNumberLg,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

export default StepNumber;
