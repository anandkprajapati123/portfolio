import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "../../data/portfolioData";
import styles from "./WhatsAppButton.module.css";

const WhatsAppButton = () => {
  return (
    <a
      href={personalInfo.socials.whatsapp}
      className={styles.whatsappFloat}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact me on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
