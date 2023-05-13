import React from "react"
import { Link } from "react-router-dom"

const EmptyCart =( )=>{
    return(
        <div className="container mx-auto my-10 flex flex-col items-center  min-h-screen">
  <img
    src="https://media4.giphy.com/media/MdeHHwPzLpzbEkzl70/giphy.webp?cid=ecf05e47vql7221im64uaz7mcxzqpsohg7yfov1hj1au1vh7&ep=v1_stickers_search&rid=giphy.webp&ct=s"
    alt="Sad cat"
    className="w-1/5 mb-8"
  />
  <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
  <p className="text-gray-600 mb-8">
    You haven't added any items to your cart yet.
  </p>
  <Link
    to="/shop"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Continue Shopping
  </Link>
</div>

    )
}

export default EmptyCart