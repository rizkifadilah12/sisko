import { configureStore } from '@reduxjs/toolkit';
import productReducer from './feature/productSlice';
import blogReducer from "./feature/blogSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    blog : blogReducer
  },
});
