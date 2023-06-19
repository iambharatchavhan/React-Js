import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {SiSaucelabs,SiBoardgamegeek,SiWegame} from "react-icons/si"
import {BsCashStack,BsFire,BsFillHandbagFill} from "react-icons/bs"
import {HiOutlineNewspaper} from "react-icons/hi"
import {GiPoloShirt} from "react-icons/gi"
import {TbCricket} from "react-icons/tb"
import {MdSportsSoccer,MdLiveTv} from "react-icons/md"
import {FaGamepad} from "react-icons/fa"
import { useSelector} from "react-redux";




const Sidebar = () => {

  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)

  return !isMenuOpen ? null :(
    <div id='sidebar' className=' md:h-[90vh] md:w-[14rem] md:m-1 dark:bg-[#0F0F0F] dark:text-white overflow-y-auto md:sticky md:top-14'> 
      <div className='flex ml-4 md:ml-0 md:border-b md:border-solid md:border-gray-500 md:mt-2'>
      <ul className='flex flex-col gap-4 justify-center items-center md:flex md:flex-col md:gap-2'>
        <li className='w-full flex items-center gap-6 md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2 hover:dark:bg-[#272727]'><AiFillHome className='text-2xl'/>Home</li>
        <li className='w-full flex items-center gap-6 md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2 hover:dark:bg-[#272727]'><SiSaucelabs className='text-2xl' />Shorts</li>
        <li className='w-full flex items-center gap-6 md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2 hover:dark:bg-[#272727]'><BsCashStack className='text-2xl' />Subscription</li>
       </ul>
      </div>
      <div className='flex flex-col ml-4 md:mt-2 md:ml-0 '>
        <h1 className='text-lg text-center md:text-left'>Explore</h1>
      <ul className='flex flex-col gap-4 md:border-b md:border-solid md:border-gray-500'>
        <li className='w-full flex items-center gap-6 md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2 hover:dark:bg-[#272727]'> <BsFire className='text-2xl' />Trending</li>
        <li className='w-full flex items-center gap-6 md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2 hover:dark:bg-[#272727]'> <BsFillHandbagFill className='text-2xl' />Shopping</li>
        <li className='w-full flex items-center gap-6 md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2 hover:dark:bg-[#272727] '> <HiOutlineNewspaper className='text-2xl'/>News</li>
        <li className='w-full flex items-center gap-6 md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2 hover:dark:bg-[#272727] '> <GiPoloShirt className='text-2xl'/>Fashion</li>
        <li className='w-full flex items-center gap-6 md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2 hover:dark:bg-[#272727] '> <TbCricket className='text-2xl'/>Cricket</li>
        <li className='w-full flex items-center gap-6 md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2 hover:dark:bg-[#272727] '> <MdSportsSoccer className='text-2xl'/>Sports</li>
        <li className='w-full flex items-center gap-6 md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2 hover:dark:bg-[#272727]'>  <MdLiveTv className='text-2xl'/> Live</li>
       </ul>
       <div className=' flex flex-col md:border-b md:border-solid md:border-gray-500 md:mt-2'>
       <h1 className='text-lg text-center md:text-left'>Gaming World</h1>
        <ul className='flex flex-col gap-4'>
        <li className='w-full flex items-center gap-6 md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2 hover:dark:bg-[#272727]'><SiBoardgamegeek className='text-2xl' />Live Gaming</li>
        <li className='w-full flex items-center gap-6 md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2 hover:dark:bg-[#272727]'><SiWegame className='text-2xl' />GamePlays</li>
        <li className='w-full flex items-center gap-6 md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2 hover:dark:bg-[#272727]'><SiWegame className='text-2xl' />GOW</li>
      
        </ul>
       </div>
       
      </div>
    </div>
  )
}

export default Sidebar
