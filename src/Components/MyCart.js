// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { remove } from "../redux/Slices/cartSlice";
// import { Link } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
// import { toast } from "react-toastify";

// const MyCart = () => {
//   const { cart } = useSelector((state) => state.cart); // Select cart state from Redux store
//   const dispatch = useDispatch();

//   const removeFromCart = (itemId) => {
//     dispatch(remove(itemId));
//     toast.error("Removed from cart");
//   };

//   const addToCart = (item) => {
//     // Dispatch an action to add the item to the cart
//     // You should include this part based on your Redux setup
//     // After adding the item, show a toast notification
//     toast.success("Added to cart");
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-semibold mb-4">My Cart</h1>
//       <div className="flex items-center mb-4">
//         <FaShoppingCart className="text-2xl mr-2" />
//         <span className="text-xl font-semibold">{cart.length}</span>{" "}
//         {/* Display total number of items in the cart */}
//       </div>
//       {cart.length === 0 ? (
//         <div className="text-center">
//           <p>Your cart is empty.</p>
//           <Link to="/" className="text-blue-500 hover:underline">
//             Back to Home Page
//           </Link>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {cart.map((product) => (
//             <div
//               key={product.id}
//               className="border border-gray-300 rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 hover:shadow-xl p-4"
//             >
//               <img src={product.thumbnail} alt={product.title} />
//               <h3 className="text-xl font-semibold mt-2 mb-1">
//                 {product.title}
//               </h3>
//               <p className="text-gray-600 mb-2">{product.description}</p>
//               <p className="text-green-700 font-bold text-sm">
//                 ${product.price}
//               </p>
//               <button
//                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300"
//                 onClick={() => {
//                   removeFromCart(product.id);
//                 }}
//               >
//                 Remove from Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyCart;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

const MyCart = () => {
  const { cart } = useSelector((state) => state.cart); // Select cart state from Redux store
  const dispatch = useDispatch();

  const removeFromCart = (itemId) => {
    dispatch(remove(itemId));
    toast.error("Removed from cart");
  };

  const addToCart = (item) => {
    // You should dispatch an action to add the item to the cart based on your Redux setup
    // After adding the item, show a toast notification
    toast.success("Added to cart");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">My Cart</h1>
      <div className="flex items-center mb-4">
        <FaShoppingCart className="text-2xl mr-2" />
        <span className="text-xl font-semibold">{cart.length}</span>{" "}
        {/* Display total number of items in the cart */}
      </div>
      {cart.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty.</p>
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Home Page
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cart.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 hover:shadow-xl p-4"
            >
              <img src={product.thumbnail} alt={product.title} />
              <h3 className="text-xl font-semibold mt-2 mb-1">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-green-700 font-bold text-sm">
                ${product.price}
              </p>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300"
                onClick={() => {
                  removeFromCart(product.id);
                }}
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCart;
