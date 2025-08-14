import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import myPhoto from "/Masud Parvaz.jpg";


const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  const controls = useAnimation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const photoVariants = {
    hidden: { scale: 0.9, opacity: 0, rotate: -3 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      id="about"
    >
        {/* Mountain Silhouette top */}
        <div className="absolute top-0 left-0 w-full">
          <div className="h-24 bg-gradient-to-b from-gray-900 to-transparent"></div>
        </div>
        {/* Mountain Silhouette bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="w-10/12 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>

          <div
            className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center"
            ref={ref}
          >
            {/* Text Content */}
            <motion.div
              className="flex-1 backdrop-blur-sm bg-gray-900/70 rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-xl"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.p
                className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-200 mb-5"
                variants={itemVariants}
              >
                Hi! I'm{" "}
                <span className="font-bold text-white">Masud Parvaz</span>, a
                passionate MERN Stack developer with a strong love for crafting
                clean, responsive, and user-friendly web applications. My
                programming journey began with curiosity about how websites
                work, and over time, I dived deep into{" "}
                <span className="font-medium text-cyan-300">
                  JavaScript, React, Node.js, Express
                </span>
                , and modern frontend/backend technologies.
              </motion.p>

              <motion.p
                className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-200 mb-5"
                variants={itemVariants}
              >
                I enjoy building projects that solve real-world problems,
                especially applications that involve authentication, role-based
                dashboards, and seamless UI/UX. I'm happiest when turning ideas
                into functional, polished digital experiences.
              </motion.p>

              <motion.p
                className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-200 mb-5"
                variants={itemVariants}
              >
                Outside of coding, I love exploring new places, following tech
                trends, and sometimes indulging in sports like cricket. I
                believe in continuous learning, and I'm always eager to explore
                new frameworks and tools to expand my skill set.
              </motion.p>

              <motion.p
                className="text-lg sm:text-xl md:text-xl leading-relaxed font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mt-6"
                variants={itemVariants}
              >
                Let's build something amazing together! 🚀
              </motion.p>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="flex-1 flex justify-center"
              variants={photoVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="relative w-68 h-68 sm:w-64 sm:h-64 md:w-72 md:h-72">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 blur-xl animate-pulse"></div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                  {/* Profile image placeholder */}
                  <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-full flex items-center justify-center">
                   <img
                    src={myPhoto}
                    alt="Masud Parvaz"
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl border-4 border-white/20"
                  />
                  </div>
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