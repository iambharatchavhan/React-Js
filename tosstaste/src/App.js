import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import {createBrowserRouter ,Outlet} from "react-router-dom"
import About from "./Body/about";
import Help from "./Body/help";
import Contact from "./Body/contact";
import Error from "./Body/error";
import RestaurantMenu from "./Body/restaurentMenu";





function App() {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
   </>
  
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
      }
    ] 
  },
 
])

export default appRouter;
