import React, { useRef } from 'react';
import './Construction1.scss';

// 引入圖片
import bgImg from '../assets/construction1-1.jpg';
import stone1 from '../assets/construction1-2.jpg'; 
import stone2 from '../assets/construction1-3.jpg'; 
import stone3 from '../assets/construction1-4.jpg'; 

export default function Construction1() {
  const scrollRef = useRef(null);

  const materials = [
    { id: 1, img: stone1, title: 'marble', sub: 'We assist clients' },
    { id: 2, img: stone2, title: 'granite', sub: 'We assist clients' },
    { id: 3, img: stone3, title: 'granite', sub: 'We assist clients' },
  ];

  return (
    <section className="construction1-container">
      {/* 背景層 (獨立模糊) */}
      <div className="bg-layer" style={{ backgroundImage: `url(${bgImg})` }}></div>

      <div className="content-wrapper">
        
        {/* 1. 標題區域 */}
        {/* Top: 100px, Left: 345px (置中) */}
        <h2 className="main-title">
          Construction Material<br />Procurement
        </h2>

        {/* 2. 可滑動卡片區 */}
        {/* Top: 394px, Left: 265px (Start) */}
        <div className="materials-carousel" ref={scrollRef}>
          {materials.map((item) => (
            <div key={item.id} className="material-card">
              <div className="card-image">
                <img src={item.img} alt={item.title} />
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
            We assist clients in sourcing high-quality natural stones and marble 
            products, including slabs for construction, countertops, stair materials, 
            and various marble furniture items.
          </p>
        </div>

      </div>
    </section>
  );
}