import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.scss';
import logo from '../assets/header1-1.png';
import { useLanguage } from '../i18n/LanguageContext';

const EarthIcon = () => (
  <svg className="earth-icon" viewBox="0 0 32 32" aria-hidden="true">
    <defs>
      <linearGradient id="earthOcean" x1="6" y1="4" x2="26" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5EDAF2" />
        <stop offset="0.55" stopColor="#1E90DD" />
        <stop offset="1" stopColor="#1357A8" />
      </linearGradient>
      <linearGradient id="earthLand" x1="8" y1="7" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9DE27D" />
        <stop offset="1" stopColor="#2D9C6B" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="13" fill="url(#earthOcean)" />
    <path
      d="M8.4 10.6c1.2-2.2 3.7-3.8 6.4-4.1 1.5-.2 2.7.3 3.4 1.1.8.9.3 2-1.1 2.3l-2.2.5c-1.4.3-1.8 1.5-.8 2.4l1.5 1.4c.8.8.6 2.1-.4 2.6l-2.3 1.2c-1.2.6-1.6 1.7-.9 2.8l1.1 1.8c.5.9-.4 1.9-1.4 1.5-3.7-1.4-6.3-4.9-6.3-9 0-1.6.4-3.1 1-4.5Z"
      fill="url(#earthLand)"
    />
    <path
      d="M20.5 8.1c3.8 1.5 6.4 5.2 6.4 9.4 0 3.4-1.7 6.4-4.4 8.2-.9.6-1.9-.2-1.7-1.3l.5-2.2c.2-.9-.2-1.8-1-2.2l-2.2-1.1c-1.1-.6-1.1-2.1-.1-2.8l2.4-1.5c.9-.6 1.2-1.7.6-2.6l-1.5-2.4c-.5-.8.1-1.8 1-1.5Z"
      fill="url(#earthLand)"
      opacity="0.92"
    />
    <path d="M16 3c-3.1 3.4-4.7 7.7-4.7 13S12.9 25.6 16 29" fill="none" stroke="rgba(255,255,255,.38)" strokeWidth="1" />
    <path d="M16 3c3.1 3.4 4.7 7.7 4.7 13S19.1 25.6 16 29" fill="none" stroke="rgba(255,255,255,.32)" strokeWidth="1" />
    <path d="M4.4 16h23.2" fill="none" stroke="rgba(255,255,255,.34)" strokeWidth="1" />
    <path d="M16 3a13 13 0 1 1 0 26 13 13 0 0 1 0-26Z" fill="none" stroke="rgba(255,255,255,.62)" strokeWidth="1.4" />
  </svg>
);

export default function Header() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, languageLabel, isChinese } = useLanguage();
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

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-open', isMobileMenuOpen);
    return () => document.body.classList.remove('mobile-nav-open');
  }, [isMobileMenuOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'auto' });
    setIsLanguageOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleLanguageChange = (nextLanguage) => {
    setLanguage(nextLanguage);
    setIsLanguageOpen(false);
  };

  const navText = isChinese
    ? {
      home: '首頁',
      services: '服務項目',
      manufacturing: '製造服務',
      digital: '數位服務',
      construction: '建材工程',
      contact: '聯絡我們',
    }
    : {
      home: 'Home',
      services: 'Services',
      manufacturing: 'Manufacturing',
      digital: 'Digital',
      construction: 'Construction',
      contact: 'Contact Us',
    };

  return (
    <>
      <button
        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
        type="button"
        aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <button
        className={`mobile-nav-backdrop ${isMobileMenuOpen ? 'is-open' : ''}`}
        type="button"
        aria-label="Close navigation"
        onClick={() => setIsMobileMenuOpen(false)}
      />

    <aside
      className={`nav-card ${shouldShrink ? 'shrunk' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}
      aria-label="Main navigation"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className="mobile-nav-close"
        type="button"
        aria-label="Close navigation"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <span></span>
        <span></span>
      </button>

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
          <span className="label">{navText.home}</span>
        </button>

        <div className="menu-label" title="Services">
          <div className="left">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="m15.5 8.5-2.2 6.1-5.8 1.9 2.2-6.1 5.8-1.9Z" />
            </svg>
            <span className="label">{navText.services}</span>
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
              <span className="label">{navText.manufacturing}</span>
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
              <span className="label">{navText.digital}</span>
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
              <span className="label">{navText.construction}</span>
            </>
          )}
        </button>
      </nav>

      <div className={`language-switcher ${isLanguageOpen ? 'open' : ''}`}>
        <button
          className="language-trigger"
          type="button"
          title="Language"
          aria-label="Change language"
          aria-expanded={isLanguageOpen}
          onClick={() => setIsLanguageOpen((isOpen) => !isOpen)}
        >
          <EarthIcon />
          <span className="label">{languageLabel}</span>
        </button>

        {isLanguageOpen && (
          <div className="language-menu">
            <button
              className={language === 'en' ? 'active' : ''}
              type="button"
              onClick={() => handleLanguageChange('en')}
            >
              <span>English</span>
              <small>EN</small>
            </button>
            <button
              className={language === 'zh' ? 'active' : ''}
              type="button"
              onClick={() => handleLanguageChange('zh')}
            >
              <span>繁體中文</span>
              <small>中文</small>
            </button>
          </div>
        )}
      </div>

      <button
        className={`contact-btn ${location.pathname === '/contact' ? 'active' : ''}`}
        title="Contact Us"
        onClick={() => handleNavigation('/contact')}
        type="button"
      >
        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
        </svg>
        <span className="label">{navText.contact}</span>
      </button>
    </aside>
    </>
  );
}
