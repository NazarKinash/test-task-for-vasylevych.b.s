import { configureStore } from "@reduxjs/toolkit";

import products from "./redux/productsSlice";

export default configureStore({
  reducer: { products },
});
