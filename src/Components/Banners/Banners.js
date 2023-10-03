import React from 'react'
import {BsFacebook,BsTwitter,BsInstagram} from 'react-icons/bs'
const Banners = () => {
  return (
    <>
    <div className='w-full p-2 bg-pink-200'>
        <h1 className='uppercase text-2xl text-center'>Sales will end tonight</h1>
    </div>
    
    <div className='w-full flex justify-center  space-x-2 p-2 text-white bg-black'>
        <BsFacebook className='mt-1'/>
        <BsTwitter className='mt-1'/>
        <BsInstagram className='mt-1'/>
        <p className=''>Call: 0324-4325684</p>
    </div>
    </>
  )
}

export default Banners