import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const CustomerReviews = () => {
    const data = [
        {
            id:1,
          name: 'Mrs Asad',
          stars: 5,
          date: '10/01/2023',
          description: 'The bag quality is superb ....totally satisfied Definitely shop again ',
          product: 'Pouch Size Shoulder Bag',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/pouchblack_500x500.jpg?v=1693551245'
        },
        {
            id:2,
          name: 'Mahum',
          stars: 5,
          date: '10/01/2023',
          description: 'I ordered the picture one but it was different in design I liked the quality so I kept it . Thanks',
          product: 'Latch Bag Biegi',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/products/1-3_f8b75dc2-bed1-427c-88bf-90fe0f3b1e3f_500x500.jpg?v=1694520689'
        },
        {
            id:3,
          name: 'Rida Fatima',
          stars: 5,
          date: '10/01/2023',
          description: 'Bag is fine but leather is very thin .',
          product: 'Service Bag Brown',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/servicebrown_500x500.jpg?v=1695745103'
        },
        {
            id:4,
          name: 'Aqsa Atif',
          stars: 5,
          date: '10/01/2023',
          description: 'Nice quality',
          product: 'Black and Brown Abaya',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/products/blacknew4-min_500x500.jpg?v=1672311363'
        },
        {
            id:5,
          name: 'Shaista',
          stars: 5,
          date: '10/01/2023',
          description: 'Disappointed once again with the quality and size .and I paid online for the bag which leads to Extra deduction of money surprisingly so no benefit of sale price..last order from this store',
          product: 'Eensy Bag Black',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/1-23_f77ec303-e5a5-4437-8ff6-efbf25d9d725_500x500.jpg?v=1693395656'
        },
        {
            id:6,
          name: 'Ambreen rashid Rashid',
          stars: 5,
          date: '10/01/2023',
          description: 'Superb Superb quality Quick delivery',
          product: 'Milo Bag Green',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/files/green1_6625c0ed-1d03-4c06-b0cb-3f0df62f8664_500x500.jpg?v=1689938074'
        },
        {
            id:7,
          name: 'Aqsa Atif',
          stars: 5,
          date: '10/01/2023',
          description: 'Manay order kia hai bag...',
          product: 'HipHop Bag Brown',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/products/blacknew4-min_500x500.jpg?v=1672311363'
        },{
            id:8,
          name: 'Aqsa Atif',
          stars: 5,
          date: '10/01/2023',
          description: 'Manay order kia hai bag...',
          product: 'HipHop Bag Brown',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0268/0602/6426/products/blacknew4-min_500x500.jpg?v=1672311363'
        },
        // Add more data objects as needed
      ];

      const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      autoplaySpeed: 2000
      };
    
      
  return (
    <>
    <div className='flex flex-col justify-center items-center my-10 space-y-2'>
        <h1 className='font-bold text-3xl md:text-4xl'>Let Customer Speak For us</h1>
        <span className='flex text-lime-600'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </span>
        <p>From 6740 Reviews</p>
    </div>
    <Slider {...sliderSettings} className='overflow-hidden'>
      {data.map((item, index) => (
        <div key={index}>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full md:w-1/4 flex flex-col justify-center items-center md:items-start md:justify-start'>
              <h1 className='font-bold text-2xl self-center'>{item.name}</h1>
              <span className='flex text-lime-600 self-center'>
                {Array.from({ length: item.stars }, (_, i) => (
                  <AiFillStar key={i} />
                ))}
              </span>
              <p className='self-center'>{item.date}</p>
            </div>
            <div className='w-full md:w-1/4 flex flex-col justify-between items-center md:items-start self-start space-y-10'>
              <p className='text-center md:text-start'>{item.description}</p>
              <p className='md:text-start'>{item.product}</p>
            </div>
            <div className='w-full md:w-1/4 px-10 pb-10'>
              <img src={item.imageSrc} alt='' />
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </>
  )
}

export default CustomerReviews