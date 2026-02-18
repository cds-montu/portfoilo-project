import React from 'react';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useNavigation';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: custom * 0.08,
      },
    }),
  };

  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-[#060509] to-black">
      {/* Layered soft lights for depth */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-12 -left-12 w-[42rem] h-[42rem] rounded-full bg-gradient-to-r from-[#ff4d6d]/10 to-transparent blur-[80px] mix-blend-screen"
          animate={{ x: [0, 40, -30, 0], y: [0, -20, 20, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-16 -right-8 w-[36rem] h-[36rem] rounded-full bg-gradient-to-l from-[#6b8cff]/8 to-transparent blur-[80px] mix-blend-overlay"
          animate={{ x: [0, -30, 30, 0], y: [0, 30, -30, 0], rotate: [0, -4, 4, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear', delay: 6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 text-center px-6 max-w-5xl"
      >
        {/* Main heading (staggered words) */}
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <div className="overflow-hidden">
            <motion.span className="block" variants={textVariants} custom={0}>Hi, I'm Montu —</motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span className="block" variants={textVariants} custom={1}>A <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">Creative Problem Solver</span></motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span className="block text-gray-300 font-medium mt-2 text-xl md:text-2xl" variants={textVariants} custom={2}>I build elegant, high-performance interfaces for modern web experiences.</motion.span>
          </div>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          I specialize in React, animations, and crafting polished UI/UX. I focus on clarity, performance, and delightful micro-interactions.
        </motion.p>

        {/* CTA Buttons - magnetic + interactive for cursor */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold text-lg shadow-lg magnetic interactive"
            whileHover={{ scale: 1.04, boxShadow: '0 10px 30px rgba(255, 80, 80, 0.18)' }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-gray-700 text-gray-200 rounded-lg font-semibold text-lg hover:border-red-500 magnetic interactive"
            whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(100, 100, 110, 0.06)' }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Elegant scroll indicator */}
        <motion.div className="mt-12 flex justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <div className="w-7 h-12 rounded-full border-2 border-gray-600 flex items-start justify-center p-1">
            <motion.span className="w-2 h-2 bg-gray-400 rounded-full" animate={{ y: [0, 20, 0], opacity: [1, 0.6, 1] }} transition={{ duration: 1.6, repeat: Infinity }} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
