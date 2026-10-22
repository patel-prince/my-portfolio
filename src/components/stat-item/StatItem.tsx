import React from "react";
import { cn } from "@/utils";
import { StatItemProps } from "./types";
import styles from "./StatItem.module.css";


export const StatItem = React.forwardRef<HTMLDivElement, StatItemProps>(
  function StatItem(props, ref) {
    const {
      value,
      label,
      size = "md",
      align = "center",
      className,
      valueClassName,
      labelClassName,
      ...restProps
    } = props;

    const containerClass = cn(
      styles.statItem,
      styles[size],
      styles[align],
      className
    );

    const valClass = cn(styles.statValue, valueClassName);
    const lblClass = cn(styles.statLabel, labelClassName);

    return (
      <div ref={ref} className={containerClass} {...restProps}>
        <span className={valClass}>{value}</span>
        <span className={lblClass}>{label}</span>
      </div>
    );
  }
);

StatItem.displayName = "StatItem";
