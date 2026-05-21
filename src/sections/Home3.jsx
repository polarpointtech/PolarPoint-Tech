import React, { useState } from 'react';
import './Home3.scss';
import roboticArm from '/src/assets/home3-2.jpg';
import { useLanguage } from '../i18n/LanguageContext';

const IconBase = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const Icons = {
  Cog: () => (
    <IconBase>
      <path d="M5 17.5h14" />
      <path d="M7 17.5V8.8h10v8.7" />
      <path d="M9.5 8.8V6.5h5v2.3" />
      <circle cx="12" cy="13.2" r="2.2" />
      <path d="M12 10.1v-1.4M12 17.7v-1.4M15.1 13.2h1.4M7.5 13.2h1.4" stroke="#ff8c6b" />
    </IconBase>
  ),
  Factory: () => (
    <IconBase>
      <path d="M4.5 18.8h15" />
      <path d="M6 18.8V8.7l4.2 2.5V8.7l4.2 2.5V6h3.6v12.8" />
      <path d="M8.2 15.1h1.6M12 15.1h1.6M15.8 15.1h1.6" />
      <path d="M7.2 6.3h3.6" stroke="#ff8c6b" />
      <circle cx="18" cy="4.5" r="1" fill="#ff8c6b" stroke="none" />
    </IconBase>
  ),
  Hammer: () => (
    <IconBase>
      <path d="M5 17.5h10.2" />
      <path d="M7.2 14.2h8.6l2.2 3.3" />
      <path d="M8.8 10.8h6.8" />
      <path d="M16.7 8.5 19 6.2" />
      <path d="M14.7 10.8 18 7.5" />
      <path d="M6.8 14.2 5 17.5" stroke="#ff8c6b" />
      <circle cx="17.8" cy="7.4" r="1.1" fill="#ff8c6b" stroke="none" />
    </IconBase>
  ),
  Wrench: () => (
    <IconBase>
      <path d="M7.1 18.2h9.8" />
      <path d="M8.8 18.2V8.4h6.4v9.8" />
      <path d="M6.6 11.2h2.2M15.2 11.2h2.2" />
      <path d="M6.6 15.2h2.2M15.2 15.2h2.2" />
      <path d="M12 6.1v12.1" stroke="#ff8c6b" />
      <circle cx="12" cy="6.1" r="1.2" fill="#ff8c6b" stroke="none" />
    </IconBase>
  ),
  Machine: () => (
    <IconBase>
      <path d="M4.5 18.5h15" />
      <path d="M7.5 18.5v-5l3.2-3.2" />
      <path d="m10.7 10.3 3.1 3.1 3.2-3.2" />
      <circle cx="10.7" cy="10.3" r="1.5" />
      <circle cx="17" cy="10.2" r="1.5" />
      <path d="m14.4 13.9-2.4 4.6" stroke="#ff8c6b" />
      <circle cx="14.4" cy="13.9" r="1.1" fill="#ff8c6b" stroke="none" />
    </IconBase>
  ),
  Consultation: () => (
    <IconBase>
      <path d="M5 6.5h14v8.2H9.5L5 18V6.5Z" />
      <path d="M8.5 9.6h5.8M8.5 12h3.6" />
      <path d="M16.2 10.8h2.3" stroke="#ff8c6b" />
      <circle cx="18.8" cy="10.8" r="1" fill="#ff8c6b" stroke="none" />
    </IconBase>
  ),
  Nut: () => (
    <IconBase>
      <path d="m12 4.2 6.8 3.9v7.8L12 19.8l-6.8-3.9V8.1L12 4.2Z" />
      <circle cx="12" cy="12" r="2.8" />
      <path d="M12 4.2v2.3M18.8 8.1l-2 1.1M5.2 15.9l2-1.1" stroke="#ff8c6b" />
    </IconBase>
  ),
  Cpu: () => (
    <IconBase>
      <rect x="7.1" y="7.1" width="9.8" height="9.8" rx="2" />
      <rect x="10.2" y="10.2" width="3.6" height="3.6" rx="0.8" />
      <path d="M9.2 3.6v2.1M14.8 3.6v2.1M9.2 18.3v2.1M14.8 18.3v2.1M3.6 9.2h2.1M3.6 14.8h2.1M18.3 9.2h2.1M18.3 14.8h2.1" />
      <path d="M12 10.2v3.6M10.2 12h3.6" stroke="#ff8c6b" />
    </IconBase>
  ),
  Code: () => (
    <IconBase>
      <rect x="4" y="5.4" width="16" height="13.2" rx="2" />
      <path d="M4 9h16" />
      <path d="m9.2 12-1.8 1.8 1.8 1.8M14.8 12l1.8 1.8-1.8 1.8" />
      <path d="M12.8 11.5 11.2 16" stroke="#ff8c6b" />
      <circle cx="7.1" cy="7.2" r="0.7" fill="#ff8c6b" stroke="none" />
    </IconBase>
  ),
  Network: () => (
    <IconBase>
      <rect x="4.5" y="5" width="5" height="5" rx="1.2" />
      <rect x="14.5" y="5" width="5" height="5" rx="1.2" />
      <rect x="9.5" y="14" width="5" height="5" rx="1.2" />
      <path d="M9.5 7.5h5M7 10v2.8l2.5 2.4M17 10v2.8l-2.5 2.4" />
      <circle cx="12" cy="16.5" r="0.8" fill="#ff8c6b" stroke="none" />
    </IconBase>
  ),
};

