// src/components/SkillsSection.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaGithub, FaFigma, FaDatabase, FaBootstrap,
  FaFire, FaServer, FaTools, FaPaintBrush
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb } from 'react-icons/si';

const SkillsSection = () => {
  // Floating animation for background elements
  useEffect(() => {
    const createFloatingElement = () => {
      const container = document.querySelector('.skills-container');
      if (!container) return;
      
      const element = document.createElement('div');
      const size = Math.random() * 60 + 20;
      const colors = ['from-indigo-500', 'from-pink-500', 'from-purple-500', 'from-cyan-500'];
      
      element.className = `absolute rounded-full bg-gradient-to-br ${colors[Math.floor(Math.random() * colors.length)]} to-transparent opacity-10`;
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.top = `${Math.random() * 100}%`;
      element.style.left = `${Math.random() * 100}%`;
      
      container.appendChild(element);
      
      // Animate with framer-motion-like effect
      const animate = () => {
        const y = Math.sin(Date.now() / 2000 + size) * 20;
        const x = Math.cos(Date.now() / 3000 + size) * 15;
        element.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(animate);
      };
      
      animate();
      
      // Remove after animation
      setTimeout(() => {
        element.remove();
      }, 20000);
    };
    
    // Create initial floating elements
    for (let i = 0; i < 15; i++) {
      setTimeout(createFloatingElement, i * 500);
    }
    
    // Continue creating floating elements
    const interval = setInterval(createFloatingElement, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Skill categories data
  const categories = [
    {
      title: "Frontend",
      icon: <FaPaintBrush className="text-xl" />,
      color: "from-indigo-500 to-purple-600",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-4xl" />, color: "text-orange-500" },
        { name: "CSS3", icon: <FaCss3Alt className="text-4xl" />, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJs className="text-4xl" />, color: "text-yellow-400" },
        { name: "React", icon: <FaReact className="text-4xl" />, color: "text-cyan-400" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl" />, color: "text-teal-400" },
        { name: "Bootstrap", icon: <FaBootstrap className="text-4xl" />, color: "text-purple-500" },
      ]
    },
    {
      title: "Backend",
      icon: <FaServer className="text-xl" />,
      color: "from-green-500 to-emerald-600",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-4xl" />, color: "text-green-500" },
        { name: "Next.js", icon: <SiNextdotjs className="text-4xl" />, color: "text-white" },
        { name: "Express.js", icon: <SiExpress className="text-4xl" />, color: "text-yellow-400" },
        { name: "MongoDB", icon: <SiMongodb className="text-4xl" />, color: "text-green-500" },
        { name: "REST APIs", icon: <FaDatabase className="text-4xl" />, color: "text-blue-400" },
        { name: "Authentication", icon: <FaServer className="text-4xl" />, color: "text-rose-400" },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools className="text-xl" />,
      color: "from-amber-500 to-orange-600",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-4xl" />, color: "text-orange-500" },
        { name: "GitHub", icon: <FaGithub className="text-4xl" />, color: "text-white" },
        { name: "Firebase", icon: <FaFire className="text-4xl" />, color: "text-yellow-500" },
        { name: "Figma", icon: <FaFigma className="text-4xl" />, color: "text-purple-400" },
        { name: "VS Code", icon: <FaTools className="text-4xl" />, color: "text-blue-400" },
        { name: "Vercel", icon: <FaServer className="text-4xl" />, color: "text-white" },
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "backOut" }
    },
    hover: {
      scale: 1.1,
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  return (
   <section id="skills" className='py-16 relative overflow-hidden skills-container bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
     <div className="w-10/12 mx-auto overflow-hidden ">

               {/* Mountain Silhouette top */}
        <div className="absolute top-0 left-0 w-full">
          <div className="h-24 bg-gradient-to-b from-gray-900 to-transparent"></div>
        </div>
      {/* Mountain Silhouette bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
        
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0" id="floating-elements"></div>
      
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-radial-gradient"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
                      className="text-center mb-16"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Skills</span>
                      </h2>
                      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
                    </motion.div>
          
          <motion.p 
            className="text-xl text-indigo-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A showcase of my technical skills with interactive animations and modern glassmorphism design
          </motion.p>
          
          {/* Animated hexagons */}
          <div className="flex justify-center mt-12">
            <motion.div 
              className="hexagon w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-4"
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            >
              <FaReact className="text-4xl text-white" />
            </motion.div>
            
            <motion.div 
              className="hexagon w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center mx-4"
              animate={{ y: [0, -20, 0] }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <FaJs className="text-4xl text-white" />
            </motion.div>
            
            <motion.div 
              className="hexagon w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center mx-4"
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                duration: 4.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
            >
              <FaNodeJs className="text-4xl text-white" />
            </motion.div>
          </div>
        </div>
        
        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              className="glass-card p-6 "
              variants={categoryVariants}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="skill-card bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 rounded-xl flex flex-col items-center justify-center cursor-pointer"
                    variants={skillVariants}
                    whileHover="hover"
                  >
                    <div className={`${skill.color} mb-2 skill-icon`}>
                      {skill.icon}
                    </div>
                    <span className="font-medium text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
       
       
      </div>
    </div>
   </section>
  );
};

export default SkillsSection;