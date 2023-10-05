import React from 'react'
import img1 from './MOBILE_BANNER_18_3eb26cc5-3295-4141-9771-d059b78d596d_670x.jpg'
import img2 from './MOBILE_BANNER_19_70cad639-3cf4-47e0-8a3e-a36926a6b0cf_670x.jpg'
import img3 from './MOBILE_BANNER_20_b32e987f-9cf3-4b41-a7dc-8a24d6d62d29_670x.jpg'

const ClearanceSale = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center w-full py-4  space-y-4 bg-black'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-white'>CLEARANCE SALE</h1>
        <button className='py-2 px-4 border border-white text-white hover:bg-purple-950 hover:border-purple-950 transition-colors duration-500'>SHOP NOW</button>
    </div>

    <div className='flex w-full space-x-2 justify-center p-2'>
  <div className='relative overflow-hidden'>
    <img className=' transition-transform transform hover:scale-110' src={img1} alt='img1'/>
  </div>
  <div className='relative overflow-hidden'>
    <img className=' transition-transform transform hover:scale-110' src={img2} alt='img2'/>
  </div>
  <div className='relative overflow-hidden'>
    <img className=' transition-transform transform hover:scale-110' src={img3} alt='img3'/>
  </div>
</div>

    </>
  )
}

export default ClearanceSale