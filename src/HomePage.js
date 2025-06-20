import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

// Star SVG Gradient Component
function StarGradient({ size = 90, style = {}, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 90 90"
      fill="none"
      style={style}
      className={className}
    >
      <defs>
        <radialGradient id="star-gradient" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#FFD600" stopOpacity="1" />
          <stop offset="80%" stopColor="#FF6B00" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFD600" stopOpacity="0" />
        </radialGradient>
      </defs>
      <polygon
        points="45,5 55,35 88,35 60,55 70,85 45,65 20,85 30,55 2,35 35,35"
        fill="url(#star-gradient)"
        opacity="0.85"
      />
    </svg>
  );
}

// Blob Shape
function Blob({ color = "#FFD600", size = 120, style = {}, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      style={style}
      className={className}
    >
      <defs>
        <radialGradient id="blob-gradient" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.3" />
        </radialGradient>
      </defs>
      <path
        fill="url(#blob-gradient)"
        d="M44.8,-67.8C57.9,-60.2,67.7,-48.2,74.7,-34.7C81.7,-21.2,85.9,-6.2,82.8,7.6C79.7,21.4,69.3,33.9,58.2,44.6C47.1,55.3,35.3,64.2,21.7,69.2C8.1,74.2,-7.3,75.3,-22.2,71.2C-37.1,67.1,-51.5,57.8,-61.6,45.1C-71.7,32.4,-77.5,16.2,-77.2,0.2C-76.9,-15.8,-70.5,-31.7,-60.1,-43.6C-49.7,-55.5,-35.2,-63.4,-20.1,-69.1C-5,-74.8,10.7,-78.3,25.7,-75.2C40.7,-72.1,54.8,-62.5,44.8,-67.8Z"
        transform="translate(100 100)"
        opacity="0.7"
      />
    </svg>
  );
}

