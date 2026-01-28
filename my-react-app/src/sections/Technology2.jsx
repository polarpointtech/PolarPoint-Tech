import React from 'react';
import './Technology2.scss';

// 引入圖片
import imgPhone from '../assets/technology2-1.png';
import imgLaptop from '../assets/technology2-2.png';
import imgTablet from '../assets/technology2-3.png';
import imgBg from '../assets/technology2-4.png'; // 背景波浪圖

export default function Technology2() {
  return (
    <section className="technology2-container">
      
      {/* 1. 文字層 (最上層) */}
      <div className="text-content">
        <p>
          We assist clients in sourcing high-quality natural stones and 
          marble products, including slabs for construction, 
          countertops, stair materials, and various marble furniture 
          items.
        </p>
      </div>

      {/* 2. 橢圓形背景層 (位於中間) */}
      <div className="elliptical-bg">
        <div 
          className="bg-image" 
          style={{ backgroundImage: `url(${imgBg})` }}
        ></div>
      </div>

      {/* 3. 裝置層 (絕對定位) */}
      <div className="devices-layer">
        
        {/* Laptop (Middle) - 放在最底層或中間 */}
        <div className="device-item laptop">
          <img src={imgLaptop} alt="MacBook" />
        </div>

        {/* Tablet (Right) */}
        <div className="device-item tablet">
          <img src={imgTablet} alt="iPad" />
        </div>

        {/* Phone (Left) */}
        <div className="device-item phone">
          <img src={imgPhone} alt="iPhone" />
        </div>

      </div>
      
    </section>
  );
}