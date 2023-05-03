import React from "react";
import { Cloud_Img } from "../utils/glob";
import "./bill.css"
import {TiDelete} from 'react-icons/ti'

const Bill = ({ imageId, name,price}) => {
   
            
  return (
    <div  className="billDiv">
     
     <img className="billImg" src={Cloud_Img + imageId} alt="foodImeg" />
      <h1 className="billName">{name}</h1>
      <h1 className="billPrice">&#x20B9;{price/100}</h1>
      <button className="btn-Bill">X</button>
    </div>
  );
};
export default Bill;
