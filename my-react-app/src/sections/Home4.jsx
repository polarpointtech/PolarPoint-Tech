import React from 'react';
import './Home4.scss';

// 導入圖片
import logoCreality  from '/src/assets/home4-1.png';
import logoAnycubic  from '/src/assets/home4-2.jpeg';
import logoElegoo    from '/src/assets/home4-3.png';
import logoSketchfab from '/src/assets/home4-4.png';
import logoExtrudr   from '/src/assets/home4-5.png';

const logos = [
  { id: 1, name: 'Creality',  img: logoCreality },
  { id: 2, name: 'Anycubic',  img: logoAnycubic },
  { id: 3, name: 'Elegoo',    img: logoElegoo },
  { id: 4, name: 'Sketchfab', img: logoSketchfab },
  { id: 5, name: 'Extrudr',   img: logoExtrudr },
];

export default function Home4() {
  // 複製 4 組，確保足夠長度進行無縫滾動
  const seamlessLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="home4-marquee">
      <div className="marquee-track">
        {seamlessLogos.map((brand, index) => (
          <div className="brand-item" key={`brand-${index}`}>
            <img src={brand.img} alt={brand.name} />
          </div>
        ))}
      </div>
    </section>
  );
}