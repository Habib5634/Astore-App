import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const BannerSlider = () => {
    
        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 4000,
          cssEase: "linear"
        };
  return (
    <div className='p-2 bg-yellow-500    overflow-hidden    '><Slider {...settings}>
    <div className='text-center font-bold '>
      <h3>CLREANCE SALE! ANY BAG IN 1999 RUPEES</h3>
    </div>
    <div className='text-center font-bold'>
      <h3 >CLREANCE SALE! ANY BAG IN 1999 RUPEES</h3>
    </div>
    
  </Slider></div>
  )
}

export default BannerSlider