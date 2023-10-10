import React, { useState } from 'react';
import { AiOutlineRight, AiOutlineLeft, AiOutlineClose } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import {BsFacebook,BsTwitter,BsInstagram} from 'react-icons/bs'
import { useCart } from '../../Pages/CartContext/CartContext.'


const ProductModal = ({ item, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate(); // Initialize the navigate function
    const { state, dispatch } = useCart();

    const handleNextImage = () => {
        if (currentImageIndex < item.images.length - 1) {
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
   
      const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity } });
        navigate('/cart');
    };
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-10 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="sm:w-1/2 pb-4">
                                <div className="relative">
                                    {item.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Product ${index + 1}`}
                                            className={`w-full h-full object-cover ${index === currentImageIndex ? '' : 'hidden'
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
                            <div className="sm:w-1/2 pl-4">
                                <h3 className="text-2xl leading-6 mt- font-medium text-gray-900 mb-6">
                                    {item.title}
                                </h3>
                                <div className="flex items-center justify-start mb-6">
                                    <p className='text-gray-500 text-sm pr-2 mt-0.5 line-through'> Rs.{item.realPrice}</p> <p className='text-red-500 text-2xl font-medium'>Rs.{item.price}</p>
                                </div>

                                <Link className='flex hover:text-red-500' to={`/product-detail-page/${item.id}`}>
      View Product Details <AiOutlineRight className='mt-1.5 '/>
    </Link>
                                <div className="flex items-center">
                                    <button
                                        onClick={decrementQuantity}
                                        className="text-lg font-bold border border-r-0 border-gray-400 hover:bg-gray-200 px-2 py-1 rounded-l mt-2   "
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
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
                                </div>

                                        <h1 className='mt-6'>SKU: {item.title}</h1>
                                        <h1 className='mt-6 '>Category: {item.category}</h1>
                                        <h1 className='mt-6 flex'>Share On:  <span className='flex space-x-2 mt-1 ml-6 text-lg text-gray-800'>
    <BsFacebook className='hover:text-rose-950 cursor-pointer'/>
    <BsTwitter className='hover:text-rose-950 cursor-pointer'/>
    <BsInstagram className='hover:text-rose-950 cursor-pointer'/>
  </span></h1>
                            </div>
                        </div>
                    </div>

                    <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                        <button
                            type="button"
                            className="inline-flex justify-center absolute top-2 right-2 w-fit rounded-md border border-transparent   text-2xl leading-6 font-medium text-gray-800 shadow-sm  focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                            onClick={onClose}
                        >
                            <AiOutlineClose className='text-2xl' />
                        </button>
                    </span>

                </div>
            </div>
        </div>
    );
}

export default ProductModal;
