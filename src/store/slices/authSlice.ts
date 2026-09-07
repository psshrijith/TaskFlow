import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UserProfile {
  id: string;
  email: string;
  name?: string;
}

interface AuthState {
  user: UserProfile | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupRequest: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      void action;
      state.isLoading = true;
      state.error = null;
    },
    signupSuccess: (state, action: PayloadAction<{accessToken: string}>) => {
      state.isLoading = false;
      state.token = action.payload.accessToken;
    },
    signupFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = null;
    }
  },
});

export const { signupRequest, signupSuccess, signupFailure, logout } = authSlice.actions;

export default authSlice.reducer;