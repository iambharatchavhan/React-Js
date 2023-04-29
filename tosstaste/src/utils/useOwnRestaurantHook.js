import React from "react";
import { Sw_API_Call } from "./glob";
import { useState,useEffect } from "react";

const useAPIData = () =>{
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        filteredData();
      }, []);
    
      async function filteredData() {
        const apiData = await fetch(Sw_API_Call);
        const jsonData = await apiData.json();
        // console.log(jsonData);
    
        setData(jsonData?.data?.cards);
        setAllData(jsonData?.data?.cards);
      }
    
      return [data,setData,allData,setAllData]


}

// console.log([allData]);


export default useAPIData;