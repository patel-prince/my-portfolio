"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { Button, Logo } from "@/components";
import styles from "./Header.module.css";

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Tools & Stack", href: "#tools-stack" },
  { name: "How I Work", href: "#how-i-work" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);

        // Check if user is at the bottom of the page (activate contact)
        const isBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 80;

        if (isBottom) {
          setActiveSection("contact");
          rafId = null;
          return;
        }

        // Check if user is near top / in Hero section
        const aboutEl = document.getElementById("about");
        if (aboutEl && aboutEl.getBoundingClientRect().top > 200) {
          setActiveSection("");
          rafId = null;
          return;
        }

        let current = "";
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 140 && rect.bottom > 140) {
              current = id;
              break;
            }
          }
        }

        setActiveSection(current);
        rafId = null;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
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
          <Logo height={32} priority />
        </div>
        <nav className={styles.navigationContainer}>
          <ul className={styles.navigation}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={isActive ? styles.activeLink : ""}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button href="#contact" className={styles.headerBtn} size="sm">
            LET&apos;S CONNECT
          </Button>
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
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.name} className={styles.mobileNavItem}>
                  <Link
                    href={link.href}
                    className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className={styles.mobileNavNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.mobileNavName}>{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.mobileDrawerFooter}>
            <Button
              href="#contact"
              size="sm"
              onClick={() => setIsMenuOpen(false)}
            >
              LET&apos;S CONNECT
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
