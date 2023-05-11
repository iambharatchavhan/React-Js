import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Shop from "./Components/Shop";
import Error from "./utils/error";
import Product from "./Components/Product";
import { createBrowserRouter, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/shop/:id",
        element:<Product/>
      },
    ],
  },
]);

export default appRouter;
