import { configureStore } from "@reduxjs/toolkit";
import filter from "./redux/filterSlice";
import products from "./redux/productsSlice";

export default configureStore({
  reducer: { products, filter },
});
