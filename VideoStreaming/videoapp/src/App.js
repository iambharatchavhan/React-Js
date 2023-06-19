import "./index.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./components/utils/store";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RouterProvider, createBrowserRouter,} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import PlayVideo from "./components/PlayVideo";


function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="dark:bg-[#0F0F0F] dark:text-white">
          <Header />
          <RouterProvider router={router} />
        </div>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}


const router = createBrowserRouter([{
   path: "/", 
   element: <Body /> ,
   children :[{
    path:"/",
    element:<MainContainer/>,
  

   },{
    path: "/watch",
    element: <PlayVideo/>
   }

   ]

   
}]);

export default App;
