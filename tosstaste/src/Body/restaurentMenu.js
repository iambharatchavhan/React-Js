
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
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=18808");

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
     
    //    console.log(restaurant);


         
    return(
        <>
         <div>
		 <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/` + restaurant.cloudinaryImageId} className="restaurantImg" alt="foodImeg"/>
           <h1>{restaurant.name}</h1>
           <h1>{restaurant.city}</h1>
           <h1>{restaurant.area}</h1>
           
         </div>
        </>
       

    );
}






export default RestaurantMenu;