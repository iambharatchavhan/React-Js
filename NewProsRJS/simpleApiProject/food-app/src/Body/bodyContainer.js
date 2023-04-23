import React from "react";
import ReactDOM from 'react-dom/client';
import ChoiceCarousel from "./ChoiceCrsl";
import CardsContainer from "./cardsContainer";
import {createBrowserRouter,Outlet} from "react-router-dom"



 const BodyContainer = () => {
  return(
     <>
     <Outlet/>
     </>
  )

}

const theRouter = createBrowserRouter([
   {
      path:"/",
      element: <CardsContainer/>
},
])






export default BodyContainer;