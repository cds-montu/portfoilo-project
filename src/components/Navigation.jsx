import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Lock body scroll while mobile menu is open — persist original value in a ref
  const originalBodyOverflow = useRef('');
  useEffect(() => {
    // Capture original overflow on mount
    originalBodyOverflow.current = document.body.style.overflow || '';
    return () => {
      // restore when component unmounts
      document.body.style.overflow = originalBodyOverflow.current;
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalBodyOverflow.current || '';
    }
  }, [isOpen]);

  // Reset/close menu on visibility change, popstate, resize to desktop, or Escape key
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) setIsOpen(false);
    };
    const handlePop = () => setIsOpen(false);
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('popstate', handlePop);
    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('popstate', handlePop);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKey);
    };
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
    // Close mobile menu after a short delay to ensure smooth scroll begins
    setIsOpen(false);
  };

  const isActive = (sectionId) => activeLink === sectionId;

  const menuVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.06,
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

  const lineVariants = {
    closed: { rotate: 0, y: 0, opacity: 1 },
    topOpen: { rotate: 45, y: 6 },
    middleOpen: { opacity: 0 },
    bottomOpen: { rotate: -45, y: -6 },
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

        {/* Mobile menu button (animated morph to X) */}
        <motion.button
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden fixed top-4 right-4 w-12 h-12 flex items-center justify-center bg-none border-none rounded-md z-[9999]"
          onClick={() => setIsOpen((prev) => !prev)}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-8 h-6 flex items-center justify-center">
            {/* Hamburger icon (3 lines) */}
            <motion.svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute pointer-events-none"
              initial={false}
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.18 }}
              aria-hidden="true"
            >
              <path d="M1 1h20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M1 8h20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M1 15h20" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </motion.svg>

            {/* Close (X) icon */}
            <motion.svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute pointer-events-none"
              initial={false}
              animate={{ opacity: isOpen ? 1 : 0, rotate: isOpen ? 0 : -90 }}
              transition={{ duration: 0.18 }}
              aria-hidden="true"
            >
              <path d="M3 3L19 19" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M19 3L3 19" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            </motion.svg>
          </div>
        </motion.button>
      </div>

      {/* Mobile Navigation Menu is portaled to document.body to avoid clipping */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={`md:hidden fixed inset-0 bg-primary/95 backdrop-blur-md z-50 pointer-events-auto`}
            >
              <div className="px-6 pt-24 pb-8 h-full overflow-auto">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    variants={itemVariants}
                    className={`block w-full text-left font-medium py-4 text-2xl transition-colors ${
                      isActive(item.id) ? 'text-red-500' : (item.id === 'home' ? 'text-white' : 'text-gray-300 hover:text-white')
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.button
                  variants={itemVariants}
                  onClick={() => handleNavClick('contact')}
                  className="w-full mt-6 px-6 py-4 bg-red-600 text-white rounded-lg font-semibold text-lg"
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.nav>
  );
};

export default Navigation;
