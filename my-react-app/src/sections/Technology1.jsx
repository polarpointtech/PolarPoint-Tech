import React, { useState } from 'react';
import './Technology1.scss';

const MusicIcon = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const SkipBackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 5 9 12l10 7V5Z" />
    <path d="M5 5v14" />
  </svg>
);

const SkipForwardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m5 5 10 7-10 7V5Z" />
    <path d="M19 5v14" />
  </svg>
);

const GamepadIcon = () => (
  <svg width="100" height="80" viewBox="0 0 24 24" fill="none" stroke="#F7CE46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <path d="M6 12h4m-2-2v4" />
    <line x1="15" y1="11" x2="15" y2="11" />
    <line x1="17" y1="13" x2="17" y2="13" />
  </svg>
);

const glassTracks = [
  {
    title: 'Dream Interface',
    artist: 'Glassmorphism Design',
    start: '2:34',
    end: '5:42',
    progress: '44%',
  },
  {
    title: 'Soft Digital Flow',
    artist: 'Transparent UI System',
    start: '1:18',
    end: '4:36',
    progress: '28%',
  },
  {
    title: 'Crystal Motion',
    artist: 'Immersive Web Experience',
    start: '3:05',
    end: '6:10',
    progress: '58%',
  },
];

const tags = [
  { id: 'glass', label: 'Glassmorphism' },
  { id: 'retro', label: 'Retro Arcade' },
  { id: 'cyberpunk', label: 'Cyberpunk' },
  { id: 'minimal', label: 'Minimalist' },
  { id: 'bento', label: 'Bento' },
  { id: 'btn1', label: 'Button' },
  { id: 'btn2', label: 'Button' },
];

export default function Technology1() {
  const [activeTheme, setActiveTheme] = useState('glass');
  const [activeTrack, setActiveTrack] = useState(0);
  const currentTrack = glassTracks[activeTrack];

  const changeTrack = (direction) => {
    setActiveTrack((current) => (
      current + direction + glassTracks.length
    ) % glassTracks.length);
  };

  return (
    <section className="technology1-container">
      <div className="content-wrapper">
        <h1 className="main-title">Information Services</h1>

        <div className={`dynamic-card-container theme-${activeTheme}`}>
          {activeTheme === 'glass' && (
            <div className="glass-content">
              <div className="header-block">
                <h3>Glassmorphism Design</h3>
                <p>Transparent, blurred, and immersive visual experience</p>
              </div>

              <div className="music-block">
                <div className="card-visual">
                  <div className="music-note-icon"><MusicIcon /></div>
                </div>

                <div className="player-controls">
                  <div className="song-info">
                    <span className="song-title">{currentTrack.title}</span>
                    <span className="artist">{currentTrack.artist}</span>
                  </div>

                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: currentTrack.progress }} />
                    <div className="time-info">
                      <span>{currentTrack.start}</span>
                      <span>{currentTrack.end}</span>
                    </div>
                  </div>

                  <div className="control-buttons">
                    <button className="ctrl-btn" type="button" aria-label="Previous track" onClick={() => changeTrack(-1)}>
                      <SkipBackIcon />
                    </button>
                    <button className="ctrl-btn play" type="button" aria-label="Play preview">
                      <PlayIcon />
                    </button>
                    <button className="ctrl-btn" type="button" aria-label="Next track" onClick={() => changeTrack(1)}>
                      <SkipForwardIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTheme === 'retro' && (
            <div className="retro-content">
              <div className="retro-header-box">
                <h3>RETRO ARCADE</h3>
                <p>Pixel-inspired layouts with playful visual rhythm</p>
              </div>

              <div className="retro-main-box">
                <div className="retro-screen-stats">
                  <span className="retro-badge red">SCORE: 0</span>
                  <span className="retro-badge teal">LEVEL 1</span>
                </div>
                <div className="retro-screen">
                  <GamepadIcon />
                </div>
              </div>

              <div className="retro-controls-box">
                <div className="primary-actions">
                  <button className="retro-btn yellow" type="button">START</button>
                  <button className="retro-btn yellow" type="button">SELECT</button>
                  <button className="retro-btn yellow" type="button">RESET</button>
                </div>
                <div className="secondary-actions">
                  <button className="retro-btn teal full" type="button">LEVEL DOWN</button>
                  <button className="retro-btn teal full" type="button">LEVEL UP</button>
                </div>
              </div>
            </div>
          )}

          {activeTheme === 'cyberpunk' && (
            <div className="cyber-content">
              <div className="cyber-header-box">
                <h3 className="neon-title">SYSTEM ONLINE</h3>
                <p className="neon-code">// NEURAL_INTERFACE_v2.0.48</p>
                <p className="neon-sub">High-contrast futuristic interface concept</p>
              </div>

              <div className="cyber-terminal-box">
                <div className="terminal-bar">NEURAL_TERMINAL.exe</div>
                <div className="terminal-text">
                  <p className="pink">{'>'} INITIALIZING NEURAL LINK...</p>
                  <p className="cyan">{'>'} CONNECTION_STATUS: STABLE</p>
                  <p className="pink">{'>'} BANDWIDTH: 10.5 TB/s</p>
                  <p className="cyan">{'>'} QUANTUM_ENCRYPTION: ACTIVE</p>
                  <p className="blink">{'>'} AWAITING_COMMAND<span className="cursor">_</span></p>
                </div>
              </div>

              <div className="cyber-stats-row">
                <div className="cyber-stat pink-glow">
                  <span className="stat-label">CPU CORE</span>
                  <div className="stat-val">41%</div>
                  <div className="stat-bar"><div className="fill pink" style={{ width: '41%' }} /></div>
                </div>
                <div className="cyber-stat cyan-glow">
                  <span className="stat-label">NEURAL SYNC</span>
                  <div className="stat-val">98.7%</div>
                  <div className="stat-bar"><div className="fill cyan" style={{ width: '98%' }} /></div>
                </div>
              </div>
            </div>
          )}
        </div>

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
                  if (['glass', 'retro', 'cyberpunk'].includes(tag.id)) setActiveTheme(tag.id);
                }}
                type="button"
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
