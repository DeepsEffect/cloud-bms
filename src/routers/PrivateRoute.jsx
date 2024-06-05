/* eslint-disable react/prop-types */
import { Spinner } from "@material-tailwind/react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <Spinner className="min-h-screen flex justify-center items-center mx-auto" />
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
