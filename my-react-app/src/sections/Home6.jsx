import React from 'react';
import './Home6.scss';

// 假頭像生成
const avatarUrl = (id) => `https://i.pravatar.cc/150?img=${id}`;

// 原始資料：包含長 (long/209px) 與短 (short/191px)
const testimonials = [
  {
    id: 1, type: 'long',
    text: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
    name: "Sophie Moore", role: "Head of Marketing", avatar: avatarUrl(1),
  },
  {
    id: 2, type: 'short',
    text: "This app has saved me so much time and stress! I used to constantly forget important dates.",
    name: "Adam Gwadyr", role: "Entrepreneur", avatar: avatarUrl(2),
  },
  {
    id: 3, type: 'long',
    text: "I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable.",
    name: "Michel O'Neil", role: "Head of Sales", avatar: avatarUrl(3),
  },
  {
    id: 4, type: 'short',
    text: "The best tool for our team coordination. Highly recommended for everyone!",
    name: "Annie Daway", role: "Designer", avatar: avatarUrl(4),
  },
  {
    id: 5, type: 'long',
    text: "Managing my team's schedule was a nightmare before this tool. Now everything is synced perfectly.",
    name: "John Doe", role: "Product Manager", avatar: avatarUrl(5),
  },
  {
    id: 6, type: 'short',
    text: "Simple, clean, and effective. Exactly what I was looking for.",
    name: "Jane Smith", role: "Freelancer", avatar: avatarUrl(6),
  },
];

// 單張卡片元件
const TestimonialCard = ({ data }) => (
  <div className={`testimonial-card ${data.type === 'long' ? 'card-long' : 'card-short'}`}>
    <div className="stars">⭐⭐⭐⭐⭐</div>
    <p className="review-text">{data.text}</p>
    <div className="user-info">
      <div className="left">
        <img src={data.avatar} alt={data.name} className="avatar" />
        <span className="name">{data.name}</span>
      </div>
      <span className="role">{data.role}</span>
    </div>
  </div>
);

export default function Home6() {
  // 1. 準備資料集
  const allItems = testimonials; // 混合資料 (有長有短)
  const shortItemsOnly = testimonials.filter(item => item.type === 'short'); // 只取短的

  // 2. 準備跑馬燈軌道資料 (大量複製以確保無縫)
  // 上下排 (混合)：複製 6 次
  const rowMixed = [...allItems, ...allItems, ...allItems, ...allItems, ...allItems, ...allItems];
  
  // 中間排 (純短)：因為篩選後數量變少，這裡複製 12 次以確保長度足夠
  const rowShortOnly = [...shortItemsOnly, ...shortItemsOnly, ...shortItemsOnly, ...shortItemsOnly, ...shortItemsOnly, ...shortItemsOnly, ...shortItemsOnly, ...shortItemsOnly, ...shortItemsOnly, ...shortItemsOnly, ...shortItemsOnly, ...shortItemsOnly];

  return (
    <section className="home6-container">
      <div className="header-content">
        <div className="tag">They already love our products 😍</div>
        <h2 className="main-title">
          See what our Clients<br />
          say about us
        </h2>
        <p className="subtitle">
          We are proud to work with amazing clients who have seen real results<br />
          using our platform.
        </p>
      </div>

      <div className="marquee-wrapper">
        
        {/* Row 1: 向左捲動 (混合高度：長+短) */}
        <div className="marquee-row scroll-left">
          <div className="track">
            {rowMixed.map((item, idx) => (
              <TestimonialCard key={`r1-${idx}`} data={item} />
            ))}
          </div>
        </div>

        {/* Row 2: 向右捲動 (★ 指定：只有短留言) */}
        <div className="marquee-row scroll-right">
          <div className="track">
            {rowShortOnly.map((item, idx) => (
              <TestimonialCard key={`r2-${idx}`} data={item} />
            ))}
          </div>
        </div>

        {/* Row 3: 向左捲動 (混合高度：長+短) */}
        <div className="marquee-row scroll-left">
          <div className="track">
            {rowMixed.map((item, idx) => (
              <TestimonialCard key={`r3-${idx}`} data={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}