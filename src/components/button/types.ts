import React from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface BaseButtonProps {
  /** Visual variant of the button */
  variant?: ButtonVariant;
  /** Size variant of the button */
  size?: ButtonSize;
  /** Custom icon element. Defaults to FiArrowRight for primary pill style */
  icon?: React.ReactNode;
  /** Position of the icon container */
  iconPosition?: "right" | "left";
  /** Whether to show the circular icon container */
  showIcon?: boolean;
  /** Make button stretch to 100% of its container */
  fullWidth?: boolean;
  /** Center text horizontally with absolute positioned icon (e.g. for full-width forms) */
  centerText?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Custom additional class names */
  className?: string;
  /** Button content */
  children: React.ReactNode;
}

export type ButtonAsButton = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: undefined;
  };

export type ButtonAsAnchor = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string;
    download?: string | boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;
