import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Signup from "./Pages/SignUp";
import Signin from "./Pages/SignIn";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Settings";
import TaskDetails from "./components/TaskDetails";
import User from "./Pages/User";
import Profile from "./Pages/Profile";
import "./index.css";
import ProtectedRoute from "./ProtectedRoute";
import AppLayout from "./layouts/AppLayout";

const RecoveryRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash.includes("type=recovery") && location.pathname !== "/reset-password") {
      navigate(`/reset-password${location.hash}`, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

function App() {
  return (
    <div className="flex-1">
      <BrowserRouter>
        <RecoveryRedirect />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/task/:taskId" element={<TaskDetails />} />
              <Route path="/user" element={<User />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
