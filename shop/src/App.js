import Header from "./Components/HeaderFooter/Header";
import Footer from "./Components/HeaderFooter/Footer";
import Cart from "./Components/Cart";
import Shop from "./Components/Shop";
import Error from "./utils/error";
import Product from "./Components/Product";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
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
        element: <Shop/>,
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
