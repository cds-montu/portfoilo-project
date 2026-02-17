import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WhatIDo = () => {
  const [ref, isVisible] = useScrollReveal();

  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, interactive UIs with React, Next.js, and modern CSS frameworks.',
      icon: '⚛️',
      color: 'from-blue-500 to-cyan-500',
    },
    // {
    //   title: 'Full Stack Architecture',
    //   description: 'End-to-end development from database design to frontend, using Node.js and Express.',
    //   icon: '🏗️',
    //   color: 'from-purple-500 to-pink-500',
    // },
    {
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with cart, checkout, payments, and inventory systems.',
      icon: '🛒',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Admin Dashboards',
      description: 'Powerful admin panels with real-time data, analytics, CSV uploads, and role management.',
      icon: '📊',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'State Management',
      description: 'Scalable state solutions using Redux, Redux Toolkit, and modern state patterns.',
      icon: '🔄',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Database Design',
      description: 'Efficient MySQL database architecture with Knex query builder and migrations.',
      icon: '💾',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1],
      },
    },
  };

  return (
    <section id="what-i-do" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-10 right-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="w-full max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">What I Specialize In</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building innovative solutions with modern web technologies, focusing on scalability, performance, and user-centric design
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="project-card group"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            >
              <div className="relative h-full p-8 rounded-xl glass hover:glass group relative overflow-hidden">
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${service.color} transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', damping: 20 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>

                  {/* Hover bottom line */}
                  <motion.div
                    className="mt-6 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDo;
