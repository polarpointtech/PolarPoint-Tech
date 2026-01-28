import React, { useState } from 'react';
import './Technology1.scss';

// --- Icons (Glass) ---
const MusicIcon = () => (<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>);
const PlayIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>);
const SkipBackIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>);
const SkipForwardIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>);

// --- Icons (Retro) ---
const GamepadIcon = () => (<svg width="100" height="80" viewBox="0 0 24 24" fill="none" stroke="#F7CE46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h4m-2-2v4"/><line x1="15" y1="11" x2="15" y2="11"/><line x1="17" y1="13" x2="17" y2="13"/></svg>);

export default function Technology1() {
  const [activeTheme, setActiveTheme] = useState('glass');

  const tags = [
    { id: 'glass', label: "玻璃擬態設計" },
    { id: 'retro', label: "RETRO ARCADE" },
    { id: 'cyberpunk', label: "賽博朋克" },
    { id: 'minimal', label: "Minimalist" },
    { id: 'bento', label: "Bento" },
    { id: 'btn1', label: "Button" },
    { id: 'btn2', label: "Button" }
  ];

  return (
    <section className="technology1-container">
      <div className="content-wrapper">
        <h1 className="main-title">Information Services</h1>

        {/* 左側動態卡片容器：位置與尺寸永遠固定 */}
        <div className={`dynamic-card-container theme-${activeTheme}`}>
          
          {/* === 1. Glassmorphism (您指定的樣式) === */}
          {activeTheme === 'glass' && (
            <div className="glass-content">
              <div className="header-block">
                <h3>玻璃擬態設計</h3>
                <p>透明、模糊、夢幻的視覺體驗</p>
              </div>
              <div className="music-block">
                <div className="card-visual">
                  <div className="music-note-icon"><MusicIcon /></div>
                </div>
                <div className="player-controls">
                  <div className="song-info">
                    <span className="song-title">夢幻樂章</span>
                    <span className="artist">未知藝術家</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '40%' }}></div>
                    <div className="time-info"><span>2:34</span><span>5:42</span></div>
                  </div>
                  <div className="control-buttons">
                    <button className="ctrl-btn"><SkipBackIcon /></button>
                    <button className="ctrl-btn play"><PlayIcon /></button>
                    <button className="ctrl-btn"><SkipForwardIcon /></button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* === 2. Retro Arcade (復古風格) === */}
          {activeTheme === 'retro' && (
            <div className="retro-content">
              {/* Header 區塊 */}
              <div className="retro-header-box">
                <h3>RETRO ARCADE</h3>
                <p>重溫 80 年代的經典遊戲體驗</p>
              </div>
              
              {/* 主畫面區塊 (對應 Music Block 位置) */}
              <div className="retro-main-box">
                <div className="retro-screen-stats">
                  <span className="retro-badge red">SCORE: 0</span>
                  <span className="retro-badge teal">LEVEL 1</span>
                </div>
                <div className="retro-screen">
                  <GamepadIcon />
                </div>
              </div>

              {/* 控制區塊 (對應 Player Controls 位置) */}
              <div className="retro-controls-box">
                <div className="primary-actions">
                  <button className="retro-btn yellow">START</button>
                  <button className="retro-btn yellow">SELECT</button>
                  <button className="retro-btn yellow">RESET</button>
                </div>
                <div className="secondary-actions">
                  <button className="retro-btn teal full">◀ LEVEL DOWN</button>
                  <button className="retro-btn teal full">LEVEL UP ▶</button>
                </div>
              </div>
            </div>
          )}

          {/* === 3. Cyberpunk (賽博朋克) === */}
          {activeTheme === 'cyberpunk' && (
            <div className="cyber-content">
              {/* Header 區塊 */}
              <div className="cyber-header-box">
                <h3 className="neon-title">SYSTEM ONLINE</h3>
                <p className="neon-code">// NEURAL_INTERFACE_v2.0.48</p>
                <p className="neon-sub">—— 未來已來</p>
              </div>

              {/* 終端機區塊 (對應 Music Block 上半部) */}
              <div className="cyber-terminal-box">
                <div className="terminal-bar">NEURAL_TERMINAL.exe</div>
                <div className="terminal-text">
                  <p className="pink">{'>'} INITIALIZING NEURAL LINK...</p>
                  <p className="cyan">{'>'} CONNECTION_STATUS: STABLE</p>
                  <p className="pink">{'>'} BANDWIDTH: 10.5 TB/s</p>
                  <p className="cyan">{'>'} QUANTUM_ENCRYPTION: ACTIVE</p>
                  <p className="blink">{'>'} AWAITING_COMMAND...<span className="cursor">█</span></p>
                </div>
              </div>

              {/* 數據區塊 (對應 Player Controls 位置) */}
              <div className="cyber-stats-row">
                <div className="cyber-stat pink-glow">
                  <span className="stat-label">CPU CORE</span>
                  <div className="stat-val">41%</div>
                  <div className="stat-bar"><div className="fill pink" style={{width: '41%'}}></div></div>
                </div>
                <div className="cyber-stat cyan-glow">
                  <span className="stat-label">NEURAL SYNC</span>
                  <div className="stat-val">98.7%</div>
                  <div className="stat-bar"><div className="fill cyan" style={{width: '98%'}}></div></div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* 右側按鈕區 */}
        <div className="info-panel">
          <span className="service-label">SERVICES</span>
          <h2 className="info-title">Professional<br />Web Design</h2>
          <p className="info-desc">Tell us your website vision and needs</p>
          <div className="tags-grid">
            {tags.map((tag) => (
              <button 
                key={tag.id} 
                className={`tech-tag ${activeTheme === tag.id ? 'active' : ''}`}
                onClick={() => {
                  if(['glass', 'retro', 'cyberpunk'].includes(tag.id)) setActiveTheme(tag.id);
                }}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}