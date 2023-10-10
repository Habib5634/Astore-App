// CartPage.js
import React from 'react';
import { useCart } from './CartContext.';
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
      return <div>Your cart is empty.</div>;
    }
  
    return (
      <>
        <h1>Your Cart</h1>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.title} - Rs.{item.price} x {item.quantity}
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              <button onClick={() => handleIncrement(item.id)}>+</button>
              <button onClick={() => handleDecrement(item.id)}>-</button>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default CartPage;