// Wave Shape
function Wave({ color = "#FFD600", height = 80, style = {}, className = "" }) {
  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 1440 ${height}`}
      fill="none"
      style={style}
      className={className}
    >
      <path
        d={`M0,${height / 2} C360,${height} 1080,0 1440,${height / 2} L1440,${height} L0,${height} Z`}
        fill={color}
        opacity="0.13"
      />
    </svg>
  );
}

const bigTextStyle = (darkMode, extra = {}) => ({
  fontSize: 'clamp(2.2rem, 7vw, 5.5rem)',
  fontWeight: 900,
  color: darkMode ? '#fff' : '#232323',
  margin: 0,
  lineHeight: 1.08,
  letterSpacing: '-0.03em',
  textShadow: darkMode ? '0 2px 16px #23232344' : '0 2px 16px #fff8',
  ...extra,
});

const subTextStyle = (darkMode, extra = {}) => ({
  fontSize: 'clamp(1.1rem, 2.5vw, 2rem)',
  color: darkMode ? '#FFD600' : '#50493d',
  margin: '32px 0 0 0',
  fontWeight: 600,
  letterSpacing: '0.01em',
  ...extra,
});

function HomePage({ darkMode }) {
  return (
    <ParallaxProvider>
      <div
        style={{
          minHeight: '100vh',
          background: darkMode
            ? 'linear-gradient(120deg, #232323 0%, #2c2b28 100%)'
            : 'linear-gradient(120deg, #e0e7ff 0%, #f8fafc 100%)',
        }}
      >
        {/* Section 1: Hero Big Text + Star */}
        <section className="homepage-section">
          <div className="homepage-row" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            flexWrap: 'wrap',
            width: '100%',
            marginBottom: 32,
          }}>
            <Parallax speed={-30}>
              <motion.h1
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1 }}
                viewport={{ once: true, amount: 0.7 }}
                style={bigTextStyle(darkMode)}
              >
                <span style={{ color: darkMode ? '#FFD600' : '#50493d' }}>WELCOME</span> TO <br />
                <span style={{ color: darkMode ? '#fff' : '#232323' }}>MY PORTFOLIO</span>
              </motion.h1>
            </Parallax>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 360 }}
              transition={{ duration: 1.2, type: "spring" }}
              viewport={{ once: true, amount: 0.7 }}
              style={{ flexShrink: 0 }}
            >
              <StarGradient size={80} />
            </motion.div>
          </div>
          <Parallax speed={10}>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true, amount: 0.7 }}
              style={subTextStyle(darkMode)}
            >
              Scroll down to discover more about me, my skills, and my inspirations!
            </motion.p>
          </Parallax>
          {/* Decorative wave */}
          <div style={{ width: '100%', marginTop: 32 }}>
            <Wave color={darkMode ? "#FFD600" : "#50493d"} height={60} />
          </div>
        </section>

        {/* Section 2: Animated Big Text + Shape */}
        <section className="homepage-section">
          <div style={{
            position: 'relative',
            width: '100%',
            minHeight: 120,
            marginBottom: 24,
          }}>
            <Parallax speed={-20}>
              <motion.h2
                initial={{ opacity: 0, x: -180 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1 }}
                viewport={{ once: true, amount: 0.6 }}
                style={bigTextStyle(darkMode, {
                  fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                  color: darkMode ? '#FFD600' : '#50493d',
                  marginTop: 0,
                })}
              >
                BUILDING <span style={{ color: darkMode ? '#fff' : '#232323' }}>INTERACTIVE</span> EXPERIENCES
              </motion.h2>
            </Parallax>
            {/* Ikonik Shape: Animated Blob */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1.1, opacity: 0.7 }}
              transition={{ duration: 1.2, type: "spring" }}
              viewport={{ once: true, amount: 0.6 }}
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                zIndex: 0,
              }}
            >
              <Blob size={70} color={darkMode ? "#FFD600" : "#50493d"} />
            </motion.div>
          </div>
          <Parallax speed={5}>
            <motion.p
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true, amount: 0.6 }}
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 2rem)',
                color: darkMode ? '#b0b3c6' : '#444',
                margin: '32px 0 0 0',
                maxWidth: 600,
              }}
            >
              I love building beautiful, interactive, and high-performance web experiences. Let’s create something amazing together!
            </motion.p>
          </Parallax>
        </section>

        {/* Section 3: Gallery Parallax with Shape */}
        <section className="homepage-section">
          <Parallax speed={-10}>
            <motion.h2
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              style={bigTextStyle(darkMode, {
                fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                marginTop: 0,
              })}
            >
              Gallery & Inspiration
            </motion.h2>
          </Parallax>
          <div className="homepage-row" style={{
            display: 'flex',
            gap: 32,
            marginTop: 40,
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
            <Parallax speed={10}>
              <motion.img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                alt="Gallery 1"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1 }}
                viewport={{ once: true, amount: 0.5 }}
                style={{
                  width: 'clamp(180px, 30vw, 340px)',
                  borderRadius: 32,
                  margin: 0,
                  boxShadow: '0 4px 16px rgba(31,38,135,0.10)',
                  objectFit: 'cover',
                }}
              />
            </Parallax>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1.1, opacity: 0.7 }}
              transition={{ duration: 1.2, type: "spring" }}
              viewport={{ once: true, amount: 0.5 }}
              style={{
                width: 70,
                height: 70,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 70% 70%, #FFD600 0%, #FF6B00 80%, transparent 100%)',
                filter: 'blur(2px)',
              }}
            />
            <Parallax speed={-10}>
              <motion.img
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80"
                alt="Gallery 2"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                style={{
                  width: 'clamp(180px, 30vw, 340px)',
                  borderRadius: 32,
                  margin: 0,
                  boxShadow: '0 4px 16px rgba(31,38,135,0.10)',
                  objectFit: 'cover',
                }}
              />
            </Parallax>
          </div>
        </section>

        {/* Section 4: Outro Big Text + Star */}
        <section className="homepage-section">
          <div className="homepage-row" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            flexWrap: 'wrap',
            width: '100%',
          }}>
            <Parallax speed={-15}>
              <motion.h2
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1 }}
                viewport={{ once: true, amount: 0.6 }}
                style={bigTextStyle(darkMode, {
                  fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                  color: darkMode ? '#FFD600' : '#50493d',
                  marginTop: 0,
                })}
              >
                LET'S <span style={{ color: darkMode ? '#fff' : '#232323' }}>CONNECT</span> & CREATE
              </motion.h2>
            </Parallax>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 360 }}
              transition={{ duration: 1.2, type: "spring" }}
              viewport={{ once: true, amount: 0.7 }}
              style={{ flexShrink: 0 }}
            >
              <StarGradient size={60} />
            </motion.div>
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
}

export default HomePage;