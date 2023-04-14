/* 
const myUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

// async function getData (){


// }

// valueOf_getData = getData();
// console.log(valueOf_getData); // Gives a promise

async function getData (){
 // fetch(myUrl) //!gives fulfilled promise with undefined data
//  await fetch(myUrl) //!gives fulfilled promise waiting for being resolved
 // for resolve we can save  this in variable 
 const response = await fetch(myUrl) 
 const data = await response.json();
//  console.log(data);
 const realData = data.results
//  console.log(realData);
return realData;
 // if want this data outside of the function and i return this this only returns a promise so we have to use then for get the data out

}

 getData().then(myData => {
    console.log(myData);
 })
 .catch(error => {
    error
 })
// console.log(myData); we have to use useStates for this

 //* await // will wait for promise to resolve or reject
 

*/
// console.log("hello mayur");
const myUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
let names = []
let urls = []
 const getMyData = async () =>{
    const response = await fetch(myUrl) 
    const data = await response.json()
    // console.log(data);
    const realData =  data.results;
   //  console.log(realData);
    return  realData;



 } 

 getMyData()

// const liteData = getMyData()
// console.log(liteData);
getMyData()
// .then(newData => { 
//    names = newData.map((newData)=> newData.name)
//     console.log(names);
//  })
//  getMyData()
//  .then(newUrls =>{
//     urls = newUrls.map((newUrls) => newUrls.url)
//     console.log(urls);
//  })
//  console.log("hello mayur at end");
// console.log(names);