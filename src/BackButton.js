import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function BackButton({ onBack, darkMode, animated, label }) {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bgColor = darkMode ? '#fff' : '#232323';
  const fgColor = darkMode ? '#232323' : '#fff';
  const showFull = hovered || isMobile;

  return (
    <motion.button
      className={`floating-back-btn${darkMode ? ' dark' : ''}`}
      initial={animated ? { x: -32, opacity: 0 } : false}
      animate={{ x: 0, opacity: 1 }}
      transition={animated ? { type: "spring", stiffness: 400, damping: 24, delay: 0.1 } : { duration: 0 }}
      onClick={onBack}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Back to Main Page"
      style={{
        zIndex: 20,
        padding: 0,
        border: 'none',
        background: 'none',
        outline: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <motion.span
        className="back-btn-bg"
        animate={{
          width: showFull ? 240 : 44,
          borderRadius: showFull ? 24 : 22,
          backgroundColor: bgColor,
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 44,
          width: 44,
          borderRadius: 22,
          background: bgColor,
          position: 'absolute',
          top: 90,
          left: 48,
          boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
          transition: 'background 0.2s',
          overflow: 'hidden',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" style={{ marginLeft: 8, flexShrink: 0 }}>
          <path
            d="M15 18l-6-6 6-6"
            fill="none"
            stroke={fgColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="drop-shadow(0 1px 2px rgba(0,0,0,0.18))"
          />
        </svg>
        <motion.span
          className="back-label"
          initial={{ opacity: 0, x: -10 }}
          animate={showFull ? { opacity: 1, x: 16 } : { opacity: 0, x: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            color: fgColor,
            fontWeight: 600,
            fontSize: '1.04rem',
            marginLeft: 14,
            marginRight: 18,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            userSelect: 'none',
            background: 'transparent',
            display: 'inline-block',
          }}
        >
          {label || "Back to Main Page"}
        </motion.span>
      </motion.span>
    </motion.button>
  );
}

export default BackButton;