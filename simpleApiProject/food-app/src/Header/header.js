import React from "react";
import { ReactDOM } from "react";
import "./header.css"
import logo from './logoFood.png'
import offer from './reduction.png'
import help from './help.png'
import login from './login.png'
import cart from './shopping-cart.png'


// import { useState } from "react";


 const Header = () => {
    // const [searchInput,setSearchInput] = useState("")
    //  useState variable and function
    
    
        return(
       <>
    <header className="header">
      <div className="logo">
      <a href="#"><img src={logo}/></a> <span id="logoName">FooDesire</span> 
      </div> 
     
      <nav className="searchContainer">
          <ul>
          <li><img src={offer}/>Offers</li>
          <li><img src={help}/>Help</li>
          <li><img src={login}/>Login</li>
          <li><img src={cart}/>Cart</li>
          </ul>
        {/* <input type="search" className='search' placeholder='Search bye name' value= {searchInput} onChange = {(e) =>{
          setSearchInput(e.target.value)
        }} ></input> */}
        {/* <button className='btn'>&#128269;</button> */}
      </nav>
    </header>
    </> 
        
        )
          
}
export default Header;