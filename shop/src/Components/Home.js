import React from "react";
import ShopCardsHolder from "./ShopCardsHolder";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      
    <section className="flex flex-wrap w-full p-5 bg-slate-50">
      <Link className="w-[80%] h-[305px] overflow-hidden ml-[7rem] mb-[2rem]" to="/shop">
      <img className="p-0 m-0 object-contain mt-[-5rem]" src="https://img.freepik.com/free-vector/gradient-boutique-design-template_23-2149348648.jpg?w=1380&t=st=1683785608~exp=1683786208~hmac=462f016a72381db42f2c74661a6039f7cadf0e8eb12132b7dcf397a0acc044f3" alt=""/>

      </Link>
      <div className="flex justify-center items-center gap-2 ml-[4rem]">
        <div className=" w-[360px] h-[540px]">
          <img className="object-cover" src="https://images.unsplash.com/photo-1622618991746-fe6004db3a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZ1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <img className="w-[300px] h-[260px] object-cover" src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="w-[300px] h-[260px] object-cover" src="https://images.unsplash.com/photo-1608539733292-190446b22b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />

        </div>
      </div>
      <div className="w-[40vw] p-2 mt-[3rem] ml-[2rem]">
        <p className="font-bold text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className="text-justify text-gray-500">
          Itaque explicabo molestiae harum exercitationem ab doloribus maxime
          neque aspernatur animi earum enim, laborum ipsam fuga aliquam vel
          officiis sint corporis est, accusamus accusantium blanditiis rem quo
        </p>
        <Link to="/shop">
        <button className="bg-[#E4AD58] px-5 py-1 rounded-xl text-yellow-50 m-4">Shop Now</button>

        </Link>

        <p className="font-bold text-lg mt-[9rem] ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className="text-justify text-gray-500">
          Itaque explicabo molestiae harum exercitationem ab doloribus maxime
          neque aspernatur animi earum enim, laborum ipsam fuga aliquam vel
          officiis sint corporis est, accusamus accusantium blanditiis rem quo
        </p>
        <Link to="/shop">
        <button className="bg-[#E4AD58] px-5 py-1 rounded-xl text-yellow-50 m-4">Shop Now</button>

        </Link>
        
      </div>
      
    </section>

    <section className="bg-slate-50 mt-[-1.2rem] mb-[-1.5rem]">
    <ShopCardsHolder/>
    </section>
    </div>
  );
};

export default Home;
