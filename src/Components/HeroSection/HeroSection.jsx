import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { DiMongodb, DiNodejs, DiReact, DiJavascript, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiExpress, SiTypescript, SiRedux, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import ResumeButton from '../ResumeButton';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100 - 50,
        y: (e.clientY / window.innerHeight) * 100 - 50
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // MERN stack icons with parallax effect
  const techIcons = [
    { icon: <DiMongodb />, color: "text-green-500", size: "text-4xl", delay: 0 },
    { icon: <SiExpress />, color: "text-gray-300", size: "text-3xl", delay: 0.1 },
    { icon: <DiReact />, color: "text-blue-400", size: "text-5xl", delay: 0.2 },
    { icon: <DiNodejs />, color: "text-green-400", size: "text-4xl", delay: 0.3 },
    { icon: <DiJavascript />, color: "text-yellow-300", size: "text-3xl", delay: 0.4 },
    { icon: <SiTypescript />, color: "text-blue-500", size: "text-3xl", delay: 0.5 },
    { icon: <SiTailwindcss />, color: "text-teal-400", size: "text-3xl", delay: 0.7 },
    { icon: <DiHtml5 />, color: "text-orange-500", size: "text-3xl", delay: 0.8 },
    { icon: <DiCss3 />, color: "text-blue-500", size: "text-3xl", delay: 0.9 },
    { icon: <SiNextdotjs />, color: "text-gray-300", size: "text-3xl", delay: 1.0 },
  ];

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating bubbles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        {/* Glassmorphism blobs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl filter blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 backdrop-blur-3xl filter blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-11/12 mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center">
        {/* Left side - Text content */}
        <motion.div 
          className="md:w-1/2 mb-16 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
              <motion.span 
                className="text-cyan-300"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                MERN Stack Developer
              </motion.span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building <span className="text-cyan-400">Modern Engaging </span><br />
            Web Experiences
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I build responsive, high-performance web applications using latest technologies. 
            Specializing in React ecosystems with MERN-stack development.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
          
            <ResumeButton />
            
            <motion.a 
              href="#projects"
              className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 font-medium flex items-center text-md gap-2 "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Right side - Animated tech stack */}
        <motion.div 
          className="md:w-1/2 relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Central circle */}
          <div className="">
            {/* Glassmorphism card */}
            <motion.div 
              className="bg-white/5 backdrop-blur-xl rounded-full p-8 pt-12 border border-white/10 w-52 h-52 text-center shadow-xl"
              animate={{ 
                rotate: [0, 5, -5, 0],
                y: [0, 15, -5,  0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="text-cyan-300 text-5xl mb-2">Masud</div>
              <div className="text-lg">MERN Stack Developer</div>
            </motion.div>
            
            {/* Rotating tech icons with parallax effect */}
            {techIcons.map((tech, i) => {
              const angle = (i / techIcons.length) * Math.PI * 2;
              const radius = 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              // Parallax effect based on mouse position
              const parallaxX = mousePosition.x * 0.1;
              const parallaxY = mousePosition.y * 0.1;
              
              return (
                <motion.div
                  key={i}
                  className={`absolute ${tech.color} ${tech.size}`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: `translate(-50%, -50%) translate(${parallaxX}px, ${parallaxY}px)`,
                  }}
                  animate={{
                    rotate: 360,
                    x: [0, Math.sin(angle) * 10, 0],
                    y: [0, Math.cos(angle) * 10, 0],
                  }}
                  transition={{
                    duration: 15 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: tech.delay,
                  }}
                >
                  {tech.icon}
                </motion.div>
              );
            })}
          </div>
          
         
         
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-sm mb-2">Explore More</span>
        <FaArrowDown className="text-cyan-400" />
      </motion.div>
    </div>
  );
};

export default HeroSection;