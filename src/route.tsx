import { createBrowserRouter } from 'react-router-dom';
import Home from "./pages/home";
import Error from "./pages/error";
import Movies from "./pages/movies";
import TVseries  from "./pages/tv-series";
import Bookmarks from "./pages/bookmarks";



export const router =createBrowserRouter([
   {
      path:"/",
      element: <Home/>,
      errorElement: <Error/>
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
  

 import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Movies from './pages/Movies';
// import TVseries from './pages/tv-series';
// import Bookmarks from './pages/Bookmarks';
// import Error from './pages/Error';

// export const router = (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/movies" element={<Movies />} />
//       <Route path="/tv-series" element={<TVseries />} />
//       <Route path="/bookmarks" element={<Bookmarks />} />
//       <Route path="*" element={<Error />} />
//     </Routes>
//   </BrowserRouter>
// );