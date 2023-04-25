import React from "react";
import "./header.css"
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <header className="site-header">
        <div className="site-identity">
          <h1><Link to="/">Bharat Chavhan <span id="role">(Developer)</span></Link></h1>
        </div>  
        <nav className="site-navigation">
          <ul className="nav">
          <li><Link to="/">Home</Link></li> 
            <li><Link to="projects">Projects</Link></li> 
            <li><Link to="resume">Resume</Link></li> 
            <li><Link to="contact">Contact</Link></li> 
          </ul>
        </nav>
      </header>
    );
}

export default Header;