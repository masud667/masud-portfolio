import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFileDownload } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Nav links array
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Skills", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const downloadResume = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Masud_Parvaz_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl shadow-lg"
          : "py-4 bg-white/10 dark:bg-gray-900/10 backdrop-blur-md"
      }`}
      style={{
        background: darkMode
          ? "rgba(15, 23, 42, 0.7)"
          : "rgba(255, 255, 255, 0.7)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 select-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Masud<span className="text-gray-600 dark:text-gray-300">.Dev</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="bg-gray-200/30 dark:bg-gray-800/30 backdrop-blur-md rounded-full p-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Resume Button */}
          <motion.button
            onClick={downloadResume}
            className="ml-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm flex items-center space-x-2"
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(to right, #7c3aed, #8b5cf6)",
            }}
            whileTap={{ scale: 0.95 }}>
            <FaFileDownload />
            <span>Resume</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            onClick={downloadResume}
            className="p-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Download Resume">
            <FaFileDownload size={18} />
          </motion.button>

          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Menu">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl overflow-hidden"
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            }}>
            <div className="flex flex-col space-y-2 px-4 py-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30 transition-colors duration-300"
                  whileHover={{ x: 5 }}>
                  {link.name}
                </motion.a>
              ))}

              <motion.button
                onClick={() => {
                  downloadResume();
                  setMenuOpen(false);
                }}
                className="mt-2 py-3 px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}>
                <FaFileDownload />
                <span>Download Resume</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
