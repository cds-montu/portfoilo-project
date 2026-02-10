import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSmoothScroll } from '../hooks/useNavigation';

const Projects = () => {
  const [ref, isVisible] = useScrollReveal();
  const [hoveredProject, setHoveredProject] = useState(null);
  const { scrollToSection } = useSmoothScroll();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce application with product catalog, shopping cart, checkout flow, payment integration, and order management system.',
      tags: ['React', 'Redux Toolkit', 'Node.js', 'MySQL'],
      accent: 'from-blue-500 to-cyan-500',
      image: '🛒',
    },
    {
      id: 2,
      title: 'Admin Dashboard',
      description: 'Comprehensive admin panel featuring real-time analytics, CSV export/import, role-based access control, user management, and interactive data charts.',
      tags: ['React', 'MUI', 'Express', 'MySQL'],
      accent: 'from-purple-500 to-pink-500',
      image: '📊',
    },
    {
      id: 3,
      title: 'Content Management System',
      description: 'Scalable CMS built with React frontend, Node.js backend, featuring rich text editing, media management, scheduled publishing, and user roles.',
      tags: ['Next.js', 'Express.js', 'MySQL', 'Knex.js'],
      accent: 'from-green-500 to-emerald-500',
      image: '📝',
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics platform displaying user behavior, revenue metrics, conversion funnels, and interactive charts with custom date range filtering.',
      tags: ['React', 'Tailwind', 'Node.js', 'MySQL'],
      accent: 'from-orange-500 to-red-500',
      image: '📈',
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

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1],
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-20 right-20 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="w-full max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Recent Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Full-stack applications built with modern technologies, featuring scalable architecture, intuitive UI, and robust backend systems
          </p>
        </motion.div>

        {/* Projects grid - Vertical stack on mobile, horizontal on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="project-card"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              >
                {/* Project card container */}
                <div className={`relative bg-gradient-to-br ${project.accent} bg-opacity-5 border border-opacity-20 border-white overflow-hidden`}>
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0`}
                    animate={hoveredProject === project.id ? { opacity: 0.1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                      {/* Image/Icon section */}
                      <motion.div
                        className="flex-shrink-0"
                        animate={hoveredProject === project.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', damping: 20 }}
                      >
                        <div className="text-8xl md:text-9xl opacity-20 group-hover:opacity-40 transition-opacity">
                          {project.image}
                        </div>
                      </motion.div>

                      {/* Text content */}
                      <div className="flex-1">
                        <motion.h3
                          className="text-3xl md:text-4xl font-bold mb-3 text-white"
                          animate={hoveredProject === project.id ? { x: 10 } : { x: 0 }}
                          transition={{ type: 'spring', damping: 20 }}
                        >
                          {project.title}
                        </motion.h3>

                        <p className="text-gray-400 text-lg mb-6 leading-relaxed max-w-2xl">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <motion.div
                          className="flex flex-wrap gap-2 mb-6"
                          variants={containerVariants}
                          initial="hidden"
                          animate={hoveredProject === project.id ? 'visible' : 'hidden'}
                        >
                          {project.tags.map((tag, tagIdx) => (
                            <motion.span
                              key={tagIdx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: tagIdx * 0.05 }}
                              className={`px-3 py-1 rounded-lg bg-gradient-to-r ${project.accent} bg-opacity-20 text-sm font-medium text-gray-300`}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.button
                          onClick={() => scrollToSection('contact')}
                          className={`px-6 py-3 rounded-lg bg-gradient-to-r ${project.accent} text-white font-semibold relative overflow-hidden group`}
                          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 107, 107, 0.3)' }}
                          whileTap={{ scale: 0.95 }}
                          animate={hoveredProject === project.id ? { x: 10 } : { x: 0 }}
                        >
                          <motion.span
                            className="relative z-10"
                            animate={hoveredProject === project.id ? { opacity: [1, 0.7, 1] } : { opacity: 1 }}
                          >
                            Discuss Project →
                          </motion.span>
                        </motion.button>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${project.accent}`}
                      animate={hoveredProject === project.id ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.4 }}
                      style={{ transformOrigin: 'left', width: '100%' }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all projects CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 text-lg font-semibold border-2 border-gray-500 text-gray-300 rounded-lg hover:border-red-500 transition-all"
            whileHover={{
              scale: 1.05,
              borderColor: '#ff6b6b',
              color: '#ff6b6b',
              boxShadow: '0 0 30px rgba(255, 107, 107, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            Ready to Work Together? Let's Connect 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