export default function Home3() {
  const [activeCapability, setActiveCapability] = useState(null);
  const { isChinese } = useLanguage();

  const buttons = [
    { id: 1, icon: 'Cog', type: 'brand', top: 309, left: 122, title: isChinese ? 'CNC 加工' : 'CNC Machining', desc: isChinese ? '依照專案需求提供精密加工與客製化製造支援。' : 'Precision machining and custom manufacturing tailored to project requirements.', category: isChinese ? '製造服務' : 'Manufacturing' },
    { id: 2, icon: 'Factory', type: 'brand', top: 329, left: 206, title: isChinese ? 'OEM 生產' : 'OEM Production', desc: isChinese ? '協助品牌與企業進行彈性的 OEM 與委託製造合作。' : 'Flexible OEM and contract manufacturing support for business partners.', category: isChinese ? '生產支援' : 'Production' },
    { id: 3, icon: 'Hammer', type: 'brand', top: 389, left: 300, title: isChinese ? '金屬加工' : 'Metal Fabrication', desc: isChinese ? '提供工業應用所需的金屬加工、零件製作與製程協調。' : 'Custom metal processing and fabrication for industrial applications.', category: isChinese ? '製造服務' : 'Manufacturing' },
    { id: 4, icon: 'Wrench', type: 'brand', top: 624, left: 155, title: isChinese ? '治具設計' : 'Jig & Fixture Design', desc: isChinese ? '規劃客製治具與夾具，協助提升生產效率與加工精度。' : 'Custom jig and fixture solutions to improve productivity and precision.', category: isChinese ? '工裝治具' : 'Tooling' },
    { id: 5, icon: 'Machine', type: 'brand', top: 660, left: 248, title: isChinese ? '設備方案' : 'Machine Solutions', desc: isChinese ? '整合工業設備、機構設計與客製化機台應用需求。' : 'Industrial machinery development and customized equipment integration.', category: isChinese ? '自動化' : 'Automation' },
    { id: 6, icon: 'Consultation', type: 'brand', top: 329, left: 1065, title: isChinese ? '技術諮詢' : 'Technical Consultation', desc: isChinese ? '針對製造可行性、材料選擇與專案規劃提供技術建議。' : 'Engineering consultation for manufacturing feasibility and project planning.', category: isChinese ? '工程支援' : 'Engineering' },
    {
      id: 7,
      icon: 'Nut',
      type: 'brand',
      top: 565,
      left: 1328,
      title: isChinese ? '五金零件' : 'Hardware Components',
      desc: isChinese ? '協助採購工業五金、機構零件與客製化配件。' : 'Supplying industrial hardware and mechanical components.',
      category: isChinese ? '採購供應' : 'Supply',
    },
    {
      id: 8,
      icon: 'Cpu',
      type: 'brand',
      top: 660,
      left: 1096,
      title: isChinese ? '電子零件' : 'Electronic Parts',
      desc: isChinese ? '提供電子元件與客製零件的可靠採購與供應協調。' : 'Reliable sourcing of electronic and customized components.',
      category: isChinese ? '採購供應' : 'Supply',
    },
    { id: 9, icon: 'Code', type: 'brand', top: 292, left: 1181, title: isChinese ? '網站開發' : 'Website Development', desc: isChinese ? '依照企業形象與服務內容打造專業網站與數位呈現。' : 'Professional website solutions for modern business needs.', category: isChinese ? '數位服務' : 'Digital' },
    { id: 10, icon: 'Network', type: 'brand', top: 493, left: 1272, title: isChinese ? '客製系統' : 'Custom Systems', desc: isChinese ? '建立符合營運流程的數位工具與客製化系統。' : 'Tailored digital tools and systems to support business operations.', category: isChinese ? '數位服務' : 'Digital' },
  ];

  return (
    <section className="home3-container">
      <div className="grid-overlay"></div>
      <div className="floating-icons-layer">
        {buttons.map((btn) => {
          const IconComponent = Icons[btn.icon];
          const isRightSide = btn.left > 720;

          return (
            <div
              key={btn.id}
              className={`floating-wrapper service-${btn.id} ${isRightSide ? 'right-side' : 'left-side'} ${activeCapability?.id === btn.id ? 'is-active' : ''}`}
              style={{ top: `${btn.top}px`, left: `${btn.left}px` }}
              onMouseEnter={() => setActiveCapability(btn)}
              onMouseLeave={() => setActiveCapability(null)}
            >
              <button
                className={`icon-btn ${btn.type === 'brand' ? 'brand-shadow' : ''}`}
                type="button"
                aria-label={btn.title}
                onMouseEnter={() => setActiveCapability(btn)}
                onFocus={() => setActiveCapability(btn)}
                onClick={() => setActiveCapability((current) => current?.id === btn.id ? null : btn)}
              >
                {IconComponent && <IconComponent />}
              </button>
            </div>
          );
        })}
        {activeCapability && (
          <div className={`capability-glass-card service-${activeCapability.id}`} key={activeCapability.id}>
            <div className="card-content">
              <span className="category-badge">{activeCapability.category}</span>
              <h3>{activeCapability.title}</h3>
              <p>{activeCapability.desc}</p>
            </div>
          </div>
        )}
      </div>

      <div className="content-wrapper">
        <div className="text-content">
          <p className="sub-caption">{isChinese ? '核心服務能力' : 'OUR CAPABILITIES'}</p>
          <div className="deco-line"></div>
          <h2 className="main-title">
            {isChinese ? (
              <span className="title-line title-line-zh">
                依據您的需求，打造專屬解決方案
              </span>
            ) : (
              <>
                Solutions Designed Around<br />Your Business Needs
              </>
            )}
          </h2>
        </div>
        <div className="image-container">
          <svg className="arm-art" viewBox="0 0 702 422" role="img" aria-label="Robotic Arm">
            <defs>
              <clipPath id="home3DissolveField">
                <ellipse cx="351" cy="221" rx="314" ry="183" />
              </clipPath>
              <filter id="home3DissolveNoise" x="-25%" y="-35%" width="150%" height="170%">
                <feTurbulence type="fractalNoise" baseFrequency="0.075 0.12" numOctaves="6" seed="43" result="noise" />
                <feComponentTransfer in="noise" result="crunch">
                  <feFuncR type="table" tableValues="0 0 0 0 0.38 0.88 1 1" />
                  <feFuncG type="table" tableValues="0 0 0 0 0.36 0.86 1 1" />
                  <feFuncB type="table" tableValues="0 0 0 0 0.4 0.9 1 1" />
                </feComponentTransfer>
                <feColorMatrix in="crunch" type="saturate" values="0" result="mono" />
                <feDisplacementMap in="mono" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <filter id="home3EdgeWarp" x="-25%" y="-35%" width="150%" height="170%">
                <feTurbulence type="fractalNoise" baseFrequency="0.032 0.066" numOctaves="5" seed="19" result="warpNoise" />
                <feDisplacementMap in="SourceGraphic" in2="warpNoise" scale="34" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <mask id="home3ArmMask" maskUnits="userSpaceOnUse">
                <rect width="702" height="422" fill="black" />
                <g clipPath="url(#home3DissolveField)">
                  <rect x="34" y="38" width="634" height="356" fill="#b2b2b2" filter="url(#home3DissolveNoise)" opacity="0.96" />
                  <ellipse cx="351" cy="221" rx="292" ry="166" fill="#d4d4d4" filter="url(#home3EdgeWarp)" opacity="0.74" />
                </g>
                <ellipse cx="351" cy="220" rx="254" ry="138" fill="white" />
                <g fill="white" opacity="0.78">
                  <rect x="54" y="198" width="94" height="10" rx="3" transform="rotate(-7 101 203)" />
                  <rect x="93" y="144" width="60" height="9" rx="3" transform="rotate(10 123 148)" />
                  <rect x="129" y="296" width="84" height="10" rx="3" transform="rotate(12 171 301)" />
                  <rect x="210" y="73" width="74" height="9" rx="3" transform="rotate(-8 247 78)" />
                  <rect x="383" y="69" width="82" height="9" rx="3" transform="rotate(8 424 74)" />
                  <rect x="512" y="116" width="84" height="10" rx="3" transform="rotate(-9 554 121)" />
                  <rect x="576" y="204" width="86" height="10" rx="3" transform="rotate(5 619 209)" />
                  <rect x="498" y="322" width="88" height="10" rx="3" transform="rotate(12 542 327)" />
                  <rect x="335" y="365" width="108" height="9" rx="3" transform="rotate(-4 389 370)" />
                  <rect x="203" y="341" width="88" height="9" rx="3" transform="rotate(10 247 346)" />
                </g>
                <g fill="white" opacity="0.52">
                  <circle cx="83" cy="181" r="5" />
                  <circle cx="119" cy="251" r="4" />
                  <circle cx="163" cy="111" r="4" />
                  <circle cx="288" cy="63" r="3" />
                  <circle cx="496" cy="88" r="4" />
                  <circle cx="621" cy="162" r="5" />
                  <circle cx="627" cy="266" r="5" />
                  <circle cx="463" cy="362" r="5" />
                  <circle cx="277" cy="364" r="4" />
                  <circle cx="142" cy="322" r="4" />
                </g>
                <g fill="black" opacity="0.62">
                  <rect x="38" y="208" width="74" height="13" rx="3" transform="rotate(8 75 214)" />
                  <rect x="92" y="142" width="58" height="10" rx="3" transform="rotate(-12 121 147)" />
                  <rect x="128" y="317" width="70" height="12" rx="3" transform="rotate(11 163 323)" />
                  <rect x="205" y="78" width="60" height="10" rx="3" transform="rotate(9 235 83)" />
                  <rect x="437" y="76" width="66" height="10" rx="3" transform="rotate(-10 470 81)" />
                  <rect x="548" y="119" width="70" height="12" rx="3" transform="rotate(13 583 125)" />
                  <rect x="595" y="214" width="78" height="13" rx="3" transform="rotate(-6 634 220)" />
                  <rect x="524" y="315" width="76" height="13" rx="3" transform="rotate(-12 562 321)" />
                  <rect x="321" y="365" width="88" height="12" rx="3" transform="rotate(5 365 371)" />
                  <rect x="197" y="348" width="68" height="10" rx="3" transform="rotate(-8 231 353)" />
                  <circle cx="74" cy="252" r="7" />
                  <circle cx="626" cy="178" r="8" />
                  <circle cx="575" cy="292" r="7" />
                  <circle cx="286" cy="367" r="6" />
                </g>
              </mask>
              <linearGradient id="home3EdgeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8be6f3" stopOpacity="0.16" />
                <stop offset="58%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="100%" stopColor="#7ecbd8" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            <image
              className="arm-photo"
              href={roboticArm}
              width="702"
              height="422"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#home3ArmMask)"
            />
            <ellipse
              cx="351"
              cy="221"
              rx="292"
              ry="166"
              fill="url(#home3EdgeGlow)"
              mask="url(#home3ArmMask)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
