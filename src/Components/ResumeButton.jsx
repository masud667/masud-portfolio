import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';

const ResumeButton = () => {
  const downloadResume = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Masud_Parvaz_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* Desktop Resume Button */}
      <motion.button
        onClick={downloadResume}
        className="px-5 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-medium text-sm flex items-center space-x-2 "
        whileHover={{
          scale: 1.05,
          background: "linear-gradient(to right, #7c3aed, #8b5cf6)",
        }}
        whileTap={{ scale: .98 }}
      >
        <FaFileDownload />
        <span>Resume</span>
      </motion.button>

    
    </div>
  );
};

export default ResumeButton;
