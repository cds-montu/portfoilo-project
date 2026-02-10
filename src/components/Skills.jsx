import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal, useMousePosition } from '../hooks/useScrollReveal';

const Skills = () => {
  const [ref, isVisible] = useScrollReveal();
  const mousePosition = useMousePosition();

  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Responsive Design'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'UI & Styling',
      skills: ['Tailwind CSS', 'Material-UI (MUI)', 'Chakra UI', 'CSS-in-JS', 'Framer Motion'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'State Management',
      skills: ['Redux', 'Redux Toolkit', 'Context API', 'Zustand', 'React Hooks'],
      color: 'from-orange-500 to-red-500',
    },
    {
      category: 'Backend & APIs',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Middleware'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Database',
      skills: ['MySQL', 'Knex.js', 'Query Optimization', 'Migrations', 'Relationships'],
      color: 'from-yellow-500 to-amber-500',
    },
    {
      category: 'Advanced Features',
      skills: ['E-commerce', 'Payment Integration', 'Cart & Checkout', 'Role-based Access', 'CSV Upload', 'CRUD Operations'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      category: 'Tools & Architecture',
      skills: ['Git', 'GitHub', 'Clean Architecture', 'RESTful Design', 'Version Control'],
      color: 'from-rose-500 to-pink-500',
    },
    {
      category: 'Applications',
      skills: ['E-commerce Platforms', 'Admin Dashboards', 'Data Dashboards', 'CMS Systems', 'Analytics Platforms'],
      color: 'from-cyan-500 to-blue-500',
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

  const categoryVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1],
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1],
      },
    }),
  };

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 gradient-primary relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
      />

      <div className="w-full max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and design methodologies I use to create exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div key={catIdx} variants={categoryVariants} className="skill-card">
              <div className="relative p-8 rounded-xl glass group overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${category.color} transition-opacity duration-500`}
                />

                {/* Category header */}
                <motion.div
                  className="flex items-center mb-6"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', damping: 20 }}
                >
                  <motion.div
                    className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded mr-4`}
                    animate={{ height: [20, 35, 20] }}
                    transition={{ duration: 3, repeat: Infinity, delay: catIdx * 0.5 }}
                  />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </motion.div>

                {/* Skills list */}
                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isVisible ? 'visible' : 'hidden'}
                >
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      custom={skillIdx}
                      variants={skillVariants}
                      className="group/skill"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', damping: 20 }}
                    >
                      <div
                        className={`px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10 border border-opacity-20 border-white group-hover/skill:border-opacity-100 transition-all duration-300 cursor-pointer`}
                      >
                        <span className="text-sm font-medium text-gray-200 group-hover/skill:text-white transition-colors">
                          {skill}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating skill badges */}
        <motion.div
          className="mt-16 flex justify-center flex-wrap gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {['Scalable Code', 'Performance Driven', 'Attention to Detail', 'Collaborative', 'Innovative Solutions'].map((trait, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: idx * 0.1,
                    duration: 0.5,
                  },
                },
              }}
            >
              <motion.span
                className="px-4 py-2 rounded-full border border-gray-500 text-gray-400 text-sm font-medium"
                whileHover={{
                  borderColor: '#ff6b6b',
                  color: '#ff6b6b',
                  scale: 1.05,
                }}
                transition={{ type: 'spring', damping: 20 }}
              >
                {trait}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
