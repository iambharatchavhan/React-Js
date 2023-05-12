import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"shopCart",
    initialState:{
        items:[],
    },
    reducers: {
        //* actions
        addItems:(state,action)=>{
            state.items.push(action.payload);
        },
        clearCart:(state)=>{
            state.items = [];
        },
    }
})
export const {addItems,clearCart} = cartSlice.actions;

export default cartSlice.reducer;

//^ go To store to provide slices