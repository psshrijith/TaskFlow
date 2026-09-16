import { store } from "../store";
import { logout } from "../store/slices/authSlice";

export function handleForceLogout() {
  localStorage.removeItem("supabase_token");
  store.dispatch(logout());
  if (
    typeof window !== "undefined" &&
    window.location.pathname !== "/login" &&
    window.location.pathname !== "/signup"
  ) {
    window.location.href = "/login";
  }
}

export function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(
      atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))
    );
    return payload.exp
      ? Date.now() >= (payload.exp - 10) * 1000
      : false;
  } catch {
    return true;
  }
}
