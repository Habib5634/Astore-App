import React, {  useState } from 'react'
import Navbar from '../../../../Components/Navbar/Navbar'
import Banners from '../../../../Components/Banners/Banners'
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'
// import data from './CosmeticBagCollection.js'
import {AiOutlineEye} from 'react-icons/ai'
import {HiShoppingBag} from 'react-icons/hi'
import BagsFooter from '../BagsFooter'
import Footer from '../../../Footer/Footer'

const data = [
    {
      id: 1,
      imageUrl: 'https://astore.pk/cdn/shop/products/1-6_d8719011-a794-4dc6-a50f-5bb1a5151c5c_360x.jpg?v=1670833479',
      hoveredImageUrl: 'https://astore.pk/cdn/shop/products/1-5_6f1e2f42-84b9-446b-a65c-6a0a7569624e_360x.jpg?v=1670833479',
      title:"Pouch Size Shoulder Bag",
      category:["engraveyardbag"],
      price:' 2,499',
      realPrice:'4,000',
      rating: 4.5,
      reviews:"38"

    },]

const EngraveyardBag = () => {

    const [hoveredItem, setHoveredItem] = useState(null)
      const [currentPage, setCurrentPage] = useState(1);
      const [postPerPage] = useState(10);
      const [pagesToShow] = useState(5);
  
    
      const totalPosts = data.length;
      const totalPageNumbers = Math.ceil(totalPosts / postPerPage);
  
      let startPage, endPage;
      if (totalPageNumbers <= pagesToShow) {
          startPage = 1;
          endPage = totalPageNumbers;
      } else {
          const halfPagesToShow = Math.floor(pagesToShow / 2);
          if (currentPage <= halfPagesToShow) {
              startPage = 1;
              endPage = pagesToShow;
          } else if (currentPage + halfPagesToShow >= totalPageNumbers) {
              startPage = totalPageNumbers - pagesToShow + 1;
              endPage = totalPageNumbers;
          } else {
              startPage = currentPage - halfPagesToShow;
              endPage = currentPage + halfPagesToShow;
          }
      }
  
      const pageNumbers = [];
      for (let i = startPage; i <= endPage; i++) {
          pageNumbers.push(i);
      }
  
      const handlePageClick = (pageNumber) => {
          setCurrentPage(pageNumber);
      };
  
      const indexOfLastPost = currentPage * postPerPage;
      const indexOfFirstPost = indexOfLastPost - postPerPage;
      const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
    <Banners/>
      <Navbar/>
      <h1 className='text-6xl text-gray-900 text-center mt-10 font-semibold uppercase'>Engraveyard Bags</h1>


      
    <div className='flex flex-wrap justify-center space-x-4 mt-10 overflow-hidden'>
      {data.map((item) => (
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
   <div className="flex justify-center mt-4">
                {currentPage > 1 && (
                    <button onClick={() => handlePageClick(currentPage - 1)} className="mx-2  text-black font-medium py-2 px-4 rounded">
                        Prev
                    </button>
                )}
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        onClick={() => handlePageClick(number)}
                        className={`mx-2  text-black font-medium py-2 px-4 rounded ${currentPage === number ? 'text-red-500' : ''}`}
                    >
                        {number}
                    </button>
                ))}
                {currentPage < totalPageNumbers && (
                    <button onClick={() => handlePageClick(currentPage + 1)} className="mx-2 font-medium text-black  py-2 px-4 rounded">
                        Next
                    </button>
                )}
            </div> 
  <BagsFooter/>
  <Footer/>
    </>
  )
}

export default EngraveyardBag