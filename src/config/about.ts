import React from "react";
import { FiCode, FiCloud, FiShield, FiLayout } from "react-icons/fi";

export interface AboutFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface AboutConfig {
  tagline: {
    normal: string;
    bold: string;
  };
  heading: {
    light: string;
    bold: string;
  };
  description: string;
  features: AboutFeature[];
}

export const aboutConfig: AboutConfig = {
  tagline: {
    normal: "ABOUT",
    bold: "ME",
  },
  heading: {
    light: "I BUILD THINGS THAT FEEL",
    bold: "EFFORTLESS TO USE",
  },
  description:
    "I'm Prince Patel, a Full Stack Developer with 9+ years of experience. I build digital experiences where product thinking, frontend craftsmanship, and backend engineering come together. From intuitive interfaces to scalable APIs and cloud services, I turn complex requirements into reliable products built to perform and grow.",
  features: [
    {
      title: "MODERN FRONTEND",
      description: "Next.js, React, TypeScript, and state-of-the-art styling.",
      icon: React.createElement(FiCode, { size: 22, "aria-hidden": true }),
    },
    {
      title: "API & CLOUD SERVICES",
      description: "RESTful & GraphQL services, serverless, and cloud deployments.",
      icon: React.createElement(FiCloud, { size: 22, "aria-hidden": true }),
    },
    {
      title: "SYSTEM RESILIENCE",
      description: "Secure data flow, caching strategies, and fail-safe operations.",
      icon: React.createElement(FiShield, { size: 22, "aria-hidden": true }),
    },
    {
      title: "DESIGN TO CODE",
      description: "Translating intricate Figma designs into production-ready web apps.",
      icon: React.createElement(FiLayout, { size: 22, "aria-hidden": true }),
    },
  ],
};
