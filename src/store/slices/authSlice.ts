import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: any | null;
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
        signupRequest: (state, _action: PayloadAction<{email: string, password: string, name: string}>) => {
            state.isLoading = true;
            state.error = null;
        },
        signupSuccess: (state) => {
            state.isLoading = false;
        },
        signupFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {signupRequest, signupSuccess, signupFailure} = authSlice.actions;

export default authSlice.actions;