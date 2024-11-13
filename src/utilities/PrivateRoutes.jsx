import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./UseAuth";

const PrivateRoutes = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" />;
  console.log(isAuthenticated);
};
export default PrivateRoutes;
