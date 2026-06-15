import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiEye, FiArrowRight } from "react-icons/fi";
import { personalInfo } from "../../data/portfolioData";
import styles from "./Hero.module.css";

const Hero = ({ onResumePreview }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing Effect Loop
  useEffect(() => {
    const titles = personalInfo.titles;
    const currentTitle = titles[titleIndex];
    let timer;

    if (!isDeleting && charIndex < currentTitle.length) {
      // Typing
      timer = setTimeout(() => {
        setCurrentText(currentTitle.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      // Erasing
      timer = setTimeout(() => {
        setCurrentText(currentTitle.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (!isDeleting && charIndex === currentTitle.length) {
      // Wait before erasing
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && charIndex === 0) {
      // Switch to next text
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  // Scroll handler to Projects
  const handleViewProjects = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById("projects");
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const floatVariant = (yOffset, duration, delay) => ({
    animate: {
      y: [0, yOffset, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  const rotateFloatVariant = (yOffset, duration, delay) => ({
    animate: {
      y: [0, yOffset, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      },
    },
  });

  return (
    <section className={styles.hero} id="hero">
      {/* SaaS Premium Animated Visuals */}
      <div className={styles.heroVisualLayer} aria-hidden="true">
        {/* Particle circles */}
        <div className={styles.particlesGrid} />

        {/* Orbit Rims */}
        <motion.div
          className={`${styles.wireOrbit} ${styles.wireOrbitLarge}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className={`${styles.wireOrbit} ${styles.wireOrbitSmall}`}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Shapes */}
        <motion.div
          className={`${styles.floatingGeo} ${styles.geoOne}`}
          variants={rotateFloatVariant(12, 10, 0)}
          animate="animate"
        />
        <motion.div
          className={`${styles.floatingGeo} ${styles.geoTwo}`}
          variants={rotateFloatVariant(-12, 8, 1)}
          animate="animate"
        />
        <motion.div
          className={`${styles.floatingGeo} ${styles.geoThree}`}
          variants={floatVariant(-15, 6, 2)}
          animate="animate"
        />
        <motion.div
          className={`${styles.floatingGeo} ${styles.geoFour}`}
          variants={floatVariant(15, 7, 0.5)}
          animate="animate"
        />
      </div>

      <div className={styles.heroBgDecoration} />

      <div className={`container ${styles.heroContainer}`}>
        {/* Intro Info Column */}
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.badgeSaaS}>
            <span className={styles.badgePulse} /> Available for Opportunities
          </div>
          
          <h1 className={styles.heroGreeting}>Hi, I'm Anand Kumar Prajapati</h1>
          <h1 className={styles.heroTitle}>
            <span className={styles.typingText}>{currentText}</span>
            <span className={styles.cursor}>|</span>
          </h1>
          <h2 className={styles.heroSubtitle}>{personalInfo.role}</h2>
          <p className={styles.heroDescription}>{personalInfo.description}</p>

          <div className={styles.heroButtons}>
            <a href="#projects" className="btn btn-primary glow clickable" onClick={handleViewProjects}>
              View Projects <FiArrowRight />
            </a>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary clickable"
            >
              <FaGithub /> GitHub
            </a>
            <button className="btn btn-outline clickable" onClick={onResumePreview}>
              <FiEye /> View Resume
            </button>
          </div>
        </motion.div>

        {/* Avatar Frame Column */}
        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <div className={styles.heroImageWrapper}>
            <motion.div
              className={styles.heroImageBorder}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <img src={personalInfo.profileImg} alt={personalInfo.name} className={styles.profileImg} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
