import React, { useState } from 'react'
import { ReactDOM } from 'react'
import './cardP.css'
import Card from './card'
import hardData from "../HardData/hardData.js"



const CardParent = () => {
  const [inputValue, setInputValue] = useState()
  const [data, setData] = useState(hardData);
  
  
  function searchRestaurant (inputValue) {

    // restaurant.data.data.name === inputValue
     const filteredData = data.filter (restaurant => {
         if(restaurant.data.data.name.toLowerCase().includes(inputValue.toLowerCase())){
          return restaurant;
         }

     });

     return filteredData;
    //  setData(filteredData);

  }
 
  return (

    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            className="searchTerm"
            value={inputValue}
            placeholder="What are you looking for?"
            onChange={(e) => {
              setInputValue(e.target.value)
              if(e.target.value === ""){
                setData(hardData);
              }
            }}
          />
          <button type="submit" className="searchButton" onClick={()=>{
            // console.log(inputValue);
            // searchRestaurant(inputValue);
            // setData(filteredData);
            setData(searchRestaurant(inputValue))
          }}>
            Search
          </button>
        </div>
      </div>
      <div className="containerOfCads">
      {data.map((card)=>{
        // console.log(card.data.data);
        return <Card prop={card.data.data} key = {card.data.data?.id} />
       })}
    </div>
    </>
  )
}

export default CardParent
