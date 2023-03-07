import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantit: 0,
    showCart: false,
  },
  reducers: {
    addToCart() {},
    removeFromCart() {},
    setShowCart(state) {
      state.showCart = true;
    },
  },
});
