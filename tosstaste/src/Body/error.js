import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
   const  error = useRouteError();
//    console.log(error); // Gives us The object
  return (
    <>
      <h1>Oops Something Went Wrong 😁🧑‍💻😁</h1>
      <h1>Status  {error.status}</h1>
      <h1>{error.statusText}</h1>
    </>
  )
}
export default Error
