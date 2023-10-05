import React, { useEffect, useState } from 'react';
import img1 from './website_slides_32_1950x.jpg';
import img2 from './website_slides_4_17_1950x.jpg';
import img3 from './website_slides_4_19_1950x.jpg';
import img4 from './website_slides_4_22_1950x.jpg';

const HandbagsBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage < 3 ? prevImage + 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const images = [
    img1, // Example image URL
    img2,
    img3,
    img4
  ];

  return (
    <div className="flex justify-center">
      <img
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="max-w-full"
      />
    </div>
  );
};

export default HandbagsBanner;
