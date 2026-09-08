import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "./store";

const ProtectedRoute = () => {
  const reduxToken = useSelector((state: RootState) => state.auth.token);
  const localToken = localStorage.getItem("supabase_token");

  const token = reduxToken || localToken;

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;