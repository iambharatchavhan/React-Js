import React, { useEffect, useState } from "react";
import "./cardP.css";
import Card from "./card";
import Shimmer from "./Shimmer/shimmer";
import { Link } from "react-router-dom";

const CardParent = () => {
  const [inputValue, setInputValue] = useState();
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    filteredData();
  }, []);

  async function filteredData() {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&offset=47&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const jsonData = await apiData.json();
    // console.log(jsonData);

    setData(jsonData?.data?.cards);
    setAllData(jsonData?.data?.cards);
  }

  function searchRestaurant(inputValue) {
    // restaurant.data.data.name === inputValue
    const filteredData = allData.filter((restaurant) => {
      // console.log(restaurant.data.data.name);
      if (
        restaurant?.data?.data?.name
          .toLowerCase()
          .includes(inputValue?.toLowerCase())
      ) {
        return restaurant;
      }
    });

    return filteredData;
    //  setData(filteredData);
  }



  return !data.length ? (
    
    <Shimmer />

  ) : ( 
   

    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            className="searchTerm"
            value={inputValue}
            placeholder="What are you looking for?"
            onChange={(e) => {
              setInputValue(e.target.value);
              if (e.target.value === "") {
                filteredData();
              }
            }}
          />
          <button
            type="submit"
            className="searchButton"
            onClick={() => {
              // console.log(inputValue);
              // searchRestaurant(inputValue);
              // setData(filteredData);
              setAllData(searchRestaurant(inputValue));
            }}
          >Search</button>
        </div>
      </div>
      <div className="containerOfCads">
           {!allData.length ? <h1>Oops.... not found,make Nice Animation</h1> : (allData.map((card) => {
          // console.log(card.data.data);
           return (
            <Link
              to={"/restaurant/" + card?.data?.data?.id}
              key={card?.data?.data?.id}
            >
              <Card prop={card?.data?.data} />
            </Link>
          );
        }))}
       
      </div>
    </>
  );
};

export default CardParent;
