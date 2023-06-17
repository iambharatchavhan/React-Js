import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className='flex flex-col md:flex md:flex-row'>
    <Sidebar/>
    <MainContainer/>
    </div>
  )
}

export default Body
