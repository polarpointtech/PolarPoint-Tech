import React from 'react';
import './Home3.scss';
import roboticArm from '/src/assets/home3-2.jpg';

// SVG Icons (保持不變)
const Icons = {
  Apple: () => (<svg viewBox="0 0 24 24" fill="black"><path d="M17.05 19.096c-.636 1.9-1.63 3.695-2.925 3.904-1.25.2-1.745-.66-3.235-.66-1.525 0-2.02.64-3.22.695-1.285.055-2.435-1.92-3.225-4.495-.915-2.96-.065-7.39 2.91-7.515 1.48-.06 2.505.995 3.29.995.78 0 2.25-1.22 3.795-1.04 1.35.155 2.375.925 3.03 1.885-2.615 1.57-2.18 5.765.465 6.845-.53 1.345-1.205 2.695-1.99 4.09l.105-.705zm-2.73-15.34c.73-1.035 1.255-2.43.98-3.755-1.2.1-2.635.91-3.41 1.96-.69 1.055-1.28 2.45-1.01 3.725 1.325.045 2.635-.82 3.44-1.93z"/></svg>),
  OpenAI: () => (<svg viewBox="0 0 24 24" fill="black"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 9.528 2.8015 5.9864 5.9864 0 0 0 5.4801 4.6 5.9662 5.9662 0 0 0 .8 8.6184a5.9668 5.9668 0 0 0 1.2 4.9667 5.9853 5.9853 0 0 0 .5157 4.9108 6.0462 6.0462 0 0 0 6.51 2.9 6.0651 6.0651 0 0 0 5.7275-.7908 5.9864 5.9864 0 0 0 4.0479-1.7984 5.9662 5.9662 0 0 0 4.68-4.0184 5.9668 5.9668 0 0 0-1.2-4.9667Zm-10.082 1.8023c0 .1933-.006.39-.0204.5828l-3.3283-1.9217a3.8647 3.8647 0 0 1-.3659-5.4646l.0442-.0559 6.0029 3.4654c-.1879.4674-.6332 2.9238-2.3325 3.394Zm-6.5369-1.99a3.8653 3.8653 0 0 1 3.5413-2.6987l.0673.0016v6.931L3.9317 11.26a3.882 3.882 0 0 1 1.7315-1.6265ZM4.9806 17.587a3.8644 3.8644 0 0 1-1.3533-4.225l.0247-.0638 6.0025 3.4654a3.8683 3.8683 0 0 1-2.3338 3.3951l-2.3401-2.5717Zm12.3653.6491a3.8647 3.8647 0 0 1 .3659 5.4646l-.0442.0559-6.0029-3.4654c.1879-.4674.6332-2.9238 2.3325-3.394l3.3487 1.3389Zm6.5369 1.99a3.8653 3.8653 0 0 1-3.5413 2.6987l-.0673-.0016v-6.931l5.3315 2.675a3.882 3.882 0 0 1-1.7315 1.6265Zm-3.0526-7.3916a3.8644 3.8644 0 0 1 1.3533 4.225l-.0247.0638-6.0025-3.4654a3.8683 3.8683 0 0 1 2.3338-3.3951l2.3401 2.5717Z"/></svg>),
  Slack: () => (<svg viewBox="0 0 24 24"><path fill="#E01E5A" d="M6 15a2 2 0 0 1-2 2H2v-2a2 2 0 0 1 2-2h2v2zm1 0a2 2 0 0 1 2-2h2v5a2 2 0 0 1-2 2v-5H7z"/><path fill="#36C5F0" d="M10 6a2 2 0 0 1 2-2h5a2 2 0 0 1-2 2v2a2 2 0 0 1-2-2V6zm0 1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1 2-2h5V7z"/><path fill="#2EB67D" d="M18 10a2 2 0 0 1-2 2v2a2 2 0 0 1 2 2h2v-2a2 2 0 0 1-2-2h-2zm-1 0a2 2 0 0 1-2 2H9a2 2 0 0 1 2-2V7a2 2 0 0 1 2-2h2v5z"/><path fill="#ECB22E" d="M15 18a2 2 0 0 1 2 2v2h-2a2 2 0 0 1-2-2v-2h2zm0-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h5a2 2 0 0 1-2 2h-5v5z"/></svg>),
  Photos: () => (<svg viewBox="0 0 24 24"><path fill="#FBBC04" d="M12 12c0-3.31 2.69-6 6-6v6h-6z"/><path fill="#EA4335" d="M12 12c-3.31 0-6-2.69-6-6h6v6z"/><path fill="#34A853" d="M12 12c0 3.31-2.69 6-6 6v-6h6z"/><path fill="#4285F4" d="M12 12c3.31 0 6 2.69 6 6h-6v-6z"/></svg>)
};

// --- SVG 線條修正 ---

// 1. 給左側按鈕用 (Line goes RIGHT)
// 形狀：圓點(左上) -> 斜向右下 -> 水平向右
const CalloutLineRight = () => (
  <svg width="250" height="35" viewBox="0 0 250 35" fill="none" className="callout-line-svg">
    {/* 圓點在左上 (2,2) */}
    <circle cx="2" cy="2" r="2.5" fill="#555555" />
    {/* 線條：從圓點 -> 下滑到 (20, 33) -> 水平延伸到尾端 */}
    <path d="M2 2 L20 33 L250 33" stroke="#555555" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// 2. 給右側按鈕用 (Line goes LEFT)
// 形狀：圓點(右上) -> 斜向左下 -> 水平向左
// 注意：文字要保持靠左對齊，所以線條是水平貫穿底部，最後勾上去
const CalloutLineLeft = () => (
  <svg width="250" height="35" viewBox="0 0 250 35" fill="none" className="callout-line-svg">
    {/* 圓點在右上 (248, 2) */}
    <circle cx="248" cy="2" r="2.5" fill="#555555" />
    {/* 線條：從水平左側 (0, 33) -> 延伸到右側 (230, 33) -> 上滑到圓點 */}
    <path d="M0 33 L230 33 L248 2" stroke="#555555" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function Home3() {
  const buttons = [
    { 
      id: 1, icon: 'Apple', type: 'default',
      top: 296, left: 96, 
      title: 'Ecosystem', desc: 'Seamlessly integrated hardware and software.'
    },
    { 
      id: 2, icon: 'OpenAI', type: 'brand',
      top: 315, left: 183,
      title: 'ChatGPT-4o', desc: 'Advanced natural language processing.'
    },
    { 
      id: 3, icon: 'Slack', type: 'brand',
      top: 374, left: 285,
      title: 'Team Sync', desc: 'Real-time collaboration hub.'
    },
    { 
      id: 4, icon: 'Slack', type: 'brand',
      top: 638, left: 131,
      title: 'Workflow', desc: 'Automate routine tasks easily.'
    },
    { 
      id: 5, icon: 'Photos', type: 'brand',
      top: 672, left: 229,
      title: 'Visual AI', desc: 'Recognize objects and scenes automatically.'
    },
    { 
      id: 6, icon: 'Slack', type: 'brand',
      top: 318, left: 1022,
      title: 'Connect', desc: 'Securely communicate with partners.'
    },
    { 
      id: 7, icon: 'Photos', type: 'brand',
      top: 545, left: 1296, 
      title: 'Cloud Media', desc: 'Intelligent visual asset organization.'
    },
    { 
      id: 8, icon: 'OpenAI', type: 'brand',
      top: 653, left: 1053,
      title: 'Generative', desc: 'Create original content in seconds.'
    },
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
              className={`floating-wrapper ${isRightSide ? 'right-side' : 'left-side'}`}
              style={{ top: `${btn.top}px`, left: `${btn.left}px` }}
            >
              <div className={`icon-btn ${btn.type === 'brand' ? 'brand-shadow' : ''}`}>
                {IconComponent && <IconComponent />}
              </div>

              <div className="hover-info">
                <h3 className="info-title">{btn.title}</h3>
                <div className="line-container">
                  {/* 根據位置選擇線條方向 */}
                  {isRightSide ? <CalloutLineLeft /> : <CalloutLineRight />}
                </div>
                <p className="info-desc">{btn.desc}</p>
              </div>

            </div>
          );
        })}
      </div>

      <div className="content-wrapper">
        <div className="text-content">
          <p className="sub-caption">Elementum risus tempor at vivamus curabitur viverra diam nec.</p>
          <div className="deco-line"></div>
          <h2 className="main-title">Headline of Website Will Goes Here<br />in Two Line and Centered</h2>
        </div>
        <div className="image-container">
          <img src={roboticArm} alt="Robotic Arm" className="arm-image" />
        </div>
      </div>
    </section>
  );
}