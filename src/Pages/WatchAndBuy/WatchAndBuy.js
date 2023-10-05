import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const videoData = [
    { id: 1, src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_yjuhjqfmi81689776609551_low_bd22bf03-fc4d-4f49-a5e9-2f1f8092ebad.mp4?v=1689851618' },
    { id: 2, src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_2re8ep06bhf1689776683679_low_57dcc8f5-14c8-4b19-b227-6787bd7030df.mp4?v=1689851466' },
    { id: 3, src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_imk00l9wrl1689776543805_low.mp4?v=1689851529' },
    { id: 4, src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_3ksknlrft1s1689776543804_low.mp4?v=1689851760' },
    { id: 5, src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_aloxlovjqr51689776253575_low_fec4e1f9-60ee-4e42-83ad-a3a94a7c1168.mp4?v=1689851782' },
    { id: 6, src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_pspo4dhz6a81689776202158_low.mp4?v=1689851843' },
    { id: 7, src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_jkv4veeg89m1689776152802_low.mp4?v=1689776172' },
    { id: 8, src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_87zerfp0jaj1689776123452_low_08a0c2f7-01fe-4def-a25c-f763df22ed2c.mp4?v=1689856268' },
    { id: 9, src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_bnwg9m611pe1689776067899_low.mp4?v=1689776089' },
    { id: 10, src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_fvzq06u6m81689776034199_low.mp4?v=1689851987' },
    { id: 11, src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_mu8hoywdee1689775879846_low_a7eb5faf-e472-44af-9c6f-83ce9d48a178.mp4?v=1689792387' },
];

const WatchAndBuy = () => {
    const handlePlay = (videoId) => {
        const video = document.getElementById(`video-${videoId}`);
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      };


      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024, // Medium screen size (md)
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 768, // Small screen size (sm)
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
    return (
        <Slider {...settings} className='overflow-hidden '>
      {videoData.map((video) => (
        <div key={video.id} className=' p-2 flex justify-center  shadow-lg'>
          <video
            className='rounded-t-2xl'
            autoPlay
            muted
            id={`video-${video.id}`}
            onClick={() => handlePlay(video.id)}
          >
            <source src={video.src} type="video/mp4" />
            
          </video>
          <div className='p-2'>
                <h1>Hip Hop bag Black</h1>
                <p><span className='text-red-500'>Rs.2,499.00</span> <span className='text-gray-500'>Rs.4,000.00</span></p>
            </div>
        </div>
      ))}
    </Slider>
    );
};

export default WatchAndBuy;
