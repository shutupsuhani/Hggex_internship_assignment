
import Home from "./pages/Home.jsx"
import Signup from "./pages/Signup.jsx"
import Login from "./pages/Login.jsx"
import {createBrowserRouter,RouterProvider} from "react-router-dom"


const router=createBrowserRouter([
  {
      path:"/",
      element:<Home></Home>
  },
  {
      path:"/register",
      element:<Signup></Signup>
  
  },
  {
      path:"/login",
      element:<Login></Login>
  },
  
])

export default function App() {
return (
<main>
  <RouterProvider router={router}></RouterProvider>
</main>
)
}
