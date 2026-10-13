import React from "react";

export type TitleHeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TitleSize = "sm" | "md" | "lg" | "xl";

export interface SectionTaglineProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Optional alignment (defaults to "left") */
  align?: "left" | "center";
}

export interface SectionTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /** HTML heading level tag (defaults to "h2") */
  as?: TitleHeadingLevel;
  /** Size scale (defaults to "md") */
  size?: TitleSize;
  /** Light/regular weight portion of headline */
  lightText?: React.ReactNode;
  /** Bold weight portion of headline */
  boldText?: React.ReactNode;
  /** Whether lightText and boldText should stack on separate lines (defaults to false) */
  stackLines?: boolean;
  /** Whether to transform text to uppercase (defaults to false) */
  uppercase?: boolean;
  /** Standard children if lightText/boldText are not used */
  children?: React.ReactNode;
}

export interface SectionDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Optional max-width constraint (e.g. 520, "100%") */
  maxWidth?: number | string;
  /** Sizing scale: "sm" (14px), "md" (15px), "lg" (16px) */
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export interface SectionHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  tagline?: React.ReactNode;
  title:
    | React.ReactNode
    | {
        lightText?: React.ReactNode;
        boldText?: React.ReactNode;
        stackLines?: boolean;
        uppercase?: boolean;
        size?: TitleSize;
        as?: TitleHeadingLevel;
      };
  description?: React.ReactNode;
  maxWidth?: number | string;
  align?: "left" | "center";
}

/* --------------------------------------------------------------------------
   INNER CARD & FORM TYPOGRAPHY TYPES
   -------------------------------------------------------------------------- */

export type CardHeadingLevel =
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "div";

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /** HTML tag (defaults to "h3") */
  as?: CardHeadingLevel;
  /** Size scale: "sm" (13.5px-14.5px), "md" (18.5px-19px), "lg" (23px) */
  size?: "sm" | "md" | "lg";
  /** Whether to transform text to uppercase */
  uppercase?: boolean;
  children: React.ReactNode;
}

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  /** HTML tag (defaults to "p") */
  as?: "p" | "span" | "div";
  /** Size scale: "sm" (14px), "md" (14.5px-15px) */
  size?: "sm" | "md";
  children: React.ReactNode;
}

export interface StepNumberProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  /** Display size: "sm" (14.5px card header), "lg" (44px display step) */
  size?: "sm" | "lg";
  /** HTML tag (defaults to "span") */
  as?: "span" | "div";
  children: React.ReactNode;
}

export interface FieldLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** htmlFor target input id */
  htmlFor?: string;
  /** Whether to show required indicator */
  required?: boolean;
  children: React.ReactNode;
}
