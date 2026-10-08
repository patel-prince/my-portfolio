import Image from "next/image";
import Logo from "@/assets/logo-with-text.svg";
import Link from "next/link";
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
  return (
    <header className={styles.header}>
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
          <button className="app-button">LET'S CONNECT</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
