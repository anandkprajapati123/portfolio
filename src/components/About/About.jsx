import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiZap, FiLayers } from "react-icons/fi";
import { aboutHighlights } from "../../data/portfolioData";
import styles from "./About.module.css";

const About = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "code":
        return <FiCode size={24} />;
      case "bolt":
        return <FiZap size={24} />;
      case "mern":
        return <FiLayers size={24} />;
      default:
        return <FiCode size={24} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="about section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono">#</span>About
          </motion.h2>
          <motion.div
            className="section-line"
            initial={{ width: 0 }}
            whileInView={{ width: "7rem" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* About Content */}
        <div className={styles.aboutContent}>
          <motion.p
            className={styles.aboutIntro}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm Anand. A passionate <span className="text-primary">Software Engineer</span> student focused on MERN stack development. I build responsive web applications, solve coding challenges, and continuously learn new technologies to grow as a developer.
          </motion.p>
          
          <motion.div
            className={styles.aboutHighlights}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {aboutHighlights.map((highlight) => (
              <motion.div
                key={highlight.id}
                className={`${styles.highlightCard} clickable`}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={styles.highlightIcon}>
                  {getIcon(highlight.icon)}
                </div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
