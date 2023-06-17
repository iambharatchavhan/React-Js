 import { createSlice } from "@reduxjs/toolkit";


 const menuSlice = createSlice({
    name: "app",
    initialState:{
        isMenuOpen : true,
    },
    reducers: {
        toggleState : (state) => {
            state.isMenuOpen = !state.isMenuOpen
        }
    }

 })
 export const {toggleState} =  menuSlice.actions;

 export default  menuSlice.reducer;