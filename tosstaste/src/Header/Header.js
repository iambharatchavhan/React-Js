import React from 'react'
import { ReactDOM } from 'react'
import "./header.css"

const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="site-identity">
          <h1>
            <a href="#" className='logo-bar'> Toss<span>Food</span></a>
          </h1>
        </div>
        <nav className="site-navigation">
          <ul className="nav">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">help</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
