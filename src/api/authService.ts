const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

export const authService = {
  async signUp(email: string, password: string, name: string) {
    const response = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
      },
      body: JSON.stringify({
        email,
        password,
        data: { name },
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error_description || data.msg || "Sign up failed");
    return data;
  },

  async signIn(email: string, password: string) {
    const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error_description || data.msg || "Sign in failed");
    
    // Save access token locally
    if (data.access_token) {
      localStorage.setItem("supabase_token", data.access_token);
    }
    return data;
  },

  async signOut() {
    const token = localStorage.getItem("supabase_token");
    if (token) {
      await fetch(`${SUPABASE_URL}/auth/v1/logout`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("supabase_token");
    }
  },

  getToken(): string | null {
    return localStorage.getItem("supabase_token");
  },
};
