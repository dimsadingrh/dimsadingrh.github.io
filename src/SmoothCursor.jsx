import React, { useEffect, useRef, useState } from "react";

export default function SmoothCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const primaryRef = useRef(null);
  const secondaryRef = useRef(null);

  useEffect(() => {
    // Deteksi mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 700 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let sx, px, sy, py;
    const base_speed = 50;

    // Inisialisasi posisi awal di tengah layar
    px = sx = window.innerWidth / 2;
    py = sy = window.innerHeight / 2;

    // Mouse move event
    const handleMouseMove = (e) => {
      px = e.clientX;
      py = e.clientY;
      if (primaryRef.current) {
        primaryRef.current.style.top = `${py}px`;
        primaryRef.current.style.left = `${px}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Secondary render loop
    let last = Date.now();
    const render = () => {
      let now = Date.now();
      let delta = (now - last) / 16;
      last = now;

      let dx = px - sx, dy = py - sy;
      let dir = Math.atan2(dy, dx);
      let dis = Math.sqrt(dx * dx + dy * dy);

      // Ease-out transition
      let t = Math.min(dis / 500, 1);
      let speed = base_speed * ((t * t * (3.0 - 2.0 * t)) * 0.94 + 0.06) * delta;

      sx += Math.cos(dir) * speed;
      sy += Math.sin(dir) * speed;
      if (dis <= 4) { sx = px; sy = py; }

      if (secondaryRef.current) {
        secondaryRef.current.style.top = `${sy}px`;
        secondaryRef.current.style.left = `${sx}px`;
      }

      requestAnimationFrame(render);
    };
    render();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div id="cursor">
      <div className="secondary" ref={secondaryRef}></div>
      <div className="primary" ref={primaryRef}></div>
    </div>
  );
}