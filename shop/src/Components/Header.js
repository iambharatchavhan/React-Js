import React from "react";
import { Link } from "react-router-dom";
import {FaStudiovinari} from "react-icons/fa"
import { IconContext } from "react-icons/lib";
import { useSelector} from "react-redux";
import {CgShoppingCart} from "react-icons/cg"



const Header = () => {
 
  const cartItems= useSelector(store=> store.shopCart.items)
 console.log(cartItems);


  return (
    <div className="flex justify-between p-4 items-center bg-stone-700 sticky top-0 sm:flex sm:flex-wrap">
      <div className="logo ml-8">
        <h1 className="text-2xl flex font-bold text-white pr-2 pl-2 hover hover:text-orange-300 transition-all duration-50 ease-in-out cursor-pointer">
        <IconContext.Provider value={{color:"orange"}}>
        <FaStudiovinari/>
        </IconContext.Provider>
       BeQuick
        </h1>
      </div>
      <div className="flex mr-8 gap-6 ">
       <Link to="/"  className="text-xl text-white pr-2 pl-2 hover hover:text-orange-300 transition-all duration-50 ease-in-out  cursor-pointer">
        <p >
          Home
        </p>
        </Link> 
        <Link to="/shop"  className="text-xl text-white pr-2 pl-2 hover hover:text-orange-300 transition-all duration-50 ease-in-out  cursor-pointer">
        <p >
          Shop
        </p>
        </Link> 
        <Link to="/cart"  className="text-xl text-white pr-2 pl-2 hover hover:text-orange-300 transition-all duration-50 ease-in-out  cursor-pointer">
        <p >
        <button className="inline-flex gap-1 items-center justify-center text-yellow-100 mt-1">
          <IconContext.Provider value={{color:"White" ,size:"23"}}>
          <CgShoppingCart/>
          </IconContext.Provider>
          
          {cartItems.length}
          </button>
        </p>
        </Link> 
        
        
        
      </div>
    </div>
  );
};

export default Header;
