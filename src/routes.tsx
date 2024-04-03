import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Movies from "./pages/movies";
import TVseries  from "./pages/tv-series";
import Bookmarks from "./pages/bookmarks";



export const router =createBrowserRouter([
   {
    path:"/",
    element: <Home/>,
    errorElement: <Error />
   },

   {
    path:"/movies",
    element: <Movies/>,
    
   },
   {
    path:"/tv-series",
    element: <TVseries/>,
    
   },
   {
    path:"/bookmarks",
    element: <Bookmarks/>,
    
   },
  
  
]);