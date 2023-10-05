import React from 'react'
import footwear from './footwear.jpg'
import glasses from './glasses.jpg'
import gloves from './gloves.jpg'
import jewellery from './jewellery.jpg'
import laptopbage from './laptopbags.jpg'
import newArrival from './newArrival.jpg'
import premium from './premium.jpg'
const Collection = () => {
    const imagesData = [
        { src: footwear, alt: 'footwear' },
        { src: gloves, alt: 'gloves' },
        { src: jewellery, alt: 'jewellery' },
        { src: laptopbage, alt: 'laptopbags' },
        { src: glasses, alt: 'glasses' },
        { src: newArrival, alt: 'newArrival' },
        { src: premium, alt: 'premium' }
      ];
  return (
    <>
    
    <div className='flex flex-wrap justify-center'>
      {imagesData.map((item, index) => (
        <div className='w-1/2 md:w-1/4 p-2 lg:w-' key={index}>
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>

    </>
  )
}

export default Collection