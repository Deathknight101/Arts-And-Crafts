
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AllArts from "../AllArts/AllArts";
import PrivateRoutes from "./PrivateRoutes";
import AddCraftItem from "../AddCraftItem/AddCraftItem";
import MyArtCraft from "../MyArtCraft/MyArtCraft";
import ArtsDetails from "../ArtsDetails/ArtsDetails";
import UpdateArts from "../UpdateArts/UpdateArts";
import ErrorPage from "../ErrorPage/ErrorPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/artscraft')
            },
            {
                path: '/arts/:id',
                element: <PrivateRoutes><ArtsDetails></ArtsDetails></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/artscraft')


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
                element: <AllArts></AllArts>,
                loader: () => fetch('http://localhost:5000/artscraft')
            },
            {
                path: '/addcraftitem',
                element: <PrivateRoutes><AddCraftItem></AddCraftItem></PrivateRoutes>
            },
            {
                path: '/myartcraft',
                element: <PrivateRoutes><MyArtCraft></MyArtCraft></PrivateRoutes>
            },
            {
                path: '/updatearts/:id',
                element: <PrivateRoutes><UpdateArts></UpdateArts></PrivateRoutes>,
                loader: ({params})=>fetch(`http://localhost:5000/artscraft/${params.id}`)
            },
        ]
    }
])

export default routes;