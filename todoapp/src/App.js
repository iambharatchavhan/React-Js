import Header from "./components/Header";
import {FiSearch} from "react-icons/fi"
import {BsFillPlusCircleFill} from "react-icons/bs"
 

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header/>
    <div className=" flex justify-center rounded-md overflow-hidden">
      <div className=" w-[320px] bg-white min-h-[400px]">
     
      <div className="flex relative">
   
          <FiSearch className="text-2xl text-gray-800 absolute z-10 left-5 top-5"/>
        <input type="search" placeholder="Search contact" className="border border-solid border-black p-2 rounded-full flex-grow m-3 pl-10 outline-none relative" />
        <BsFillPlusCircleFill className="text-4xl text-[#F89104] mt-4 mr-2 cursor-pointer"/>

       </div>
      </div>
      
    
    </div>
    </div>
  );
}

export default App;
