import React from "react";
import styles from "./Typography.module.css";
import { CardTitleProps } from "./types";

export const CardTitle: React.FC<CardTitleProps> = ({
  as: Tag = "h3",
  size = "md",
  uppercase = false,
  className,
  children,
  ...props
}) => {
  const classes = [
    styles.cardTitle,
    size === "sm" && styles.cardTitleSm,
    size === "md" && styles.cardTitleMd,
    size === "lg" && styles.cardTitleLg,
    uppercase && styles.cardTitleUppercase,
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

export default CardTitle;
