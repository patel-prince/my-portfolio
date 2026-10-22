"use client";

import React from "react";
import { FiArrowUp } from "react-icons/fi";
import styles from "./BackToTop.module.css";
import { BackToTopProps } from "./types";

export const BackToTop: React.FC<BackToTopProps> = ({
  text = "BACK TO TOP",
  className,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      if (window.location.hash) {
        window.history.pushState(null, "", window.location.pathname);
      }
    }
  };

  const classes = [styles.backToTopBtn, className].filter(Boolean).join(" ");

  return (
    <button
      type="button"
      onClick={handleClick}
      className={classes}
      aria-label={text}
      {...props}
    >
      <span className={styles.backToTopCircle} aria-hidden="true">
        <FiArrowUp size={15} />
      </span>
      <span className={styles.backToTopText}>{text}</span>
    </button>
  );
};

export default BackToTop;
