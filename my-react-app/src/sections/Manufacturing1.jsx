import React from 'react';
import './Manufacturing1.scss';

// 圖片引用
import heroImg from '../assets/manufacturing1-1.png'; // 大機器人
import resinImg from '../assets/manufacturing1-2.png'; // Resin
import uvImg from '../assets/manufacturing1-3.png';    // UV-Curing
import metalImg from '../assets/manufacturing1-4.png'; // Metal

export default function Manufacturing1() {
  return (
    <section className="manufacturing1-container" id="manufacturing">
      
      {/* 這是 1440px 的基準畫布 */}
      <div className="content-wrapper">
        
        {/* 1. 標題區域 (Title Group) */}
        <div className="title-group">
          <h1 className="main-title">
            3D Printing<br />Services
          </h1>
          <h2 className="sub-title">
            (Resin / UV-Curing / Metal)
          </h2>
        </div>

        {/* 2. 描述文字 (Description) - 獨立定位 */}
        <div className="description-block">
          <p>
            We offer a wide range of 3D printing processes, including resin printing (SLA/DLP), 
            UV-curing technologies, and metal printing (SLM/DMLS). Our capabilities support 
            prototype development, appearance models, functional parts, and small-batch production.
          </p>
        </div>

        {/* 3. 大機器人圖片 */}
        <div className="hero-image-container">
          <img src={heroImg} alt="3D Model Robot" />
        </div>

        {/* 4. 製程卡片區 (Resin, UV, Metal) */}
        <div className="process-cards-container">
          
          <div className="process-card card-resin" style={{ backgroundImage: `url(${resinImg})` }}>
            <div className="card-label">Resin</div>
          </div>

          <div className="process-card card-uv" style={{ backgroundImage: `url(${uvImg})` }}>
            <div className="card-label">UV-Curing</div>
          </div>

          <div className="process-card card-metal" style={{ backgroundImage: `url(${metalImg})` }}>
            <div className="card-label">Metal</div>
          </div>

        </div>

      </div>
    </section>
  );
}