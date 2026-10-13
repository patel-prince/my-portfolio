import React from "react";
import styles from "./Form.module.css";
import { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({
  error,
  className,
  ...props
}) => {
  const classes = [
    styles.inputField,
    error && styles.hasError,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <input className={classes} {...props} />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </>
  );
};

export default Input;
