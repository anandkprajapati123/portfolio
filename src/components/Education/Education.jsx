import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen, FiMapPin, FiCalendar } from "react-icons/fi";
import { educationData } from "../../data/portfolioData";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section className="education section" id="education">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono">#</span>Education
          </motion.h2>
          <motion.div
            className="section-line"
            initial={{ width: 0 }}
            whileInView={{ width: "7rem" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Education Timeline */}
        <div className={styles.educationContent}>
          <div className={styles.timeline}>
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className={styles.educationCard}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.timelineDot} />
                <motion.div
                  className={styles.educationDetails}
                  whileHover={{ borderColor: "rgba(0, 240, 255, 0.48)" }}
                >
                  <div className={styles.educationHeader}>
                    <div>
                      <div className={styles.educationTitle}>
                        <FiBookOpen size={24} />
                        <h3>{edu.degree}</h3>
                      </div>
                      <div className={styles.educationLocation}>
                        <FiMapPin size={16} />
                        <span>{edu.institution}</span>
                      </div>
                    </div>
                    <div className={styles.educationDate}>
                      <FiCalendar size={16} />
                      <span>{edu.date}</span>
                    </div>
                  </div>

                  <p className={styles.educationDescription}>{edu.description}</p>

                  <div className={styles.coursework}>
                    <p className={styles.courseworkLabel}>Key Coursework:</p>
                    <div className={styles.courseworkTags}>
                      {edu.coursework.map((course) => (
                        <span key={course}>{course}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
