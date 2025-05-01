import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import MiniCart from "./MiniCart";

const CartIcon = () => {
  const [showCart, setShowCart] = useState(false);
  const { state } = useCart();
  const { cartItems } = state;

  return (
    <div className="relative">
      <button onClick={() => setShowCart(!showCart)} className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.293a1 1 0 00.293 1.707H17a1 1 0 001-1V13H7zM9 21h.01M15 21h.01"
          />
        </svg>

        {cartItems.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </button>

      {showCart && <MiniCart />}
    </div>
  );
};

export default CartIcon;
