import React from "react";
import {
  LuSearch,
  LuLayers,
  LuCodeXml,
  LuChartNoAxesCombined,
} from "react-icons/lu";

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const approachSteps: ApproachStep[] = [
  {
    step: "01",
    title: "Understand",
    description: "Understand the problem, user needs, and business goals.",
    icon: React.createElement(LuSearch, {
      size: 32,
      strokeWidth: 2,
      "aria-hidden": true,
    }),
  },
  {
    step: "02",
    title: "Architect",
    description: "Design scalable architecture and reusable components.",
    icon: React.createElement(LuLayers, {
      size: 32,
      strokeWidth: 2,
      "aria-hidden": true,
    }),
  },
  {
    step: "03",
    title: "Build",
    description: "Turn ideas into clean, performant, and accessible experiences.",
    icon: React.createElement(LuCodeXml, {
      size: 32,
      strokeWidth: 2,
      "aria-hidden": true,
    }),
  },
  {
    step: "04",
    title: "Refine",
    description: "Test, measure, optimize, and continuously improve.",
    icon: React.createElement(LuChartNoAxesCombined, {
      size: 32,
      strokeWidth: 2,
      "aria-hidden": true,
    }),
  },
];
