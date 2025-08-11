import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ResumeButton from "../ResumeButton";
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Nav links array
 const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-in-out ${
        scrolled 
          ? 'py-3 bg-gray-900/50 backdrop-blur-xl shadow-lg' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo with animated gradient */}
        <motion.a
          href="#"
          className="text-2xl font-bold select-none flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold">M</span>
            </div>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0"
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          <div>
            <span className="text-cyan-600">MASUD</span>
          </div>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <div 
            className="bg-gray-800/50 backdrop-blur-md rounded-full p-3"
            style={{
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)"
            }}
          >
            {navLinks.map((link) => (
             <ScrollLink
            key={link.name}
            to={link.to}
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            onClick={() => setActiveLink(link.name)}
            className={`px-4 py-2 rounded-full cursor-pointer ${
              activeLink === link.name
                ? "bg-gradient-to-r from-cyan-600/50 to-purple-600/50 text-white"
                : "text-white/80 hover:bg-white/10"
            }`}
          >
            {link.name}
          </ScrollLink>
            ))}
          </div>

          {/* Resume Button */}
          <ResumeButton />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={toggleMenu}
            className="p-2 rounded-md text-white bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 transition-colors duration-300 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
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
            className="md:hidden bg-gray-900/50 backdrop-blur-xl overflow-hidden"
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex flex-col text-center space-y-2 px-4 py-4">
              {navLinks.map((link) => (
                 <ScrollLink
            key={link.name}
            to={link.to}
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            onClick={() => setActiveLink(link.name)}
            className={`px-4 py-2 rounded-full cursor-pointer ${
              activeLink === link.name
                ? "bg-gradient-to-r from-cyan-600/50 to-purple-600/50 text-white"
                : "text-white/80 hover:bg-white/10"
            }`}
          >
            {link.name}
          </ScrollLink>
              ))}

              {/* Resume Button in Mobile Menu */}
              <div className="mx-auto" onClick={() => setMenuOpen(false)}>
                <ResumeButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;