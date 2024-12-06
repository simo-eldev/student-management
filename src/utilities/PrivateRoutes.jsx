import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./UseAuth";
import { useContext } from "react";

import { AuthContext }  from "../components/auth/AuthContext";

const ProtectedRoute = ({ children }) => {


  const { user, loading } = useContext(AuthContext);

  
  return user ? children : <Navigate to="/auth" />;
};

export default ProtectedRoute;
