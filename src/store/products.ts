import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from "../models/Product"

interface ProductsState {
    products: Product[];
  }
  
  const initialState: ProductsState = {
    products: [],
  };

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    editProduct(state, action: PayloadAction<Product>) {
      const { id, ...updatedProduct } = action.payload;
      const productIndex = state.products.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        state.products[productIndex] = { ...state.products[productIndex], ...updatedProduct };
      }
    },
  },
});

export const { addProduct, removeProduct, editProduct } = productsSlice.actions;

export default productsSlice.reducer;
