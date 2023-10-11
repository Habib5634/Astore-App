import React from 'react'
import Banners from '../../Components/Banners/Banners'
import Footer from '../Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'

const Contact = () => {

    const data = [
        {
          title: "Contact Us",
          p1: "Put your query at",
          p2:"Whatsapp: +92-347-5391207",
          p3:"Email: cs@astore.pk",
          p4:"Business hours: 24/7",
          p5:"A Project of Mickey LLC.",
        }
        // Add more items as needed
      ];
  return (
    <>
    <Banners/>
    <Navbar/>
 
    <h1 className='text-6xl text-gray-900 text-center mt-10 mb-6 font-semibold'>About Us</h1>

  




    {data.map((item, index) => (
        <div key={index} className='mx-4 sm:mx-8 md:mx-24 mb-16'>
          <h1 className='text-2xl font-bold mt-16 mb-4'>{item.title}</h1>
          <p className='text-gray-500 mb-1'>{item.p1}</p>
          <p className='text-gray-500 mb-1'>{item.p2}</p>
          <p className='text-gray-500 mb-1'>{item.p3}</p>
          <p className='text-gray-500 mb-4'>{item.p4}</p>
          <p className='text-gray-500 mb-6'>{item.p5}</p>
         

        </div>
      ))}
    <Footer/>
    </>
  )
}

export default Contact