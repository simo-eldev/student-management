import { Outlet, Navigate } from "react-router-dom";
import { UseAuth } from "./UseAuth";

const PrivateRoutes = () => {
  const { isAuthenticated } = UseAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" />;
  console.log(isAuthenticated);
};
export default PrivateRoutes;
