import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import HomePage from "../pages/HomePage/HomePage";
import SearchResults from "../pages/SearchResults/SearchResults";
import LoginModal from "../components/Modal/LoginModal";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Player from "../components/Player/Player";
import Course from "../pages/Course/Course";
import Profile from "../pages/Profile/Profile";
import WithAuth from "./WithAuth";
import WithoutAuth from "./WithoutAuth";
import Error from "../components/Error/Error";
import Cart from "../pages/Cart/Cart";



const browseRouter = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error />,
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/search/:param',
                element: <SearchResults />,
            },
            {
                path: '/modal',
                element: <LoginModal />
            },
            {
                path: '/login',
                element: <WithoutAuth><Login /></WithoutAuth>
            },
            {
                path: '/signup',
                element: <WithAuth><Signup /></WithAuth>
            },
            {
                path: '/profile',
                element: <WithAuth><Profile /></WithAuth>
            },
            {
                path: '/course/:id',
                element: <Course />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    }
])


export default browseRouter;