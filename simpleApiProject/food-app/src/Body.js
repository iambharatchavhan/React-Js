import React from "react";
import ReactDOM from 'react-dom/client';
import  BodyContainer  from "./Body/bodyContainer";
import Header from "./Header/header";
import Footer from "./Footer/footer";
 const Body = () => {
  return(
    <>
    <Header/>
    <BodyContainer/>
    <Footer/>
    </>   
  )

}
export default Body;