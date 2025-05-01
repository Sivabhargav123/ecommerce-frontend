import React from "react";
import { useCart } from "../context/CartContext";
import EmptyCartImage from "../assets/empty-cart.gif";
import { FaTrash } from 'react-icons/fa';


const FullCartPage = () => {
  const { state, dispatch } = useCart();
  const { cartItems } = state;

  const handleRemove = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const handleQuantityChange = (product, action) => {
    let newQuantity = product.quantity;
    if (action === "increase") newQuantity += 1;
    if (action === "decrease" && product.quantity > 1) newQuantity -= 1;
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: product.id, quantity: newQuantity },
    });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = 10;
    return subtotal + shipping;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-start underline decoration-blue-600">Your Cart</h1>


      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <img
            src={EmptyCartImage}
            alt="Empty Cart"
            className="w-64 h-64 object-contain"
          />
          <p className="mt-6 text-gray-500 text-lg">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover"
                />
                <div className="flex-1 ml-4">
                  <h4 className="text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(item, "decrease")}
                    className="bg-gray-300 px-2 py-1 rounded-full text-sm"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item, "increase")}
                    className="bg-gray-300 px-2 py-1 rounded-full text-sm"
                  >
                    +
                  </button>
                </div>
                <button
  onClick={() => handleRemove(item)}
  className="text-red-500 text-sm ml-4 flex items-center space-x-1 hover:text-red-700 transition"
>
  <FaTrash className="text-base" />
</button>

              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="flex justify-between text-xl font-semibold mb-4">
              <p>Subtotal</p>
              <p>${calculateSubtotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-xl font-semibold mb-4">
              <p>Shipping</p>
              <p>$10.00</p>
            </div>
            <div className="flex justify-between text-xl font-semibold mb-4">
              <p>Total</p>
              <p>${calculateTotal().toFixed(2)}</p>
            </div>

            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-lg">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FullCartPage;
