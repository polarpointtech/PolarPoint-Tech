import React from 'react';
import './Home2.scss';
// 修正：Windows 預設隱藏副檔名時，真實檔名通常是小寫 .jpg
import img1 from '../assets/home2-1.jpg';
import img2 from '../assets/home2-2.jpg';
import img3 from '../assets/home2-3.jpg';

export default function Home2() {
  const categories = [
    { title: 'Technology', img: img1 },
    { title: 'Manufacturing', img: img2 },
    { title: 'Construction', img: img3 },
  ];

  return (
    <section className="home2-container">
      {categories.map((item, index) => (
        <div 
          key={index} 
          className="category-card" 
          style={{ backgroundImage: `url(${item.img})` }}
        >
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