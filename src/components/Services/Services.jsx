import React from "react";
import { motion } from "framer-motion";
import { FiGlobe, FiSmartphone, FiDatabase } from "react-icons/fi";
import { servicesData } from "../../data/portfolioData";
import styles from "./Services.module.css";

const Services = () => {
  const getServiceIcon = (id) => {
    switch (id) {
      case "web-development":
        return <FiGlobe size={32} />;
      case "responsive-design":
        return <FiSmartphone size={32} />;
      case "database-design":
        return <FiDatabase size={32} />;
      default:
        return <FiGlobe size={32} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="services section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono">#</span>Services
          </motion.h2>
          <motion.div
            className="section-line"
            initial={{ width: 0 }}
            whileInView={{ width: "7rem" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Services Grid */}
        <motion.div
          className={styles.servicesGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className={`${styles.serviceCard} ${service.featured ? styles.featuredCard : ""}`}
              variants={cardVariants}
              whileHover={{
                y: -6,
                borderColor: "rgba(0, 240, 255, 0.48)",
                boxShadow: "0 15px 35px -10px rgba(0, 240, 255, 0.25)",
              }}
            >
              <div className={styles.serviceIcon}>
                {getServiceIcon(service.id)}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
