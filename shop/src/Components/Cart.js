import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import EmptyCart from "../utils/EmptyCart";


const Cart = () => {
  
  const cartItems = useSelector(store=>store.shopCart.items)

    return(
       <section>
        <div className="container mx-auto mt-10">
  <div className="flex flex-wrap my-10">
    <div className="w-3/4 bg-white">
     <div className=" flex flex-wrap justify-center w-screen md:gap-4 md:w-[100vw]">
      <div className="md:w-[60vw] ">
     
       {/*+++++++++++++++++++++++++++++++++++++++++++++++++ */}
         {cartItems.length ===0 ? <EmptyCart/> : cartItems.map((item)=>(
           
           <CartItem key={item.id} {...item} prop={item}/>
           ) )}
   

       {/*+++++++++++++++++++++++++++++++++++++++++++++++++ */}

      <Link to="/shop" className="flex font-semibold text-indigo-600 text-sm ">
        <svg
          className="fill-current mr-2 text-indigo-600 w-4"
          viewBox="0 0 448 512"
        >
          <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
        </svg>
        Continue Shopping
      </Link>
      </div>
    <div id="summary" className="w-1/1 px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Items {cartItems.length}</span>
        <span className="font-semibold text-sm">590$</span>
      </div>
      <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase">
          Shipping
        </label>
        <select className="block p-2 text-gray-600 w-full text-sm">
          <option>Standard shipping - $10.00</option>
        </select>
      </div>
      <div className="py-10">
        <label
          htmlFor="promo"
          className="font-semibold inline-block mb-3 text-sm uppercase"
        >
          Promo Code
        </label>
        <input
          type="text"
          id="promo"
          placeholder="Enter your code"
          className="p-2 text-sm w-full"
        />
      </div>
      <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
        Apply
      </button>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>$600</span>
        </div>
        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
          Checkout
        </button>
      </div>
    </div>
    </div>
   
    </div>
  </div>
</div>

       </section>
    )
}
export default Cart;