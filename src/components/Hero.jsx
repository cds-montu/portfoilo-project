import React from 'react';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useNavigation';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1],
        delay: custom * 0.1,
      },
    }),
  };

  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-primary">
      {/* Background gradient animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 5 }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 text-center px-6 max-w-4xl"
      >
        {/* Main heading */}
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6">
          <motion.span
            className="block overflow-hidden"
            variants={textVariants}
            custom={0}
          >
            Frontend Developer
          </motion.span>
          <motion.span
            className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 overflow-hidden"
            variants={textVariants}
            custom={1}
          >
            &Creative Problem Solver
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Specializing in building scalable web applications with React, Node.js, and modern databases. 
          I create seamless user experiences with clean architecture, smooth animations, and intuitive design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold text-lg glow-hover"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 107, 107, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-gray-500 text-gray-300 rounded-lg font-semibold text-lg hover:border-red-500"
            whileHover={{ scale: 1.05, borderColor: '#ff6b6b' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 mx-auto text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
