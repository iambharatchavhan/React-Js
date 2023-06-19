import React from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='dark:bg-[#0F0F0F] dark:text-white md:w-full md:h-full'>
        <ButtonsList/>
       <VideoContainer/>
    </div>
  )
}

export default MainContainer
