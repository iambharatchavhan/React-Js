import React, { useEffect} from "react";
import ReactDOM from 'react-dom/client';
import "./cardsContainer.css"
import Card from "./card";
// const foodUrl = 'www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'

const CardsContainer = () => {
  

   useEffect(()=>{foodData()},[])
    function foodData(){
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
    .then((response)=> response.json()) 
    .then((data)=> console.log(data))
 
   
}


  
    return(
       <div id="mainContainer">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
     
    )
  
  }
  export default CardsContainer;