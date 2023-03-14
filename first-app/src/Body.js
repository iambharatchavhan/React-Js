import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/Header'
import { Footer } from './Footer/footer'
import MainBody from './MainBody/mainBody'
import "./MainBody/style.css"



const Body = () => {
    return (
        <>
        <Header/>
       <MainBody/>
        <Footer/>
        </>
        
    )
}

export default Body;