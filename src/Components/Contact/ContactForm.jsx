import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiPhone,
  FiMapPin
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
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
        staggerChildren: 0.2
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

  const contactDetails = [
    {
      icon: <FiMail className="text-xl" />,
      title: "Email",
      value: "masudparvaz883@gmail.com",
      link: "mailto:masudparvaz883@gmail.com",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <FiPhone className="text-xl" />,
      title: "Phone",
      value: "+8801862256718",
      link: "tel:+8801862256718",
      color: "from-purple-400 to-cyan-500"
    },
    {
      icon: <FaWhatsapp className="text-xl" />,
      title: "WhatsApp",
      value: "+8801862256718",
      link: "https://wa.me/8801862256718",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <FiMapPin className="text-xl" />,
      title: "Location",
      value: "Noakhali, BD",
      link: "",
      color: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20"
    >
     
      <div className="w-10/12 mx-auto">
       
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Have a project in mind or want to discuss opportunities? Feel free to reach out using the form or contact me directly.
          </motion.p>
        </div>

        <motion.div
          ref={formRef}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* Contact Information Column */}
          <motion.div 
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl py-5 px-3"
            variants={itemVariants}
          >

            <div className="mb-8">
              <motion.div 
                className="bg-gradient-to-br from-cyan-400 to-blue-500 p-3 rounded-2xl inline-block mb-4"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiUser className="text-white text-2xl" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Contact Information
              </motion.h3>
              <motion.p 
                className="text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Fill out the form or reach out directly through these channels:
              </motion.p>
            </div>

            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <motion.a
                  key={index}
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-${detail.color.split(' ')[0].split('-')[1]}-400 transition-all duration-300 group`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`bg-gradient-to-br ${detail.color} p-3 rounded-xl group-hover:rotate-6 transition-transform duration-300`}>
                    {detail.icon}
                  </div>
                  <div >
                    <h4 className="font-bold text-white">{detail.title}</h4>
                    <p className="w-full text-gray-300 text-sm md:text-md lg:text-xl group-hover:text-cyan-300 transition-colors duration-300">
                      {detail.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            
          </motion.div>

          {/* Form Column */}
          <motion.div 
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl py-5 px-3 relative overflow-hidden"
            variants={itemVariants}
          >
           
            <div className="relative z-10">
              <div className="mb-8">
                <motion.div 
                  className="bg-gradient-to-br from-cyan-400 to-blue-500 p-3 rounded-2xl inline-block mb-4"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiSend className="text-white text-2xl" />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  Send a Message
                </motion.h3>
                <motion.p 
                  className="text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Have a question or want to work together? Send me a message.
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                      <FiUser />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} transition={{ delay: 0.1 }}>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                      <FiMail />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} transition={{ delay: 0.2 }}>
                  <div className="relative">
                    <div className="absolute top-3 left-3 text-gray-400">
                      <FiMessageSquare />
                    </div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="5"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none"
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
                    whileTap={!sending ? { scale: 0.98 } : {}}
                  >
                    {sending ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="inline-block"
                        >
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
                    }`}
                  >
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
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;