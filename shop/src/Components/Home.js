import React from "react";
import ShopCardsHolder from "./ShopCardsHolder";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* //------------------------------------------------------------------------------------ */}
      <form className="sticky top-[4rem]">
  <label
    htmlFor="default-search"
    className="mb-2 text-sm font-medium text-gray-900 sr-only "
  >
    Search
  </label>
  <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-gray-500 "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <input
      type="search"
      id="default-search"
      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
      placeholder="Search Mockups, Logos..."
      required=""
    />
    <button
      type="submit"
      className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
    >
      Search
    </button>
  </div>
</form>


      {/* //------------------------------------------------------------------------------------ */}

<section className="px-3 py-5 bg-neutral-100 lg:py-10">
  <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
    <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
      <p className="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
      <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
      <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
      <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
        Shop Now
      </button>
    </div>
    <div className="order-1 lg:order-2">
      <img
        className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
        src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        alt=""
      />
    </div>
  </div>
</section>






     


    
    <ShopCardsHolder/>
    <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
  <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
    <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-50  py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
      <div className="flex flex-col justify-center md:w-1/2">
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 d">
          Best Deal
        </h1>
        <p className="text-base lg:text-xl text-gray-800 mt-2">
          Save upto <span className="font-bold">50%</span>
        </p>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
        <img
          src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png"
          alt=""
          className=""
        />
      </div>
    </div>
    <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative -z-10">
      <div className="flex flex-col justify-center md:z-10">
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 ">
          Game Console
        </h1>
        <p className="text-base lg:text-xl text-gray-800 ">
          Save Upto <span className="font-bold">30%</span>
        </p>
      </div>
      <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
        <img
          src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png"
          alt=""
          className="md:w-20 md:h-20 lg:w-full lg:h-full"
        />
      </div>
    </div>
  </div>
</div>
<ShopCardsHolder/>

    </div>
  );
};

export default Home;
