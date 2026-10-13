import React from "react";
import styles from "./MetaItem.module.css";
import { MetaItemProps } from "./types";

export const MetaItem: React.FC<MetaItemProps> = ({
  icon,
  className,
  children,
  ...props
}) => {
  const classes = [styles.metaItem, className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </div>
  );
};

export default MetaItem;
