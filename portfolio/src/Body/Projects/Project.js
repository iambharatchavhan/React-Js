import React from "react";
import edTech from "./2.png"
import toss from "./1.png"
import vsapp from "./3.png"

const Project = () => {
   console.log(edTech);
    return(
       <div className="flex flex-col justify-center items-center w-full gap-5 my-10">
         <div className="lg:flex lg:justify-center  lg:ml-[10%]">
            <div className="w-full p-4 "><img src={edTech} alt="" className="w-full h-full object-cover" /></div>
            <div className="p-4">
                <h1 className="text-xl">ED TECH FULLSTACK PROJECT </h1>
                <p className="text-justify mb-4 lg:w-[70%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi, ad inventore facilis sed porro et cupiditate odio temporibus est ipsa illo dolorem earum, eius saepe possimus id molestiae eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus cupiditate aspernatur aliquid? Temporibus consectetur voluptates autem earum doloribus aliquid.</p>
      <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 ">Source code</button>

                </div>
         </div>
         <div className="flex flex-col-reverse  lg:flex  lg:flex-row lg:justify-center lg:ml-[10%] lg:mr-[10%]">
            <div className="p-4">
                <h1 className="text-xl">FOOD ORDERING PROJECT </h1>
                <p className="text-justify mb-4 lg:w-[80%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi, ad inventore facilis sed porro et cupiditate odio temporibus est ipsa illo dolorem earum, eius saepe possimus id molestiae eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus cupiditate aspernatur aliquid? Temporibus consectetur voluptates autem earum doloribus aliquid.</p>
      <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 ">Source code</button>

                </div>
            <div className=" p-4 lg:w-[130%] lg:-ml-[10%] "><img src={toss} alt="" className="lg:w-full lg:h-full lg:object-cover" /></div>

         </div>
         <div className="lg:flex lg:justify-center  lg:ml-[10%]">
            <div className="p-4 lg:w-full  "><img src={vsapp} alt="" className="w-full h-full object-cover" /></div>
            <div className="p-4">
                <h1 className="text-xl lg:ml-10">VIDEO STREAMING PROJECT</h1>
                <p className="text-justify mb-4 lg:w-[70%] lg:ml-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi, ad inventore facilis sed porro et cupiditate odio temporibus est ipsa illo dolorem earum, eius saepe possimus id molestiae eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus cupiditate aspernatur aliquid? Temporibus consectetur voluptates autem earum doloribus aliquid.</p>
      <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 lg:ml-10 ">Source code</button>

                </div>
         </div>
         
       </div>
    )
}
export default Project;