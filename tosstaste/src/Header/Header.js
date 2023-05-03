import React from 'react'
import { ReactDOM } from 'react'
import { Link } from 'react-router-dom'
import {FcDebian} from 'react-icons/fc'
import "./header.css"

const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="site-identity">
          <h1>
            <Link to="/" className='logo-bar'> <span className='logoOfToss'><FcDebian/></span> Toss<span>Food</span></Link>
          </h1>
        </div>
        <nav className="site-navigation">
          <ul className="nav">
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/help">help</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
