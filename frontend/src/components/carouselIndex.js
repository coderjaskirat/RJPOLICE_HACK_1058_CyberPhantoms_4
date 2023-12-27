import React, { useState } from 'react';
const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    './newsImages/image1.jpg',
    './newsImages/image2.jpg',
    './newsImages/image3.jpg'
    // Add more image URLs as needed
  ];

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />

      <button onClick={handlePrev}>&lt;</button>
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Carousel;