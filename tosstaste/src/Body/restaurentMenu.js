import "./restaurantMenu.css";
import { Cloud_Img } from "../utils/glob";
import MenuShimmer from "./MenuShimmer/MenusShimmer";
import useRestaurant from "../utils/useRestaurantMenu";
import { addItems, removeItems } from "../utils/CartSlices";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CiShoppingBasket } from "react-icons/ci";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const RestaurantMenu = () => {
  // const { id } = useParams();

  const [restaurant, setRestaurant] = useRestaurant({});
  const [, , restaurantMenus, setMenusRestaurant] = useRestaurant(null);

  //! ------------------adding count--------------------------
  const menuItems = useSelector((store) => store.cart.items.menu);

  //!---------------------------------------------
  //*-------------------------------------------

  let dispatch = useDispatch();
  const addFoodItem = (items) => {
    dispatch(addItems(items));
  };

  const removeFoodItem = (id) => {
    dispatch(removeItems(id));
  };
  //*-------------------------------------------

  if (!restaurantMenus) {
    return <MenuShimmer />;
  }
  return (
    <div>
      <section>
        <div className="resHead">
          <div className="resImg">
            <img
              src={Cloud_Img + restaurant.cloudinaryImageId}
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
            <span className="time">&#128337;</span>
            {restaurant?.sla?.slaString}
            <span className="prise">
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
              const count = menuItems.filter(
                (item) => item.id === card?.card?.info?.id
              );
              //  console.log(count);
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
                        src={Cloud_Img + card.card.info.imageId}
                        className="restaurantImg"
                        alt="foodImeg"
                      />
                      <h3 className="btnMenu">
                        <button
                          className="minus"
                          onClick={() => {
                            removeFoodItem(card?.card?.info?.id);
                          }}
                        >
                          -
                        </button>
                        {count.length}
                        <button
                          onClick={() => {
                            addFoodItem(card?.card?.info);
                            //! card items added with the info
                          }}
                          className="minus"
                        >
                          +
                        </button>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    <Link to="/cart">
      <div className="floatingGoToCart">
        <IconContext.Provider
          value={{
            color: "orange",
            className: "global-class-name",
            size: "2em",
          }}
        >
          <p className="basketCount"><CiShoppingBasket />{menuItems.length}</p>
          <p>Go to Cart</p>
        </IconContext.Provider>
      </div>
      </Link>
    </div>
  );
};

export default RestaurantMenu;
