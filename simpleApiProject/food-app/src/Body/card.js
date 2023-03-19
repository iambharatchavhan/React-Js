import React from "react";
import ReactDOM from 'react-dom/client';
import "./card.css"




const Card = () => {
    return(
    
     
     <div className="card">
      <img src="https://source.unsplash.com/random/300x200" alt="Food Image"/>
      <div className="info">
        <h2>Delicious Burger</h2>
        <div className="cuisine">American, Fast Food</div>
        <div className="price">&#x20B9; 150 for one</div>
        <div className="ratings">
          <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          <span className="count">(100)</span>
        </div>
        <button>Order Now</button>
      </div>
    </div>
 
  
    )
  
  }
  export default Card;