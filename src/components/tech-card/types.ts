import React from "react";

export interface TechCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  experience: string;
  logo: string;
}
