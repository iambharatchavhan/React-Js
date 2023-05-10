import React from "react";

const Footer =()=>{
    return(
    <div className="bg-stone-700 p-5 flex justify-around items-center">
        <div>
        <h1 className="text-xl font-bold text-white pr-2 pl-2 hover hover:text-orange-300 transition-all duration-50 ease-in-out cursor-pointer">
          BeQuick
        </h1>
        <p className="text-sm text-white pr-2 pl-2 hover hover:text-orange-300 transition-all duration-50 ease-in-out  cursor-pointer">
         BeQuick Grab it Now ⚡
        </p>
       </div>
        <div>
        <p className="text-sm text-white pr-2 pl-2 hover hover:text-orange-300 transition-all duration-50 ease-in-out  cursor-pointer">
        ©2023 BeQuick Shopping Website By Bharat with ❤️
        </p>
        </div>
    </div>
    )
} 

export default Footer;