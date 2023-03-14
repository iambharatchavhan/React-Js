import React from 'react'
import { ReactDOM } from 'react'
import Card from './card'

const CardContainer = () => {
  const data = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
      .then((resolve) => {
        return resolve.json()
      })
      .then((data) => {
         console.log(data);
         console.log("hello");
      })
   
  }
  data();
  return (
    <div className="cards-container">
      <Card />
    </div>
  )
}

export default CardContainer
