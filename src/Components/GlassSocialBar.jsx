// src/components/GlassSocialLinks.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaTwitter, 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaDribbble,
  FaBehance,
  FaYoutube,
  FaDiscord
} from 'react-icons/fa';

const GlassSocialBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Delay the appearance for a nicer entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const socialLinks = [
    { 
      name: 'Twitter', 
      icon: <FaTwitter className="h-3 w-3 md:h-5 md:w-5" />,
      url: 'https://x.com/masud1152',
      color: 'bg-blue-400'
    },
    { 
      name: 'GitHub', 
      icon: <FaGithub className="h-3 w-3 md:h-5 md:w-5" />,
      url: 'https://github.com/masud667',
      color: 'bg-gray-800'
    },
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedin className="h-3 w-3 md:h-5 md:w-5" />,
      url: 'https://www.linkedin.com/in/masud-parvaz',
      color: 'bg-blue-700'
    },
    { 
      name: 'Behance', 
      icon: <FaBehance className="h-3 w-3 md:h-5 md:w-5" />,
      url: 'https://www.behance.net/masudparvaz0',
      color: 'bg-blue-600'
    },
    
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { x: -40, opacity: 0 },
    show: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div 
      className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="glass-container flex flex-col space-y-4 p-2 rounded-2xl backdrop-blur-lg shadow-xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`glass-icon ${link.color} p-1 md:p-2 rounded-full  flex items-center justify-center relative overflow-hidden transition-all duration-300`}
            variants={item}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 20px rgba(255,255,255,0.5)",
              rotate: [0, -5, 0, 5, 0]
            }}
            whileTap={{ scale: 0.95 }}
            aria-label={link.name}
          >
            <div className="relative z-10 text-white">
              {link.icon}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 -rotate-45 scale-150"></div>
          </motion.a>
        ))}
        
        <motion.div 
          className="h-1 w-1 rounded-full bg-white/30 mx-auto"
          variants={item}
        />
        
        <motion.a
          href="mailto:masudparvaz883@gmail.com"
           target="_blank"
  rel="noopener noreferrer"
          className="glass-icon bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1 md:p-2 flex items-center justify-center relative overflow-hidden transition-all duration-300"
          variants={item}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 20px rgba(255,105,180,0.4)",
            rotate: 360
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Contact"
        >
          <div className="relative z-10 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 -rotate-45 scale-150"></div>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default GlassSocialBar;