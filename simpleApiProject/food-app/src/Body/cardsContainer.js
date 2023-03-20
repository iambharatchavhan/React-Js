import React, { useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
import "./cardsContainer.css"
import "./search.css"
import Card from "./card";
import Shimmer from "./shimmer/shimmer";
import search from "./search.png"
// const foodUrl = 'www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
// let dataNames= []

const CardsContainer = () => {
  const  [meals, setMeals] = useState([])
  const [searchInput, setSearchInput] = useState("")

   useEffect(()=>{foodData()},[])
    function foodData(){
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    .then((response)=> response.json()) 
    .then((data)=> {
      // console.log(data.meals)
      let allData = data.meals

      const mainData = allData.map((allData) =>{
          return  allData;
      })
      setMeals(mainData)
      // console.log(mainData);
    })
     
}


  
 return !meals.length?(<Shimmer/>):(
     
 
       <div id="mainContainer">
        <div className="wrap">
  <div className="barra">
    <div className="barraContainer">
    <input type="text" className="buscar" placeholder="Search Recipes Here" value={searchInput} onChange ={(e)=> {
        setSearchInput(e.target.value)
    }}  />
    <img src={search} alt="search" className="search-img"/>
    </div>
  </div>
</div>
   
       {meals.map((card)=>{
        return <Card prop={card} key ={card.idMeal} />
       })}
     
      
      </div>
  
    
    )
  
  }
  export default CardsContainer;