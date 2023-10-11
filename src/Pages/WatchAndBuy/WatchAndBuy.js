import React, { useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VideoModal from './VideoModal'; 
const videoData = [
    {
        id: 1,
        src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_yjuhjqfmi81689776609551_low_bd22bf03-fc4d-4f49-a5e9-2f1f8092ebad.mp4?v=1689851618',
        title: "Hiphop Bag Black",
        price: "2,499.00",
        realPrice: "4,000.00",
        rating:4.5,
        images:[
          "https://astore.pk/cdn/shop/files/black_512x.jpg?v=1685789292",
          "https://astore.pk/cdn/shop/products/drmadihaweb3_512x.jpg?v=1685789292",
          "https://astore.pk/cdn/shop/products/sfdsfsf-min_512x.jpg?v=1685789292",
          "https://astore.pk/cdn/shop/products/4-min_7464f427-1729-4d58-88b3-723768c57a6c_512x.jpg?v=1685789292",
          "https://astore.pk/cdn/shop/files/1-110_512x.png?v=1696577621",
          "https://astore.pk/cdn/shop/files/1-111_512x.png?v=1696577621",
        ]
    },
    {
        id: 2,
        src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_2re8ep06bhf1689776683679_low_57dcc8f5-14c8-4b19-b227-6787bd7030df.mp4?v=1689851466',
        title: "",
        price: "",
        realPrice: "",
        rating:4.5,
        images:[
          "https://astore.pk/cdn/shop/files/black_512x.jpg?v=1685789292",
          "https://astore.pk/cdn/shop/products/drmadihaweb3_512x.jpg?v=1685789292",
          "https://astore.pk/cdn/shop/products/sfdsfsf-min_512x.jpg?v=1685789292",
          "https://astore.pk/cdn/shop/products/4-min_7464f427-1729-4d58-88b3-723768c57a6c_512x.jpg?v=1685789292",
          "https://astore.pk/cdn/shop/files/1-110_512x.png?v=1696577621",
          "https://astore.pk/cdn/shop/files/1-111_512x.png?v=1696577621",
        ]
    },
    {
        id: 3,
        src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_imk00l9wrl1689776543805_low.mp4?v=1689851529',
        title: "Globe Bag Beige",
        price: "2,299.00",
        rating:4.5,
        realPrice: "5,000",
        images:[
          "https://astore.pk/cdn/shop/files/black_512x.jpg?v=1685789292",
          "https://astore.pk/cdn/shop/products/drmadihaweb3_512x.jpg?v=1685789292",
          "https://astore.pk/cdn/shop/products/sfdsfsf-min_512x.jpg?v=1685789292",
          "https://astore.pk/cdn/shop/products/4-min_7464f427-1729-4d58-88b3-723768c57a6c_512x.jpg?v=1685789292",
          "https://astore.pk/cdn/shop/files/1-110_512x.png?v=1696577621",
          "https://astore.pk/cdn/shop/files/1-111_512x.png?v=1696577621",
        ]
    },
    {
        id: 4,
        src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_3ksknlrft1s1689776543804_low.mp4?v=1689851760',
        title:"",
        price: "2,499.00",
        rating:4.5,
        realPrice:"8,0000",
        images:[
          "https://astore.pk/cdn/shop/files/black_512x.jpg?v=1685789292",
          "https://astore.pk/cdn/shop/products/drmadihaweb3_512x.jpg?v=1685789292",
          "https://astore.pk/cdn/shop/products/sfdsfsf-min_512x.jpg?v=1685789292",
          "https://astore.pk/cdn/shop/products/4-min_7464f427-1729-4d58-88b3-723768c57a6c_512x.jpg?v=1685789292",
          "https://astore.pk/cdn/shop/files/1-110_512x.png?v=1696577621",
          "https://astore.pk/cdn/shop/files/1-111_512x.png?v=1696577621",
        ]
    },
    { 
        id: 5, 
        src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_aloxlovjqr51689776253575_low_fec4e1f9-60ee-4e42-83ad-a3a94a7c1168.mp4?v=1689851782',
        title:"Swift Bag",
        price: "2,499.00",
        realPrice:"4,000" ,
        images:[
          "",
          "",
          "",
          "",
          "",
          "",
        ]},
    { 
        id: 6, 
        src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_pspo4dhz6a81689776202158_low.mp4?v=1689851843',
        title:"Hip hop Bag Black",
        price: "2,299.00",
        realPrice:"6,000" ,
        images:[
          "",
          "",
          "",
          "",
          "",
          "",
        ]},
    { 
        id: 7, 
        src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_jkv4veeg89m1689776152802_low.mp4?v=1689776172',
        title:"Large Capacity travel Bag Beigi",
        price: "2,499.00",
        realPrice:"4,000" ,
        images:[
          "",
          "",
          "",
          "",
          "",
          "",
        ]},
    { 
        id: 8, 
        src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_87zerfp0jaj1689776123452_low_08a0c2f7-01fe-4def-a25c-f763df22ed2c.mp4?v=1689856268',
        title:"Woman Tassel Suede Maroon",
        price: "2,299.00",
        realPrice:"5,000",
        images:[
          "",
          "",
          "",
          "",
          "",
          "",
        ] },
    { 
        id: 9, 
        src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_bnwg9m611pe1689776067899_low.mp4?v=1689776089',
        title:"Hip Hop Bag Green",
        price: "2,499.00",
        realPrice:"4,000" ,
        images:[
          "",
          "",
          "",
          "",
          "",
          "",
        ]},
    { 
        id: 10, 
        src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_fvzq06u6m81689776034199_low.mp4?v=1689851987',
        title:"Verona Tote bag Brown ",
        price: "2,299.00",
        realPrice:"7,000" ,
        images:[
          "",
          "",
          "",
          "",
          "",
          "",
        ]},
    { 
        id: 11, 
        src: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/reelUp_mu8hoywdee1689775879846_low_a7eb5faf-e472-44af-9c6f-83ce9d48a178.mp4?v=1689792387',
        title:"",
        price: "",
        realPrice:"" ,
        images:[
          "",
          "",
          "",
          "",
          "",
          "",
        ]},
];

const WatchAndBuy = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handlePlay = (videoId) => {
      const video = document.getElementById(`video-${videoId}`);
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    };
  
    const openModal = (video) => {
      setSelectedVideo(video);
    };
  
    const closeModal = () => {
      setSelectedVideo(null);
    };
    const NextArrow = (props) => {
      const { className, onClick } = props;
      return (
        <div
          className={`${className} absolute top-1/2 -mt-10 right-4 z-10 bg-blue-500 rounded-full p-2 cursor-pointer`}
          onClick={onClick}
        >
          Next
        </div>
      );
    }
  
    const PrevArrow = (props) => {
      const { className, onClick } = props;
      return (
        <div
          className={`${className} absolute top-1/2 -mt-10 left-4 z-10 bg-red-500 rounded-full p-2 cursor-pointer`}
          onClick={onClick}
        >
          Prev
        </div>
      );
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ],
      nextArrow: <NextArrow />, // Custom next arrow component
      prevArrow: <PrevArrow />  // Custom previous arrow component
    };
  
    
    return (
        <>
        <h1 className='text-center text-3xl md:text-4xl my-4'>Watch & Buy</h1>
        <div>
        <Slider {...settings} className="overflow-hidden">
          {videoData.map((video) => (
            <div key={video.id} className="p-2 flex justify-center shadow-lg " onClick={() => openModal(video)}>
              <video
                className="rounded-t-2xl"
                autoPlay
                muted
                id={`video-${video.id}`}
                onClick={() => handlePlay(video.id)}
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="p-2">
                <h1>{video.title}</h1>
                <p>
                  <span className="text-red-500">Rs.{video.price}</span>{' '}
                  <span className="text-gray-500 line-through">Rs.{video.realPrice}.</span>
                </p>
                
              </div>
            </div>
          ))}
        </Slider>
  
        {selectedVideo && <VideoModal video={selectedVideo} closeModal={closeModal} />}
      </div>
      </>
    );
};

export default WatchAndBuy;
