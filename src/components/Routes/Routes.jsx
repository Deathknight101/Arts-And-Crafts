
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AllArts from "../AllArts/AllArts";
import PrivateRoutes from "./PrivateRoutes";
import AddCraftItem from "../AddCraftItem/AddCraftItem";
import MyArtCraft from "../MyArtCraft/MyArtCraft";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allarts',
                element: <AllArts></AllArts>
            },
            {
                path: '/addcraftitem',
                element: <PrivateRoutes><AddCraftItem></AddCraftItem></PrivateRoutes>
            },
            {
                path: '/myartcraft',
                element: <PrivateRoutes><MyArtCraft></MyArtCraft></PrivateRoutes>
            },
        ]
    }
])

export default routes;