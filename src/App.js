import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
// Using user-provided custom cursor file (intentional filename per request)
import CustomCursor from './components/customcursur';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="bg-primary text-light overflow-x-hidden">
        {/* Custom animated cursor */}
        <CustomCursor />

        {/* Navigation */}
        <Navigation />

        {/* Main sections */}
        <main>
          <Hero />
          <WhatIDo />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
