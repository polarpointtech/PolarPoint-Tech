import React, { useEffect, useRef } from 'react';
import './Construction1.scss';

// 引入圖片
import bgImg from '../assets/construction1-1.jpg';
import stone1 from '../assets/construction1-2.jpg'; 
import stone2 from '../assets/construction1-3.jpg'; 
import stone3 from '../assets/construction1-4.jpg'; 
import { useLanguage } from '../i18n/LanguageContext';

export default function Construction1() {
  const { isChinese } = useLanguage();
  const scrollRef = useRef(null);
  const dragState = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

  const materials = isChinese
    ? [
      { id: 1, img: stone1, title: '天然大理石', sub: '精選天然石材' },
      { id: 2, img: stone2, title: '高級花崗岩', sub: '室內空間應用' },
      { id: 3, img: stone3, title: '電視牆特色牆方案', sub: '空間設計與石材搭配' },
    ]
    : [
      { id: 1, img: stone1, title: 'Natural Marble', sub: 'Custom stone sourcing' },
      { id: 2, img: stone2, title: 'Premium Granite', sub: 'Interior applications' },
      { id: 3, img: stone3, title: 'Feature Wall Solutions', sub: 'TV wall & feature design' },
    ];

  const handleDragStart = (event) => {
    if (!scrollRef.current) return;
    event.preventDefault();

    dragState.current = {
      isDragging: true,
      startX: event.clientX,
      scrollLeft: scrollRef.current.scrollLeft,
    };
  };

  const handleDragMove = (event) => {
    if (!dragState.current.isDragging || !scrollRef.current) return;
    event.preventDefault();

    const distance = event.clientX - dragState.current.startX;
    scrollRef.current.scrollLeft = dragState.current.scrollLeft - distance;
  };

  const handleDragEnd = () => {
    dragState.current.isDragging = false;
  };

  useEffect(() => {
    window.addEventListener('pointermove', handleDragMove);
    window.addEventListener('pointerup', handleDragEnd);
    window.addEventListener('pointercancel', handleDragEnd);

    return () => {
      window.removeEventListener('pointermove', handleDragMove);
      window.removeEventListener('pointerup', handleDragEnd);
      window.removeEventListener('pointercancel', handleDragEnd);
    };
  }, []);

  return (
    <section className={`construction1-container ${isChinese ? 'construction1-container-zh' : ''}`}>
      {/* 背景層 (獨立模糊) */}
      <div className="bg-layer" style={{ backgroundImage: `url(${bgImg})` }}></div>

      <div className="content-wrapper">
        
        {/* 1. 標題區域 */}
        {/* Top: 100px, Left: 345px (置中) */}
        <h2 className="main-title">
          {isChinese ? (
            <>
              石材與室內<br />應用方案
            </>
          ) : (
            <>
              Stone & Interior<br />Material Solutions
            </>
          )}
        </h2>
        <p className="section-subtitle">
          {isChinese
            ? '大理石・花崗岩・電視牆・客製化應用'
            : 'Marble • Granite • TV Walls • Custom Applications'}
        </p>

        {/* 2. 可滑動卡片區 */}
        {/* Top: 394px, Left: 265px (Start) */}
        <div
          className="materials-carousel"
          ref={scrollRef}
          onPointerDown={handleDragStart}
        >
          {materials.map((item) => (
            <div key={item.id} className="material-card">
              <div className="card-image">
                <img src={item.img} alt={item.title} draggable="false" />
              </div>
              <div className="card-info">
                <h3 className="card-title">{item.title}</h3>
                <span className="card-info-sub">{item.sub}</span>
              </div>
            </div>
          ))}
          {/* 確保右側有空間讓最後一張卡片完全滑出來 */}
          <div className="spacer" style={{ minWidth: '20px' }}></div>
        </div>

        {/* 3. 底部描述文字 */}
        {/* Top: 863px */}
        <div className="bottom-description">
          <p>
            {isChinese
              ? '協助客戶選配高品質石材，應用於室內空間、電視牆、檯面、特色牆面及各類客製化工程需求。'
              : 'We help clients source premium stone materials for interiors, TV walls, countertops, feature walls, and customized projects.'}
          </p>
        </div>

      </div>
    </section>
  );
}
