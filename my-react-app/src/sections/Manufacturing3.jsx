import React from 'react';
import './Manufacturing3.scss';
import manu3Img from '../assets/manufacturing3-1.png'; // 請確認檔名是否正確

export default function Manufacturing3() {
  return (
    <section className="manufacturing3-container">
      <div className="content-wrapper">
        
        {/* 左側圖片區 */}
        <div className="image-block">
          <img src={manu3Img} alt="General Component Machining Parts" />
        </div>

        {/* 右側文字區 */}
        <div className="text-group">
          <h2 className="main-title">
            General Component<br />
            Machining<br />
            & Parts Trading
          </h2>
          
          <div className="description">
            <p>
              We provide complete CNC turning-milling machining capabilities for aluminum alloys, 
              stainless steel, copper, engineering plastics, and more. OEM/ODM and component 
              sourcing services are also available.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}