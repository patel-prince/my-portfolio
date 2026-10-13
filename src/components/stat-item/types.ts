import React from "react";

export type StatItemSize = "sm" | "md" | "lg";
export type StatItemAlign = "left" | "center" | "right";

export interface StatItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The primary numerical or key stat value (e.g. "9+", "29+", "100%") */
  value: React.ReactNode;
  /** The descriptive text below the value (e.g. "Years Experience") */
  label: React.ReactNode;
  /** Sizing scale for the stat value and label (defaults to "md") */
  size?: StatItemSize;
  /** Text and flex alignment (defaults to "center") */
  align?: StatItemAlign;
  /** Optional custom class name for the value element */
  valueClassName?: string;
  /** Optional custom class name for the label element */
  labelClassName?: string;
}
