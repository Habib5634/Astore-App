import React, { useState } from 'react'
import data from '../HandbagsCollection'
import {AiOutlineEye} from 'react-icons/ai'
import {HiShoppingBag} from 'react-icons/hi'
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'
const Handle = () => {
    const [hoveredItem, setHoveredItem] = useState(null)

    const totebags = data.filter((item) => item.category.includes("handle"));
  return (
    <>
    <div className='flex flex-wrap justify-center space-x-4 mt-10 overflow-hidden'>
      {totebags.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center w-1/6 h-1/6 items-center mb-4"
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div
            className="relative h-fit bg-gray-200 transition-transform transform hover:scale-105"
          >
            <img
              src={hoveredItem === item.id ? item.hoveredImageUrl : item.imageUrl}
              alt="Image"
              className=" object-cover"
            />
            {hoveredItem === item.id && (
              <div className='flex flex-col justify-between'>
                <AiOutlineEye className={`text-white m-2 text-4xl top-8  animate-pulse absolute bg-gray-500 p-2 cursor-pointer rounded-full right-8 transition-all duration-500`} />
                <HiShoppingBag className={`text-white m-2 text-4xl bottom-8 animate-pulse absolute bg-rose-900 p-2 cursor-pointer rounded-full right-8 transition-all duration-500`} />
              </div>
            )}
          </div>
          <h1 className='self-start mt-6 font-medium'>{item.title}</h1>
          <span className='flex text-lime-500 space-x-1 self-start'>
  {Array.from({ length: 5 }, (_, index) => {
    if (index + 1 <= Math.floor(item.rating)) {
      return <BsStarFill key={index} className="mt-1 text-lime-500" />;
    } else if (index + 0.5 <= item.rating) {
      return <BsStarHalf key={index} className="mt-1 text-lime-500" />;
    } else {
      return <BsStar key={index} className="mt-1 text-gray-300" />;
    }
  })}
  <p className='text-gray-500'>{item.reviews} reviews</p>
</span>
          <span className='self-start flex'>
            <p className='text-gray-500 text-sm pr-2 mt-0.5 line-through'> Rs.{item.realPrice}</p> <p className='text-red-500  font-medium'>Rs.{item.price}</p>
          </span>
        </div>
      ))}
    </div>
  </>
  )
}

export default Handle