
import React from 'react';
import { useCart } from '../context/CartContext';
import EmptyCartImage from '../assets/empty-cart.gif'; // Make sure this path is correct
import { FaTrash } from 'react-icons/fa';

const MiniCart = () => {
  const { state, dispatch } = useCart();
  const { cartItems } = state;

  const handleRemove = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg z-50">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Mini Cart</h3>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8">
          <img
            src={EmptyCartImage}
            alt="Empty Cart"
            className="w-32 h-32 object-contain"
          />
          <p className="mt-4 text-gray-500 dark:text-gray-300">Your cart is empty</p>
        </div>
      ) : (
        <>
          <ul className="max-h-64 overflow-y-auto">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between mb-4">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                <div className="flex-1 ml-4">
                  <h4 className="text-sm text-gray-800 dark:text-white">{item.title}</h4>
                  <p className="text-xs text-gray-500">${item.price} x {item.quantity}</p>
                </div>
                <button
                  onClick={() => handleRemove(item)}
                  className="text-red-500 text-sm"
                >
                 <FaTrash className="text-base" />
                </button>

              </li>
            ))}
          </ul>

          <div className="flex justify-between mt-4 items-center">
            <p className="font-semibold text-gray-800 dark:text-white">
              Subtotal: ${calculateSubtotal().toFixed(2)}
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-all duration-300">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MiniCart;
