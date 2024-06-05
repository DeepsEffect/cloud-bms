import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Apartment from "../pages/Apartment/Apartment";
import Dashboard from "../layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/apartment",
        element: <Apartment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />,
      </PrivateRoute>
    ),
    children: [
      {
        path: 'myProfile',
        element: <MyProfile />
      }
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
