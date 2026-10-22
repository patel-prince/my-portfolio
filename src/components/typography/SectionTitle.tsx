import React from "react";
import { cn } from "@/utils";
import { SectionTitleProps } from "./types";
import styles from "./Typography.module.css";


export const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  SectionTitleProps
>(function SectionTitle(
  {
    as: Tag = "h2",
    size = "md",
    lightText,
    boldText,
    stackLines = false,
    uppercase = false,
    className,
    children,
    ...restProps
  },
  ref
) {
  const combinedClassName = cn(
    styles.sectionTitle,
    styles[size],
    stackLines && styles.stacked,
    uppercase && styles.uppercase,
    className
  );

  let content: React.ReactNode = children;

  if (lightText !== undefined || boldText !== undefined) {
    content = (
      <>
        {lightText && <span className={styles.light}>{lightText}</span>}
        {boldText && <span className={styles.bold}>{boldText}</span>}
      </>
    );
  }

  return (
    <Tag ref={ref} className={combinedClassName} {...restProps}>
      {content}
    </Tag>
  );
});

SectionTitle.displayName = "SectionTitle";
