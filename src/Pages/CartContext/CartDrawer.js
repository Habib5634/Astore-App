import React from 'react'
import { useCart } from './CartContext.';
import {AiOutlineClose} from 'react-icons/ai'

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
  return (
    <>
    <h1 className='text-center text-3xl -mt-10 text-gray-700'>Your CART</h1>
    {cartItems.map(item => (
            <div key={item.id} className="border-b">
              <td className="p-2 flex items-center">

                <img src={item.imageUrl} className="h-20 w-20 mr-4" alt="img" />
                {item.title}
              </td>
              <td className="p-2 text-center">Rs.{item.price}</td>
              
              <td className="p-2 flex justify-center">
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
              </td>
              <td className="p-2 text-center">Rs.{item.price * item.quantity}</td>
              <button title="Remove Item" className="  px-2 py-1 rounded" onClick={() => handleRemoveItem(item.id)}><AiOutlineClose/></button>

            </div>
          ))}
    </>
  )
}

export default CartDrawer