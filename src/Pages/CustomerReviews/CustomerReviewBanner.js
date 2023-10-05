import React from 'react'

const CustomerReviewBanner = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full py-4  space-y-4 bg-gray-700'>
    <h1 className='text-3xl md:text-4xl lg:text-5xl text-white'>Customer Reviews</h1>
    <button className='py-2 px-4 border border-white text-white hover:bg-purple-950 hover:border-purple-950 transition-colors duration-500'>VIEW ALL</button>
</div>
  )
}

export default CustomerReviewBanner