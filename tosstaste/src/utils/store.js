import React from "react";
import {configureStore} from '@reduxjs/toolkit'
import CartSlices from "./CartSlices";

const store = configureStore({
    reducer:{
        cart:CartSlices,
    },
    // we have many more reducers for each slice (separate)
})

export default store;