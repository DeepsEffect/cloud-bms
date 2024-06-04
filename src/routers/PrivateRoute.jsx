/* eslint-disable react/prop-types */
import { Spinner } from "@material-tailwind/react";
import { getAuth } from "firebase/auth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = getAuth();
  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
