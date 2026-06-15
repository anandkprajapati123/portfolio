import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "./Navbar.module.css";

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy
      const sections = ["about", "skills", "services", "projects", "education", "contact"];
      let currentSection = "";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = sectionId;
            break;
          }
        }
      }

      if (window.scrollY < 200) {
        currentSection = "";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    document.body.style.overflow = "";

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "";
  };

  return (
    <>
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.navContainer}>
          <a href="#" className={styles.navLogo} onClick={(e) => handleLinkClick(e, "#root")}>
            &lt;AKP /&gt;
          </a>

          {/* Nav Actions (Links + Theme Toggle) */}
          <div className={styles.navActions}>
            <ul className={styles.navLinks}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={activeSection === link.href.replace("#", "") ? styles.active : ""}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`${styles.themeToggle} clickable`}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* Mobile Toggler */}
            <button
              className={`${styles.navToggle} ${isOpen ? styles.navToggleActive : ""} clickable`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuActive : ""}`}>
        <ul className={styles.mobileNavLinks}>
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              style={{
                transitionDelay: isOpen ? `${0.1 + index * 0.05}s` : "0s",
              }}
            >
              <a
                href={link.href}
                className={activeSection === link.href.replace("#", "") ? styles.active : ""}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
