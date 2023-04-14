import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
// import { StyleHTMLAttributes } from 'react'
import logo from "../Resources/logo3.png"
import "./style.css"


const Header = () =>{
 const [searchInput,setSearchInput] = useState("")
//  useState variable and function


    return(
   <>
<header className="header">
  <div className="logo">
  <a href="#"><img src={logo}/></a>
  </div>  
  <nav className="searchContainer">
    <input type="search" className='search' placeholder='Search bye name' value= {searchInput} onChange = {(e) =>{
      setSearchInput(e.target.value)
    }} ></input>
    <button className='btn'>&#128269;</button>
  </nav>
</header>
</> 
    
    )
      
    
}

export default Header;