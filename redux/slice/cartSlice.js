import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    HANDLE_CART: (state, action) => {
      state.showCart = !state.showCart;
    },
    ADD_ITEM: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    REMOVE_ITEM: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },
    INCREASE_ITEM: (state, action) => {},
    DECREASE_ITEM: (state, action) => {},
  },
});

export const {
  HANDLE_CART,
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
} = cartSlice.actions;
export const showCart = (state) => state.cart.showCart;
export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
