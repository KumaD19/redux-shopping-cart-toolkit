import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../state/products.slice';


const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;