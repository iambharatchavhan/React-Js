    import { configureStore } from "@reduxjs/toolkit";
    import menuSlice from "./appSlice"
    


    const store = configureStore ({
         reducer : {
           app : menuSlice,

     
         }
     
    })

    export default store;