import React from 'react'
import img1 from './MOBILE_BANNER_32_720x.jpg'
import img2 from './MOBILE_BANNER_22_jpg_720x.png'

const HandBagsBanner2 = () => {
  return (
    <div className='flex '>
  <div className='relative p-2'>
    <img src={img1} alt='img1'/>
    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity"></div>
  </div>
  <div className='relative p-2'>
    <img src={img2} alt='img2' />
    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity"></div>
  </div>
</div>

  )
}

export default HandBagsBanner2