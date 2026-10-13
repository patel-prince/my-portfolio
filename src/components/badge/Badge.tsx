import React from "react";
import styles from "./Badge.module.css";
import { BadgeProps } from "./types";

export const Badge: React.FC<BadgeProps> = ({
  variant = "subtle",
  size = "sm",
  className,
  children,
  ...props
}) => {
  const classes = [
    styles.badge,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge;
