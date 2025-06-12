import React, { useState } from 'react';
import { motion } from 'framer-motion';

function BackButton({ onBack, darkMode }) {
  const [hovered, setHovered] = useState(false);

  // Warna dinamis
  const bgColor = darkMode ? '#fff' : '#232323';
  const fgColor = darkMode ? '#232323' : '#fff';

  return (
    <motion.button
      className={`floating-back-btn${darkMode ? ' dark' : ''}`}
      initial={{ x: -32, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 24, delay: 0.1 }}
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
        alignItems: 'center',
      }}
    >
      <motion.span
        className="back-btn-bg"
        animate={{
          width: hovered ? 240: 44,
          borderRadius: hovered ? 24 : 22,
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
          overflow: 'hidden', // agar label tidak keluar area
        }}
      >
        {/* Arrow SELALU tampil, tidak ikut animasi */}
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
        {/* Label hanya muncul saat hover, sliding ke kanan */}
        <motion.span
          className="back-label"
          initial={{ opacity: 0, x: -10 }}
          animate={hovered ? { opacity: 1, x: 16 } : { opacity: 0, x: -10 }}
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
          Back to Main Page
        </motion.span>
      </motion.span>
    </motion.button>
  );
}

export default BackButton;