import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp, FiDownload } from "react-icons/fi";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import { personalInfo } from "./data/portfolioData";
import "./App.css";

// 1. Initial Website Preloader Screen
const Preloader = () => {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "var(--background)",
        zIndex: 12000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <motion.div
          animate={{
            rotate: 360,
            borderRadius: ["25%", "50%", "25%"],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: 50,
            height: 50,
            border: "3px solid var(--primary)",
          }}
        />
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            fontFamily: "JetBrains Mono",
            color: "var(--primary)",
            fontWeight: 700,
            fontSize: "1.25rem",
            letterSpacing: "2px",
          }}
        >
          &lt;AKP /&gt;
        </motion.span>
      </div>
    </motion.div>
  );
};

// 2. Custom Cursor follow effect
const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Disable on mobile/touch screens
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Monitor links, buttons, inputs for hover scaling
    const refreshListeners = () => {
      const clickables = document.querySelectorAll('a, button, input, textarea, [role="button"], .clickable');
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", handleLinkHoverStart);
        el.addEventListener("mouseleave", handleLinkHoverEnd);
      });
    };

    refreshListeners();

    // Set observer to check for dynamic DOM additions (e.g. project list rendering)
    const observer = new MutationObserver(refreshListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, []);

  const isTouch = window.matchMedia("(pointer: coarse)").matches;
  if (isTouch || hidden) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          position: "fixed",
          left: position.x - 4,
          top: position.y - 4,
          width: 8,
          height: 8,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 10000,
          transform: clicked ? "scale(0.8)" : "scale(1)",
          transition: "transform 0.1s ease",
        }}
      />
      <motion.div
        className="cursor-ring"
        style={{
          position: "fixed",
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
        animate={{
          scale: linkHovered ? 1.5 : clicked ? 0.9 : 1,
          backgroundColor: linkHovered ? "rgba(0, 240, 255, 0.05)" : "rgba(0, 0, 0, 0)",
          borderColor: linkHovered ? "var(--primary)" : "rgba(0, 240, 255, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 30 }}
      />
    </>
  );
};

// 3. Resume Modal Viewer overlay
const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(12px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 11000,
        }}
      >
        <motion.div
          className="modal-content"
          initial={{ scale: 0.92, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 30 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: "90%",
            maxWidth: "960px",
            height: "85vh",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: "var(--radius)",
            boxShadow: "var(--shadow)",
          }}
        >
          {/* Modal Header */}
          <div
            style={{
              padding: "1.25rem 1.5rem",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>Resume PDF Preview</h3>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFilename}
                className="btn btn-secondary"
                style={{ padding: "0.5rem 1rem", fontSize: "0.8rem", gap: "0.4rem" }}
              >
                <FiDownload /> Download
              </a>
              <button
                onClick={onClose}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--foreground)",
                  fontSize: "1.8rem",
                  cursor: "pointer",
                  lineHeight: 1,
                  display: "flex",
                  alignItems: "center",
                }}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div style={{ flexGrow: 1, width: "100%", height: "100%", background: "#f5f5f5" }}>
            <iframe
              src={`${personalInfo.resumeUrl}#view=FitH`}
              title="Resume Preview"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// 4. Main App Layout
function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Setup website loader timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Theme variable togglers
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.className = theme === "dark" ? "bg-gradient-dark" : "bg-gradient-light";
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll spy triggers
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      } else {
        setScrollProgress(0);
      }

      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>

      {!isLoading && (
        <>
          {/* Custom Cursor Ring Follower */}
          <CursorFollower />

          {/* Scroll Progress Bar */}
          <div className="scroll-progress-container" aria-hidden="true">
            <div
              className="scroll-progress-bar"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Floating Navigation */}
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          {/* Sections Layout */}
          <main>
            <Hero onResumePreview={() => setIsResumeOpen(true)} />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Education />
            <Contact />
          </main>

          {/* Footer content */}
          <Footer />

          {/* WhatsApp click-to-chat float */}
          <WhatsAppButton />

          {/* Back to top scroll button */}
          {showBackToTop && (
            <button
              className="back-to-top"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <FiArrowUp size={22} />
            </button>
          )}

          {/* Resume PDF iframe modal overlay */}
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </>
      )}
    </>
  );
}

export default App;
