import React from "react";
import styles from "./Form.module.css";
import { TextareaProps } from "./types";

export const Textarea: React.FC<TextareaProps> = ({
  error,
  className,
  ...props
}) => {
  const classes = [
    styles.textareaField,
    error && styles.hasError,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <textarea className={classes} {...props} />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </>
  );
};

export default Textarea;
