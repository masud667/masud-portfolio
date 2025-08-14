import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaLightbulb,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaTools,
  FaServer,
} from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiExpress,
} from "react-icons/si";
import projectsData from "../../data/projects.json";
const ProjectsShowcase = () => {
  const [projects, setProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const getTechIcon = (tech) => {
    switch (tech) {
      case "React":
        return <SiReact className="text-cyan-400" />;
      case "Node.js":
        return <SiNodedotjs className="text-green-500" />;
      case "MongoDB":
        return <SiMongodb className="text-green-600" />;
      case "Express":
        return <SiExpress className="text-gray-300" />;
      case "Firebase":
        return <SiFirebase className="text-yellow-500" />;
      case "Tailwind CSS":
        return <SiTailwindcss className="text-cyan-500" />;
      default:
        return <FaCode className="text-purple-400" />;
    }
  };

  return (
    <section
      id="projects"
      className="relative py-20  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
   {/* Mountain Silhouette top */}
        <div className="absolute top-0 left-0 w-full">
          <div className="h-24 bg-gradient-to-b from-gray-900 to-transparent"></div>
        </div>
        {/* Mountain Silhouette bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="w-10/12 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Explore my latest projects showcasing innovative solutions and
            cutting-edge technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 shadow-xl"
              whileHover={{
                y: -10,
                boxShadow: "0 20px 30px -15px rgba(101, 116, 255, 0.4)",
              }}
              transition={{ duration: 0.3 }}
              layout>
              <div className="relative h-48 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-900 to-purple-900 w-full h-full flex items-center justify-center text-gray-900">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-purple-400/60 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-2 bg-cyan-900/20 text-cyan-300 text-xs px-3 py-1.5 rounded-full">
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-purple-900/20 text-purple-300 text-xs px-3 py-1.5 rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => openProject(project)}
                    className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-5 py-2.5 rounded-lg font-medium hover:from-cyan-500 hover:to-purple-500 transition-all flex items-center gap-2">
                    <FaTools className="text-sm" />
                    View Details
                  </button>

                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-lg transition-all">
                      <FaGithub />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-lg transition-all">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center w-10/12 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25 }}>
              <div className="p-6 border-b border-white/10 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={closeProject}
                  className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all">
                  <FaTimes />
                </button>
              </div>

              {/* Project Image Carousel */}
              <div className="relative h-80 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-900 to-purple-900 w-full h-full flex items-center justify-center">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="max-w-full max-h-full object-cover"
                  />
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all">
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all">
                  <FaChevronRight />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        activeIndex === i ? "bg-white" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <FaCode className="text-cyan-400" />
                      Project Overview
                    </h4>
                    <p className="text-gray-300 mb-6">
                      {selectedProject.description}
                    </p>

                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <FaLightbulb className="text-yellow-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">✓</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <FaServer className="text-purple-400" />
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="flex items-center gap-2 bg-gray-700/50 text-white text-sm px-4 py-2 rounded-lg">
                          {getTechIcon(tech)}
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <FaLightbulb className="text-green-400" />
                      Challenges & Solutions
                    </h4>
                    <p className="text-gray-300 mb-6">
                      {selectedProject.challenges}
                    </p>

                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <FaLightbulb className="text-indigo-400" />
                      Future Improvements
                    </h4>
                    <p className="text-gray-300">
                      {selectedProject.improvements}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 justify-between">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[200px] bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2">
                    <FaExternalLinkAlt className="text-sm" />
                    View Live Project
                  </a>

                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[200px] bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                    <FaGithub />
                    GitHub Repository
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsShowcase;
