import React from 'react';
import './Manufacturing2.scss';

export default function Manufacturing2() {
  return (
    <section className="manufacturing2-container">
      <div className="content-wrapper">
        <div className="features-container">
          
          {/* 🌟 Item 1: 左上 */}
          <div className="feature-item item-1">
            <div className="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <span className="feature-text">Design support for prototypes, functional models, and product validation.</span>
          </div>
          
          {/* 🌟 Item 2: 右上 */}
          <div className="feature-item item-2">
            <div className="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
            </div>
            <span className="feature-text">Rapid prototyping to accelerate validation and shorten product development cycles.</span>
          </div>

          {/* 🌟 Item 3: 左下 */}
          <div className="feature-item item-3">
            <div className="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            </div>
            <span className="feature-text">Complex geometries that are difficult to achieve with traditional machining.</span>
          </div>

          {/* 🌟 Item 4: 右下 */}
          <div className="feature-item item-4">
            <div className="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            </div>
            <span className="feature-text">Flexible low-volume production for customized parts and applications.</span>
          </div>

        </div>
      </div>
    </section>
  );
}
