import React from 'react';
import './Manufacturing3.scss';
import manu3Img from '../assets/manufacturing3-1.png';
import { useLanguage } from '../i18n/LanguageContext';

export default function Manufacturing3() {
  const { isChinese } = useLanguage();

  return (
    <section className="manufacturing3-container">
      <div className="content-wrapper">
        <div className="image-block">
          <img src={manu3Img} alt="General Component Machining Parts" />
        </div>

        <div className="text-group">
          <h2 className="main-title">
            {isChinese ? (
              <>
                符合實際需求的<br />
                製造加工方案
              </>
            ) : (
              <>
                General<br />
                Component<br />
                Machining<br />
                &amp; Parts Trading
              </>
            )}
          </h2>

          <h3 className="sub-title">
            {isChinese
              ? '精密加工・治具設計・OEM/ODM・工業零件'
              : 'Machining・Tooling・OEM/ODM・Industrial Components'}
          </h3>

          <div className="description">
            <p>
              {isChinese
                ? '提供精密加工、治具設計、OEM/ODM 生產與工業零件支援，滿足各類客製化製造需求。'
                : 'We provide complete CNC turning-milling machining capabilities for aluminum alloys, stainless steel, copper, engineering plastics, and more. OEM/ODM and component sourcing services are also available.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
