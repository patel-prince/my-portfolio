"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { ButtonProps } from "./types";
import styles from "./Button.module.css";

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant = "primary",
    size = "sm",
    icon,
    iconPosition = "right",
    showIcon = true,
    fullWidth = false,
    centerText = false,
    isLoading = false,
    className,
    children,
    ...restProps
  } = props;

  const defaultIconSize = size === "lg" ? 18 : size === "md" ? 16 : 14;

  const renderedIcon =
    icon !== undefined ? (
      icon
    ) : (
      <FiArrowRight size={defaultIconSize} aria-hidden="true" />
    );

  const combinedClass = cn(
    styles.button,
    styles[variant],
    styles[size],
    "app-button",
    size === "lg" && "app-button-lg",
    fullWidth && styles.fullWidth,
    centerText && styles.centerText,
    iconPosition === "left" && styles.iconLeft,
    isLoading && styles.loading,
    className
  );

  const innerContent = (
    <>
      <span className={styles.label}>{children}</span>
      {showIcon && (
        <span
          className={cn(styles.iconWrapper, "app-button-icon")}
          aria-hidden="true"
        >
          {isLoading ? <span className={styles.spinner} /> : renderedIcon}
        </span>
      )}
    </>
  );

  // If href is present, render Link or anchor
  if ("href" in props && typeof props.href === "string") {
    const { href, target, rel, download, onClick, ...anchorRest } =
      restProps as React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
      };

    const isExternal =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      Boolean(download) ||
      target === "_blank";

    if (isExternal) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={target === "_blank" ? rel || "noopener noreferrer" : rel}
          download={download}
          onClick={onClick}
          {...anchorRest}
          className={combinedClass}
        >
          {innerContent}
        </a>
      );
    }

    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        {...anchorRest}
        className={combinedClass}
      >
        {innerContent}
      </Link>
    );
  }

  // Otherwise render native <button>
  const {
    type = "button",
    disabled,
    onClick,
    ...buttonRest
  } = restProps as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...buttonRest}
      className={combinedClass}
    >
      {innerContent}
    </button>
  );
});

Button.displayName = "Button";
