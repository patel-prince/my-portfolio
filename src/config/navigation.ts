export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Tools & Stack", href: "#tools-stack" },
  { name: "How I Work", href: "#how-i-work" },
  { name: "Contact", href: "#contact" },
];

export const footerNavLinks: NavLink[] = [
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "TOOLS & STACK", href: "#tools-stack" },
  { name: "HOW I WORK", href: "#how-i-work" },
  { name: "CONTACT", href: "#contact" },
];
