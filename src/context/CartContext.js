
import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      const updatedCart = existingItem
        ? state.cartItems.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...state.cartItems, action.payload];

      return { ...state, cartItems: updatedCart };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };

    case 'LOAD_CART':
      return { ...state, cartItems: action.payload };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  // Optional: You can remove dark mode logic from here entirely
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
