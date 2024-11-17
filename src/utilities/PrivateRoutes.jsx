import { Outlet, Navigate } from "react-router-dom";
import { UseAuth } from "./UseAuth";

const PrivateRoutes = () => {
  const { isAuthenticated } = UseAuth();
  console.log(isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" />;
};
export default PrivateRoutes;
