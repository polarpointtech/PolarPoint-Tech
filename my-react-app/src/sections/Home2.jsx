import React from 'react';
import { Link } from 'react-router-dom';
import './Home2.scss';

import img1 from '../assets/home2-1.jpg';
import img2 from '../assets/home2-2.jpg';
import img3 from '../assets/home2-3.jpg';
import { useLanguage } from '../i18n/LanguageContext';

const AccentMark = () => (
  <svg className="button-mark" viewBox="0 0 32 24" fill="none" aria-hidden="true">
    <path
      d="M3 16.8C7.4 10.2 13.1 3.8 18.2 2.2C21.9 1.1 20.5 6.4 17.2 11.3C14.7 15.2 12.7 18.2 14.6 19.2C17.1 20.5 21.9 13.1 24 14.3C25.7 15.3 22.8 20.5 25.3 21.2C26.6 21.6 28.4 20.1 30 18.3"
      stroke="currentColor"
      strokeWidth="4.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Home2() {
  const { isChinese } = useLanguage();
  const categories = isChinese
    ? [
      { title: '數位科技', cta: '數位解決方案', path: '/technology', img: img1 },
      { title: '製造加工', cta: '製造解決方案', path: '/manufacturing', img: img2 },
      { title: '建材工程', cta: '石材應用方案', path: '/construction', img: img3 },
    ]
    : [
      { title: 'Technology', cta: 'Digital Solutions', path: '/technology', img: img1 },
      { title: 'Manufacturing', cta: 'Production Solutions', path: '/manufacturing', img: img2 },
      { title: 'Construction', cta: 'Stone Solutions', path: '/construction', img: img3 },
    ];

  return (
    <section className="home2-container">
      {categories.map((item) => (
        <div key={item.title} className="category-card">
          <div
            className="card-bg"
            style={{ backgroundImage: `url("${item.img}")` }}
          />

          <div className="overlay">
            <h2 className="category-title">{item.title}</h2>
            <Link
              className="category-button"
              to={item.path}
              onClick={() => window.scrollTo({ top: 0, left: 0 })}
            >
              <AccentMark />
              <span>{item.cta}</span>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
