import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMapPin, FiSend, FiLoader } from "react-icons/fi";
import { personalInfo } from "../../data/portfolioData";
import styles from "./Contact.module.css";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    problem: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Toast helper
  const addToast = (message, type) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Input validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.problem.trim()) {
      newErrors.problem = "Problem description is required.";
    } else if (formData.problem.trim().length < 10) {
      newErrors.problem = "Problem description must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      addToast("Please correct the validation errors in the form.", "error");
      return;
    }

    setIsSending(true);

    const payload = {
      Name: formData.name,
      Email: formData.email,
      "Problem Description": formData.problem,
      _replyto: formData.email,
      _subject: "New Portfolio Contact Message",
      _template: "table",
      _captcha: "false",
    };

    fetch("https://formsubmit.co/ajax/1ceeee8deb2bbd782dbc229bfcbff0f1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setIsSending(false);
        if (data.success === "false" || !data.success) {
          throw new Error(data.message || "Failed to send message via FormSubmit.");
        }
        addToast("Your message was sent successfully!", "success");
        setFormData({ name: "", email: "", problem: "" });
      })
      .catch((err) => {
        setIsSending(false);
        addToast("Failed to send the message. Please try again or reach out on socials.", "error");
        console.error("FormSubmit Error:", err);
      });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono">#</span>Contact
          </motion.h2>
          <motion.div
            className="section-line"
            initial={{ width: 0 }}
            whileInView={{ width: "7rem" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        <div className={styles.contactContent}>
          {/* Info Column */}
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's work together</h3>
            <p>Share your details and problem description. I will get back to you as soon as possible.</p>

            <div className={styles.contactMeta}>
              <div className={styles.contactLocation}>
                <FiMapPin size={20} />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social Grid */}
            <div className={styles.contactSocials}>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactSocialLink} clickable`}
              >
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactSocialLink} clickable`}
              >
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactSocialLink} clickable`}
              >
                <span>Instagram</span>
              </a>
              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactSocialLink} clickable`}
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.form
            ref={formRef}
            className={styles.contactForm}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            noValidate
          >
            {/* Name */}
            <div className={styles.formField}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className={errors.name ? styles.inputError : ""}
              />
              {errors.name && <span className={styles.fieldErrorMsg}>{errors.name}</span>}
            </div>

            {/* Email */}
            <div className={styles.formField}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className={errors.email ? styles.inputError : ""}
              />
              {errors.email && <span className={styles.fieldErrorMsg}>{errors.email}</span>}
            </div>

            {/* Message/Problem */}
            <div className={styles.formField}>
              <label htmlFor="problem">Problem Description</label>
              <textarea
                id="problem"
                name="problem"
                value={formData.problem}
                onChange={handleInputChange}
                rows="6"
                placeholder="Tell me about your project or problem..."
                className={errors.problem ? styles.inputError : ""}
              />
              {errors.problem && <span className={styles.fieldErrorMsg}>{errors.problem}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className="btn btn-primary glow contact-submit clickable"
              style={{ width: "100%", justifyContent: "center", gap: "0.5rem" }}
            >
              {isSending ? (
                <>
                  <FiLoader className={styles.spinner} /> Sending...
                </>
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      {/* Floating Toast Notification Containers */}
      <div className="toast-container">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              className={`toast ${toast.type === "success" ? "success" : "error"}`}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              <span>{toast.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
