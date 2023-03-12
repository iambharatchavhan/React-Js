import './mian.css'
import  ReactDOM  from 'react-dom/client'
import Cards from './cards'
import { useState } from 'react'

// console.log( Data());

const Main = () => {
     const [x,setX] = useState([])
     const data = ()=> {
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        .then((resolve) => {
          return resolve.json()
        })
        .then((data) => {
           setX(data)
        
        //   console.log(data.name)
        })
        console.log(x);

     }
// data();
  

  return (
    <>
     {console.log(x)}
    <div className="wrapper">
      <div className="cards-container">
       <Cards/>
       <Cards/>
       <Cards/>
       <Cards/>
       <Cards/>
       <Cards/>
       
      </div>
    </div>
    </>
  )

}
// Data();
export { Main }
