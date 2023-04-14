import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/Header'
import { Footer } from './Footer/footer'
import MainBody from './MainBody/mainBody'
import "./MainBody/style.css"
import { Container1 } from './MainBody/mainBody'



const Body = () => {
    return (
        <>
        <Header/>
       <Container1/>
        <Footer/>
        </>
        
    )
}

export default Body;