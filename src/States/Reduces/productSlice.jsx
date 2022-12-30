import { createSlice } from "@reduxjs/toolkit";
// react-redux // @reduxjs/toolkit npm intalle

export const productSlice = createSlice({
  name: "index",
  initialState: 0,
  reducers: {
    Inc: (state, action) => {
      return (state += 100);
    },
    Dec: (state, action) => {
      return (state -= 100);
    },
  },
});

export const { Inc, Dec } = productSlice.actions;
export default productSlice.reducer;
