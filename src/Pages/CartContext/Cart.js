// CartPage.js
import React from 'react';
import { useCart } from './CartContext.';
import {AiOutlineClose} from 'react-icons/ai'
import Banners from '../../Components/Banners/Banners';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../Footer/Footer';
// Other imports...
const CartPage = () => {
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
      <Banners />
      <Navbar />
      <div className="text-center mt-10 font-bold text-3xl">Your cart is empty.</div>
      <Footer />
    </>
    }
    
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    return (
      <>
      <Banners/>
      <Navbar/>
      <h1 className="text-3xl font-bold mb-4 text-center ">Your Cart</h1>
      <table className="min-w-full border border-collapse">
        <thead>
          <tr className="border-b"> 
            <th className="p-2">Product</th>
            <th className="p-2">Price</th>
            <th className="p-2">Quantity</th>
            
            <th className="p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id} className="border-b">
              <td className="p-2 flex items-center">
              <button title="Remove Item" className="  px-2 py-1 rounded" onClick={() => handleRemoveItem(item.id)}><AiOutlineClose/></button>

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
            </tr>
          ))}
        </tbody>
      </table>

      <div className='flex justify-center mt-10'>
        <div className='bg-gray-100 p-4 w-2/5 m-2'>
        <h1 className="text-2xl font-bold mb-4 uppercase my-4 text-center">Special instruction for seller</h1>
        <textarea 
        className="w-full h-40 p-2 border border-gray-300 rounded"
        placeholder=""
      ></textarea>
        </div>
        <div className='bg-gray-100 p-4 w-2/5 m-2'>
        <h1 className="text-2xl font-bold mb-4 uppercase my-4 text-center">Carts Total</h1>


        <div className='flex justify-between px-2 border-b-2 pb-2'>
          <h1 className='font-bold '>Subtotal</h1>
          <h1>Rs.{total}</h1>
        </div>
     
        <div className='flex justify-between px-2 mt-4 border-b-2 pb-2'>
          <h1 className='font-bold '>Shipping</h1>
          <h1>Shipping & taxes calculated at checkout</h1>
        </div>

        <div className='flex justify-between px-2 mt-6 border-b-2 pb-2'>
          <h1 className='font-bold text-xl'>Shipping</h1>
          <h1 className='text-xl font-bold'>Rs.{total}</h1>
        </div>
        <button className='bg-rose-950 w-full py-2 text-white hover:bg-rose-900 mt-4 font-bold transition-colors duration-500'>PROOCEED TO CHECKOUT</button>
          
        </div>
      </div>

      <Footer/>
    </>
    

    );
  };
  
  export default CartPage;