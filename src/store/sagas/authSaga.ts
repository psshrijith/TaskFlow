import type { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { authService } from "../../api/authService";
import { signinRequest, signinSuccess, signinFailure, signupRequest, signupFailure, signupSuccess } from "../slices/authSlice";

interface SignupResponse{
  access_token: string;
}

interface SignInResponse{
  access_token: string;
}

function* handleSignup(
  action: PayloadAction<{ email: string; password: string }>
): Generator<unknown, void, SignupResponse> {
  try {
    const { email, password } = action.payload;
    const response = yield call(authService.signUp, email, password);
    const token = response?.access_token;

    yield put(signupSuccess({accessToken: token}));
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

    console.log("signin token", token);
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