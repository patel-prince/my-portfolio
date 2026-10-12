"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo-with-text.svg";
import { FiArrowUp } from "react-icons/fi";
import styles from "./Footer.module.css";

const FOOTER_NAV_LINKS = [
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "TOOLS & STACK", href: "#tools-stack" },
  { name: "HOW I WORK", href: "#how-i-work" },
  { name: "CONTACT", href: "#contact" },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        {/* Top Row: Logo, Navigation, Back to Top */}
        <div className={styles.topRow}>
          {/* Logo / Brand */}
          <Link href="/" className={styles.brandLink} aria-label="Home">
            <Image
              src={Logo}
              alt="Prince Patel"
              height={24}
              className={styles.logo}
            />
          </Link>

          {/* Navigation Links */}
          <nav className={styles.navContainer} aria-label="Footer navigation">
            <ul className={styles.navList}>
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTopBtn}
            aria-label="Back to top"
          >
            <span className={styles.backToTopCircle} aria-hidden="true">
              <FiArrowUp size={15} />
            </span>
            <span className={styles.backToTopText}>BACK TO TOP</span>
          </button>
        </div>

        {/* Thin Horizontal Divider */}
        <div className={styles.divider} aria-hidden="true" />

        {/* Bottom Row: Copyright & Credits */}
        <div className={styles.bottomRow}>
          <div className={styles.copyright}>
            &copy; 2026 Prince Patel. All rights reserved.
          </div>
          <div className={styles.credits}>DESIGNED &amp; BUILT WITH CARE</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
