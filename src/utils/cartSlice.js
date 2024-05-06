import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const i = state.items.indexOf(action.payload);
      state.items.splice(i, 1);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});
export const { addItems, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
