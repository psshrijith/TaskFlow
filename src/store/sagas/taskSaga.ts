import type { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { taskService } from "../../api/taskService";
import type { Task } from "../../types/types";
import {
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksFailure,
} from "../slices/taskSlice";

function* handleFetchTasks(
  action: PayloadAction<{ token?: string } | undefined>
): Generator<unknown, void, Task[]> {
  try {
    const token = action.payload?.token;
    const tasks: Task[] = yield call(taskService.getTasks, token);
    yield put(fetchTasksSuccess(tasks));
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to fetch tasks";
    yield put(fetchTasksFailure(errorMessage));
  }
}

export function* watchTaskSaga() {
  yield all([
    takeLatest(fetchTasksRequest.type, handleFetchTasks),
  ]);
}
