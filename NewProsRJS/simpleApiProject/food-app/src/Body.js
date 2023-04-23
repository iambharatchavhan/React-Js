import React from "react";
import ReactDOM from 'react-dom/client';
import  BodyContainer  from "./Body/bodyContainer";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import theRouter from "./Body/bodyContainer";
 const Body = () => {
  return(
    <>
    <Header/>
    <theRouter/>
    <Footer/>
    </>   
  )

}
export default Body;