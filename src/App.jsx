import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home"
import Pages from "./pages/Pages"
import { Root } from "postcss";
import RootComponent from "./component/common/RootComponent";
import Product from "./pages/products/Product";
import Slug from "./pages/products/Slug";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
const router = createBrowserRouter([
  {
    path:"",
    element: <RootComponent/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path: "login",
        element:<Login/>,
      },
      {
        path: "pages",
        element:<Pages/>,
      },
      {
        path: "signup",
        element:<Signup/>,
      },
      {
        path: "login",
        element:<Login/>,
      },
      
      {
        path: "product",
        element:<Product/>,
        children:[{
          path:"",
          element:<Product/>
        },
        {
          path:":slug",
          element:<Slug/>
        },] 
      },
    ]
  },
 
]);

function App() {
  return (
    <>
      <div className="font-lato">
      <RouterProvider router={router} />

      </div>
    </>
  )
}

export default App
