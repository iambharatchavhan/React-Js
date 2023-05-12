import ShopCard from "./ShopCard";
import { useEffect ,useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";


const ShopCardsHolder = () =>{
 const [productData ,setProduct] = useState([])

 useEffect(()=>{
    getData();
 },[])

 
 const getData = async () =>{
  
 const response = await fetch("https://fakestoreapi.com/products/");
 const products = await response.json();
//  console.log(products);

 setProduct(products);
 }
  
//  console.log(productData);
    return (
     <div className="flex flex-row flex-wrap justify-around gap-5 items-center w-full  my-5 p-5">

     { productData.length === 0 ? <Shimmer/> :  ( productData.map((product)=>(
            <Link to={"/shop/" + product.id} key={product.id}>
               <ShopCard  prop={product}/>
            </Link>
       
    ))) }
  
   
    </div>
    );
}

export default ShopCardsHolder;