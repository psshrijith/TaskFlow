import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SideBar from "../components/SideBar";
import { logout } from "../store/slices/authSlice";

const AppLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("supabase_token");
    navigate("/signup");
  };

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <SideBar handleLogout={handleLogout} />
      <main className="min-h-screen flex-1 bg-[radial-gradient(circle_at_top_right,rgba(63,63,70,0.2),transparent_35%)]">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
