import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice';
import productReducer from './productSlice';
export const store = configureStore({
  reducer: {
    // Add your reducers here
    cart: cartReducer,
    products: productReducer,
  },
});