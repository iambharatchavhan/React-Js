import React, { useState } from 'react'
import { ReactDOM } from 'react'
import Card from './card'
import { useEffect } from 'react'

const CardContainer = () => {
  const [pokeName ,setPokeName] = useState([])

  useEffect(() => {
    // this is use effet
    theData();
  }, [])

  function theData ()  {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
      .then((resolve) => {
        return resolve.json()
      })
      .then((data) => {
            const pokemonNames = data.results.map( (pokeTitle) => {
            return pokeTitle.name
           
        } )
        setPokeName(pokemonNames)
        // console.log(pokemon);
     
       
      })


     
   
  }

  return (
    <div className="cards-container">
        {pokeName.map((thePokeName,index) =>{
        return <Card name = {thePokeName} key = {index} />
        })}
         
    </div>
  )
}

export default CardContainer
