import React from 'react';
import './Home1.scss';
import home1Background from '../assets/home1-1.png'; 
import img2 from '../assets/home1-2.JPG';
import img3 from '../assets/home1-3.JPG';
import img4 from '../assets/home1-4.JPG';
import img5 from '../assets/home1-5.JPG';

export default function Home1() {
  return (
    <section 
      className="home1-container" 
      style={{ backgroundImage: `url(${home1Background})` }}
    >
      <div className="image-overlay-group">
        <img src={img2} className="img-1-2" alt="Home 1-2" />
        <img src={img3} className="img-1-3" alt="Home 1-3" />
        <img src={img4} className="img-1-4" alt="Home 1-4" />
        <img src={img5} className="img-1-5" alt="Home 1-5" />
      </div>

      <div className="text-content">
        <h1 className="main-title">
          Headline of Website Will Goes Here <br />
          in Two Line and Centered
        </h1>
        <p className="sub-description">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </section>
  );
}