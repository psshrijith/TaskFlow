import { all, fork } from "redux-saga/effects";
import { watchAuthSaga } from "./sagas/authSaga";
import { watchTaskSaga } from "./sagas/taskSaga";

export default function* rootSaga() {
  yield all([
    fork(watchAuthSaga),
    fork(watchTaskSaga),
  ]);
}
