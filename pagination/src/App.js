import { useEffect, useState } from "react";

function App() {
  //*2 created state variable for fetched data
  const [productsData, setProductsData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  //*7 setting 1 as by default value

  //* 1 fetched data using useEffect
  useEffect(() => {
    apiData();
  }, []);

  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(productsData.length / 4) &&
      selectedPage !== pageNum
    )
      setPageNum(selectedPage);
  };

  const apiData = async () => {
    const apiDataArr = await fetch(
      "https://dummyjson.com/products?skip=5&limit=100"
    );
    const json = await apiDataArr.json();

    if (json && json.products) setProductsData(json.products);
    //*3 set the value of fetch data into state variable
    //  console.log(json);
  };

  // console.log(productsData); //*4 loge our data which is array format

  return (
    <div className="App w-full h-full">
      <h1 className="font-bold text-2xl text-center">React Pagination</h1>

      {/* 6 using slice we can split an array to chunks ,
      we create a state for our page as represents chunks and using this we can update start and end value  
        start 0___end10
        start10___end20
        start20___end30 
   (start*10 - 10) = start
   (end*10) = end  split pages into 10 product on each page
      */}
      <div className=" flex flex-wrap justify-center items-center gap-4">
        {productsData.slice(pageNum * 4 - 4, pageNum * 4).map(
          (product) => {
            return (
              <div key={product.id} className="w-[320px]">
                {/* <img className="w-[320px] h-[220px] object-fill " src={product.thumbnail} alt={product.id} />
                <h1>{product.title}</h1> */}
                <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8  h-[400px] flex flex-col justify-around ">
                  <img
                    className="w-[300px] h-[200px]"
                    src={product.thumbnail}
                    alt={product.title}
                  />
                  <div className="px-6 py-4 bg-white">
                    <div className="font-bold text-xl mb-2">{product.title}</div>
                    <p className="text-gray-600 text-base">{product.description}</p>
                  </div>
                </div>
              </div>
            );
          }

          //*5 using map we have iterate our data from the array we fetched
          //* provided key using id
        )}
      </div>

      {productsData.length > 0 && (
        <div className="flex gap-2 justify-center items-center mb-4">
          <span
            className="cursor-pointer border border-solid border-gray-400 p-2  "
            onClick={() => selectedPageHandler(pageNum - 1)}
          >
            ⬅️
          </span>

          {[...Array(Math.ceil(productsData.length / 4))].map((_, i) => (
            <span
              style={{
                cursor: "pointer",
                border: "1px solid gray",
                padding: ".5rem",
              }}
              className={pageNum === i + 1 ? "bg-gray-400" : ""}
              onClick={() => {
                selectedPageHandler(i + 1);
              }}
              key={i}
            >
              {i + 1}
            </span>
          ))}
          {/* 8 creating pagination  */}
          <span
            className="cursor-pointer border border-solid border-gray-400 p-2"
            onClick={() => selectedPageHandler(pageNum + 1)}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
