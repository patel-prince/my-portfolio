"use client";

import React, { useState } from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { FiMail, FiSend } from "react-icons/fi";
import {
  Button,
  SectionTagline,
  SectionTitle,
  SectionDescription,
  FieldLabel,
  Input,
  Textarea,
  CircleIconButton,
} from "@/components";
import { siteConfig } from "@/config";
import styles from "./Contact.module.css";


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: "success",
          message:
            data.message || "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          setStatus({ type: "idle" });
        }, 5000);
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "Unable to send message. Please check your internet connection or email directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section
      id="contact"
      className={styles.contactSection}
      aria-labelledby="contact-heading"
    >
      <div className="container">
        {/* Main 2-Column Contact Grid with Vertical Divider */}
        <div className={styles.contactGrid}>
          {/* Left Column: Heading, Info & Social Links */}
          <div className={styles.leftColumn}>
            <SectionTagline>
              LET&apos;S <strong>CONNECT</strong>
            </SectionTagline>

            <SectionTitle
              id="contact-heading"
              size="xl"
              className={styles.heading}
            >
              Have a project in mind?
            </SectionTitle>

            <SectionDescription
              size="lg"
              maxWidth={480}
              className={styles.description}
            >
              I&apos;m always open to discussing thoughtful products,
              challenging engineering problems, and opportunities to build
              something valuable.
            </SectionDescription>

            {/* Social / Direct Contact Icon Buttons */}
            <div className={styles.socialLinks} aria-label="Social connections">
              <CircleIconButton
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                aria-label="LinkedIn Profile"
                icon={<FaLinkedinIn size={18} aria-hidden="true" />}
              />

              <CircleIconButton
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                aria-label="GitHub Profile"
                icon={<FaGithub size={18} aria-hidden="true" />}
              />

              <CircleIconButton
                href={siteConfig.social.email}
                size="md"
                aria-label="Send an Email"
                icon={<FiMail size={18} aria-hidden="true" />}
              />

              <CircleIconButton
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                aria-label="Chat on WhatsApp"
                icon={<FaWhatsapp size={19} aria-hidden="true" />}
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className={styles.rightColumn}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              {/* Row 1: Name & Email */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <FieldLabel htmlFor="contact-name">NAME</FieldLabel>
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <FieldLabel htmlFor="contact-email">EMAIL</FieldLabel>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Row 2: Subject */}
              <div className={styles.formGroup}>
                <FieldLabel htmlFor="contact-subject">SUBJECT</FieldLabel>
                <Input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                />
              </div>

              {/* Row 3: Message */}
              <div className={styles.formGroup}>
                <FieldLabel htmlFor="contact-message">MESSAGE</FieldLabel>
                <Textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or opportunity..."
                />
              </div>

              {/* Status Notifications */}
              {status.type === "success" && (
                <div className={styles.alertSuccess} role="status">
                  {status.message}
                </div>
              )}
              {status.type === "error" && (
                <div className={styles.alertError} role="alert">
                  {status.message}
                </div>
              )}

              {/* Row 4: Submit Button */}
              <Button
                type="submit"
                size="lg"
                fullWidth
                centerText
                isLoading={isSubmitting}
                className={styles.submitButton}
                icon={<FiSend size={18} />}
                aria-label="Send message"
              >
                {isSubmitting
                  ? "SENDING..."
                  : status.type === "success"
                    ? "MESSAGE SENT!"
                    : "SEND"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
