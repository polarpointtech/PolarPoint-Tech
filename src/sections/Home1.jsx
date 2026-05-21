import React from 'react';
import './Home1.scss';
import home1Background from '../assets/home1-1.png'; 
import img2 from '../assets/home1-2.jpg';
import img3 from '../assets/home1-3.jpg';
import img4 from '../assets/home1-4.jpg';
import img5 from '../assets/home1-5.jpg';
import { useLanguage } from '../i18n/LanguageContext';

export default function Home1() {
  const { isChinese } = useLanguage();

  return (
    <section 
      className="home1-container" 
      style={{ backgroundImage: `url(${home1Background})` }}
    >
      <div className="home1-stage">
        <div className="image-overlay-group">
          <img src={img2} className="img-1-2" alt="Home 1-2" />
          <img src={img3} className="img-1-3" alt="Home 1-3" />
          <img src={img4} className="img-1-4" alt="Home 1-4" />
          <img src={img5} className="img-1-5" alt="Home 1-5" />
        </div>

        <div className="text-content">
          <h1 className="main-title">
            {isChinese ? (
              <>
                整合多元服務，打造現代企業解決方案
              </>
            ) : (
              <>
                Integrated Solutions for Modern <br />
                Business
              </>
            )}
          </h1>
          <p className="sub-description">
            {isChinese ? (
              <>
                從製造加工、採購整合到數位服務，<br />
                協助企業打造更高效的營運方案。
              </>
            ) : (
              <>
                From manufacturing and sourcing to digital services, <br />
                we help businesses build smarter solutions.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
