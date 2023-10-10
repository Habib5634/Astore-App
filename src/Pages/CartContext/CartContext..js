// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cartItems: []
};

const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
        if (existingItemIndex !== -1) {
          const updatedCartItems = [...state.cartItems];
          updatedCartItems[existingItemIndex].quantity += action.payload.quantity;
          return {
            ...state,
            cartItems: updatedCartItems
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload]
          };
        }
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload)
        };
      case 'INCREMENT_QUANTITY':
        const incrementedItems = state.cartItems.map(item => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return {
          ...state,
          cartItems: incrementedItems
        };
      case 'DECREMENT_QUANTITY':
        const decrementedItems = state.cartItems.map(item => {
          if (item.id === action.payload && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        return {
          ...state,
          cartItems: decrementedItems
        };
      default:
        return state;
    }
  };
  

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
