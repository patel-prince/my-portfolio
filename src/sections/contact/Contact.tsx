"use client";

import React, { useState } from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { FiMail, FiArrowRight } from "react-icons/fi";
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
            <div className={styles.tagline}>
              <span>
                LET&apos;S <strong>CONNECT</strong>
              </span>
            </div>

            <h2 id="contact-heading" className={styles.heading}>
              Have a project in mind?
            </h2>

            <p className={styles.description}>
              I&apos;m always open to discussing thoughtful products,
              challenging engineering problems, and opportunities to build
              something valuable.
            </p>

            {/* Social / Direct Contact Icon Buttons */}
            <div className={styles.socialLinks} aria-label="Social connections">
              <a
                href="https://linkedin.com/in/prince-patel"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn size={18} aria-hidden="true" />
              </a>

              <a
                href="https://github.com/princepatel"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="GitHub Profile"
              >
                <FaGithub size={18} aria-hidden="true" />
              </a>

              <a
                href="mailto:contact@princepatel.dev"
                className={styles.socialBtn}
                aria-label="Send an Email"
              >
                <FiMail size={18} aria-hidden="true" />
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp size={19} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className={styles.rightColumn}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              {/* Row 1: Name & Email */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-name" className={styles.fieldLabel}>
                    NAME
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-email" className={styles.fieldLabel}>
                    EMAIL
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={styles.inputField}
                  />
                </div>
              </div>

              {/* Row 2: Subject */}
              <div className={styles.formGroup}>
                <label htmlFor="contact-subject" className={styles.fieldLabel}>
                  SUBJECT
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className={styles.inputField}
                />
              </div>

              {/* Row 3: Message */}
              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.fieldLabel}>
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className={styles.textareaField}
                />
              </div>

              {/* Row 4: Submit Button */}
              <button
                type="submit"
                className={styles.submitButton}
                aria-label="Send message"
              >
                <span>{isSubmitted ? "MESSAGE SENT!" : "LET'S TALK"}</span>
                <span className={styles.submitIcon} aria-hidden="true">
                  <FiArrowRight size={18} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
