import  { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("../components/layout/Layout"));
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(()=> import('../errors/NotFound'));


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      {path: '*', element:<NotFound/>},
    ], 
  },
  
 

]);

export default routes;
