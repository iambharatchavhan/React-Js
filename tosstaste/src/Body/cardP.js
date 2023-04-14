import React, { useState } from 'react'
import { ReactDOM } from 'react'
import './cardP.css'
import hardData from '../HardData/hardData'
import Card from './card'

const CardParent = () => {
  const [inputValue, setInputValue] = useState()

  return (
    <>
      {/* {console.log(hardData[1].data.data.name)} */}
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            className="searchTerm"
            value={inputValue}
            placeholder="What are you looking for?"
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
          />
          <button type="submit" className="searchButton">
            Search
          </button>
        </div>
      </div>
      <div className="containerOfCads">
      <Card />
      
    </div>
    </>
  )
}

export default CardParent
