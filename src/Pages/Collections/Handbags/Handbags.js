import React, { useState } from 'react'
import Banners from '../../../Components/Banners/Banners'
import Navbar from '../../../Components/Navbar/Navbar'
import { hover } from '@testing-library/user-event/dist/hover';
import {AiOutlineEye} from 'react-icons/ai'
import {HiShoppingBag} from 'react-icons/hi'
const Handbags = () => {
    const [selectedLayout, setSelectedLayout] = useState('allbags');
    const [hovered, setHovered] = useState(false);
  return (
    <>
    <Banners/>
      <Navbar/>
      <h1 className='text-6xl text-gray-900 text-center mt-10 font-semibold'>Handbags</h1>

      <div className="">
            
            <div className="flex justify-center space-x-4   border-gray-300">
                <div
                    className={` border-b text-sm text-center text-black hover:text-rose-700  transition-all duration-500  hover:underline hover:underline-offset-4 font-medium  cursor-pointer   mt-16 ${selectedLayout === 'allbags' ? 'text-rose-950 underline underline-offset-4 ' : ''
                        }`}
                    onClick={() => setSelectedLayout('allbags')}
                >
                    All BAG
                </div>
                <div
                    className={`text-sm border-b  text-center text-black hover:text-rose-700  transition-all duration-500 hover:underline hover:underline-offset-4 font-medium cursor-pointer  mt-16 ${selectedLayout === 'totebags' ? 'text-rose-950 underline underline-offset-4 ' : ''
                        }`}
                    onClick={() => setSelectedLayout('totebags')}
                >
                    TOTE BAG
                </div>
                <div
                    className={`text-sm border-b  text-center text-black hover:text-rose-700  transition-all duration-500 hover:underline hover:underline-offset-4 font-medium cursor-pointer  mt-16 ${selectedLayout === 'crossbodybags' ? 'text-rose-950 underline underline-offset-4 ' : ''
                        }`}
                    onClick={() => setSelectedLayout('crossbodybags')}
                >
                  CROSSBODY BAG
                </div>
                <div
                    className={`text-sm border-b  text-center text-black hover:text-rose-700  transition-all duration-500 hover:underline hover:underline-offset-4 font-medium cursor-pointer  mt-16  ${selectedLayout === 'shoulderbags' ? 'text-rose-950 underline underline-offset-4 ' : ''
                        }`}
                    onClick={() => setSelectedLayout('shoulderbags')}
                >
                    SHOULDER BAG
                </div>
                <div
                    className={`text-sm border-b  text-center text-black hover:text-rose-700  transition-all duration-500 hover:underline hover:underline-offset-4 font-medium cursor-pointer  mt-16  ${selectedLayout === 'bucketbags' ? 'text-rose-950 underline underline-offset-4 ' : ''
                        }`}
                    onClick={() => setSelectedLayout('bucketbags')}
                >
                    BUCKET BAG
                </div>
                <div
                    className={`text-sm border-b  text-center text-black hover:text-rose-700  transition-all duration-500 hover:underline hover:underline-offset-4 font-medium cursor-pointer  mt-16  ${selectedLayout === 'handlebags' ? 'text-rose-950 underline underline-offset-4 ' : ''
                        }`}
                    onClick={() => setSelectedLayout('handlebags')}
                >
                    HANDLE BAG
                </div>
                <div
                    className={`text-sm border-b  text-center text-black hover:text-rose-700  transition-all duration-500 hover:underline hover:underline-offset-4 font-medium cursor-pointer  mt-16  ${selectedLayout === 'premiumbags' ? 'text-rose-950 underline underline-offset-4 ' : ''
                        }`}
                    onClick={() => setSelectedLayout('premiumbags')}
                >
                    PREMIUM BAG
                </div>
            </div>
            <div className="">
                {selectedLayout === 'allbags' && <div className="flex justify-center items-center h-screen">
      <div
        className="relative w-64 h-64 bg-gray-200 transition-transform transform hover:scale-110"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={hovered ? 'https://astore.pk/cdn/shop/products/drmadihaweb2_a8d1a043-9230-4fb1-89a4-f5082858a23a_360x.jpg?v=1686558270' : 'https://astore.pk/cdn/shop/files/maroon1_49bf5a9c-d31e-4b89-859f-73fced54e325_360x.jpg?v=1686558270'}
          alt="Image"
          className="w-full h-full object-cover"
        />
        {hovered? <div className=' flex flex-col justify-between'>
            <AiOutlineEye className='text-white m-2 text-4xl top-8 right-8 absolute bg-gray-500 p-2 cursor-pointer rounded-full'/>
<HiShoppingBag className='text-white m-2 text-4xl bottom-8 right-8 absolute bg-rose-900 p-2 cursor-pointer rounded-full'/>
        </div>:""}
      </div>
    </div>}
                {selectedLayout === 'totebags' && "tote"}
                {selectedLayout === 'crossbodybags' && "crossbody"}
                {selectedLayout === 'shoulderbags' && "shoulder"}
                {selectedLayout === 'bucketbags' && "bucket"}
                {selectedLayout === 'handlebags' && "handle"}
                {selectedLayout === 'premiumbags' && "premium"}
                <hr />
            </div>
        </div>
    </>
  )
}

export default Handbags