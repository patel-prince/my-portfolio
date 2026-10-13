import React from "react";
import { FiArrowUpRight, FiCalendar, FiMapPin } from "react-icons/fi";
import {
  StepNumber,
  CardTitle,
  CardDescription,
} from "@/components/typography";
import { CircleIconButton } from "@/components/circle-icon-button";
import { MetaItem } from "@/components/meta-item";
import styles from "./ExperienceCard.module.css";
import { ExperienceCardProps } from "./types";

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  number,
  company,
  subtitle,
  role,
  period,
  location,
  featured = false,
  className,
  ...props
}) => {
  if (featured) {
    const classes = [styles.featuredCard, className].filter(Boolean).join(" ");

    return (
      <div className={classes} {...props}>
        <div className={styles.cardHeader}>
          <StepNumber size="sm" className={styles.cardNumber}>
            {number}
          </StepNumber>
          <CircleIconButton
            size="sm"
            aria-label={`View experience at ${company}`}
            icon={<FiArrowUpRight size={18} />}
          />
        </div>

        <div className={styles.featuredBody}>
          <div className={styles.featuredMain}>
            <CardTitle size="lg" className={styles.featuredCompanyName}>
              {company}
            </CardTitle>
            <CardDescription size="md" className={styles.featuredRoleName}>
              {role}
            </CardDescription>
          </div>

          <div className={styles.featuredDivider} aria-hidden="true" />

          <div className={styles.featuredMeta}>
            <MetaItem icon={<FiCalendar size={16} />}>{period}</MetaItem>
            <MetaItem icon={<FiMapPin size={16} />}>{location}</MetaItem>
          </div>
        </div>
      </div>
    );
  }

  const classes = [styles.experienceCard, className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      <div className={styles.cardHeader}>
        <StepNumber size="sm" className={styles.cardNumber}>
          {number}
        </StepNumber>
        <CircleIconButton
          size="sm"
          aria-label={`View experience at ${company}`}
          icon={<FiArrowUpRight size={18} />}
        />
      </div>

      <div className={styles.cardBody}>
        <CardTitle size="md" className={styles.companyName}>
          {company}
          {subtitle && (
            <span className={styles.companySubtitle}> {subtitle}</span>
          )}
        </CardTitle>
        <CardDescription size="md" className={styles.roleName}>
          {role}
        </CardDescription>
      </div>

      <div className={styles.cardMeta}>
        <MetaItem icon={<FiCalendar size={15} />}>{period}</MetaItem>
        <span className={styles.metaDivider} aria-hidden="true">
          |
        </span>
        <MetaItem icon={<FiMapPin size={15} />}>{location}</MetaItem>
      </div>
    </div>
  );
};

export default ExperienceCard;
