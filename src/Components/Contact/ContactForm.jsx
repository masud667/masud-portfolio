import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSending(false);
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSuccess(null);
        }, 5000);
      })
      .catch(() => {
        setSending(false);
        setSuccess(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
      <motion.div
        ref={formRef}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="md:max-w-xl w-10/12 mx-auto p-6 md:p-8 rounded-3xl shadow-xl backdrop-blur-xl border border-white/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-cyan-400/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-purple-500/20 blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex flex-col items-center mb-8">
            <motion.div
              className="bg-gradient-to-br from-cyan-400 to-blue-500 p-3 rounded-2xl mb-4"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}>
              <FiMail className="text-white text-3xl" />
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}>
              Contact Me
            </motion.h2>
            <motion.p
              className="mt-2 text-gray-300 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}>
              Have a question or want to work together?
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full pl-2 pr-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} transition={{ delay: 0.1 }}>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full pl-2 pr-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} transition={{ delay: 0.2 }}>
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full pl-2 pr-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} transition={{ delay: 0.3 }}>
              <motion.button
                type="submit"
                disabled={sending}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                  sending
                    ? "bg-cyan-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                }`}
                whileHover={!sending ? { scale: 1.02 } : {}}
                whileTap={!sending ? { scale: 0.98 } : {}}>
                {sending ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="inline-block">
                      <FiSend />
                    </motion.span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>

          <AnimatePresence>
            {success !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className={`mt-6 p-4 rounded-xl flex items-center gap-3 ${
                  success
                    ? "bg-green-900/30 border border-green-500/30"
                    : "bg-red-900/30 border border-red-500/30"
                }`}>
                {success ? (
                  <FiCheckCircle className="text-green-400 text-2xl flex-shrink-0" />
                ) : (
                  <FiAlertCircle className="text-red-400 text-2xl flex-shrink-0" />
                )}
                <p className={success ? "text-green-400" : "text-red-400"}>
                  {success
                    ? "Message sent successfully! I'll get back to you soon."
                    : "Failed to send message. Please try again."}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
