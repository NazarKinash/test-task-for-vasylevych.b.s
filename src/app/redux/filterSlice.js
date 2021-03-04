import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { products } from "./productsSlice";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    changeFilter: (state, { payload }) => payload,
  },
});

export const filterSelector = (state) => state.filter;
export const filteredProducrsSelector = createSelector(products, filterSelector, (arr, filter) => {
  return arr.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
});
export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
