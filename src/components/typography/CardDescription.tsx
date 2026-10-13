import React from "react";
import styles from "./Typography.module.css";
import { CardDescriptionProps } from "./types";

export const CardDescription: React.FC<CardDescriptionProps> = ({
  as: Tag = "p",
  size = "md",
  className,
  children,
  ...props
}) => {
  const classes = [
    styles.cardDescription,
    size === "sm" ? styles.cardDescSm : styles.cardDescMd,
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

export default CardDescription;
