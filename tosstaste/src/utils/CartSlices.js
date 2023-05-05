import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {
      menu:[],
      price:[],
    },
   
  },
  reducers: {
    addItems: (state, action) => {
      state.items.menu.push(action.payload);
      state.items.price.push(action.payload.price);
    },
    removeItems: (state, action) => {
      // state.items.splice(action.payload,1);
      const index = state.items.menu.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items.menu.splice(index, 1);

        state.items.price.splice(index,1);
      }
    },
    clearCart: (state) => {
      state.items = {
        menu:[],
        price:[],
      };
    },

  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
