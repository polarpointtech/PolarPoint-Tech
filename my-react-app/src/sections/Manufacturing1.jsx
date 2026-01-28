import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import './Manufacturing1.scss';

// 圖片引用 (移除原本的 heroImg)
import resinImg from '../assets/manufacturing1-2.png'; // Resin
import uvImg from '../assets/manufacturing1-3.png';    // UV-Curing
import metalImg from '../assets/manufacturing1-4.png'; // Metal

// 引入 3D 模型組件
import RobotModelObj from '../components/RobotModelObj';

export default function Manufacturing1() {
  return (
    <section className="manufacturing1-container" id="manufacturing">
      
      {/* 這是 1440px 的基準畫布 */}
      <div className="content-wrapper">
        
        {/* 1. 標題區域 (維持不變) */}
        <div className="title-group">
          <h1 className="main-title">
            3D Printing<br />Services
          </h1>
          <h2 className="sub-title">
            (Resin / UV-Curing / Metal)
          </h2>
        </div>

        {/* 2. 描述文字 (維持不變) */}
        <div className="description-block">
          <p>
            We offer a wide range of 3D printing processes, including resin printing (SLA/DLP), 
            UV-curing technologies, and metal printing (SLM/DMLS). Our capabilities support 
            prototype development, appearance models, functional parts, and small-batch production.
          </p>
        </div>

        {/* 🌟 3. 大機器人 3D 模型區 (取代原本的圖片) */}
        <div className="hero-3d-container">
          <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 45 }}>
            <Suspense fallback={null}>
              {/* Stage 提供專業打光，讓模型看起來更立體 */}
              <Stage environment="city" intensity={0.5} adjustCamera={false}>
                <RobotModelObj /> 
              </Stage>
            </Suspense>

            {/* 加入控制器：自動旋轉 + 允許縮放 */}
            <OrbitControls autoRotate autoRotateSpeed={1.0} enableZoom={true} />
          </Canvas>
        </div>

        {/* 4. 製程卡片區 (維持不變) */}
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