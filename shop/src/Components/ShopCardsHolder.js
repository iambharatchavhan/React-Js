import ShopCard from "./ShopCard";
import { useEffect ,useState } from "react";

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
    {productData.map((product)=>(
       <ShopCard key={product.id} prop={product}/>
    ))}
   
    </div>
    );
}

export default ShopCardsHolder;