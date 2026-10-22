import React from "react";
import { FiMonitor, FiServer, FiTool } from "react-icons/fi";
import { LuPalette } from "react-icons/lu";

export interface TechItem {
  name: string;
  experience: string;
  logo: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  headerTitle: string;
  headerDescription: string;
  items: TechItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: React.createElement(FiMonitor, { size: 18, "aria-hidden": true }),
    headerTitle: "Frontend Development",
    headerDescription:
      "Building modern, responsive, and high-performance user interfaces.",
    items: [
      {
        name: "React.js",
        experience: "7+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "JavaScript",
        experience: "9+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        experience: "7+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "HTML",
        experience: "9+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        experience: "9+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "jQuery",
        experience: "4+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
      },
    ],
  },
  {
    id: "ui-libraries",
    name: "UI Libraries & Styling",
    icon: React.createElement(LuPalette, { size: 18, "aria-hidden": true }),
    headerTitle: "UI Libraries & Styling",
    headerDescription:
      "Crafting beautiful and consistent user experiences with modern design systems.",
    items: [
      {
        name: "Ant Design",
        experience: "5+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg",
      },
      {
        name: "Material UI",
        experience: "4+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
      },
      {
        name: "Tailwind CSS",
        experience: "3+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Bootstrap",
        experience: "4+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Sass / SCSS",
        experience: "5+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
      },
    ],
  },
  {
    id: "backend-databases",
    name: "Backend & Databases",
    icon: React.createElement(FiServer, { size: 18, "aria-hidden": true }),
    headerTitle: "Backend & Databases",
    headerDescription:
      "Building secure, scalable server-side solutions, APIs, and performant databases.",
    items: [
      {
        name: "Node.js",
        experience: "4+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "PHP",
        experience: "5+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      },
      {
        name: "Laravel",
        experience: "4+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      },
      {
        name: "REST APIs",
        experience: "6+ YEARS",
        logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M28 20c-5 0-9 4-9 9v11c0 5-4 9-9 9 5 0 9 4 9 9v11c0 5 4 9 9 9' fill='none' stroke='%23111827' stroke-width='5' stroke-linecap='round'/><path d='M72 20c5 0 9 4 9 9v11c0 5 4 9 9 9-5 0-9 4-9 9v11c0 5-4 9-9 9' fill='none' stroke='%23111827' stroke-width='5' stroke-linecap='round'/><text x='50' y='45' font-family='sans-serif' font-weight='800' font-size='15' text-anchor='middle' fill='%23111827' letter-spacing='1'>REST</text><text x='50' y='64' font-family='sans-serif' font-weight='800' font-size='15' text-anchor='middle' fill='%23111827' letter-spacing='1'>API</text></svg>",
      },
      {
        name: "MySQL",
        experience: "4+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        experience: "3+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    id: "tools",
    name: "Development and AI tools",
    icon: React.createElement(FiTool, { size: 18, "aria-hidden": true }),
    headerTitle: "Development and AI tools",
    headerDescription:
      "Tools and platforms I use for development, version control, and team collaboration.",
    items: [
      {
        name: "VS Code",
        experience: "6+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      },
      {
        name: "GitHub Copilot",
        experience: "2+ YEARS",
        logo: "https://cdn.simpleicons.org/githubcopilot",
      },
      {
        name: "Claude",
        experience: "2+ YEARS",
        logo: "https://cdn.simpleicons.org/claude",
      },
      {
        name: "Cursor",
        experience: "2+ YEARS",
        logo: "https://cdn.simpleicons.org/cursor",
      },
      {
        name: "Antigravity",
        experience: "1+ YEARS",
        logo: "https://svgl.app/library/antigravity.svg",
      },
    ],
  },
];
