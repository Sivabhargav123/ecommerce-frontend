import React from "react";
import { useCart } from "../context/CartContext";
import { ShoppingBag } from "lucide-react";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    const existingProduct = product.quantity
      ? product
      : { ...product, quantity: 1 };
    dispatch({ type: "ADD_TO_CART", payload: existingProduct });
  };

  return (
    <div className="group rounded-lg transition-all duration-300">
    <div className="p-[2px] rounded-lg transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-blue-400">
      <div className="p-4 rounded-lg bg-white transition-all duration-300 group-hover:bg-gray-50 dark:bg-gray-900 dark:group-hover:bg-gray-800">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-600">${product.price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded flex items-center justify-center gap-2 hover:gap-3 transition-all duration-300 group"
        >
          Add to Cart
          <ShoppingBag className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default ProductCard;
