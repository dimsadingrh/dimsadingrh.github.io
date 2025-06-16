import React, { useEffect, useRef, useState } from 'react';

function CustomScrollbar({ darkMode }) {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [visible, setVisible] = useState(true);
  const fadeTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) : 0;
      setScrollPercent(percent);

      setVisible(true);
      if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
      fadeTimeout.current = setTimeout(() => setVisible(false), 3000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    // Inisialisasi posisi scroll
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    };
  }, []);

  // Tinggi bar ~60% viewport, min 120px
  const barHeight = Math.max(window.innerHeight * 0.6, 120);
  const barTop = (window.innerHeight - barHeight) / 2;
  const thumbHeight = Math.max(barHeight * 0.18, 36); // thumb ~18% bar, min 36px
  const thumbTop = barTop + (barHeight - thumbHeight) * scrollPercent;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: 12,
        height: '100vh',
        zIndex: 999,
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: barTop,
          width: 8,
          height: barHeight,
          background: darkMode ? '#444' : '#ddd',
          borderRadius: 4,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.5s',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: scrollPercent * (barHeight - thumbHeight),
            width: 8,
            height: thumbHeight,
            borderRadius: 4,
            background: darkMode ? '#fff' : '#232323',
            boxShadow: '0 1px 6px 0 rgba(0,0,0,0.08)',
            transition: 'background 0.2s, top 0.2s',
          }}
        />
      </div>
    </div>
  );
}

export default CustomScrollbar;