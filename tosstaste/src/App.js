import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import {createBrowserRouter ,Outlet} from "react-router-dom"
import About from "./Body/about";
import Help from "./Body/help";
import Contact from "./Body/contact";
import Error from "./Body/error";
import RestaurantMenu from "./Body/restaurentMenu";
import { Provider } from "react-redux";
import Cart from "./Body/AddToCart";
import store from "./utils/store";





function App() {
  return (
    <Provider store= {store} >
     <Header/>
     <Outlet/>
     <Footer/>
   </Provider>
  
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    errorElement:<Error/>,
    children:[
      {
        path: "",
        element : <Body/>,
        errorElement:<Error/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/help",
        element:<Help/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ] 
  },
 
])

export default appRouter;
