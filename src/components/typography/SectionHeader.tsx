import React from "react";
import { cn } from "@/utils";
import { SectionHeaderProps } from "./types";
import { SectionTagline } from "./SectionTagline";
import { SectionTitle } from "./SectionTitle";
import { SectionDescription } from "./SectionDescription";
import styles from "./Typography.module.css";


export const SectionHeader = React.forwardRef<
  HTMLDivElement,
  SectionHeaderProps
>(function SectionHeader(
  {
    tagline,
    title,
    description,
    maxWidth,
    align = "left",
    className,
    style,
    children,
    ...restProps
  },
  ref
) {
  const combinedStyle: React.CSSProperties = {
    ...(maxWidth !== undefined
      ? { maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth }
      : {}),
    ...style,
  };

  const isTitleConfig =
    typeof title === "object" &&
    title !== null &&
    !React.isValidElement(title) &&
    ("lightText" in title || "boldText" in title);

  return (
    <div
      ref={ref}
      className={cn(
        styles.sectionHeader,
        align === "center" && styles.headerCenter,
        className
      )}
      style={combinedStyle}
      {...restProps}
    >
      {tagline && <SectionTagline align={align}>{tagline}</SectionTagline>}

      {isTitleConfig ? (
        <SectionTitle {...title} />
      ) : React.isValidElement(title) ? (
        title
      ) : (
        <SectionTitle>{title as React.ReactNode}</SectionTitle>
      )}

      {description && (
        <SectionDescription>{description}</SectionDescription>
      )}

      {children}
    </div>
  );
});

SectionHeader.displayName = "SectionHeader";
