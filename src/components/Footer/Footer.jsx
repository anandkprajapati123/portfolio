import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <a href="#" className={styles.footerLogo} onClick={handleLogoClick}>
            &lt;AKP /&gt;
          </a>
          <p className={styles.footerText}>Built with passion by Anand Kumar Prajapati</p>
          <p className={styles.footerCopyright}>© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
