"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/logo-with-text.svg";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import styles from "./Header.module.css";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "/#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Image src={Logo} alt="logo" height={32} loading="eager" priority />
        </div>
        <nav className={styles.navigationContainer}>
          <ul className={styles.navigation}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <button className="app-button">
            <span>LET&apos;S CONNECT</span>
            <span className="app-button-icon" aria-hidden="true">
              <FiArrowRight size={14} />
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
