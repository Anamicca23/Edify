import React from 'react';
import './Campus.css';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';

const Campus = () => {
  const images = [gallery_1, gallery_2, gallery_3, gallery_4];

  const descriptions = [
    "Experience a vibrant campus life with top-tier learning facilities and green open spaces.",
    "Discover a learning environment where innovation and creativity flourish every day.",
    "Walk through halls of knowledge where passionate educators and curious minds meet.",
    "Join a community that inspires success, friendship, and lifelong learning journeys."
  ];

  return (
    <div className="campus">
      <div className="gallery">
        {images.map((img, idx) => (
          <div className="flip-card" key={idx}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={img} alt={`Gallery ${idx + 1}`} />
              </div>
              <div className="flip-card-back">
                <h3>Campus {idx + 1}</h3>
                <p>{descriptions[idx]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn dark-btn">Explore our Campuses<img src={white_arrow} alt='' /></button>
    </div>
  );
};

export default Campus;
