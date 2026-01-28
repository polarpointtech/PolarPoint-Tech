import React, { useState } from 'react';
import './Construction2.scss';

// 引入背景圖
import bgImg from '../assets/construction2-1.png';

// SVG Icons
const ChairIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0v5Z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
);
const StoneIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h5l2 5 3-10 4 8 3-5h3"/></svg>
);
const CaliperIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h18"/><path d="M5 4v16"/><path d="M19 4v16"/><path d="M5 8h14"/><path d="M5 16h3"/><path d="M19 16h-3"/></svg>
);

export default function Construction2() {
  const [activeIndex, setActiveIndex] = useState(1); // 預設中間 (Raw Stone)

  const items = [
    { id: 0, icon: <ChairIcon />, label: 'Furniture' },
    { id: 1, icon: <StoneIcon />, label: 'Raw Stone' },
    { id: 2, icon: <CaliperIcon />, label: 'Measurement' },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const getPositionClass = (index) => {
    if (index === activeIndex) return 'pos-center';
    const diff = (index - activeIndex + 3) % 3;
    return diff === 2 ? 'pos-left' : 'pos-right';
  };

  return (
    <section className="construction2-container">
      
      {/* 橢圓形背景容器 */}
      <div className="elliptical-bg">
        <div 
          className="bg-image" 
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
        
        <div className="text-content">
          <p>
            We assist clients in sourcing high-quality natural stones and marble 
            products, including slabs for construction, countertops, stair materials, 
            and various marble furniture items.
          </p>
        </div>
      </div>

      {/* 互動球體 */}
      <div className="content-wrapper">
        <div className="icons-orbit">
          {items.map((item, index) => (
            <div 
              key={item.id}
              className={`orbit-item ${getPositionClass(index)}`}
              onClick={() => handleItemClick(index)}
            >
              <div className="icon-circle">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}