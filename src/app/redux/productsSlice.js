import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const asyncGetProducts = createAsyncThunk("products/getProducts", async () => {
  const resalt = await axios
    .get("https://floating-ridge-84591.herokuapp.com/products")
    .then((response) => response.data);
  return resalt;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [asyncGetProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [asyncGetProducts.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [asyncGetProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const products = (state) => state.products.list;
export default productsSlice.reducer;
