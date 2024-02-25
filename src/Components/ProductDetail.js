import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart); // Access cart state from Redux store

  const product = products.find((product) => product.id === parseInt(id));

  const addToCart = (product) => {
    dispatch(add(product));
    toast.success("Added to cart");
  };

  const removeFromCart = (productId) => {
    dispatch(remove(productId));
    toast.error("Removed from cart");
  };

  const isProductInCart = cart.some((p) => p.id === product.id); // Check if product is in cart

  return (
    <div className="container mx-auto px-4 mt-32">
      <div className="flex justify-center items-center my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.title}
              className="object-cover w-24 h-24 md:w-full md:h-auto"
            />
          ))}
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold my-4">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-green-700 font-bold text-xl mb-4">
          ${product.price}
        </p>
        <p className="text-gray-700 mb-4">Stocks: {product.stock}</p>
      </div>
      <div className="flex justify-center mt-4">
        {/* Conditional rendering based on whether the product is in the cart */}
        {isProductInCart ? (
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-2 transition duration-300 mr-2"
            onClick={() => removeFromCart(product.id)}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mt-2 transition duration-300 gap-x-3"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
export default ProductDetail;
