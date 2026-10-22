import React from "react";
import { cn } from "@/utils";
import { SectionDescriptionProps } from "./types";
import styles from "./Typography.module.css";


export const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  SectionDescriptionProps
>(function SectionDescription(
  { size = "lg", maxWidth, className, style, children, ...restProps },
  ref
) {
  const sizeClass =
    size === "sm" ? styles.descSm : size === "md" ? styles.descMd : styles.descLg;

  const combinedStyle: React.CSSProperties = {
    ...(maxWidth !== undefined
      ? { maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth }
      : {}),
    ...style,
  };

  return (
    <p
      ref={ref}
      className={cn(styles.description, sizeClass, className)}
      style={combinedStyle}
      {...restProps}
    >
      {children}
    </p>
  );
});

SectionDescription.displayName = "SectionDescription";
