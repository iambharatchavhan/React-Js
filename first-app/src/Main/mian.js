import './mian.css'
import Data from '../data/data'
import  ReactDOM  from 'react-dom/client'
import Cards from './cards'
// console.log( Data());

const Main = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then((resolve) => {
      return resolve.json()
    })
    .then((data) => {
   
        return (
          setTimeout(()=>{
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



          },3000)
        
          )
    //   console.log(data.name)
    })

 

}
// Data();
export { Main }
