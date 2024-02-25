// // store.js
import cartReducer from "./Slices/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers as needed
  },
});
// import { configureStore } from "@reduxjs/toolkit";
// import { CartSlice } from "./Slices/cartSlice";

// export const store = configureStore({
//   reducer: {
//     cart: CartSlice.reducer,
//   },
// });
