import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  showCart: false,
  currentOrder: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    STORAGE_VALUE: (state, action) => {
      (state.cartItems = action.payload.cartItems),
        (state.currentOrder = action.payload.currentOrder);
    },
    HANDLE_CART: (state, action) => {
      state.showCart = !state.showCart;
      localStorage.setItem(
        "deliveryCartItems",
        JSON.stringify(state.cartItems)
      );
    },
    ADD_ITEM: (state, action) => {
      const findItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!findItem)
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, amount: 1 },
        ];
      localStorage.setItem(
        "deliveryCartItems",
        JSON.stringify(state.cartItems)
      );
    },
    REMOVE_ITEM: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      localStorage.setItem(
        "deliveryCartItems",
        JSON.stringify(state.cartItems)
      );
    },
    REMOVE_ITEMS: (state, action) => {
      state.cartItems = [];
      state.currentOrder = action.payload;
      localStorage.setItem(
        "deliveryCartItems",
        JSON.stringify(state.cartItems)
      );
      localStorage.setItem(
        "deliveryCurrentOrder",
        JSON.stringify(state.currentOrder)
      );
    },
    INCREASE_ITEM: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item._id === action.payload)
          return { ...item, amount: item.amount + 1 };
        else return item;
      });
      localStorage.setItem(
        "deliveryCartItems",
        JSON.stringify(state.cartItems)
      );
    },
    DECREASE_ITEM: (state, action) => {
      state.cartItems = state.cartItems
        .map((item) => {
          if (item._id === action.payload)
            return { ...item, amount: item.amount - 1 };
          else return item;
        })
        .filter((item) => item.amount > 0);
      localStorage.setItem(
        "deliveryCartItems",
        JSON.stringify(state.cartItems)
      );
    },
  },
});

export const {
  HANDLE_CART,
  ADD_ITEM,
  REMOVE_ITEM,
  REMOVE_ITEMS,
  INCREASE_ITEM,
  DECREASE_ITEM,
  STORAGE_VALUE,
} = cartSlice.actions;
export const showCart = (state) => state.cart.showCart;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCurrentOrder = (state) => state.cart.currentOrder;

export default cartSlice.reducer;
