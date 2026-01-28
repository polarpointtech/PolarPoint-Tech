import React from 'react';
import './Home2.scss';

// 再次確認：請確保您的檔名是 .jpg 還是 .jpeg
import img1 from '../assets/home2-1.jpg';
import img2 from '../assets/home2-2.jpg';
import img3 from '../assets/home2-3.jpg';

export default function Home2() {
  const categories = [
    { title: 'Technology',    img: img1 },
    { title: 'Manufacturing', img: img2 },
    { title: 'Construction',  img: img3 },
  ];

  return (
    <section className="home2-container">
      {categories.map((item, index) => (
        <div key={index} className="category-card">
          
          {/* 🌟 修改點：背景圖獨立出來，這樣才能單獨做模糊特效 */}
          <div 
            className="card-bg" 
            style={{ backgroundImage: `url("${item.img}")` }}
          />

          <div className="overlay">
            <h2 className="category-title">{item.title}</h2>
            <button className="category-button">
              <span className="icon">⚡</span> 
              Button
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}