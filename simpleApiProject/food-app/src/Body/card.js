import React from "react";
import { ReactDOM } from "react";
import "./card.css"




const Card = () => {
    return(
      <>
     
     <div class="card">
      <img src="https://source.unsplash.com/random/300x200" alt="Food Image"/>
      <div class="info">
        <h2>Delicious Burger</h2>
        <div class="cuisine">American, Fast Food</div>
        <div class="price">&#x20B9; 150 for one</div>
        <div class="ratings">
          <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          <span class="count">(100)</span>
        </div>
        <button>Order Now</button>
      </div>
    </div>
 
      </>   
    )
  
  }
  export default Card;