import React, { useEffect, useState, useRef } from 'react';

const CustomCursur = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef({ x: -100, y: -100 });
  const mouseRef = useRef({ x: -100, y: -100 });
  const animationRef = useRef(null);

  // Detect touch devices
  const isTouchDevice = () => {
    if (typeof window !== 'undefined') {
      return (
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0)
      );
    }
    return false;
  };

  useEffect(() => {
    // Skip if touch device
    if (isTouchDevice()) return;

    // Smooth cursor interpolation using RAF
    const interpolateCursor = () => {
      const easing = 0.15; // Smoothness factor
      cursorRef.current.x += (mouseRef.current.x - cursorRef.current.x) * easing;
      cursorRef.current.y += (mouseRef.current.y - cursorRef.current.y) * easing;

      setPos({ x: cursorRef.current.x, y: cursorRef.current.y });
      animationRef.current = requestAnimationFrame(interpolateCursor);
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    // Detect hover on buttons, links, and interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const interactive = (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        (target.classList && target.classList.contains('interactive')) ||
        !!target.closest && (target.closest('button') || target.closest('a') || target.closest('.magnetic'))
      );
      if (interactive) setIsHovering(true);
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      const interactive = (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        (target.classList && target.classList.contains('interactive')) ||
        !!target.closest && (target.closest('button') || target.closest('a') || target.closest('.magnetic'))
      );
      if (interactive) setIsHovering(false);
    };

    // Start animation loop
    animationRef.current = requestAnimationFrame(interpolateCursor);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Magnetic effect for elements with .magnetic class
    const magnets = new Set();
    const handleMagnetMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      magnets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = x - cx;
        const dy = y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const max = 120; // attraction radius
        if (dist < max) {
          const strength = (1 - dist / max) * 12; // px of translate
          el.style.transform = `translate(${dx /  (max/strength)}px, ${dy / (max/strength)}px)`;
        } else {
          el.style.transform = '';
        }
      });
    };

    const registerMagnets = () => {
      document.querySelectorAll('.magnetic').forEach((el) => magnets.add(el));
    };
    registerMagnets();
    document.addEventListener('mousemove', handleMagnetMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousemove', handleMagnetMove);
    };
  }, []);

  // Don't render on touch devices
  if (isTouchDevice()) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        style={{
          position: 'fixed',
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.4 : 1})`,
          transition: 'transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1)',
          opacity: visible ? 1 : 0,
        }}
      >
        <div
          className={`w-3 h-3 md:w-4 md:h-4 rounded-full 
            ${isHovering ? 'bg-red-500 shadow-lg' : 'bg-white/90 shadow-md'}`}
          style={{
            transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
          }}
        />
      </div>

      {/* Outer ring on hover */}
      {isHovering && (
        <div
          style={{
            position: 'fixed',
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            pointerEvents: 'none',
            zIndex: 9998,
            transform: 'translate(-50%, -50%)',
            opacity: visible ? 0.4 : 0,
          }}
        >
          <div
            className="w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-red-500"
            style={{
              transition: 'opacity 0.2s ease',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          />
        </div>
      )}
    </>
  );
};

export default CustomCursur;
