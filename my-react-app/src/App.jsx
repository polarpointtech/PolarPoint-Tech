import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

// 🌟 1. 這裡忘了引入 Footer，請補上 (假設您的 Footer 放在 components 資料夾)
import Footer from './components/Footer';

// 引入 Pages
import Home from './pages/Home';
import Manufacturing from './pages/Manufacturing';
import Technology from './pages/Technology';
import ContactUs from './pages/ContactUs';
import Construction from './pages/Construction';

function App() {
  return (
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

        {/* 🌟 2. 這裡原本少了 Footer，請補在 main 結束之後 */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;