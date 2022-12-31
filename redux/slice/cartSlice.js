import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartAmount: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    HANDLE_CART: (state, action) => {
      state.showCart = !state.showCart;
      console.log("showCart",state.showCart)
    },
  },
});

export const { HANDLE_CART } = cartSlice.actions;
export const showCart = (state) => state.cart.showCart;

export default cartSlice.reducer;
