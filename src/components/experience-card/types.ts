import React from "react";

export interface ExperienceCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  number: string;
  company: string;
  subtitle?: string;
  role: string;
  period: string;
  location: string;
  featured?: boolean;
}
