import React from 'react';
import './Technology2.scss';

import imgPhone from '../assets/technology2-1.png';
import imgLaptop from '../assets/technology2-2.png';
import imgTablet from '../assets/technology2-3.png';
import homeBg from '../assets/home1-1.png';

export default function Technology2() {
  return (
    <section className="technology2-container">
      <div className="text-content">
        <p>
          We assist clients in sourcing high-quality natural stones and 
          marble products, including slabs for construction, 
          countertops, stair materials, and various marble furniture 
          items.
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
          <img src={imgPhone} alt="iPhone" />
        </div>
      </div>
    </section>
  );
}
