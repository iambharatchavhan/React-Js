import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {SiSaucelabs,SiBoardgamegeek,SiWegame} from "react-icons/si"
import {BsCashStack,BsFire,BsFillHandbagFill} from "react-icons/bs"
import {HiOutlineNewspaper} from "react-icons/hi"
import {GiPoloShirt} from "react-icons/gi"
import {TbCricket} from "react-icons/tb"
import {MdSportsSoccer,MdLiveTv} from "react-icons/md"
import {FaGamepad} from "react-icons/fa"




const Sidebar = () => {
  return (
    <div className='md:w-[12rem] md:m-1'> 
      <div className='md:border-b md:border-solid md:border-gray-500 md:mt-2'>
      <ul className='flex flex-col gap-2'>
        <li className='md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2'><AiFillHome className='text-2xl'/>Home</li>
        <li className='md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2'><SiSaucelabs className='text-2xl' />Shorts</li>
        <li className='md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2'><BsCashStack className='text-2xl' />Subscription</li>
       </ul>
      </div>
      <div className='md:mt-2'>
        <h1 className='text-lg'>Explore</h1>
      <ul className='md:border-b md:border-solid md:border-gray-500'>
        <li className='md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2'><BsFire className='text-2xl' />Trending</li>
        <li className='md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2'> <BsFillHandbagFill className='text-2xl' />Shopping</li>
        <li className='md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2 '> <HiOutlineNewspaper className='text-2xl'/>News</li>
        <li className='md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2 '> <GiPoloShirt className='text-2xl'/>Fashion</li>
        <li className='md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2 '> <TbCricket className='text-2xl'/>Cricket</li>
        <li className='md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2 '> <MdSportsSoccer className='text-2xl'/>Sports</li>
        <li className='md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2'> <MdLiveTv className='text-2xl'/> Live</li>
       </ul>
       <div className='md:border-b md:border-solid md:border-gray-500 md:mt-2'>
       <h1 className='text-lg'>Gaming World</h1>
        <ul>
        <li className='md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2'><SiBoardgamegeek className='text-2xl' />Live Gaming</li>
        <li className='md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2'><SiWegame className='text-2xl' />GamePlays</li>
        <li className='md:flex md:items-center md:gap-4 md:hover:bg-gray-200 md:rounded-lg md:p-2'><FaGamepad className='text-2xl' />Ps Gaming</li>
        </ul>
       </div>
      </div>
    </div>
  )
}

export default Sidebar
