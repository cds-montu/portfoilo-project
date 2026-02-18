import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleEnter = () => setVisible(true);
    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseenter', handleEnter);
    window.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseenter', handleEnter);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  // Hide cursor on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: `translate(-50%, -50%) scale(${visible ? 1 : 0.6})`,
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'transform 0.12s cubic-bezier(0.2,1,0.3,1), opacity 0.12s linear',
        opacity: visible ? 1 : 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${isHovering ? 'bg-red-500 shadow-2xl' : 'bg-white/90 shadow-lg'}`} />
    </div>
  );
};

export default CustomCursor;
