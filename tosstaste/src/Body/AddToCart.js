import React from "react";
import { useSelector } from "react-redux";
import Bill from "./Bill";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="billDivParent">
      {cartItems.map((item) => (
        <Bill key={item.id} {...item} />
      ))}

    <div className="billPriceTotal">
    <h1>Total Items :{cartItems.length}</h1>
      <h1>Total price :&#x20B9;</h1>
    </div>
      
      <button className="checkout">Checkout </button>

    </div>
  );
};

export default Cart;
