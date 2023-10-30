import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Recipe from "../Pages/Recipe/Recipe";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Components/Home";

const Routes = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    errorElement: <div className="flex justify-center items-center w-[100vw] h-[100vh] text-2xl font-bold"><h2>Error</h2></div>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/recipe',
            element: <Recipe></Recipe>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
    ]
}])

export default Routes;