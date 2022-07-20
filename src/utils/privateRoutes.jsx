import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router";
import AuthContext from "../context/AuthContext";

const PrivateRoutes = ({ children }) => {
  let { user } = useContext(AuthContext);

  return !user ? <Navigate to="/login" /> : children;
};

export default PrivateRoutes;
