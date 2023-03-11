import React from 'react'
import ReactDOM from 'react-dom/client'
// import { StyleHTMLAttributes } from 'react'
import "./style.css"

const Header = () =>{
    return(
   <>
<header className="header">
  <div className="logo">
  <a href="https://cdnlogo.com/logo/pokemon_52911.html"><img src="https://cdn.cdnlogo.com/logos/p/33/pokemon.svg"/></a>
  </div>  
  <nav className="searchContainer">
    <input type="search" className='search' placeholder='Search bye name' ></input>
    <button className='btn'>&#128269;</button>
  </nav>
</header>
</> 
    
    )
      
    
}

export default Header;