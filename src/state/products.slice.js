import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./status";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      return res.data;
    } catch (error) {}
  }
);


const productsSlice = createSlice({
  name: "products",
  initialState: {
    cart: [],
    products: [],
    status: IDLE,
    error: null

  },
  reducers: {
    addCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    incrementItem: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          state.cart = state.cart.filter(
            (cartItem) => cartItem.id !== action.payload
          );
        }
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export const { addCart, deleteCart, incrementItem, decrementItem } =
  productsSlice.actions;
const { reducer: productsReducer } = productsSlice;
export default productsReducer;
