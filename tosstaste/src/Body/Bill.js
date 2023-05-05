import React from "react";
import { Cloud_Img } from "../utils/glob";
import "./bill.css";
import { useSelector, useDispatch } from "react-redux";
import { removeItems } from "../utils/CartSlices";

const Bill = ({ imageId, name, price,id }) => {
  
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    console.log(id);
    dispatch(removeItems(id));
  };

  return (
    <div className="billDiv">
      <img className="billImg" src={Cloud_Img + imageId} alt="foodImeg" />
      <h1 className="billName">{name}</h1>
      <h1 className="billPrice">&#x20B9;{price / 100}</h1>
      <button className="btn-Bill" onClick={() => handleDelete(id)}>
        X
      </button>
    </div>
  );
};
export default Bill;
