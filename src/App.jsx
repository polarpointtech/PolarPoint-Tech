import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Home from './pages/Home';
import Manufacturing from './pages/Manufacturing';
import Technology from './pages/Technology';
import ContactUs from './pages/ContactUs';
import Construction from './pages/Construction';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
  useEffect(() => {
    const updateStageScale = () => {
      const width = window.innerWidth;
      const isDesktopCanvas = width >= 1025 && width <= 1500;
      const safeLeft = isDesktopCanvas ? 112 : 0;
      const safeTop = isDesktopCanvas ? 52 : 0;
      const scale = isDesktopCanvas
        ? Math.max(0.72, Math.min(1, (width - safeLeft) / 1440))
        : 1;

      document.documentElement.style.setProperty('--desktop-stage-left', `${safeLeft}px`);
      document.documentElement.style.setProperty('--desktop-stage-top', `${safeTop}px`);
      document.documentElement.style.setProperty('--desktop-stage-scale', `${scale}`);
      document.documentElement.style.setProperty('--stage-1077-height', `${1077 * scale + safeTop}px`);
    };

    updateStageScale();
    window.addEventListener('resize', updateStageScale);
    return () => window.removeEventListener('resize', updateStageScale);
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <SEO />
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/manufacturing" element={<Manufacturing />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/construction" element={<Construction />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
