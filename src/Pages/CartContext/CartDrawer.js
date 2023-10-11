import React from 'react'
import { useCart } from './CartContext.';
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const CartDrawer = () => {
    const { state, dispatch } = useCart();
    const { cartItems } = state;
  
    const handleRemoveItem = (itemId) => {
      dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    };
  
    const handleIncrement = (itemId) => {
      dispatch({ type: 'INCREMENT_QUANTITY', payload: itemId });
    };
  
    const handleDecrement = (itemId) => {
      dispatch({ type: 'DECREMENT_QUANTITY', payload: itemId });
    };
  
    if (cartItems.length === 0) {
      return <>
      
      <div className="text-center mt-10 font-bold text-xl">Your cart is empty.</div>
      
    </>
    }
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  return (
    <>
    <h1 className='text-center text-3xl -mt-10 text-gray-700'>Your CART</h1>
    {cartItems.map(item => (
            <div key={item.id} className="border-b flex p-4">
              <td className="p-2 flex items-center">

                <img src={item.imageUrl} className="h-20 w-20 mr-4" alt="img" />
                
              </td>
              <div className="p-2 text-center flex flex-col items-center justify-between "><span className='text-start text-xs'>{item.title}</span><span className='text-start self-start'>Rs.{item.price}</span></div>
              
              <td className="p-2 flex flex-col">
                <span className='flex'>
              <button
                onClick={() => handleDecrement(item.id)}
                className="text-lg font-bold border border-r-0 border-gray-400 hover:bg-gray-200 px-2 py-1 rounded-l mt-2"
              >
                -
              </button>
              <span className="text-lg border border-gray-400 border-l-0 border-r-0 py-1.5 font-bold px-3 mt-2">{item.quantity}</span>
              <button
                onClick={() => handleIncrement(item.id)}
                className="text-lg font-bold border border-l-0 border-gray-400 hover:bg-gray-200 px-1 py-1 mr-2 mt-2 rounded-r"
              >
                +
              </button>
              </span>
              <button title="Remove Item" className="  px-2 py-1 underline" onClick={() => handleRemoveItem(item.id)}>Remove</button>
              <span></span>
              </td>
              

            </div>
          ))}

<div className=' p-4 full m-2'>
        <h1 className=" text-xs  mb-4  my-4 text-start">Special instruction for seller</h1>
        <textarea 
        className="w-full h-40 p-2 border border-gray-300 rounded"
        placeholder=""
      ></textarea>
        </div>

        <div className='flex flex-col p-4 w-full'>
            <div className='flex justify-between mx-6  '>
                <h1 className='font-bold text-gray-600 text-lg'>Subtotal</h1>
                <h1 className='font-bold text-rose-950 text-lg'>Rs.{total}</h1>
            </div>
            <p className=' text-gray-500 italic my-3 text-center'>Shiping and taxes calculated at checkout</p>
            <div className='mx-6'>
            <Link to='/cart'><button className='w-full py-3 text-white bg-gray-950 hover:bg-gray-900 transition-colors duration-500'>View Cart</button></Link>
            <button className='w-full py-3 text-white bg-rose-950 hover:bg-rose-900 transition-colors duration-500 mt-3'>Checkout</button>
            </div>
        </div>
    </>
  )
}

export default CartDrawer