import Image from "next/image";
import Logo from "@/assets/logo-with-text.svg";
import Link from "next/link";

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
    <div className="app-header">
      <div className="app-logo-container">
        <Image src={Logo} alt="logo" height={32} loading="eager" priority />
      </div>
      <div className="app-navigation-container">
        <ul className="app-navigation">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <button className="app-button">LET'S CONNECT</button>
      </div>
    </div>
  );
};

export default Header;
