import {FcReading} from "react-icons/fc"

const Header = () =>{
 return(
    <div className="min-w-[320px]  p-1 m-4 bg-[#f89104]">
       <h1 className="text-gray-100 text-center text-xl font-bold  p-2 rounded-sm flex justify-center items-center gap-3"> <span><FcReading/></span> My Contact app</h1>
    </div>
 )

}

export default Header;