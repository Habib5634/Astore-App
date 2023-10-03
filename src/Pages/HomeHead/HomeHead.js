import React, { useState, useEffect } from 'react';
import first from './website_slides_72_1950x.jpg'
import second from './website_slides_73_955d8126-0055-4109-a001-fb98278cfca1_1950x.jpg'
const HomeHead = () => {
    const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const images = [
    first, // Example image URL
    second
  ];
  return (
    <div className="flex justify-center  ">
    <img
      src={images[currentImage]}
      alt={`Image ${currentImage + 1}`}
      className="max-w-full"
    />
  </div>
  )
}

export default HomeHead