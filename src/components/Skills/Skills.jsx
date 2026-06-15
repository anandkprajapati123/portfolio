import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaBootstrap,
  FaFigma,
  FaJava,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiC,
  SiCplusplus,
  SiTypescript,
  SiKubernetes,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FiCpu, FiFeather } from "react-icons/fi";
import { skillsData } from "../../data/portfolioData";
import styles from "./Skills.module.css";

const Skills = () => {
  // Map icon strings to React Icons
  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case "c":
        return <SiC className={styles.cIcon} />;
      case "cpp":
        return <SiCplusplus className={styles.cppIcon} />;
      case "java":
        return <FaJava className={styles.javaIcon} />;
      case "html":
        return <FaHtml5 className={styles.html} />;
      case "css":
        return <FaCss3Alt className={styles.css} />;
      case "js":
        return <FaJs className={styles.js} />;
      case "typescript":
        return <SiTypescript className={styles.typescript} />;
      case "react":
        return <FaReact className={styles.react} />;
      case "bootstrap":
        return <FaBootstrap className={styles.bootstrap} />;
      case "node":
        return <FaNodeJs className={styles.node} />;
      case "express":
        return <SiExpress className={styles.express} />;
      case "api":
        return <FiCpu className={styles.api} />;
      case "mongodb":
        return <SiMongodb className={styles.mongo} />;
      case "git":
        return <FaGitAlt className={styles.git} />;
      case "github":
        return <FaGithub className={styles.github} />;
      case "vscode":
        return <VscVscode className={styles.vscode} />;
      case "antigravity":
        return <FiFeather className={styles.antigravity} />;
      case "figma":
        return <FaFigma className={styles.figma} />;
      case "postman":
        return <SiPostman className={styles.postman} />;
      case "docker":
        return <FaDocker className={styles.docker} />;
      case "kubernetes":
        return <SiKubernetes className={styles.kubernetes} />;
      default:
        return <FiCpu className={styles.api} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="skills section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono">#</span>Skills
          </motion.h2>
          <motion.div
            className="section-line"
            initial={{ width: 0 }}
            whileInView={{ width: "7rem" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Skills Categories Grid */}
        <motion.div
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((categoryData) => (
            <motion.div
              key={categoryData.category}
              className={styles.skillCategory}
              variants={itemVariants}
              whileHover={{
                borderColor: "rgba(0, 240, 255, 0.22)",
                y: -4,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            >
              <h3>{categoryData.category}</h3>
              <div className={styles.skillTags}>
                {categoryData.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className={`${styles.skillTag} clickable`}
                    whileHover={{
                      y: -5,
                      scale: 1.04,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    style={{
                      "--skill-glow": skill.glowColor || "rgba(0, 240, 255, 0.2)",
                    }}
                  >
                    <span className={styles.skillIcon}>
                      {getSkillIcon(skill.icon)}
                    </span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
