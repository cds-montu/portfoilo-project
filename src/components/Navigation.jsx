import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSmoothScroll, useActiveLink } from '../hooks/useNavigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const { activeLink, setActiveLink } = useActiveLink();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'What I Do', id: 'what-i-do' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (sectionId) => {
    // proactively set active link so UI updates immediately
    if (setActiveLink) setActiveLink(sectionId);
    scrollToSection(sectionId);
    setIsOpen(false); // Close mobile menu
  };

  const isActive = (sectionId) => activeLink === sectionId;

  const menuVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-primary/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.button
          onClick={() => handleNavClick('home')}
          className="text-2xl font-bold text-white cursor-pointer bg-none border-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
            Montu Prajapati
          </span>
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-medium relative group transition-colors ${
                isActive(item.id) ? 'text-red-500' : (item.id === 'home' ? 'text-white' : 'text-gray-300 hover:text-white')
              }`}
              whileHover={{ color: '#ffffff' }}
            >
              {item.name}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: isActive(item.id) ? '100%' : 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <motion.button
          onClick={() => handleNavClick('contact')}
          className="hidden md:block px-6 py-2 bg-red-600 text-white rounded-lg font-semibold"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 107, 107, 0.5)' }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Connect
        </motion.button>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 bg-none border-none"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className="w-6 h-0.5 bg-white"
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white"
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          className="md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-md border-b border-gray-800"
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                variants={itemVariants}
                className={`block w-full text-left font-medium py-2 transition-colors ${
                  isActive(item.id) ? 'text-red-500' : (item.id === 'home' ? 'text-white' : 'text-gray-300 hover:text-white')
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              variants={itemVariants}
              onClick={() => handleNavClick('contact')}
              className="w-full mt-4 px-6 py-2 bg-red-600 text-white rounded-lg font-semibold"
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
