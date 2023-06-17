import React from 'react'


const ButtonsList = () => {
  const arr = ["All","Mixes","Javascript","Front-end","Music","Superhero Movies","Comedy","Vaibhav","News","sports","Action","Motivational","Lofi","Sci-Fi","Sad"]
  return (
    <div className='hidden md:flex md:justify-evenly md:items-center md:gap-4 p-2 md:sticky md:top-[3.8rem]'>

      {arr.map((btn,i)=>(
        <button className='md:bg-[#DFDFDF] md:px-2 md:py-1 md:rounded-md dark:bg-[#202020] hover:dark:bg-[#272727]' key={i}>{btn}</button>
      ))}
       
     

    </div>
  )
}

export default ButtonsList
