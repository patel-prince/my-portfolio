import React from "react";

export interface StepCardProps extends React.HTMLAttributes<HTMLDivElement> {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}
