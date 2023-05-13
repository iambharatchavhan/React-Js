import React, {useState}from "react";
import { Link } from "react-router-dom";
import {FaStudiovinari} from "react-icons/fa"
import { IconContext } from "react-icons/lib";
import { useSelector} from "react-redux";



const Header = () => {
 
  const cartItems= useSelector(store=> store.shopCart.items)
 console.log(cartItems);

 const [toggleMenu, setToggleMenu] = useState(false);

 const handleToggle = () =>{
   setToggleMenu(!toggleMenu)
 }

  return (
    <header className="sticky top-0">
      <div className="px-4 py-2 text-white flex  justify-between bg-blue-500 md:p-4">
        <IconContext.Provider value={{size:"20px"}}>
      
          <h1 className="md:font-bold md:text-2xl flex"><FaStudiovinari/> BeQuick</h1>
        </IconContext.Provider>
      
        <div className={toggleMenu ? "md:flex  md:pt-0 pt-10 w-full md:w-auto" : "hidden md:flex"} id="menu">
        <ul>
           <Link to="/"> 
          <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">Home</li>
            
           
            </Link>
           <Link to="/shop">
           <li className="dropdown md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3 relative">Shop</li> 


           </Link>
           <Link to="/help">

           <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">Help</li>

           </Link>
           <Link to="/cart">
           <li className="md:inline-block flex flex-row cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3"><p> cart {cartItems.length}</p> </li>


           </Link>
       



        </ul>
        </div>
        <div className= "cursor-pointer md:hidden">
          <input class="menu-btn hidden" type="checkbox" id="menu-btn"/>
          <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
            <span onClick={handleToggle} class="navicon bg-white-darkest flex items-center relative"></span>
          </label>
      </div>
      </div>
    </header>
  );
};

export default Header;
