import SideBar from "../components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/slices/authSlice";
import type { RootState } from "../store";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {email, id, user_metadata } = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("supabase_token");
    navigate("/signup");
  };

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <SideBar handleLogout={handleLogout} />

      <main className="min-h-screen flex-1 bg-[radial-gradient(circle_at_top_right,rgba(63,63,70,0.2),transparent_35%)]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-5 sm:px-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
              Account
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-white">
              User Details
            </h1>
          </div>
        </div>

        <div className="p-4 sm:p-8 space-y-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-6 rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-sm">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-zinc-800 text-3xl font-bold uppercase text-white shadow-inner">
              {user_metadata?.name
                ? user_metadata.name.charAt(0)
                : email?.charAt(0) || "U"}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">
                {user_metadata?.name || "User Profile"}
              </h2>
              <p className="text-sm text-gray-400 mt-0.5">{email || "No email available"}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-sm space-y-6">
            <h3 className="text-lg font-semibold text-white border-b border-white/10 pb-4">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">
                  Full Name
                </p>
                <p className="text-base text-gray-200 font-medium">
                  {user_metadata?.name || "Not provided"}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">
                  Email Address
                </p>
                <p className="text-base text-gray-200 font-medium">
                  {email || "Not provided"}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">
                  Phone Number
                </p>
                <p className="text-base text-gray-200 font-medium">
                  {user_metadata?.phone || "Not provided"}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">
                  User ID
                </p>
                <p className="text-xs font-mono text-gray-400 break-all">
                  {id || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default User;
