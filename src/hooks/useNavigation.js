import { useEffect, useState } from 'react';

export const useSmoothScroll = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  return { scrollToSection };
};

export const useActiveLink = () => {
  const [activeLink, setActiveLink] = useState('home');
  useEffect(() => {
    const sections = ['home', 'what-i-do', 'skills', 'projects', 'contact'];

    const handleScroll = () => {
      const mid = window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        const rect = element.getBoundingClientRect();

        // Mark active if the viewport center lies within the section
        if (rect.top <= mid && rect.bottom >= mid) {
          setActiveLink(section);
          return;
        }
      }
    };

    // run once to initialize
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return { activeLink, setActiveLink };
};
