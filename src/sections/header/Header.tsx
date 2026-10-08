"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/logo-with-text.svg";
import Link from "next/link";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize above 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
    >
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
          <button className={`app-button ${styles.headerBtn}`}>
            <span>LET&apos;S CONNECT</span>
            <span className="app-button-icon" aria-hidden="true">
              <FiArrowRight size={14} />
            </span>
          </button>
          <button
            type="button"
            className={styles.hamburgerBtn}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile / Tablet Navigation Drawer */}
      <div
        className={`${styles.mobileDrawer} ${isMenuOpen ? styles.mobileDrawerOpen : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={styles.mobileBackdrop}
          onClick={() => setIsMenuOpen(false)}
        />
        <div className={styles.mobileDrawerContent}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link, index) => (
              <li key={link.name} className={styles.mobileNavItem}>
                <Link
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className={styles.mobileNavNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.mobileNavName}>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileDrawerFooter}>
            <a
              href="/#contact"
              className="app-button"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>LET&apos;S CONNECT</span>
              <span className="app-button-icon" aria-hidden="true">
                <FiArrowRight size={14} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
