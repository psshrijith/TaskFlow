import type { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { authService } from "../../api/authService";
import { signupRequest, signupFailure, signupSuccess } from "../slices/authSlice";

interface SignupResponse{
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

export function* watchAuthSaga() {
  yield all([takeLatest(signupRequest.type, handleSignup)]);
}