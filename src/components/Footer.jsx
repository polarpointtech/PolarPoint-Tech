import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '../assets/header1-1.png';
import { useLanguage } from '../i18n/LanguageContext';

const scrollTop = () => window.scrollTo({ top: 0, left: 0 });

export default function Footer() {
  const { isChinese } = useLanguage();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <button className="footer-mobile-brand" type="button" aria-label={isChinese ? '極點科技有限公司 PolarPoint Tech' : 'PolarPoint Tech'}>
          <span className="footer-logo-mark">
            <img src={logo} alt={isChinese ? '極點科技有限公司 PolarPoint Tech' : 'PolarPoint Tech'} />
          </span>
          <span>
            {isChinese ? (
              <>
                極點科技有限公司
                <small>PolarPoint Tech</small>
              </>
            ) : (
              <>
                PolarPoint
                <br />
                Tech
              </>
            )}
          </span>
        </button>

        <div className="left-section">
          <a className="footer-email-link" href="mailto:polarpointtech@gmail.com">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            <span>polarpointtech@gmail.com</span>
          </a>

          <p className="copyright">
            © 2025 {isChinese ? '極點科技有限公司 PolarPoint Tech' : 'PolarPoint Tech'}. All rights reserved.
          </p>
        </div>

        <div className="right-section">
          <Link to="/" className="footer-link" onClick={scrollTop}>Home</Link>
          <Link to="/manufacturing" className="footer-link" onClick={scrollTop}>Manufacturing</Link>
          <Link to="/technology" className="footer-link" onClick={scrollTop}>Digital Services</Link>
          <Link to="/construction" className="footer-link" onClick={scrollTop}>Construction</Link>
          <Link to="/contact" className="footer-link" onClick={scrollTop}>Contact</Link>
        </div>
      </div>
    </footer>
  );
}
