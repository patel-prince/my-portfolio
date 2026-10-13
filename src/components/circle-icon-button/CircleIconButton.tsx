import React from "react";
import Link from "next/link";
import styles from "./CircleIconButton.module.css";
import { CircleIconButtonProps } from "./types";

export const CircleIconButton: React.FC<CircleIconButtonProps> = (props) => {
  const {
    size = "md",
    icon,
    className,
    children,
    "aria-label": ariaLabel,
    ...rest
  } = props;

  const classes = [
    styles.circleIconButton,
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = icon || children;

  if ("href" in rest && rest.href) {
    const isExternal =
      rest.href.startsWith("http") ||
      rest.href.startsWith("mailto:") ||
      rest.href.startsWith("tel:");

    if (isExternal) {
      return (
        <a
          className={classes}
          aria-label={ariaLabel}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        className={classes}
        aria-label={ariaLabel}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        href={rest.href}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      aria-label={ariaLabel}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};

export default CircleIconButton;
