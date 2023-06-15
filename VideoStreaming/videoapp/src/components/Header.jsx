import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiCast, FiBell, FiSearch } from "react-icons/fi";
import { BsArrowLeft, BsMicFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import logo from "./tubeLogo.jpg";
import { useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  // const handleISVisible =() =>{
  //     setIsVisible(false)
  // }

  // const handleIsHindden =() =>{
  //     setIsVisible(false)
  // }
  return (
    <div className="md:flex md:justify-between md:items-center md:w-full">
      <div className={isVisible ? "flex p-3 " : "hidden"}>
        <div className="flex justify-center items-center gap-[3rem] ">
          <div>
            <GiHamburgerMenu className="text-2xl  text-stone-900 cursor-pointer" />
          </div>
          <div className="w-8 flex justify-center items-center">
            <img src={logo} alt="" />
            <h1 className="text-xl font-bold">YouTube</h1>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center ml-[4rem] text-xl md:hidden">
          <FiCast />
          <MdDarkMode />
          <FiSearch onClick={() => setIsVisible(false)} />{" "}
          <h1 className="w-6 h-6 bg-red-500 p-1 rounded-full text-center flex justify-center items-center text-yellow-50 text-lg">
            b
          </h1>
        </div>
      </div>
      <div
        className={
          !isVisible ? "flex justify-center items-center gap-2 p-4" : "hidden"
        }
      >
        <BsArrowLeft onClick={() => setIsVisible(true)} />
        <input
          type="text"
          className="border border-solid border-stone-900 flex-grow rounded-full"
        />
        <BsMicFill className="bg-gray-300  rounded-full" />
      </div>
      <div className="hidden md:flex md:justify-center md:items-center md:w-1/3 mx-10 gap-2">
        <input
          type="text"
          placeholder="Search"
          className="border border-solid flex-grow rounded-l-full md:p-[.5rem] md:focus-ring-1 md:pl-8  md:outline-blue-800"
        />
        <div className="border border-solid border-stone-900 -ml-2 rounded-r-full bg-gray-400 md:p-[.7rem] ">
          <FiSearch />
        </div>
        <div className="p-2 border border-solid border-gray-200  rounded-full hover:bg-gray-200">
        <BsMicFill />
        </div>
   
      </div>
      <div className="hidden md:flex md:justify-center md:items-center md:text-2xl md:gap-8 md:-mr-[18rem]">
        <div className="p-1 border border-solid border-gray-200  rounded-full hover:bg-gray-200    ">
        <FiBell />
        </div>
        <div className="p-1 border border-solid border-gray-200  rounded-full hover:bg-gray-200  ">
        <MdDarkMode />
        </div>
      
        <h1 className="w-8 h-8 bg-red-500 p-1 rounded-full text-center flex justify-center items-center text-yellow-50 text-lg">
          b
        </h1>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
