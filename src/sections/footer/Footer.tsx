"use client";

import React from "react";
import Link from "next/link";
import { Logo, BackToTop } from "@/components";
import styles from "./Footer.module.css";

const FOOTER_NAV_LINKS = [
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "TOOLS & STACK", href: "#tools-stack" },
  { name: "HOW I WORK", href: "#how-i-work" },
  { name: "CONTACT", href: "#contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        {/* Top Row: Logo, Navigation, Back to Top */}
        <div className={styles.topRow}>
          {/* Logo / Brand */}
          <Logo height={24} className={styles.logo} />

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
          <BackToTop className={styles.backToTopBtn} />
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
