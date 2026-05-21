import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, OrbitControls, Stage } from '@react-three/drei';
import './Manufacturing1.scss';
import resinImg from '../assets/manufacturing1-2.png';
import uvImg from '../assets/manufacturing1-3.png';
import metalImg from '../assets/manufacturing1-4.png';
import RobotModelObj from '../components/RobotModelObj';
import { useLanguage } from '../i18n/LanguageContext';

export default function Manufacturing1() {
  const { isChinese } = useLanguage();

  return (
    <section className="manufacturing1-container" id="manufacturing">
      <div className="content-wrapper">
        <div className={`title-group ${isChinese ? 'title-group-zh' : ''}`}>
          <h1 className="main-title">
            {isChinese ? (
              <>
                高精度 3D 列印解決方案<br />滿足原型開發與工業需求
              </>
            ) : (
              <>
                Precision 3D Printing<br />Built for Industrial Needs
              </>
            )}
          </h1>
          <h2 className="sub-title">
            {isChinese
              ? '快速打樣・功能性製作・少量客製生產'
              : 'Rapid Prototyping・Functional Parts・Low-Volume Production'}
          </h2>
        </div>

        <div className="description-block">
          <p>
            {isChinese
              ? '從產品打樣到少量生產，提供功能性、工業應用與客製化需求的可靠 3D 列印方案。'
              : 'From prototyping to low-volume production, we deliver reliable 3D printing solutions for functional parts, industrial applications, and custom manufacturing needs.'}
          </p>
        </div>

        <div className="hero-3d-container">
          <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 45 }}>
            <Suspense fallback={null}>
              <Stage environment="city" intensity={0.5} adjustCamera={false} shadows={false}>
                <RobotModelObj scale={4.5} position={[0.35, -4.75, 0]} />
              </Stage>
              <ContactShadows position={[0.35, -4.87, 0]} opacity={0.34} scale={12.5} blur={2.8} far={4} />
            </Suspense>

            <OrbitControls autoRotate autoRotateSpeed={1.0} enableZoom={false} enablePan={false} />
          </Canvas>
        </div>

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
