import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import data from '../../Pages/ProductsCollection/ProductsCollection'
import { AiOutlineRight, AiOutlineLeft,AiOutlineShoppingCart } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import Banners from '../../Components/Banners/Banners';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../Footer/Footer';
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'


const getProductById = (id) => {
    // Assuming products is an array of products
    return data.find(product => product.id === parseInt(id));
  };
const ProductDetailPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
  const product = getProductById(id);
  
    if (!product) {
      return <div>Product not found.</div>;
    }
  
    
  
    const handleNextImage = () => {
      if (currentImageIndex < product.images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    };
  
    const handlePrevImage = () => {
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    };
  
    const incrementQuantity = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
    };
  
    const decrementQuantity = () => {
      if (quantity > 1) {
        setQuantity(prevQuantity => prevQuantity - 1);
      }
    };
  
    return (
        <>
        <Banners/>
        <Navbar/>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-10 text-center sm:block sm:p-0">
        <div className="sm:flex sm:items-start sm:justify-center">
          <div className="sm:w-2/5 pb-4">
            <div className="relative">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product ${index + 1}`}
                  className={`w-full h-full object-cover ${
                    index === currentImageIndex ? '' : 'hidden'
                  }`}
                />
              ))}
              <button
                onClick={handlePrevImage}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-xl font-bold"
              >
                <AiOutlineLeft className='text-3xl text-gray-600' />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-xl font-bold"
              >
                <AiOutlineRight className='text-3xl text-gray-600' />
              </button>
            </div>
          </div>
          <div className="sm:w-2/5 pl-4 flex-flex-col">
            <h3 className="text-4xl text-start mt-6 font-medium text-gray-900 mb-6">
              {product.title}
            </h3>
            <span className='flex text-lime-500 space-x-1 self-start'>
              {Array.from({ length: 5 }, (_, index) => {
                if (index + 1 <= Math.floor(product.rating)) {
                  return <BsStarFill key={index} className="mt-1 text-lime-500" />;
                } else if (index + 0.5 <= product.rating) {
                  return <BsStarHalf key={index} className="mt-1 text-lime-500" />;
                } else {
                  return <BsStar key={index} className="mt-1 text-gray-300" />;
                }
              })}
              <p className='text-gray-500'>{product.reviews} reviews</p>
            </span>
            <div className="flex items-center justify-start mb-6">
              <p className='text-gray-500 text-sm pr-2 mt-0.5 line-through'> Rs.{product.realPrice}</p>
              <p className='text-red-500 text-2xl font-medium'>Rs.{product.price}</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={decrementQuantity}
                className="text-lg font-bold border border-r-0 border-gray-400 hover:bg-gray-200 px-2 py-1 rounded-l mt-2"
              >
                -
              </button>
              <span className="text-lg border border-gray-400 border-l-0 border-r-0 py-1 font-bold px-3 mt-2">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="text-lg font-bold border border-l-0 border-gray-400 hover:bg-gray-200 px-1 py-1 mr-2 mt-2 rounded-r"
              >
                +
              </button>
              <button
                className="block w-full px-4 py-2 mt-2 bg-green-500 text-white font-semibold text-center rounded"
                onClick={() => {
                  // Add to cart logic here
                }}
              >
                Add to Cart
              </button>
            </div>
          <button className='w-full text-white mt-4 bg-rose-950 animate-bounce text-xl rounded-lg flex justify-center items-center py-2'><AiOutlineShoppingCart className='text-2xl '/>ORDER NOW</button>

          </div>
        </div>
      </div>

      <Footer/>
      </>
    );
  }
  
  export default ProductDetailPage;
