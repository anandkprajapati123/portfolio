import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { projectsData } from "../../data/portfolioData";
import styles from "./Projects.module.css";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="projects section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono">#</span>Projects
          </motion.h2>
          <motion.div
            className="section-line"
            initial={{ width: 0 }}
            whileInView={{ width: "7rem" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className={`${styles.projectCard} ${project.featured ? styles.featuredCard : ""} clickable`}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            >
              {/* Thumbnail with overlay gradient */}
              <div className={styles.projectThumbnail}>
                <img src={project.thumbnail} alt={project.title} />
                {project.featured && (
                  <div className={styles.featuredBadge}>Featured</div>
                )}
              </div>

              {/* Card Details */}
              <div className={styles.projectContent}>
                {project.subtitle && (
                  <span className={styles.projectLabel}>{project.subtitle}</span>
                )}
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* Tech Stack Tags */}
                <div className={styles.projectTech}>
                  {project.tech.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className={styles.projectLinks}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectLink} clickable`}
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectLink} clickable`}
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
