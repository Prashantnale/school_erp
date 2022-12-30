import { productSlice } from "./Reduces/productSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    number: productSlice.reducer,
  },
});

export default store;
