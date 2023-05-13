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
        removeItem:(state,action)=>{
            const index= state.items.findIndex((item)=> item.id=== action.payload);
            if(index !== -1){
                state.items.splice(index,1)
            }
        },
    }
})
export const {addItems,clearCart,removeItem} = cartSlice.actions;

export default cartSlice.reducer;

//^ go To store to provide slices