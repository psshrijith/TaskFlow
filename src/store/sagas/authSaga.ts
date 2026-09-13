import type { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { authService } from "../../api/authService";
import { signinRequest, signinSuccess, signinFailure, signupRequest, signupFailure, signupSuccess } from "../slices/authSlice";

interface SupabaseUser {
  id: string;
  email: string;
  user_metadata?: {
    name?: string;
    phone?: string;
  };
}

interface SignupResponse{
  access_token: string;
  user: SupabaseUser;
}

interface SignInResponse{
  access_token: string;
}

function* handleSignup(
  action: PayloadAction<{ email: string; password: string; name?: string; phone?: string }>
): Generator<unknown, void, SignupResponse> {
  try {
    const { email, password, name, phone } = action.payload;
    const response = yield call(authService.signUp, email, password, name, phone);
    const token = response?.access_token;
    const userDetails = response?.user && {
      id: response?.user.id,
      email: response?.user?.email,
      user_metadata: response?.user?.user_metadata
    };

    yield put(signupSuccess({accessToken: token, user: userDetails}));
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Signup Failed";
    yield put(signupFailure(errorMessage));
  }
}

function* handleSignIn(action: PayloadAction<{email: string, password: string }> ): Generator <unknown, void, SignInResponse>  {
  try{
    const {email, password} = action.payload;
    const response = yield call(authService.signIn, email, password);
    const token = response?.access_token;
    yield put(signinSuccess({accessToken: token}))
  }
  catch(err: unknown){
    const errorMessage = err instanceof Error ? err.message: "Signin Failed";
    yield put(signinFailure(errorMessage));
  }
}

export function* watchAuthSaga() {
  yield all([takeLatest(signupRequest.type, handleSignup)]);
  yield all([takeLatest(signinRequest.type, handleSignIn)]);
}