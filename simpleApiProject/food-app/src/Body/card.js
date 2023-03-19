import React from "react";
import ReactDOM from 'react-dom/client';
import "./card.css"




const Card = ({prop}) => {
     console.log(prop);
     const {strMealThumb,strMeal,strArea,strTags} = prop
    //  console.log(strMealThumb,strMeal,strArea);
    return(
    
     
     <div className="card">
      <img src={strMealThumb} alt="Food Image"/>
      <div className="info">
        <h2>{strMeal}</h2>
        <div className="cuisine">Region: {strArea}</div>
        <div className="price">#{strTags}</div>
        {/* <div className="ratings">
          <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          <span className="count">(100)</span>
        </div> */}
        <button>Full Recipe</button>
      </div>
    </div>
 
  
    )
  
  }
  export default Card;