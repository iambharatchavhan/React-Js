import { json, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./restaurantMenu.css";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [restaurantMenus, setMenusRestaurant] = useState(null);
  useEffect(() => {
    theRestaurant();
  }, []);

  async function theRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=" + id
    );

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

  // console.log(restaurantMenus);
  //  console.log(restaurantMenus.map(e=> console.log(e)));

  if (!restaurantMenus) {
    return <h1>Loading--</h1>;
  }

  return (
    <div>
      <section>
        <div className="resHead">
          <div className="resImg">
            <img
              src={
                `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/` +
                restaurant.cloudinaryImageId
              }
              className="restaurantImg"
              alt="foodImeg"
            />
          </div>
          <div className="resInfo">
            <p className="addressBar">
              Home/{restaurant?.city}/{restaurant?.areaName}/{restaurant?.name}
            </p>
            <h2 className="restaurantName">{restaurant?.name}</h2>

            <p>{restaurant?.cuisines?.join(",")}</p>
            <p>
              {restaurant.areaName}, {restaurant?.sla?.lastMileTravelString}
            </p>
          </div>
          <div className="resRating">
            <div>
              <h1 className="ratingStar">
                <span>&#9733;</span>
                {restaurant?.avgRatingString}
              </h1>
            </div>
            <div className="countDiv">
              <p className="ratingCount">{restaurant?.totalRatingsString}</p>
            </div>
          </div>
        </div>
        <div className="priseTime">
          <h1>
            {" "}
            <span className="time">&#128337;</span>
            {restaurant?.sla?.slaString}
            <span className="prise">
              {" "}
              <span className="circleRupee">&#x20B9;</span>{" "}
              {restaurant.costForTwoMessage}
            </span>
          </h1>
        </div>
      </section>
      {restaurantMenus?.map((items, index) => {
        return (
          <div key={index}>
            <h1 className="myRestaurantMenuTitle"> {items.card.card.title}</h1>
            {items?.card?.card?.itemCards?.map((card) => {
              return (
                <div key={card?.card?.info?.id} id="parentMenuDiv">
                  <div className="menuItem">
                    <div className="menuTitle">
                      <h3 className="titleMenu">{card?.card?.info?.name}</h3>
                      <p className="menuPrice">
                        &#x20B9;{card?.card?.info?.price / 100}
                      </p>
                      <p className="serve">Serves 1</p>
                    </div>
                    <div className="menuImg">
                      <img
                        src={
                          `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/` +
                          card.card.info.imageId
                        }
                        className="restaurantImg"
                        alt="foodImeg"
                      />
                      <h3 className="btnMenu">
                        <button className="minus">-</button>0
                        <button className="minus">+</button>{" "}
                      </h3>
                    </div>
                  </div>
                  {/* <div className="lineParent">
                    <hr/>
                  </div> */}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
