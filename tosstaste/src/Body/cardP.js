import React, { useState } from "react";
import "./cardP.css";
import Card from "./card";
import Shimmer from "./Shimmer/shimmer";
import { Link } from "react-router-dom";
import useAPIData from "../utils/useOwnRestaurantHook";
// import { SearchRestaurant } from "../utils/glob";

const CardParent = () => {
  const [inputValue, setInputValue] = useState();
  const [data, setData] = useAPIData();
  const [, , allData, setAllData] = useAPIData();

  function searchRestaurant(inputValue) {
    let filteredData = allData.filter((restaurant) => {
      if (
        restaurant?.data?.data?.name
          .toLowerCase()
          .includes(inputValue?.toLowerCase())
      ) {
        return restaurant;
      }
    });
    if (!filteredData.length) {
      filteredData = null;
    }
    return filteredData;
  }

  return !data.length ? (
    <>
      <Shimmer />
      <Shimmer />
    </>
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
                // filteredData();
                setAllData(data);
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
          >
            Search
          </button>
        </div>
      </div>
      <div className="containerOfCads">
        {!allData ? (
          <h1>Oops.... not found,make Nice Animation</h1>
        ) : (
          allData.map((card) => {
            // console.log(card.data.data);
            return (
              <Link
                to={"/restaurant/" + card?.data?.data?.id}
                key={card?.data?.data?.id}
              >
                <Card prop={card?.data?.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default CardParent;
