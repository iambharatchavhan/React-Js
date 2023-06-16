import React from 'react'
import { BsCurrencyBitcoin } from 'react-icons/bs'

const ButtonsList = () => {
  const arr = ["All","Mixes","Javascript","Front-end","Music","Superhero Movies","Comedy","Vaibhav","News","sports","Action","Motivational","Lofi","Sci-Fi","Sad"]
  return (
    <div className='flex justify-evenly items-center gap-4 p-2'>

      {arr.map((btn,i)=>(
        <button className='md:bg-[#DFDFDF] md:px-2 md:py-1 md:rounded-md dark:bg-[#202020] hover:dark:bg-[#272727]' key={i}>{btn}</button>
      ))}
       
     

    </div>
  )
}

export default ButtonsList
