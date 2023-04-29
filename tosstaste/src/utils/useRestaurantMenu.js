 import { useState,useEffect } from "react";
 import { Sw_API_id } from "./glob";
 import { useParams } from "react-router-dom";

const useRestaurant = () =>{
  const { id } = useParams();

    const [restaurant, setRestaurant] = useState({});
    const [restaurantMenus, setMenusRestaurant] = useState(null);

    useEffect(() => {
        theRestaurant();
      }, []);
    
      async function theRestaurant() {
        const data = await fetch(Sw_API_id + id);
    
        const json = await data.json();
        // console.log(json?.data?.?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        const dataArrayCards = json?.data?.cards[0]?.card?.card?.info;
        const dataArrayCardsMenus =
          json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    
        const cardsData = dataArrayCardsMenus.filter(
          (card) => card.card.card.itemCards
        );
    
        setRestaurant(dataArrayCards);
        setMenusRestaurant(cardsData);
      }
    
    return [restaurant,setRestaurant,restaurantMenus,setMenusRestaurant]

  
}

export default useRestaurant;