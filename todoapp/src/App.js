import Header from "./components/Header";
import {FiSearch} from "react-icons/fi"
import {BsFillPlusCircleFill} from "react-icons/bs"
import { useEffect,useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import {FaUserCircle,FaPenSquare,FaTrashAlt} from "react-icons/fa"
 

function App() {
 
 const [contact,setContact] = useState([]);
  
 useEffect(()=>{
     getData();
 },[])

 
const getData = async () =>{
   try {
     
    const contactRef = collection(db,"contacts")
    const contSnapShot = await getDocs(contactRef)

    const contList = contSnapShot.docs.map((doc)=>{
      return {
        id:doc.id,
        ...doc.data()
      }
    }
 
    )
   
    
    setContact(contList)
   } catch (error) {
     console.log(error);

   }

}

console.log(contact);







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
        <div>
          {contact.map((contact)=>{
            return(
              <div key={contact.id} className="flex justify-between p-2 bg-[#fadd0594] m-2 rounded-lg">
                <div className="flex justify-center items-center"> 
                    <FaUserCircle className="text-[#F89104] text-3xl"/>
                </div>
                <div>
                  <h2 className="text-xl ">{contact.name}</h2>
                  <p className="text-sm text-stone-700">{contact.email}</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                 <FaPenSquare className="text-[#0a7f16] text-3xl"/>
                 <FaTrashAlt className="text-[#ff1b1b] text-2xl"/>
                </div>
              </div>
            )
         

          })}
        </div>
      </div>
      
    
    </div>
    </div>
  );
}

export default App;
