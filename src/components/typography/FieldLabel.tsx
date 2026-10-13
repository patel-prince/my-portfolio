import React from "react";
import styles from "./Typography.module.css";
import { FieldLabelProps } from "./types";

export const FieldLabel: React.FC<FieldLabelProps> = ({
  htmlFor,
  required = false,
  className,
  children,
  ...props
}) => {
  const classes = [
    styles.fieldLabel,
    required && styles.fieldLabelRequired,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label htmlFor={htmlFor} className={classes} {...props}>
      {children}
    </label>
  );
};

export default FieldLabel;
