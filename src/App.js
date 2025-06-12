import React, { useState, useEffect } from 'react';
import './App.css';

const name = "Dimas Adi Nugroho";

function Header({ darkMode, setDarkMode }) {
  const [bounceIndexes, setBounceIndexes] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let timeouts = [];
    function startWave() {
      for (let i = 0; i < name.length; i++) {
        timeouts.push(
          setTimeout(() => {
            setBounceIndexes((prev) => [...prev, i]);
            setTimeout(() => {
              setBounceIndexes((prev) => prev.filter(idx => idx !== i));
            }, 350); // durasi animasi bounce
          }, i * 60) // delay antar huruf
        );
      }
      // Ulangi setiap 4 detik
      timeouts.push(
        setTimeout(() => {
          setBounceIndexes([]);
          startWave();
        }, 4000)
      );
    }
    startWave();
    return () => timeouts.forEach(t => clearTimeout(t));
  }, []);

  // Tutup menu saat resize ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Switch button morph & geser
  return (
    <header className="header-blur">
      <div className="header-inner">
        <div className="logo-type">
          {name.split('').map((char, idx) => (
            <span
              key={idx}
              className={`logo-char${bounceIndexes.includes(idx) ? ' bounce' : ''}`}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
        {/* Desktop menu */}
        <nav className="header-menu desktop-menu">
          <a href="#contact" className="menu-link">Contact</a>
          <a href="#resume" className="menu-link">Resume</a>
          <button
            className={`mode-switch-toggle${darkMode ? ' dark' : ''}`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Switch mode"
          >
            <span className="toggle-track">
              <span className="toggle-thumb">
                {darkMode ? (
                  // Bulan (tidak terpotong)
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M16.5 11.5C16.5 15.09 13.59 18 10 18C9.13 18 8.3 17.87 7.53 17.64C10.03 17.09 12 14.86 12 12.21C12 9.56 10.03 7.33 7.53 6.78C8.3 6.55 9.13 6.42 10 6.42C13.59 6.42 16.5 9.33 16.5 11.5Z"
                      fill="#FFD600"
                    />
                  </svg>
                ) : (
                  // Matahari tetap
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="5" fill="#FFD600"/>
                    <g stroke="#FFD600" strokeWidth="2" strokeLinecap="round">
                      <line x1="11" y1="1" x2="11" y2="4"/>
                      <line x1="11" y1="18" x2="11" y2="21"/>
                      <line x1="1" y1="11" x2="4" y2="11"/>
                      <line x1="18" y1="11" x2="21" y2="11"/>
                      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
                      <line x1="15.66" y1="15.66" x2="17.78" y2="17.78"/>
                      <line x1="4.22" y1="17.78" x2="6.34" y2="15.66"/>
                      <line x1="15.66" y1="6.34" x2="17.78" y2="4.22"/>
                    </g>
                  </svg>
                )}
              </span>
            </span>
          </button>
        </nav>
        {/* Hamburger button (mobile/tablet) */}
        <button
          className={`ham hamRotate ham1 mobile-ham mobile-only${menuOpen ? ' active' : ''}`}
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg viewBox="0 0 100 100" width="38">
            <path
              className="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902
              0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914
              -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538
              0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118
              -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        </button>
        {/* Mobile menu */}
        <div className={`mobile-menu mobile-only${menuOpen ? ' open' : ''}${darkMode ? ' dark' : ''}`}>
          <a href="#contact" className="menu-link">Contact</a>
          <a href="#resume" className="menu-link">Resume</a>
          <button
            className={`mode-switch-toggle${darkMode ? ' dark' : ''}`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Switch mode"
          >
            <span className="toggle-track">
              <span className="toggle-thumb">
                {darkMode ? (
                  // Bulan (tidak terpotong)
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M16.5 11.5C16.5 15.09 13.59 18 10 18C9.13 18 8.3 17.87 7.53 17.64C10.03 17.09 12 14.86 12 12.21C12 9.56 10.03 7.33 7.53 6.78C8.3 6.55 9.13 6.42 10 6.42C13.59 6.42 16.5 9.33 16.5 11.5Z"
                      fill="#FFD600"
                    />
                  </svg>
                ) : (
                  // Matahari tetap
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="5" fill="#FFD600"/>
                    <g stroke="#FFD600" strokeWidth="2" strokeLinecap="round">
                      <line x1="11" y1="1" x2="11" y2="4"/>
                      <line x1="11" y1="18" x2="11" y2="21"/>
                      <line x1="1" y1="11" x2="4" y2="11"/>
                      <line x1="18" y1="11" x2="21" y2="11"/>
                      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
                      <line x1="15.66" y1="15.66" x2="17.78" y2="17.78"/>
                      <line x1="4.22" y1="17.78" x2="6.34" y2="15.66"/>
                      <line x1="15.66" y1="6.34" x2="17.78" y2="4.22"/>
                    </g>
                  </svg>
                )}
              </span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
    document.body.style.background = darkMode ? '#2C2B28' : '#d9d9d9';
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="main-content"></main>
    </div>
  );
}

export default App;