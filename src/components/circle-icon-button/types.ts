import React from "react";

export type CircleIconButtonSize = "sm" | "md" | "lg";

export interface BaseCircleIconButtonProps {
  size?: CircleIconButtonSize;
  icon?: React.ReactNode;
  "aria-label": string;
  className?: string;
  children?: React.ReactNode;
}

export type CircleIconButtonAsLink = BaseCircleIconButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  };

export type CircleIconButtonAsButton = BaseCircleIconButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };

export type CircleIconButtonProps =
  | CircleIconButtonAsLink
  | CircleIconButtonAsButton;
