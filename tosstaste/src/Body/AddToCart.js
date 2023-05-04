import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Bill from "./Bill";
import { clearCart } from "../utils/CartSlices";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  
  const dispatch = useDispatch();

  const handleClearCart = ()=>{
     dispatch(clearCart());
  }

  return (
    <div className="billDivParent">
      {cartItems.map((item) => (
        <Bill key={item.id} {...item} />
      ))}

      <div className="billPriceTotal">
        <h1>Total Items :{cartItems.length}</h1>
        <h1>Total price :&#x20B9;</h1>
      </div>
      <div className="btn-of-clear-cart-checkout">
        <button className="checkout clear-cart"  onClick={()=> handleClearCart()}>Clear Cart</button>
        <button className="checkout">Checkout </button>
      </div>
    </div>
  );
};

export default Cart;
