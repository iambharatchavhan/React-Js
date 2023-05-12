
import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "../utils/productSlice"  // cartSlice export default reducer so we grab reducer

const store = configureStore({
   reducer: {
    shopCart : cartSlice,
    // shopCart => name of the slice
    // cartSlice => slice Itself
   },


})

export default store;