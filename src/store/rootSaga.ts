import { all, fork } from "redux-saga/effects";
import { watchAuthSaga } from "./sagas/authSaga";

export default function* rootSaga() {
  yield all([
    fork(watchAuthSaga),
  ]);
}
