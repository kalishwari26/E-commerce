import React, { useState, useEffect } from 'react';
import './Popup.css';
import menbanner_image from '../Assets/male_banner.png';
import womenbanner_image from '../Assets/women_banner.png';
import kidsbanner_image1 from '../Assets/child1.png';
import kidsbanner_image2 from '../Assets/child2.png';

const Popup = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const banners = [
    { image: menbanner_image, text: 'SPRING COLLECTIONS', offer: 'Flat 50% Offer', explore: 'Explore Now' },
    { image: womenbanner_image, text: 'NEW COLLECTIONS', offer: 'ONLY ON BEST SELLERS PRODUCTS', explore: 'Available Now' },
    { images: [kidsbanner_image1, kidsbanner_image2], text: 'STYLES DRESS', offer: '40% Offers', explore: 'Right Now' },
  ];

  const handlePopupClick = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Change interval time as needed (e.g., 3000ms for 3 seconds)
    return () => clearInterval(intervalId);
  }, [banners.length]);

  return (
    <div className="popup-container">
    <div className='popup' onClick={handlePopupClick}>
      <div className="popup-left">
        <h1>{banners[currentBannerIndex].text}</h1>
        <h3>{banners[currentBannerIndex].offer}</h3>
        <p>{banners[currentBannerIndex].explore}</p>
      </div>
      <div className="popup-right">
        {banners[currentBannerIndex].images ? (
          banners[currentBannerIndex].images.map((image, index) => (
            <img key={index} src={image} alt="" />
          ))
        ) : (
          <img src={banners[currentBannerIndex].image} alt="" />
        )}
      </div>
      </div>
      <div className="indicators">
        {banners.map((banner, index) => (
          <hr key={index} className={index === currentBannerIndex ? 'active' : ''} />
        ))}
      </div>
    </div>
  );
};

export default Popup;
