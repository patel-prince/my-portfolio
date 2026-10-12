"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  FiMonitor,
  FiServer,
  FiTool,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { LuPalette } from "react-icons/lu";
import styles from "./TechnicalExpertise.module.css";

interface TechItem {
  name: string;
  experience: string;
  logo: string;
  isSvgInline?: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  headerTitle: string;
  headerDescription: string;
  items: TechItem[];
}

const CATEGORIES: Category[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: <FiMonitor size={18} aria-hidden="true" />,
    headerTitle: "Frontend Development",
    headerDescription:
      "Building modern, responsive and high-performance user interfaces.",
    items: [
      {
        name: "React.js",
        experience: "7+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        experience: "4+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
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
    icon: <LuPalette size={18} aria-hidden="true" />,
    headerTitle: "UI Libraries & Styling",
    headerDescription:
      "Crafting beautiful and consistent user experiences with modern UI libraries and styling solutions.",
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
      {
        name: "Less",
        experience: "5+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg",
      },
    ],
  },
  {
    id: "backend-databases",
    name: "Backend & Databases",
    icon: <FiServer size={18} aria-hidden="true" />,
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
    name: "Development Tools",
    icon: <FiTool size={18} aria-hidden="true" />,
    headerTitle: "Development Tools",
    headerDescription:
      "Tools and platforms I use for development, version control, project workflows, and management.",
    items: [
      {
        name: "Git",
        experience: "6+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        experience: "5+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        experience: "6+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      },
      {
        name: "Postman",
        experience: "5+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      },
      {
        name: "Figma",
        experience: "6+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      },
      {
        name: "Jira",
        experience: "5+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
      },
      {
        name: "Confluence",
        experience: "5+ YEARS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg",
      },
      {
        name: "Google Analytics",
        experience: "4+ YEARS",
        logo: "https://cdn.simpleicons.org/googleanalytics/E37400",
      },
    ],
  },
];

const TechnicalExpertise: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("frontend");
  const tabsScrollRef = useRef<HTMLDivElement>(null);

  const activeCategory =
    CATEGORIES.find((cat) => cat.id === activeTab) || CATEGORIES[0];

  const handleScroll = (direction: "left" | "right") => {
    if (tabsScrollRef.current) {
      const scrollAmount = 260;
      tabsScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="skills"
      className={styles.expertiseSection}
      aria-labelledby="technical-expertise-heading"
    >
      <div className="container">
        {/* Section Tagline matching About & Experience */}
        <div className={styles.tagline}>
          <span>
            TECHNICAL <strong>EXPERTISE</strong>
          </span>
        </div>

        {/* Top Header Row: Title & Subtitle on left, Curated summary on right */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <h2 id="technical-expertise-heading" className={styles.sectionTitle}>
              <span className={styles.titleLight}>Tools &amp; </span>
              <span className={styles.titleBold}>Stack</span>
            </h2>
            <p className={styles.sectionDescription}>
              The tools, technologies, and platforms I use to build modern,
              scalable, and high-performance digital products.
            </p>
          </div>

          <div className={styles.headerRight}>
            <div className={styles.summaryBox}>
              <p className={styles.summaryText}>
                A curated set of tools and technologies across frontend,
                backend, databases, and more, based on my professional
                experience.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation with Left / Right Arrows */}
        <div className={styles.tabBarWrapper}>
          <button
            type="button"
            className={styles.scrollArrowBtn}
            onClick={() => handleScroll("left")}
            aria-label="Scroll tabs left"
          >
            <FiChevronLeft size={18} aria-hidden="true" />
          </button>

          <div
            ref={tabsScrollRef}
            className={styles.tabsList}
            role="tablist"
            aria-label="Technology Categories"
          >
            {CATEGORIES.map((category) => {
              const isActive = category.id === activeTab;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${category.id}`}
                  id={`tab-${category.id}`}
                  className={`${styles.tabBtn} ${isActive ? styles.activeTab : ""}`}
                  onClick={() => setActiveTab(category.id)}
                >
                  <span className={styles.tabIcon}>{category.icon}</span>
                  <span className={styles.tabLabel}>{category.name}</span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className={styles.scrollArrowBtn}
            onClick={() => handleScroll("right")}
            aria-label="Scroll tabs right"
          >
            <FiChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Active Tab Content Card */}
        <div
          id={`panel-${activeCategory.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory.id}`}
          className={styles.contentCard}
        >
          {/* Card Header */}
          <div className={styles.cardHeader}>
            <div className={styles.cardIconBox} aria-hidden="true">
              {activeCategory.icon}
            </div>
            <div className={styles.cardHeaderInfo}>
              <h3 className={styles.cardHeaderTitle}>
                {activeCategory.headerTitle}
              </h3>
              <p className={styles.cardHeaderDesc}>
                {activeCategory.headerDescription}
              </p>
            </div>
          </div>

          {/* Grid of Technology Cards */}
          <div className={styles.techGrid}>
            {activeCategory.items.map((item) => (
              <div key={item.name} className={styles.techCard}>
                <div className={styles.techLogoWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className={styles.techLogo}
                    loading="lazy"
                  />
                </div>
                <h4 className={styles.techName}>{item.name}</h4>
                <span className={styles.techExperience}>{item.experience}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
