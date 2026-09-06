import { all, fork } from "redux-saga/effects";
import { watchTaskSaga } from "./sagas/taskSaga";

export default function* rootSaga() {
  yield all([
    fork(watchTaskSaga),
  ]);
}
