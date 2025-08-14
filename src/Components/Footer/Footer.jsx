import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="relative overflow-hidden py-8 px-4 bg-gradient-to-bl from-gray-900 via-gray-800 to-gray-900 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
      {/* Decorative floating elements */}
      <motion.div
        className="absolute -bottom-10 -left-10 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl z-0"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-20 right-10 w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  blur-xl z-0"
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main footer container */}
      <div className="relative z-10 w-8/12 mx-auto">
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg p-6">
          <div className="flex flex-col items-center">
            {/* Animated logo */}
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}>
              <motion.a
                href="#"
                className="text-2xl font-bold select-none flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
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
            </motion.div>

            {/* Copyright text */}
            <motion.p
              className="text-gray-300 text-center text-sm"
              whileHover={{ scale: 1.05 }}>
              © {currentYear} Portfolio. All rights reserved.
            </motion.p>

            {/* Animated divider */}
            <motion.div
              className="my-4 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              animate={{
                width: ["8rem", "12rem", "8rem"],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        {/* Floating CTA */}
        <motion.div
          className="mt-4 flex justify-center"
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}>
          <motion.a
            href="#contact"
            className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}>
            <span>Get in touch</span>
            <motion.svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}>
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
