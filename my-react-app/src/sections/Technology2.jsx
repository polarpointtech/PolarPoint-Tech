import React from 'react';
import './Technology2.scss';

import imgLaptop from '../assets/technology2-2.png';
import imgTablet from '../assets/technology2-3.png';
import homeBg from '../assets/home1-1.png';
import { useLanguage } from '../i18n/LanguageContext';

export default function Technology2() {
  const { isChinese } = useLanguage();

  return (
    <section className="technology2-container">
      <div className="text-content">
        <p>
          {isChinese ? (
            <>
              協助企業打造網站、數位系統與自動化方案，提升營運效率、
              強化品牌形象，並支持長期成長。
            </>
          ) : (
            <>
              We help businesses build websites,
              digital systems, and automation solutions
              to improve efficiency, strengthen branding,
              and support long-term growth.
            </>
          )}
        </p>
      </div>

      <div className="elliptical-bg">
        <div className="bg-viewport">
          <div
            className="bg-image"
            style={{ backgroundImage: `url(${homeBg})` }}
          />
        </div>
      </div>

      <div className="devices-layer">
        <div className="device-item laptop">
          <img src={imgLaptop} alt="MacBook" />
        </div>

        <div className="device-item tablet">
          <img src={imgTablet} alt="iPad" />
        </div>

        <div className="device-item phone">
          <div className="phone-screen">
            <span className="phone-island" />
            <span className="phone-card card-a" />
            <span className="phone-card card-b" />
            <span className="phone-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}
