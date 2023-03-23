import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import productsApi from "../api/products";
import { ProductsSlice } from "../type";
import { Product } from "../../types";

const initialState: ProductsSlice = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToList: (state, { payload }: PayloadAction<Product>) => {
      state.products.push({ ...payload, id: Math.random() });
    },
    removeFromList: (state, { payload }: PayloadAction<Product>) => {
      state.products = state.products.filter((item) => item.id !== payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.getAllProducts.matchFulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.products = payload.products;
      }
    );
  },
});

export const { addToList, removeFromList } = productsSlice.actions;
export default productsSlice.reducer;
