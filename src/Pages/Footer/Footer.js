import React from 'react'
import {BsFacebook,BsTwitter,BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center space-y-6 my-10'>
    
      <img src='https://astore.pk/cdn/shop/files/New_Astore_logo1_180x.png?v=1614748510' className='w-44 h-20'/> 
      
    <p className='text-center text-gray-500 text-lg'>Subscribe to our newsletter and use code "WELCOME" to get free shipping</p>
    <input type='text' aria-label='' placeholder='Your Email Address' className='w-full md:w-3/4 lg:w-1/2 p-2 text-center '/>
  <button className='px-4 py-2 bg-rose-950 hover:bg-rose-900 text-white self-center'>SUBSCRIBE</button>
  <span className='flex space-x-2 text-2xl text-gray-800'>
    <BsFacebook/>
    <BsTwitter/>
    <BsInstagram/>
  </span>
  <div className=' text-gray-900  text-sm font-bold uppercase flex flex-wrap justify-center space-x-3'>
    <p className='hover:text-rose-900 cursor-pointer'>Search</p>
    <p className='hover:text-rose-900 cursor-pointer'>Customer reviews</p>
    <p className='hover:text-rose-900 cursor-pointer'>Contact us</p>
    <p className='hover:text-rose-900 cursor-pointer'>blogs</p>
    <p className='hover:text-rose-900 cursor-pointer'>Return and refund policy</p>
  </div>
  </div>
    </>
  )
}

export default Footer