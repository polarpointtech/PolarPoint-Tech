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
            Manufacturing<br />
            Built for Real-World Applications
          </h2>

          <h3 className="sub-title">
            Machining • Tooling • OEM/ODM • Industrial Components
          </h3>
          
          <div className="description">
            <p>
              We provide machining, tooling design,
              OEM/ODM production, and industrial component
              support for customized manufacturing needs.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
