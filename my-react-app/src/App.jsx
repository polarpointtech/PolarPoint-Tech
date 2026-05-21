import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Manufacturing from './pages/Manufacturing';
import Technology from './pages/Technology';
import ContactUs from './pages/ContactUs';
import Construction from './pages/Construction';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
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
