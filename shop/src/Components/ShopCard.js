

const ShopCard =({prop})=>{
    // console.log(prop);
    const {id,category,title,price,description,image,rating} = prop;
    console.log(id,category,title,price,description,image,rating);
    return(
        <div className="flex flex-col w-[290px] h-[320px] justify-center items-center bg-slate-50 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden">
            <div className=" w-[300px] h-[300px] overflow-hidden">
            <p className="text-sm bg-slate-100 px-5 w-[50%] text-gray-500 ">{category}</p>
            <img className="w-[100%] h-[100%] object-contain transition-all ease-out duration-75 hover:scale-105 " src={image} alt={title}/>
            </div>
            <div className="flex flex-col justify-between">
            <p className="text-sm text-gray-700 font-bold p-2">{title}</p>
            <div className="flex justify-between items-center p-2">
                <p>${price}.00</p>
                <p>{rating.count}+ Ratings</p>
                <p className="bg-green-600 px-1 text-yellow-50 font-bold rounded-sm">⭐{rating.rate}</p>
               
              
            </div>
            <button className="bg-[#377B52] px-5 py-1 rounded-xl text-yellow-50 m-4">Add To Cart</button>
            </div>
         
       </div>
    )
}
export default ShopCard;