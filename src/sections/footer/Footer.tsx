"use client";

import React from "react";
import { Logo, BackToTop } from "@/components";
import { footerNavLinks, siteConfig } from "@/config";
import { scrollToSection } from "@/utils";
import styles from "./Footer.module.css";

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
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={styles.navLink}
                    onClick={(e) => scrollToSection(link.href, e)}
                  >
                    {link.name}
                  </a>
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
            &copy; {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </div>
          <div className={styles.credits}>DESIGNED &amp; BUILT WITH CARE</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
