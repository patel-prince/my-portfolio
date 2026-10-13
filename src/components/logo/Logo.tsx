import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoSvg from "@/assets/logo-with-text.svg";
import styles from "./Logo.module.css";
import { LogoProps } from "./types";

export const Logo: React.FC<LogoProps> = ({
  height = 32,
  priority = false,
  className,
  ...props
}) => {
  const classes = [styles.logoLink, className].filter(Boolean).join(" ");

  return (
    <Link href="/" className={classes} aria-label="Prince Patel" {...props}>
      <Image
        src={LogoSvg}
        alt="Prince Patel"
        height={height}
        className={styles.logoImg}
        priority={priority}
      />
    </Link>
  );
};

export default Logo;
