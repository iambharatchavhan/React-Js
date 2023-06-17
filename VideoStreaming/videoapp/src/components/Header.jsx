import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiCast, FiBell, FiSearch } from "react-icons/fi";
import { BsArrowLeft, BsMicFill,BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import logo from "./tubeLogo.jpg";
import { useState ,useEffect } from "react";
import { useDispatch} from "react-redux";
import { toggleState } from "./utils/appSlice";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [theme ,setTheme] = useState(null);



  useEffect(()=>{
    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      setTheme("dark")
    }

    // if(window.matchMedia('(prefers-color-scheme:dark)').matches){
    //   setTheme("dark")
    // }
  },[])

  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])
       
  const handleTheme = () =>{
    setTheme(theme === "dark" ? "lite" : "dark")
  }


  //^ -------------------------------------------------
    const dispatch = useDispatch()


    const handleSidebar = ()=>{
       dispatch(toggleState())

    }


  //^ -------------------------------------------------
  return (
    <div className=" md:flex md:justify-between md:items-center md:w-full dark:bg-[#0F0F0F] dark:text-white md:sticky md:top-0">
      <div className={isVisible ? "flex p-3 " : "hidden"}>
        <div className="flex justify-center items-center gap-[3rem] ">
          <div>
            <GiHamburgerMenu onClick={()=>handleSidebar()}      className="text-2xl  text-stone-900 cursor-pointer dark:text-white" />
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
          className="border border-solid border-stone-900 flex-grow rounded-full dark:text-gray-800"
        />
        <BsMicFill className="bg-gray-300  rounded-full" />
      </div>
      <div className="hidden md:flex md:justify-center md:items-center md:w-1/3 mx-10 gap-2">
        <input
          type="text"
          placeholder="Search"
          className="border-none outline-none flex-grow rounded-l-full md:p-[.5rem] md:focus-ring-1 md:pl-8  dark:bg-[#0f0f0f]  "
        />
        <div className="border border-solid border-stone-900 -ml-2 rounded-r-full bg-gray-400 md:p-[.8rem]  dark:border-stone-600 hover:dark:bg-stone-600 dark:bg-[#0f0f0f] ">
          <FiSearch />
        </div>
        <div className="p-2 border border-solid border-gray-200  rounded-full hover:bg-gray-200  dark:border-stone-600 hover:dark:bg-stone-600 ">
        <BsMicFill />
        </div>
   
      </div>
      <div className="hidden md:flex md:justify-center md:items-center md:text-2xl md:gap-8 md:-mr-[18rem]">
        <div className="p-1 border border-solid border-gray-200  rounded-full hover:bg-gray-200  dark:border-stone-600 hover:dark:bg-stone-600   ">
        <FiBell />
        </div>
        <div className="p-1 border border-solid border-gray-200  rounded-full hover:bg-gray-200  dark:border-stone-600 hover:dark:bg-stone-600 ">
        {theme === "lite" ?<MdDarkMode  onClick={()=>{handleTheme()}}/>:<BsFillSunFill onClick={()=>{handleTheme()}}/>}

       
       
       
        {/* {if(theme === "dark"){
        
        }else{
     
          }} */}
           
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
