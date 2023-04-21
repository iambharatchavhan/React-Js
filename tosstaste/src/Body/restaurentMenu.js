
import { json, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import "./restaurantMenu.css"


const RestaurantMenu = () =>{
 const {id} = useParams();
const [restaurant , setRestaurant] = useState({})
 useEffect(()=>{
    theRestaurant()
 },[]);

    async function theRestaurant (){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=484416");

        const json = await data.json();
        // console.log(json?.data?.?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        const dataArrayCards = json?.data?.cards[0].card?.card?.info
        // ?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        // console.log(dataArrayCards);
    //    const dataArrayCardsTwo=  dataArrayCards.map((items)=>{
    //         return items
    //     })
        



        setRestaurant(dataArrayCards)
    }
     
       console.log(restaurant);


         
    return(
         <div>
         <section>
    <div className="resHead">
        <div className="resImg">
        <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/` + restaurant.cloudinaryImageId} className="restaurantImg" alt="foodImeg"/>

        </div>
        <div className="resInfo">
          <p className="addressBar">Home/{restaurant.city}/{restaurant.areaName}/{restaurant.name}</p>
          <h2 className="restaurantName">{restaurant.name}</h2>

          <p>{restaurant.cuisines.join(",")}</p>
          <p>{restaurant.areaName}, {restaurant.sla.lastMileTravelString}</p>

        </div>
        <div className="resRating">
            <div>
                <h1 className="ratingStar"><span>&#9733;</span>{restaurant.avgRatingString
}</h1>
            </div>
            <div className="countDiv">
                <p className="ratingCount">{restaurant.totalRatingsString}</p>
            </div>
        </div>
       
    </div>
    <div className="priseTime">
          <h1> <span className="time">&#128337;</span>{restaurant.sla.slaString}<span className="prise"> <span className="circleRupee">&#x20B9;</span> {restaurant.costForTwoMessage}</span></h1> 
    </div>
    <div className="menuItem">
      <div className="menuTitle">
      <h3 className="titleMenu">Veg Manchurian with choice of Noodles + Juice</h3>
      <p className="menuPrice">&#x20B9;325</p>
      <p className="serve">Serves 1</p>
      </div>
      <div className="menuImg">
      <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/` + restaurant.cloudinaryImageId} className="restaurantImg" alt="foodImeg"/>
        <h3 className="btnMenu"><button className="minus">-</button>0<button className="minus">+</button> </h3>
      </div>
    </div>
    <div className="lineParent">
       <hr/>
    </div>
    </section>
           
         </div>
       
       

    );
}






export default RestaurantMenu;