import { createSlice } from "@reduxjs/toolkit";
// react-redux // @reduxjs/toolkit npm intalle
const initialState = 10;

export const productSlice = createSlice({
  name: "index",
  initialState: initialState,
  reducers: {
    Inc: (state, action) => {
      return (state += 10);
    },
    Dec: (state, action) => {
      return (state -= 10);
    },
  },
});

export const { Inc, Dec } = productSlice.actions;
export default productSlice.reducer;
