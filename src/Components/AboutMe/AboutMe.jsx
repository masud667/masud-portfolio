import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import myPhoto from "/Masud Parvaz.jpg"; 

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const photoVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: { 
      scale: 1, 
      opacity: 1,
      rotate: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="relative py-16 md:py-24 overflow-hidden"
      id="about"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
      }}
    >
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-[15%] left-[10%] w-20 h-20 rounded-full bg-purple-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[15%] w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute top-[40%] left-[50%] w-16 h-16 rounded-full bg-pink-500/10 blur-3xl animate-pulse"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div 
            className="glass-container px-3 flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center"
            ref={ref}
          >
            {/* Text Content - Glassmorphism Card */}
            <motion.div 
              className="flex-1 glass-card p-8 rounded-3xl"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              <motion.p 
                className="text-lg md:text-xl leading-relaxed text-slate-200 mb-6"
                variants={itemVariants}
              >
                Hi! I’m <span className="font-bold text-white">Masud Parvaz</span>, a passionate MERN Stack developer with a strong love for crafting 
                clean, responsive, and user-friendly web applications. My programming journey began 
                with curiosity about how websites work, and over time, I dived deep into 
                <span className="font-medium text-cyan-300"> JavaScript, React, Node.js, Express</span>, and modern frontend/backend technologies.
              </motion.p>
              
              <motion.p 
                className="text-lg md:text-xl leading-relaxed text-slate-200 mb-6"
                variants={itemVariants}
              >
                I enjoy building projects that solve real-world problems, especially applications 
                that involve authentication, role-based dashboards, and seamless UI/UX. 
                I’m happiest when I’m turning ideas into functional, polished digital experiences.
              </motion.p>
              
              <motion.p 
                className="text-lg md:text-xl leading-relaxed text-slate-200 mb-6"
                variants={itemVariants}
              >
                Outside of coding, I love exploring new places, following tech trends, 
                and sometimes indulging in sports like cricket. 
                I believe in continuous learning, and I’m always eager to explore 
                new frameworks and tools to expand my skill set.
              </motion.p>
              
              <motion.p 
                className="text-xl leading-relaxed font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
                variants={itemVariants}
              >
                Let’s build something amazing together! 🚀
              </motion.p>
            </motion.div>
            
            {/* Image - Parallax Effect */}
            <motion.div 
              className="flex-1 flex justify-center"
              variants={photoVariants}
              initial="hidden"
              animate={controls}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative">
                  <img
                    src={myPhoto}
                    alt="Masud Parvaz"
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl border-4 border-white/20"
                  />
                  <div className="absolute -inset-4 rounded-2xl border-2 border-white/20 z-[-1]"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default AboutMe;