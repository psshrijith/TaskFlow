import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { fetchUserRequest } from "./store/slices/authSlice";

const ProtectedRoute = () => {
  const dispatch = useDispatch<AppDispatch>();
  const reduxToken = useSelector((state: RootState) => state.auth.token);
  const localToken = localStorage.getItem("supabase_token");
  const user = useSelector((state: RootState) => state.auth.user);

  const token = reduxToken || localToken;

  useEffect(() => {
    if (token && (!user || !user.id)) {
      dispatch(fetchUserRequest({ token }));
    }
  }, [dispatch, token, user]);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;