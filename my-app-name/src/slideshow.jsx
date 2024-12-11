import React, { useState } from 'react';
import './slideshow.css';

const ImageCarousel = () => {
  const images = [
    '/VideoTypeStat.png',
    '/VideoTypeStat2.png',
    '/VideoTypeStat3.png'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>&larr;</button>
      <img src={images[currentIndex]} alt="carousel" />
      <button className="next" onClick={nextSlide}>&rarr;</button>
    </div>
  );
};

export default ImageCarousel;
