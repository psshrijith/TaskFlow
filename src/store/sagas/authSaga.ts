import type { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { authService } from "../../api/authService";
import { signupRequest, signupFailure, signupSuccess } from "../slices/authSlice";

function* handleSignup(
  action: PayloadAction<{ email: string; password: string }>
): Generator<unknown, void, unknown> {
  try {
    const { email, password } = action.payload;
    yield call(authService.signUp, email, password);
    yield put(signupSuccess());
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Signup Failed";
    yield put(signupFailure(errorMessage));
  }
}

export function* watchAuthSaga() {
  yield all([takeLatest(signupRequest.type, handleSignup)]);
}