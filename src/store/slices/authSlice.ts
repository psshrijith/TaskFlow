import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SupabaseUser } from "../../types/types";

interface AuthState {
  user: SupabaseUser;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: {
    id: '',
    email: ''
  },
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
      action: PayloadAction<{ email: string; password: string; name?: string; phone?: string }>,
    ) => {
      void action;
      state.isLoading = true;
      state.error = null;
    },
    signupSuccess: (state, action: PayloadAction<{ accessToken: string, user: SupabaseUser }>) => {
      state.isLoading = false;
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
    },
    signupFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = null;
    },
    signinRequest: (
      state,
      _action: PayloadAction<{ email: String; password: string }>,
    ) => {
      state.isLoading = true;
      state.error = null;
    },
    signinSuccess: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.isLoading = false;
      state.token = action.payload.accessToken;
    },
    signinFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { signupRequest, signupSuccess, signupFailure, logout, signinRequest, signinSuccess, signinFailure } =
  authSlice.actions;

export default authSlice.reducer;
