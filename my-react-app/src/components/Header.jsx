import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.scss';
import logo from '../assets/header1-1.png'; 

export default function Header() {
  const [isShrunk, setIsShrunk] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className={`nav-card ${isShrunk ? 'shrunk' : ''}`}>
      
      {/* Logo */}
      <div className="nav-top">
        <div className="logo-area" onClick={() => handleNavigation('/')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="PolarPoint" className="logo-img" />
          <span className="logo-text">PolarPoint<br/>Tech</span>
        </div>
      </div>

      {/* Menu */}
      <div className="nav-menu">
        {/* Home */}
        <button 
          className={`menu-item ${location.pathname === '/' ? 'active' : ''}`} 
          title="Home"
          onClick={() => handleNavigation('/')}
        >
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
          <span className="label">Home</span>
        </button>

        <div className="menu-label" title="Services">
          <div className="left">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
            </svg>
            <span className="label">Services</span>
          </div>
          <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        {/* Manufacturing */}
        <button 
          className={`menu-item sub-item ${location.pathname === '/manufacturing' ? 'active' : ''}`}
          title="Manufacturing"
          onClick={() => handleNavigation('/manufacturing')}
        >
          {isShrunk ? (
            <span className="letter-icon">M</span>
          ) : (
            <>
              <span className="dot">•</span>
              <span className="label">Manufacturing</span>
            </>
          )}
        </button>

        {/* 🌟 Construction 按鈕：連結到 /construction */}
        <button 
          className={`menu-item sub-item ${location.pathname === '/construction' ? 'active' : ''}`}
          title="Construction"
          onClick={() => handleNavigation('/construction')}
        >
          {isShrunk ? (
            <span className="letter-icon">C</span>
          ) : (
            <>
              <span className="dot">•</span>
              <span className="label">Construction</span>
            </>
          )}
        </button>

        {/* Digital */}
        <button 
          className={`menu-item sub-item ${location.pathname === '/technology' ? 'active' : ''}`}
          title="Digital"
          onClick={() => handleNavigation('/technology')}
        >
          {isShrunk ? (
            <span className="letter-icon">D</span>
          ) : (
            <>
              <span className="dot">•</span>
              <span className="label">Digital</span>
            </>
          )}
        </button>
      </div>

      {/* Contact Us */}
      <button 
        className={`contact-btn ${location.pathname === '/contact' ? 'active' : ''}`}
        title="Contact Us"
        onClick={() => handleNavigation('/contact')}
      >
        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span className="label">Contact Us</span>
      </button>

    </div>
  );
}