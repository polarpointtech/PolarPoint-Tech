import React from 'react';
import './Home4.scss';
import { useLanguage } from '../i18n/LanguageContext';

const keywords = {
  en: [
    'CUSTOM MANUFACTURING',
    'RAPID PROTOTYPING',
    'INDUSTRIAL SOLUTIONS',
    'MATERIAL SOURCING',
    'OEM / ODM SERVICES',
    'DIGITAL SOLUTIONS',
    'STONE & INTERIOR MATERIALS',
    'AUTOMATION SUPPORT',
    'FUNCTIONAL PARTS',
    'PRODUCTION SUPPORT',
  ],
  zh: [
    '客製化製造',
    '快速打樣',
    '工業解決方案',
    '材料採購',
    'OEM / ODM 服務',
    '數位解決方案',
    '石材與室內材料',
    '自動化支援',
    '功能零件',
    '製造支援',
  ],
};

export default function Home4() {
  const { isChinese } = useLanguage();
  const items = isChinese ? keywords.zh : keywords.en;

  return (
    <section className={`home4-marquee ${isChinese ? 'home4-marquee-zh' : ''}`}>
      <div className="marquee-track">
        {[0, 1, 2, 3].map((groupIndex) => (
          <div className="marquee-group" key={`group-${groupIndex}`} aria-hidden={groupIndex === 1}>
            {items.map((item) => (
              <React.Fragment key={`${groupIndex}-${item}`}>
                <span className="keyword-item">{item}</span>
                <span className="keyword-separator">•</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
