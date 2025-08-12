import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaMedal,
  FaCalendarAlt,
  FaTrophy,
  FaBook,
} from "react-icons/fa";
import { SiGooglescholar, SiCoursera } from "react-icons/si";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Education = () => {
  const [activeTab, setActiveTab] = useState("degrees");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const educationData = {
    degrees: [
      {
        id: 1,
        degree: "Bachelor of Business Administration",
        institution: "National University",
        year: "2019 - 2023",
        description:
          "Graduated with honors. Specialized in business studies while actively learning full-stack web development and building projects.",
        icon: <FaUniversity />,
        score: "CGPA: 3.08/4.0",
      },
      {
        id: 2,
        degree: "HSC",
        institution: "Char Jabbar Collage",
        year: "2017 - 2019",
        description:
          "Focused on accounting and business principles while exploring programming fundamentals.",
        icon: <FaMedal />,
        score: "GPA: 3.83/5.0",
      },
      {
        id: 3,
        degree: "High School certification",
        institution: "Science Academy",
        year: "2014 - 2016",
        description:
          "Specialized in Physics and Mathematics. Achieved top 1% in national science olympiad.",
        icon: <FaMedal />,
        score: "GPA: 4.0/4.0",
      },
    ],
    certifications: [
      {
        id: 1,
        name: "MERN stack Developer",
        issuer: "Programming Hero",
        year: "2025",
        icon: <SiGooglescholar />,
        credential: "Student ID: WEB11-2808",
      },
      {
        id: 2,
        name: "AWS Solutions Architect",
        issuer: "Amazon Web Services",
        year: "2023",
        icon: <SiCoursera />,
        credential: "Credential ID: AWS-SA-7890",
      },
      {
        id: 3,
        name: "React Advanced Concepts",
        issuer: "Meta",
        year: "2021",
        icon: <FaBook />,
        credential: "Credential ID: REACT-ADV-2021",
      },
    ],
  };
  const gpaData = {
    labels: ["High School", "Bachelor's"],
    datasets: [
      {
        label: "GPA Score",
        data: [4.0, 3.08],
        backgroundColor: [
          "rgba(101, 116, 255, 0.8)",
          "rgba(101, 116, 255, 0.8)",
          "rgba(101, 116, 255, 0.8)",
        ],
        borderColor: ["rgba(101, 116, 255, 1)", "rgba(101, 116, 255, 1)"],
        borderWidth: 1,
        borderRadius: 8,
      },
    ],
  };

  const gpaOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 4.0,
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
          font: {
            size: 12,
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      x: {
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(30, 30, 45, 0.9)",
        titleColor: "#fff",
        bodyColor: "#ddd",
        borderColor: "rgba(101, 116, 255, 0.5)",
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  };

  const cardHover = {
    scale: 1.03,
    y: -5,
    boxShadow: "0 20px 30px -15px rgba(101, 116, 255, 0.4)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  };

  const tabVariants = {
    active: {
      backgroundColor: "rgba(101, 116, 255, 0.2)",
      borderColor: "rgba(101, 116, 255, 0.5)",
      scale: 1.05,
    },
    inactive: {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderColor: "rgba(255, 255, 255, 0.1)",
      scale: 1,
    },
  };

  return (
    <section
      id="education"
      className="relative py-16 px-4 md:px-8 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
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
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10"
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
              Education{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Qualifications
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>
          <p className="text-cyan-200 max-w-2xl mx-auto">
            My academic journey and professional certifications that have shaped
            my expertise in technology and development.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-10 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}>
          <motion.button
            className={`px-6 py-3 rounded-xl backdrop-blur-lg border flex items-center gap-2 ${
              activeTab === "degrees"
                ? "text-white bg-cyan-500/20 border-cyan-400/50"
                : "text-cyan-200 bg-white/5 border-white/10"
            }`}
            onClick={() => setActiveTab("degrees")}
            variants={tabVariants}
            animate={activeTab === "degrees" ? "active" : "inactive"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <FaGraduationCap /> Academic Degrees
          </motion.button>

          <motion.button
            className={`px-6 py-3 rounded-xl backdrop-blur-lg border flex items-center gap-2 ${
              activeTab === "certifications"
                ? "text-white bg-cyan-500/20 border-cyan-400/50"
                : "text-cyan-200 bg-white/5 border-white/10"
            }`}
            onClick={() => setActiveTab("certifications")}
            variants={tabVariants}
            animate={activeTab === "certifications" ? "active" : "inactive"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <FaTrophy />
            Course Certifications
          </motion.button>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: isMobile ? "0px" : "-100px" }}>
            {/* Vertical timeline */}
            <div className="relative">
              <div className="absolute left-4 md:left-6 h-full w-1 bg-gradient-to-b from-cyan-500 to-cyan-500 transform -translate-x-1/2 hidden md:block">
                <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-400 to-cyan-400"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  style={{ transformOrigin: "top" }}
                />
              </div>

              <div className="space-y-10">
                {(activeTab === "degrees"
                  ? educationData.degrees
                  : educationData.certifications
                ).map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="flex group"
                    variants={itemVariants}
                    whileHover={cardHover}>
                    {/* Timeline icon */}
                    <div className="hidden md:flex w-16 justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-600 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-r from-cyan-600 to-cyan-600 rounded-full p-3 shadow-xl">
                          <div className="text-white text-xl">{item.icon}</div>
                        </div>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 ml-0 md:ml-4">
                      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl transition-all duration-300 hover:border-cyan-400/30">
                        <div className="flex justify-between flex-wrap gap-2">
                          <div>
                            <div className="flex items-center gap-2 text-cyan-300 mb-2">
                              <FaCalendarAlt className="text-sm" />
                              <span className="text-sm font-semibold">
                                {item.year}
                              </span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-white">
                              {activeTab === "degrees"
                                ? item.degree
                                : item.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-1 mb-3 text-cyan-200">
                              <FaUniversity />
                              <p className="font-medium">
                                {item.institution || item.issuer}
                              </p>
                            </div>
                          </div>

                          {/* Mobile icon */}
                          <div className="md:hidden flex justify-end">
                            <div className="bg-gradient-to-r from-cyan-600 to-cyan-600 rounded-full p-2">
                              <div className="text-white text-lg">
                                {item.icon}
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-4">
                          {item.description || item.credential}
                        </p>

                        {item.score && (
                          <div className="mt-4">
                            <span className="inline-block bg-gradient-to-r from-cyan-900/30 to-cyan-900/30 text-cyan-300 text-xs px-3 py-1.5 rounded-full">
                              {item.score}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* GPA Chart */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl h-76"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Academic Performance
              </h3>
              <p className="text-cyan-200 text-sm">
                GPA progression throughout my academic journey
              </p>
            </div>

            <div>
              <Bar data={gpaData} options={gpaOptions} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
