import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.scss';
import logo from '../assets/header1-1.png';

export default function Header() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const shouldShrink = isShrunk && !isHovered;

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 200);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <aside
      className={`nav-card ${shouldShrink ? 'shrunk' : ''}`}
      aria-label="Main navigation"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="nav-top">
        <button className="logo-area" onClick={() => handleNavigation('/')} type="button">
          <span className="logo-mark">
            <img src={logo} alt="PolarPoint" className="logo-img" />
          </span>
          <span className="logo-text">
            PolarPoint
            <br />
            Tech
          </span>
        </button>
      </div>

      <nav className="nav-menu">
        <button
          className={`menu-item home-item ${location.pathname === '/' ? 'active' : ''}`}
          title="Home"
          onClick={() => handleNavigation('/')}
          type="button"
        >
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5Z" />
          </svg>
          <span className="label">Home</span>
        </button>

        <div className="menu-label" title="Services">
          <div className="left">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="m15.5 8.5-2.2 6.1-5.8 1.9 2.2-6.1 5.8-1.9Z" />
            </svg>
            <span className="label">Services</span>
          </div>
          <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

        <button
          className={`menu-item sub-item ${location.pathname === '/manufacturing' ? 'active' : ''}`}
          title="Manufacturing"
          onClick={() => handleNavigation('/manufacturing')}
          type="button"
        >
          {shouldShrink ? (
            <span className="letter-icon">M</span>
          ) : (
            <>
              <span className="dot" aria-hidden="true"></span>
              <span className="label">Manufacturing</span>
            </>
          )}
        </button>

        <button
          className={`menu-item sub-item ${location.pathname === '/technology' ? 'active' : ''}`}
          title="Digital"
          onClick={() => handleNavigation('/technology')}
          type="button"
        >
          {shouldShrink ? (
            <span className="letter-icon">D</span>
          ) : (
            <>
              <span className="dot" aria-hidden="true"></span>
              <span className="label">Digital</span>
            </>
          )}
        </button>

        <button
          className={`menu-item sub-item ${location.pathname === '/construction' ? 'active' : ''}`}
          title="Construction"
          onClick={() => handleNavigation('/construction')}
          type="button"
        >
          {shouldShrink ? (
            <span className="letter-icon">C</span>
          ) : (
            <>
              <span className="dot" aria-hidden="true"></span>
              <span className="label">Construction</span>
            </>
          )}
        </button>
      </nav>

      <button
        className={`contact-btn ${location.pathname === '/contact' ? 'active' : ''}`}
        title="Contact Us"
        onClick={() => handleNavigation('/contact')}
        type="button"
      >
        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
        </svg>
        <span className="label">Contact Us</span>
      </button>
    </aside>
  );
}
