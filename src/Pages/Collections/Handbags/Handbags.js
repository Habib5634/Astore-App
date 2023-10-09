import React, { useEffect, useState } from 'react'
import Banners from '../../../Components/Banners/Banners'
import Navbar from '../../../Components/Navbar/Navbar'

import Footer from '../../Footer/Footer'

import AllBags from './AllBags';
import Totebags from './BagCategories/Totebags';
import Crossbody from './BagCategories/Crossbody';
import Handle from './BagCategories/Handle';
import Bucket from './BagCategories/Bucket';
import Premium from './BagCategories/Premium';
import Shoulder from './BagCategories/Shoulder';
import BagsFooter from './BagsFooter';
import { useParams } from 'react-router-dom';
const Handbags = () => {
    const [selectedLayout, setSelectedLayout] = useState('allbags');

    const { layoutType } = useParams();

  useEffect(() => {
    console.log(layoutType);
    if (layoutType === 'totebag') {
      setSelectedLayout('totebags');
    } else {
      setSelectedLayout('allbags');
    }
  }, [layoutType]);
    
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
                {selectedLayout === 'allbags' && <AllBags/>}
                {selectedLayout === 'totebags' && <Totebags/>}
                {selectedLayout === 'crossbodybags' && <Crossbody/>}
                {selectedLayout === 'shoulderbags' && <Shoulder/>}
                {selectedLayout === 'bucketbags' && <Bucket/>}
                {selectedLayout === 'handlebags' && <Handle/>}
                {selectedLayout === 'premiumbags' && <Premium/>}
                <hr />
            </div>
        </div>
        <BagsFooter/>
        <Footer/>
    </>
  )
}

export default Handbags