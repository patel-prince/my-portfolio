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
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
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
                href="https://linkedin.com/in/prince-patel"
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                aria-label="LinkedIn Profile"
                icon={<FaLinkedinIn size={18} aria-hidden="true" />}
              />

              <CircleIconButton
                href="https://github.com/princepatel"
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                aria-label="GitHub Profile"
                icon={<FaGithub size={18} aria-hidden="true" />}
              />

              <CircleIconButton
                href="mailto:contact@princepatel.dev"
                size="md"
                aria-label="Send an Email"
                icon={<FiMail size={18} aria-hidden="true" />}
              />

              <CircleIconButton
                href="https://wa.me/"
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

              {/* Row 4: Submit Button */}
              <Button
                type="submit"
                size="lg"
                fullWidth
                centerText
                className={styles.submitButton}
                icon={<FiSend size={18} />}
                aria-label="Send message"
              >
                {isSubmitted ? "MESSAGE SENT!" : "SEND"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
