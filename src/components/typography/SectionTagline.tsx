import React from "react";
import { SectionTaglineProps } from "./types";
import styles from "./Typography.module.css";

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export const SectionTagline = React.forwardRef<
  HTMLDivElement,
  SectionTaglineProps
>(function SectionTagline(
  { children, align = "left", className, ...restProps },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        styles.tagline,
        align === "center" && styles.taglineCenter,
        className
      )}
      {...restProps}
    >
      <span>{children}</span>
    </div>
  );
});

SectionTagline.displayName = "SectionTagline";
