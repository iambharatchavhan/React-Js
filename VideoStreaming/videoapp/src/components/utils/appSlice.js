 import { createSlice } from "@reduxjs/toolkit";


 const menuSlice = createSlice({
    name: "app",
    initialState:{
        isMenuOpen : true,
    },
    reducers: {
        toggleState : (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },

        closeMenu:(state) =>{
            state.isMenuOpen = false;
        }
    }

 })
 export const {toggleState,closeMenu} =  menuSlice.actions;

 export default  menuSlice.reducer;