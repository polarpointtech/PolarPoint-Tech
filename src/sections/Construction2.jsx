import React, { useState } from 'react';
import './Construction2.scss';
import { useLanguage } from '../i18n/LanguageContext';

import bgImg from '../assets/home1-1.png';

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
  const { isChinese } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      id: 0,
      icon: <ChairIcon />,
      label: isChinese ? '室內空間應用' : 'Interior Applications',
      description: isChinese
        ? '適用於住宅與商業空間的石材應用，包括檯面、樓梯、牆面板材與空間細節設計。'
        : 'Interior stone applications for residential and commercial spaces, including countertops, stair materials, wall panels, and furniture details.',
    },
    {
      id: 1,
      icon: <StoneIcon />,
      label: isChinese ? '電視牆與特色牆設計' : 'Feature Wall Projects',
      description: isChinese
        ? '運用大理石、花崗岩與精選石材，打造具質感與視覺焦點的空間牆面設計。'
        : 'TV walls and feature wall solutions using marble, granite, and selected stone materials to create premium interior focal points.',
    },
    {
      id: 2,
      icon: <CaliperIcon />,
      label: isChinese ? '客製化石材方案' : 'Custom Stone Solutions',
      description: isChinese
        ? '依據專案需求、設計風格、尺寸、表面處理與應用情境，提供適合的石材搭配建議。'
        : 'Customized stone sourcing and material selection based on project requirements, design style, size, finish, and application needs.',
    },
  ];

  const getPositionClass = (index) => {
    if (index === activeIndex) return 'pos-center';
    const diff = (index - activeIndex + 3) % 3;
    return diff === 2 ? 'pos-left' : 'pos-right';
  };

  return (
    <section className={`construction2-container ${isChinese ? 'construction2-container-zh' : ''}`}>
      <div className="ellipse-clip">
        <div className="elliptical-bg">
          <div
            className="bg-image"
            style={{ backgroundImage: `url(${bgImg})` }}
          ></div>

        </div>
      </div>

      <div className="content-wrapper">
        <div className="icons-orbit">
          {items.map((item, index) => (
            <button
              key={item.id}
              className={`orbit-item ${getPositionClass(index)}`}
              onClick={() => setActiveIndex(index)}
              aria-label={item.label}
              type="button"
            >
              <span className="icon-circle">{item.icon}</span>
            </button>
          ))}
        </div>

        <div className="service-content">
          <h3>{items[activeIndex].label}</h3>
          <p>{items[activeIndex].description}</p>
        </div>
      </div>
    </section>
  );
}
